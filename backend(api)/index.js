const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const app = express();
const Post = require("./models/posts");
const salt = bcrypt.genSaltSync(11);
const secret = "secret";
const cookieParser = require("cookie-parser");
const uploadMiddleWare = multer({ dest: "uploads/" });
const fs = require("fs");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + "/uploads"));

mongoose.connect(
  "mongodb+srv://blog-admin:HgQYa516dd5MtLNZ@cluster0.zthrzxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDocument = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDocument);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDocument = await User.findOne({ username });
  if (!userDocument) {
    return res.status(400).json("Wrong Username or password");
  }
  const passOk = bcrypt.compareSync(password, userDocument.password);
  if (passOk) {
    jwt.sign({ username, id: userDocument._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDocument._id,
        username,
      });
    });
  } else {
    res.json("Wrong Password or Username");
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, decoded) => {
    if (err) throw err;
    res.json(decoded);
  });
});

app.post("/create_post", uploadMiddleWare.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  const { token } = req.cookies;
  fs.renameSync(path, newPath);

  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDocument = await Post.create({
      title,
      summary,
      content,
      cover: newPath, 
      author:decoded.id,
    });
    res.json(postDocument);
  });
});

app.get("/create_post", async (req, res) => {
  const posts = await Post.find()
  .populate('author', ['username'])
  .sort({createdAt: -1}).limit(10);
  res.json(posts);
});

app.put('/edit_post', uploadMiddleWare.single("file"),async (req, res) => {
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    const { token } = req.cookies;
    fs.renameSync(path, newPath);
  }

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err, decoded) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDocument = await Post.findById(id);
    const AuthAuthor = JSON.stringify(postDocument.author) === JSON.stringify(decoded.id);
    //res.json({AuthAuthor, postDocument, decoded});
    if (!AuthAuthor) { 
      return res.status(400).json('Unauthorised Author');
    }
    postDocument.title = title;
    postDocument.summary = summary; 
    postDocument.content = content;
    postDocument.cover = newPath ? newPath : postDocument.cover;
    await postDocument.save();
    res.json(postDocument);
  });
});

app.get('/posts/:id',async (req, res) => {
  const {id} = req.params;
  const postDocument = await Post.findById(id).populate('author', ['username']);
  res.json(postDocument);
});

// Listening point
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at localhost: ${PORT}`);
});

module.exports = app;
