const mongoose = require('mongoose')

const FormData = require('form-data')
const axios = require('axios')
const CartModel = require('../models/cartModel')
const ProfileModel = require('../models/profileModel')
const InvoiceModel = require('../models/invoiceModel')
const InvoiceProductModel = require('../models/invoiceProductModel')
const PaymentSettingModel = require('../models/paymentSettingModel')



exports.createInvoiceService = async (user) =>{
// step 1: Calculate total payable and vat
  let user_id = new mongoose.Types.ObjectId(user._id)
  let user_email = user.email

  let matchStage = {$match:{userID:user_id}}
  let joinWithProductStage = {$lookup:{from:'products', localField:'productID', foreignField:'_id', as:'product', pipeline:[
    {$project:{_id:0, title:1, price:1,discount:1, discountPrice:1, image:1}},
  ]}}
  let unwindStage = {$unwind:"$product"}
  let cartProducts = await CartModel.aggregate([
    matchStage,
    joinWithProductStage,
    unwindStage
  ])

  let totalAmount = 0;
  cartProducts.forEach((item)=>{
    let price;
    item.product.discount ? price = parseFloat(item.product.discountPrice) : price = parseFloat(item.product.price)
    totalAmount += parseInt(item.qty) * price
  })

  let vat = totalAmount * 0.05
  let payable = totalAmount + vat

// step 2: prepare customer details and shipping details
  let userProfile = await ProfileModel.findOne({_id:user_id})

  let customerDetails = `name: ${userProfile.cus_name} email: ${user_email} phone: ${userProfile.cus_phone}`
  let shippingDetails = `name: ${userProfile.ship_name} city: ${userProfile.ship_city} address: ${userProfile.ship_add} phone:${userProfile.ship_phone}`

// step 3: transaction and other ID's
  let tran_id = Math.floor(10000000 + Math.random() * 90000000)
  let val_id = 0
  let delivery_status = "pending"
  let payment_status = "pending"



// step 7: Prepare SSL Payment
  let paymentSettings = await PaymentSettingModel.find();

  const form = new FormData();
  form.append('store_id', paymentSettings[0]['store_id'])
  form.append('store_passwd', paymentSettings[0]['store_passwd'])
  form.append('total_amount', parseFloat(payable))
  form.append('currency', paymentSettings[0]['currency'])
  form.append('tran_id', tran_id.toString())
  form.append('product_category', "Unknown")
  form.append('success_url', `${paymentSettings[0]['success_url']}/${tran_id}`)
  form.append('fail_url', `${paymentSettings[0]['fail_url']}/${tran_id}`)
  form.append('cancel_url', `${paymentSettings[0]['cancel_url']}/${tran_id}`)
  form.append('ipn_url', `${paymentSettings[0]['ipn_url']}/${tran_id}`)

  form.append('cus_name', userProfile.cus_name)
  form.append('cus_email', user_email)
  form.append('cus_add1', userProfile.cus_add)
  form.append('cus_add2', "N/A")
  form.append('cus_city', userProfile.cus_city)
  form.append('cus_postcode', userProfile.cus_postcode)
  form.append('cus_country', userProfile.cus_country)
  form.append('cus_phone', userProfile.cus_phone)

  form.append('shipping_method', 'YES')
  form.append('ship_name', userProfile.ship_name)
  form.append('ship_add1', userProfile.ship_add)
  form.append('ship_add2', 'N/A')
  form.append('ship_city', userProfile.ship_city)
  form.append('ship_state', userProfile.ship_state)
  form.append('ship_postcode', userProfile.ship_postcode)
  form.append('ship_country', userProfile.ship_country)
  
  form.append('product_name', "ShopinZ Store Product")
  form.append('product_category', "Product Category Name")
  form.append('product_profile', "Product Profile")
  form.append('product_amount', 2)


  let SSLRes = await axios.post(paymentSettings[0]['init_url'], form);

  if(SSLRes.data.status === 'VALID'){
    // step 4: create Invoice
    let invoice = await InvoiceModel.create({
      userID: user_id,
      payable: payable,
      cus_details: customerDetails,
      ship_details: shippingDetails,
      tran_id: tran_id,
      val_id: val_id,
      delivery_status: delivery_status,
      payment_status: payment_status,
      total: totalAmount,
      vat: vat,
    })

    // step 5: create Invoice product
    let invoice_id = invoice._id;

    cartProducts.forEach(async (item) =>{
      await InvoiceProductModel.create({
        userID:user_id,
        productID: item.productID,
        invoiceID: invoice_id,
        qty:item.qty,
        price:item.product.discount? item.product.discountPrice: item.product.price,
        color:item.color,
        size:item.size
      })
    })
    // step 6: Remove from Cart
      await CartModel.deleteMany({userID:user_id})
  }


  return SSLRes.data
}

exports.paymentSuccessService = async (trxId) =>{
  const data = await InvoiceModel.updateOne({tran_id:trxId}, {payment_status:"success"})
  return data
}

exports.paymentFailService = async (trxId) =>{
  const data = await InvoiceModel.updateOne({tran_id:trxId}, {payment_status:"fail"})
  return data

}

exports.paymentCancelService = async (trxId) =>{
  const data = await InvoiceModel.updateOne({tran_id:trxId}, {payment_status:"cancel"})
  return data
}

exports.paymentIpnService = async (req) =>{
  let trxId = req.params.trxId
  let status = req.body.status
  let data = await InvoiceModel.updateOne({tran_id:trxId}, {payment_status:status})
  return data;
}

exports.invoiceListService = async (userId) =>{
  let user_id = new mongoose.Types.ObjectId(userId)

  let data = await InvoiceModel.find({userID:user_id})
  return data;
}

exports.invoiceProductListService = async (userId,  invoiceId) =>{
  let user_id = new mongoose.Types.ObjectId(userId)
  let invoice_id = new mongoose.Types.ObjectId(invoiceId)

  
  let matchStage = {$match:{userID:user_id, invoiceID:invoice_id}}
  let joinWithProductStage = {$lookup:{from:'products', localField:'productID', foreignField:'_id', as:'product'}}
  let unwindStage = {$unwind:"$product"}

  let data = await InvoiceModel.aggregate([
    matchStage,
    joinWithProductStage,
    unwindStage
  ])
  return data;
}


