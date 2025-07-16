const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    // Id will be mapped with same id of user document
    _id: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
    cus_name: { type: String, required: true },
    cus_add: { type: String, required: true },
    cus_city: { type: String, required: true },
    cus_country: { type: String },
    cus_postcode: { type: String },
    cus_state: { type: String, required: true },
    cus_phone: { type: String, required: true },
    ship_add: { type: String, required: true },
    ship_city: { type: String, required: true },
    ship_country: { type: String },
    ship_name: { type: String },
    ship_phone: { type: String, required: true },
    ship_postcode: { type: String },
    ship_state: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ProfileModel = mongoose.model("profiles", profileSchema);

module.exports = ProfileModel;
