const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("🦇");
});

app.listen(3030, () => {
  console.log("The wagon runs");
});
