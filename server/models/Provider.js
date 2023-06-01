mongoose = require("mongoose");

//start recommend a provider form
let providerSchema = new mongoose.Schema({
providerName:{
  type: String,
  required: false,
  validate: /^[A-Za-z ]*$/
},
location:{
  type: String,
  required: false,
  validate: /^[A-Za-z ]*$/
},
serviceType:{
  type: String,
  required: false,
  validate: /^[A-Za-z ]*$/
},
userReview:{
  type: String,
  required: false,
  validate: /^[A-Za-z ]*$/
},
})

const Provider = mongoose.model("provider", providerSchema)
module.exports = Provider

//end recommend provider form
