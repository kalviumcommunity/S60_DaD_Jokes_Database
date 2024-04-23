const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./model");
const Joi = require("joi");
const Login = require("./login");
app.use(cors());
app.use(express.json());

const data = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  joke: Joi.string().required(),
});
app.get("/", (request, response) => {
  UserModel.find({})
    .then((users) => {
      response.status(201).json(users);
    })
    .catch((err) => {
      response.status(400).json(err);
    });
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.post("/add", (request, response) => {
  const { error, value } = data.validate(request.body);
  // console.log(request.body);
  if (error) {
    // console.log(error);
    return response.send(error.message);
  } else {
    UserModel.create(request.body)
      .then((users) => {
        response.status(201).json(users);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  }
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, { joke: req.body.joke })
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  Login.create(req.body)
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = app;