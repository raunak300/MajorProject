const mongoose = require('mongoose')
const User=require('./UserModule')
const Post=require('./UserPost')
const CommentSchema = new mongoose.Schema({
  PostId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post',
    required:true
  },
  ventId: {
    type: String, 
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment;

