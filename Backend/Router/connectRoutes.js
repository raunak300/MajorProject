const express=require('express')
const Router=express.Router();
const {checkToken}=require('../Middleware/checktoken')
const {formConnection}=require('../Controller/userConnections')

Router.post('/connect/request',checkToken ,formConnection)

module.exports=Router