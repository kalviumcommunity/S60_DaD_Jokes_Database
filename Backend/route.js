const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./model");
const Joi = require("joi");
const Login = require("./login");
const Signup = require("./signup");
const crypto = require("crypto");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

const data = Joi.object({
  createdBy: Joi.string().required(),
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
  if (error) {
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

function generateToken(userId) {
  const token = jwt.sign({ userId: userId }, "your_secret_key", {
    expiresIn: "5m",
  });
  return token;
}

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  //   Login.create(req.body)
  //     .then((users) => {
  //       res.status(201).json(users);
  //     })
  //     .catch((err) => {
  //       res.status(400).json(err);
  //     });
  // });

  Signup.findOne({ email: email })
    .then((user) => {
      if (user) {
        const hashedPassword = hashPassword(password);

        if (hashedPassword == user.password) {
          const token = generateToken(user._id);
          return res.send({
            shouldLogin: true,
            message: "Logged in Successfully",
            token: token,
          });
        } else {
          return res.send({ shouldLogin: false, message: "Invalid password" });
        }
      } else {
        return res.send({ shouldLogin: false, message: "email not found!" });
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send(err);
    });
});

const signUpData = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const { error, value } = signUpData.validate(req.body);
  if (error) {
    return res.send(error.message);
  } else {
    Signup.findOne({ email: email })
      .then((isEmailThere) => {
        console.log(isEmailThere);
        if (isEmailThere) {
          console.log(isEmailThere);
          res.send({ alert: "email already exists" });
        } else {
          const hashedPassword = hashPassword(password);
          Signup.create({ name, email, password: hashedPassword })
            .then((result) => {
              console.log("result");
              res.send(result);
            })
            .catch((err) => {
              res.send(err);
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.send("err");
      });
  }
});

module.exports = app;
