const express=require('express')
const Router=express.Router()

const {signup}=require('../Controller/auth')

Router.post('/signup',signup);

module.exports =Router;