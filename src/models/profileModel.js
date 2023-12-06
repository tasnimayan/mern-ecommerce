const mongoose =require('mongoose')

const profileSchema = new mongoose.Schema({
  userID: {
    type:mongoose.Schema.ObjectId,
    ref: 'UserModel',
    required:true
  },
  cus_add: {type:String, required:true},
  cus_city: {type:String, required:true},
  cus_country: {type:String},
  cus_fax: {type:String},
  cus_name: {type:String, required:true},
  cus_phone: {type:String, required:true},
  cus_postcode: {type:String},
  cus_state: {type:String, required:true},
  ship_add: {type:String, required:true},
  ship_city: {type:String, required:true},
  ship_country: {type:String},
  ship_name: {type:String},
  ship_phone: {type:String, required:true},
  ship_postcode: {type:String},
  ship_state: {type:String}
},{
  timestamps:true,
  versionKey:false
})

const ProfileModel = mongoose.model('profiles', profileSchema)

module.exports = ProfileModel;