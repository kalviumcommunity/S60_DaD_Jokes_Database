const express = require("express");
const app = express();
app.use(express.json())
app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/add", (request, response) => {
  response.status(201).send(request.body);
});
app.put("/update/:id", (req, res) => {
  res.send("Updated successfully");
});
app.delete("/delete/:id", (req, res) => {
  res.send("Deleted succesfully");
});

module.exports = app