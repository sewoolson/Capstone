mongoose = require("mongoose");

//start contact form
let contactSchema = new mongoose.Schema({
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

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact

//end contact form

