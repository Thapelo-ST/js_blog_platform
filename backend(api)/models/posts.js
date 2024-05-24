const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const PostSchema = new Schema ({
  title: String,
  author: {type:Schema.Types.ObjectId, ref:'User'},
  summary: String,
  content: String,
  cover: String,
}, {
  timestamps: true,
});

const PostModel = model('Post', PostSchema);

module.exports = PostModel;