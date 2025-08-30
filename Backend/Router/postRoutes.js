const express=require('express');
const Router=express.Router();
const {makePost}= require('../Controller/post');
const { checkToken } = require('../Middleware/checktoken');

Router.post(`/public/vent`,checkToken,makePost)


module.exports=Router;