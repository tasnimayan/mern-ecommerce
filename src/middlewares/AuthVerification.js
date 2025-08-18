const UserModel = require("../models/userModel");
const SellerModel = require("../models/sellerModel");

const AuthVerification = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.shopinz) {
      token = req.cookies.shopinz;
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }

    const user = await UserModel.verifyToken(token);

    if (!user) {
      res.status(401).send({ message: "Unauthorized" });
    }

    req.token = token;
    req.user = { _id: user._id, email: user.email, role: user.role };

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

// Middleware to verify different role based routing
const AvailableFor = (roles) => {
  return (req, res, next) => {
    let role = req.user?.role || req.seller?.role;
    if (!roles.includes(role)) {
      return res
        .status(401)
        .send({ message: "This route is not for current user role" });
    }
    next();
  };
};

const SellerAuthVerification = async (req, res, next) => {
  try {
    // if(!req.headers.authorization && !req.headers.authorization?.startsWith('Bearer')){
    //   return res.status(401).send({message:"Unauthorized"})
    // }
    // const token = req.headers.authorization?.split(' ')[1];
    if (!req.cookies.seller) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const token = req.cookies.seller;
    const seller = await SellerModel.verifyToken(token);

    if (!seller) {
      res.status(401).send({ message: "Unauthorized" });
    }

    req.token = token;
    req.seller = { _id: seller._id, email: seller.email, role: seller.role };

    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  AuthVerification,
  AvailableFor,
  SellerAuthVerification,
};
