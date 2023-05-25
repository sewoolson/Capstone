mongoose = require("mongoose");

//start question form
let providerSchema = new mongoose.Schema({
userName:{
  type: String,
  required: true,
  validate: /^[A-Za-z ]*$/
},
userEmail:{
  type: String,
  required: true,
  validate: /^[A-Za-z ]*$/
},
userMessage:{
  type: String,
  required: true,
  validate: /^[A-Za-z ]*$/
},
})

const Question = mongoose.model("question", questionSchema)
module.exports = Question

//end question form
