const {
  createInvoiceService,
  paymentFailService,
  paymentCancelService,
  paymentIpnService,
  paymentSuccessService,
  invoiceListService,
} = require("../services/invoiceServices");
const BASE_FRONTEND_URL = process.env.BASE_FRONTEND_URL;

exports.CreateInvoice = async (req, res) => {
  try {
    let data = await createInvoiceService(req.user);
    if (!data) {
      return res.status(404).send({ message: "failed" });
    }
    res.status(200).send({ message: "success", data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "failed", message: err.message });
  }
};

exports.PaymentSuccess = async (req, res) => {
  try {
    let data = await paymentSuccessService(req.params.trxId);
    if (!data) {
      return res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=fail`);
    }
    res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=success`);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

exports.PaymentFail = async (req, res) => {
  try {
    let data = await paymentFailService(req.params.trxId);
    if (!data) {
      return res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=fail`);
    }

    res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=fail`);

    // res.status(200).send({message:"success", status:"failed"})
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

exports.PaymentCancel = async (req, res) => {
  try {
    let data = await paymentCancelService();
    if (!data) {
      return res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=fail`);
    }
    res.redirect(`${BASE_FRONTEND_URL}/orders/status?payment=canceled`);
    // res.status(200).send({message:"success", status:"canceled"})
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

exports.PaymentIpn = async (req, res) => {
  try {
    let data = await paymentIpnService(req);
    if (!data) {
      return res.status(404).send({ message: "failed" });
    }
    res.redirect("/user/orders");
    // res.status(200).send({message:"success", status:req.body.status})
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

exports.InvoiceList = async (req, res) => {
  try {
    let data = await invoiceListService(req.user._id);
    if (!data) {
      return res.status(404).send({ message: "failed" });
    }
    res.status(200).send({ message: "success", data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

exports.InvoiceProductList = async (req, res) => {
  try {
    let data = await invoiceProductListService(
      req.user._id,
      req.params.invoiceId
    );
    if (!data) {
      return res.status(404).send({ message: "failed" });
    }
    res.status(200).send({ message: "success", data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};
