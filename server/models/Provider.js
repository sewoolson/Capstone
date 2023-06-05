mongoose = require("mongoose");

//start recommend a provider form
let providerSchema = new mongoose.Schema({
providerName:{
  type: String,
  required: false,
  validate: /^[A-Za-z0-9 ]*$/
},
location:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
serviceType:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
userReview:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
})

const Provider = mongoose.model("provider", providerSchema)
module.exports = Provider

//end recommend provider form
