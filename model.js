const mongoose = require("mongoose");

const Jokes = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
  Tags: {
    type: String,
    required: true,
  },
});
const model=mongoose.model("dad jokes",Jokes);
module.exports = model