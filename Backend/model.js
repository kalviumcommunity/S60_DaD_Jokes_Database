const mongoose = require("mongoose");

const Jokes = mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});
const model=mongoose.model("dad jokes",Jokes);
module.exports=model