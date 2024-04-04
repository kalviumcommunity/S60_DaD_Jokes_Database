const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const route = require("./route")
const cors = require ('cors')

const URI = process.env.URI;
const app = express();
app.use (cors())
app.use (express.json())

mongoose
  .connect(URI)
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