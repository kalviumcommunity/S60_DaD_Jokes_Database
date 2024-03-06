const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/ping");
});

app.get("/ping", (req, res) => {
  res.send("🦇");
});

app.listen(3030, () => {
  console.log("The wagon runs");
});
