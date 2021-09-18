const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

app.post("/create", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    res.json(user);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if(!user){
      res.status(404).send("User not found")
    } else {
      user.fname = req.body.fname
      user.lname = req.body.lname
      user.birthday = req.body.birthday
      user.age = req.body.age
      user.sex = req.body.sex
      user.pronoun = req.body.pronoun
      user.email = req.body.email
      user.number = req.body.number
      user.address1 = req.body.address1
      user.city = req.body.city
      user.state = req.body.state
      user.zipcode = req.body.zipcode

      user.save().then((user) => {
        res.json(user)
      })
      .catch((err) => res.status(500).send(err.message))
    }
  });
});

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let user;
    try {
      user = await User.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (user) return res.json({ deleted: true });
    return res.json({ deleted: false });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
