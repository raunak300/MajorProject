const express=require('express');
const app=express()

const cors=require('cors');
const mongoose=require('mongoose')

const dotenv=require('dotenv')
dotenv.config()

const Connect=require('./Model/Connect.js')
const cookieParser=require('cookie-parser')
app.use(express.json())
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true ,//ORIGIN ALL
    credentials:true
}))

const authRoutes=require('./Router/authRoutes.js')
app.use('/api',authRoutes  )
const postroutes=require('./Router/postRoutes.js')
app.use('/post',postroutes)
const tagRoutes=require('./Router/userTags.js')
app.use('/user',tagRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`);
    Connect();
})
