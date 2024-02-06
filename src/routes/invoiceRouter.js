const express = require('express')
const router = express.Router()
const {AuthVerification} = require('./../middlewares/AuthVerification')
const { CreateInvoice, PaymentSuccess, PaymentCancel, PaymentFail, PaymentIpn, InvoiceList, InvoiceProductList } = require('../controllers/invoiceController')

router.get('/create-invoice', AuthVerification, CreateInvoice)
router.get('/invoice-list', AuthVerification, InvoiceList)
router.get('/invoice-product-list/:invoiceId', AuthVerification, InvoiceProductList)

router.post('/payment-success/:trxId',PaymentSuccess)
router.post('/payment-cancel/:trxId', PaymentCancel)
router.post('/payment-fail/:trxId', PaymentFail)
router.post('/payment-ipn/:trxId', PaymentIpn)

module.exports = router;
