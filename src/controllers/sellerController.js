const mongoose = require("mongoose");
const SellerModel = require("../models/sellerModel");
const {
  verifyOTPService,
  SignUpService,
  UpdateProfileService,
  ReadProfileService,
  DeleteProfileService,
  ReadProductsService,
  CreateProductService,
  ListByQueryService,
  DeleteProductService,
} = require("../services/sellerService");
const { EncodeToken } = require("../utils/tokenHelper");
const { ResetCookieOption, CookieOption } = require("../utils");

// Signup complete with OTP mailing
exports.SellerSignUp = async (req, res) => {
  if (!req.body.email && !req.body.password) {
    return res
      .status(404)
      .send({ message: "email or password can not be empty" });
  }

  let seller = {
    storeName: req.body.storeName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const result = await SignUpService(seller);

    if (result.status !== "success") {
      return res.status(404).send(result);
    }

    //cookie set
    res.cookie("seller", result.token, CookieOptio);

    return res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ status: "fail", message: err.message });
  }
};

// OTP verification complete
exports.VerifyOTP = async (req, res) => {
  let result = await verifyOTPService(req.seller?.email, req.params.otp);
  if (result.status !== "success") {
    return res.status(404).send(result);
  }
  return res.status(200).send(result);
};

// Login System complete
exports.SellerLogin = async (req, res) => {
  let email = req.body.email ?? "";
  let password = req.body.password ?? "";

  try {
    const seller = await SellerModel.Login(email, password);

    if (!seller) {
      return res.status(404).json({ message: "No account found" });
    }
    // Create jwt token for authentication
    let token = await EncodeToken(seller._id, seller.email);
    //cookie set
    res.cookie("seller", token, CookieOption);
    res.status(200).send({
      status: "success",
      message: "Login successful",
      data: { _id: seller._id, email: seller.email, role: seller.role },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
};
// Logout complete
exports.SellerLogOut = async (req, res) => {
  res.cookie("seller", req.token, ResetCookieOption);
  return res.status(200).send({ status: "success" });
};

// Modification needed for validation
exports.UpdateProfile = async (req, res) => {
  // None other than this fields will be updated
  let validUpdate = ["password", "storeName", "phone"];

  let data = {
    storeName: req.body.storeName,
    phone: req.body.phone,
    password: req.body.password,
  };
  const result = await UpdateProfileService(req.seller._id, data);
  return res.status(200).json(result);
};

// Complete
exports.ReadProfile = async (req, res) => {
  const result = await ReadProfileService(req.seller?._id);
  return res.status(200).send(result);
};

exports.DeleteProfile = async (req, res) => {
  const result = await DeleteProfileService(req.seller._id);
  return res.status(200).send(result);
};

// Complete
exports.SellerProducts = async (req, res) => {
  try {
    const data = await ReadProductsService(req.seller._id);
    if (data.status !== "success") {
      return res.status(404).send(data);
    }
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(404).send({ status: "fail", message: err.message });
  }
};

// complete
exports.CreateProduct = async (req, res) => {
  try {
    const baseURL = "http://localhost:8000/";
    console.log(req.files);
    const photos = req.files?.map(
      (item) => baseURL + item.path.replace(/\\/g, "/").slice(6)
    );

    let productData = {
      des: req.body.des,
      image: photos[0],
      images: photos,
      price: req.body.price,
      discount: false,
      discountPrice: req.body.discountPrice,
      categoryID: new mongoose.Types.ObjectId(req.body.categoryID),
      brandID: new mongoose.Types.ObjectId(req.body.brandID),
      tags: req.body.tags.split(","),
      size: req.body.size,
      color: req.body.color,
      stock: req.body.stock,
      sku: req.body.sku,
      sellerID: new mongoose.Types.ObjectId(req.seller._id),
    };

    const data = await CreateProductService(productData);
    if (data.status !== "success") {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};

// complete
exports.DeleteProduct = async (req, res) => {
  try {
    let productId = req.params.productId ?? "";

    const data = await DeleteProductService(productId);
    if (data.status !== "success") {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};

// Complete
exports.SearchProduct = async (req, res) => {
  try {
    let userID = req.seller._id;
    let query = req.params.keyword ?? "";

    const data = await ListByQueryService(userID, query);
    if (data.status !== "success") {
      return res.status(404).send(data);
    }
    res.status(201).send(data);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};
