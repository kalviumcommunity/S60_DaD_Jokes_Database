const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

const URI = process.env.URI;

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
  // Send response with database connection status
  res.json({
    database: isConnected ? "connected" : "disconnected",
  });
});

app.listen(4000, () => {
  console.log("The wagon runs");
});
