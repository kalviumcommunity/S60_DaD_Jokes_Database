const mongoose = require("mongoose");

const Login = mongoose.Schema({
  email: "String",
  password: "String",
});

const login = mongoose.model("Login", Login);
module.exports = login;