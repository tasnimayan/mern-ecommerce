const { addToSalesService, revenueService, quantitySoldService,topFiveService, averagePriceService, revenueByMonthService, highestSoldService } = require("../services/salesServices")

// Complete
exports.TotalRevenue = async (req, res) =>{
  try{
    let data = await revenueService(req.user._id)
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data[0]})
  }
  catch(err){
    console.log(err)
    res.status(500).send({message:err.message})
  }
}
// complete
exports.TotalQuantitySold = async (req, res) =>{
  try{
    let data = await quantitySoldService(req.user._id)
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data})
  }
  catch(err){
    console.log(err)
    res.status(500).send({message:err.message})
  }
}
// complete
exports.TopFiveProducts = async (req, res) =>{
  try{
    let data = await topFiveService();
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data})
  }
  catch(err){
    console.log(err)
    res.status(500).send()
  }
}

exports.AveragePrice = async (req, res) =>{
  try{
    let data = await averagePriceService(req.user._id)
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data[0]})
  }
  catch(err){
    console.log()
    res.status(500).send()
  }
}

exports.RevenueByMonth = async (req, res) =>{
  try{
    let year = 2024
    let month = 1
    let data = await revenueByMonthService(req.user._id, year, month)
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data})
  }
  catch(err){
    console.log()
    res.status(500).send()
  }
}


exports.HighestQuantitySold = async (req, res) =>{
  try{
    let data = await highestSoldService(req.user._id)
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data[0]})
  }
  catch(err){
    console.log(err)
    res.status(500).send({message:err.message})
  }
}


exports.totalSalaryExpense = async (req, res) =>{
  try{

  }
  catch(err){
    console.log()
    res.status(500).send()
    
  }
}
// Complete
exports.AddToSales = (req, res)=>{
  let data = {
    productID: req.body.productID,
    userID:req.user._id,
    quantity: req.body.quantity,
    price: req.body.price,
    date: Date.now()
  }
  addToSalesService(data)
  res.status(200).send({status:'success'})
}