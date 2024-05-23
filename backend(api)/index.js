const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const salt = bcrypt.genSaltSync(11);
const secret = 'secret';

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog-admin:HgQYa516dd5MtLNZ@cluster0.zthrzxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.post('/register', async (req, res) => {
  const {username, password} = req.body;
  try {
    const userDocument = await User.create({
      username, 
      password:bcrypt.hashSync(password, salt),
    });
    res.json(userDocument);
  } catch (error) {
    res.status(400).json(error)
  }
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  const userDocument = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDocument.password);
  if (passOk) {
    jwt.sign({username,id: userDocument._id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.json(token);
    });
  } else {
    res.json("Wrong Password or Username")
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});

module.exports = app;
