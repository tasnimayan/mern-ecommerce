const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema(
  {
    productID: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],

    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const WishModel = mongoose.model("wishlists", wishSchema);

module.exports = WishModel;
