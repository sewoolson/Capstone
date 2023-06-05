mongoose = require("mongoose");

//start contact form
let contactSchema = new mongoose.Schema({
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

const Contact = mongoose.model("contact", contactSchema)
module.exports = Contact

//end contact form

