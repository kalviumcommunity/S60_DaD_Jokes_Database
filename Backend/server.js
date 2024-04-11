const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const route = require("./route");
const model = require("./model");
const cors=require("cors")
const URI = process.env.URI;
app.use(cors())
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
    app.get("/", (req, res) => {
      res.redirect("/ping");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/ping", (req, res) => {
  const isConnected = mongoose.connection.readyState === 1;
  res.json({
    database: isConnected ? "connected" : "disconnected",
  });
});

route.listen(4000, () => {
  console.log("The wagon runs");
});
