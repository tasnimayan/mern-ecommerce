const SalesModel = require('../models/salesModel')
const mongoose = require('mongoose')

// Complete
exports.revenueService = async (userId) => {
  try {
    const id = new mongoose.Types.ObjectId(userId)

    let data = await SalesModel.aggregate([
      { $match: {userID:id}},
      { $group:{
        _id:null,
        totalRevenue:{$sum:{ $multiply: ["$quantity", "$price"] }}
      }}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}
// Complete
exports.quantitySoldService = async (userId) => {
  try {
    const user = new mongoose.Types.ObjectId(userId)

    let data = await SalesModel.aggregate([
      { $match: {userID:user}},
      { $group:{
        _id:"$productID",
        totalSold:{$sum:"$quantity"}}
      }
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}
// Complete
exports.topFiveService = async () => {
  try {
    // const user = new mongoose.Types.ObjectId(userId)

    let data = await SalesModel.aggregate([
      // { $match: {userID:user}},
      { $group:{
        _id:"$productID",
        topFive:{$sum:{ $multiply: ["$quantity", "$price"] }}
      }},
      {$sort:{"totalRevenue":-1}},
      {$limit:5}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}
// complete
exports.averagePriceService = async (userId) => {
  try {
    const user = new mongoose.Types.ObjectId(userId)

    let data = await SalesModel.aggregate([
      { $match: {userID:user}},
      { $group:{
        _id:null,
        averagePrice:{$avg:"$price"}
      }}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}

exports.revenueByMonthService = async (userId, month, year) => {
  try {
    const user = new mongoose.Types.ObjectId(userId)
    let prevMonth = new Date(year, month - 1, 1)
    let targetMonth = new Date(year, month, 1)

    let data = await SalesModel.aggregate([
      { $match: {userID:user, $and:[{date:{$gte:prevMonth}},{date:{$lt:targetMonth}}]
      }},
      { $group:{
        _id:null,
        totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } }
      }}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}
// Complete
exports.highestSoldService = async (userId, month, year) => {
  try {
    const user = new mongoose.Types.ObjectId(userId)

    let data = await SalesModel.aggregate([
      { $match: {userID:user}},
      { $group:{
        _id:"$productID",
        highestSold:{$sum:"$quantity"}}
      },
      {$sort:{totalSold:-1}},
      {$limit:1}
    ])
    return data;
  }
  catch (err) {
    console.log(err)
    return null;
  }
}




// Complete
exports.addToSalesService = async (data) => {
  let salesData = data;
  try {
    salesData.userID = new mongoose.Types.ObjectId(salesData.userID)
    salesData.productID = new mongoose.Types.ObjectId(salesData.productID)

    let result = await SalesModel.create(salesData);
    return {status: "success", data:result};
  }
  catch (err) {
    console.log(err)
    return err;
  }
}