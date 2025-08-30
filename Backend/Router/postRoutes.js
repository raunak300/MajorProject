const express=require('express');
const Router=express.Router();
const {makePost, sendPost}= require('../Controller/post');
const { checkToken } = require('../Middleware/checktoken');

Router.post(`/public/vent`,checkToken,makePost)
Router.get('/public/page',checkToken,sendPost)

module.exports=Router;