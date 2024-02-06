
const FeaturesModel = require('../models/featuresModel')

const featuresListService = async () =>{
  try{
    let features = await FeaturesModel.find()
    return features
  }
  catch(err){
    console.log(err)
    return err
  }
}

module.exports = {
  featuresListService
}