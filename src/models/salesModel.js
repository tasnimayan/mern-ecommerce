const mongoose = require("mongoose");

const salesSchema = mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    quantity: { type: Number, required: true },
    price: { type: Number },
    date: { type: Date },
  },
  { timestamps: false, versionKey: false }
);

const SalesModel = mongoose.model("sales", salesSchema);

module.exports = SalesModel;
