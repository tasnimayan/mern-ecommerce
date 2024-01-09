const express = require('express')
const router = express.Router()
const { AddToSales, TotalRevenue, TotalQuantitySold, TopFiveProducts, RevenueByMonth, HighestQuantitySold,AveragePrice,  } = require('../controllers/salesController')
const {AuthVerification} = require('../middlewares/AuthVerification')

router.post('/add', AuthVerification,  AddToSales)  //Calculate and return the total revenue generated by all sales transactions.
router.get('/total-revenue', AuthVerification, TotalRevenue)  //Calculate and return the total revenue generated by all sales transactions.
router.get('/quantity-by-product',AuthVerification, TotalQuantitySold) //Find and return the total quantity sold for each product.
router.get('/top-products', TopFiveProducts ) //Retrieve the top 5 products with the highest total revenue, along with their total revenue values.
router.get('/average-price', AuthVerification, AveragePrice) //Calculate and return the average price of products sold.
router.get('/revenue-by-month', AuthVerification, RevenueByMonth) //Group the sales data by month and year and calculate the total revenue for each month-year combination.
router.get('/highest-quantity-sold', AuthVerification, HighestQuantitySold) //Find and return the product that had the highest quantity sold on a single day.
router.get('/department-salary-expense', AuthVerification, ) //Calculate and return the total salary expense for each department.

module.exports = router;