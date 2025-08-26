const express=require('express');
const Router=express.Router();
const {makePost}= require('../Controller/post')

Router.post(`/public/vent/:vid`,makePost)


module.exports=Router;