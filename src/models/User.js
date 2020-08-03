// External Dependancies
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  phone: String,
  password: String,
})

module.exports = mongoose.model("User", userSchema)
