mongoose = require("mongoose");

//start question form
let questionSchema = new mongoose.Schema({
userName:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
userEmail:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
userMessage:{
  type: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
},
})

const Question = mongoose.model("question", questionSchema)
module.exports = Question

//end question form
