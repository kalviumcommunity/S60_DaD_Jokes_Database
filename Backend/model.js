const mongoose = require("mongoose");

const Jokes = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
});


const model = mongoose.model("dad jokes", Jokes);
module.exports = model;
