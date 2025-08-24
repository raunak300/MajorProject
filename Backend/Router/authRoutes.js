const express=require('express')
const Router=express.Router()

const {signup,login,verify}=require('../Controller/auth')

Router.post('/signup',signup);
Router.post('/login',login)
Router.get('/verify-token',verify);

module.exports =Router;