const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const app = express();
const salt = bcrypt.genSaltSync(11);
const secret = 'secret';
const cookieParser = require("cookie-parser");
const uploadMiddleWare = multer({dest: 'uploads/'});

app.use(cors({credentials:true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

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
  if (!userDocument) {
    return res.status(400).json("Wrong Username or password");
  }
  const passOk = bcrypt.compareSync(password, userDocument.password);
  if (passOk) {
    jwt.sign({username,id: userDocument._id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token',token).json({
          id: userDocument._id,
          username,
        });
    });
  } else {
    res.json("Wrong Password or Username");
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok'); 
});

app.get("/profile", (req, res) =>{
  const {token} = req.cookies;
  jwt.verify(token, secret, {},(err, decoded) => {
    if (err) throw err;
    res.json(decoded);
  });
});


app.post("/create_post", uploadMiddleWare.single('file'),(req, res) => {
  res.json({files:req.file});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});

module.exports = app;
