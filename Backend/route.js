const express = require("express");
const app = express();
const model = require("./model");
app.use(express.json());
app.get("/Jokes", (request, response) => {
  model
    .find({})
    .then((data) => response.json({ data }))
    .catch((err) => response.json({ err }));
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

module.exports = app;
