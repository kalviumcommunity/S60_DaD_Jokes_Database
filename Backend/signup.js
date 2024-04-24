const mongoose  = require("mongoose")

const Signup = mongoose.Schema({
    name: "String",
    email: "String",
    password: "String",
})

const signup = mongoose.model("Signup", Signup)
module.exports = signup