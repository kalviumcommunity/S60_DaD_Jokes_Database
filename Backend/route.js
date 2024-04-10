const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./model");
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  UserModel.find({})
    .then((users) => {
      response.status(201).json(users);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
});

app.post("/add", (request, response) => {
  UserModel.create(request.body)
    .then((users) => {
      response.status(201).json(users);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
app.get("/Jokes", (request, response) => {
  model
    .find({})
    .then((data) => response.json({ data }))
    .catch((err) => response.json({ err }));
});

app.put("/update/:id", (req, res) => {
  res.send("Updated successfully");
});
app.delete("/delete/:id", (req, res) => {
  res.send("Deleted succesfully");
});

module.exports = app;
