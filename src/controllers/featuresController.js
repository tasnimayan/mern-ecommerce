const {featuresListService} = require('../services/featuresServices')

exports.FeaturesList = async (req, res) =>{
  try{
    let data = await featuresListService();
    if(!data){
      return res.status(404).send({message:"failed"})
    }
    res.status(200).send({message:"success", data:data})
  }
  catch(err){
    console.log(err)
    res.status(500).send({status:"failed", message:err.message})
  }
}