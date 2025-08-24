const User = require("../Model/UserModule");
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const bcrypt=require('bcrypt')

const signup = async (req, res) => {
    const { ventId, pass } = req.body;
    try {
        const existing = await User.findOne({ ventId })
        if (existing) {
            return res.status(400).send({ message: "User already exist" })
        }
        const user = new User({ ventId, password: pass });
        await user.save()
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "12h" });
        res.cookie("vent_token", token, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 1000, // in milliseconds
            sameSite: "none",
             secure: process.env.NODE_ENV === "production"
        });
        return res.status(201).send("User Created succesfully");
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error signup" })
    }
}

const login=async(req,res)=>{
    const {ventId,pass}=req.body;
    try {
        const user=await User.findOne({ventId});
        if(!user){
            res.status(404).send({message: "no user exist"});
            return
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid credentials" });
            
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "12h" });
        res.cookie("vent_token", token, {
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 1000, // in milliseconds
            sameSite: "none",
             secure: process.env.NODE_ENV === "production"
        });
        res.status(200).send({message: "user exist"})
        return;
        
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error login" })
    }
}

module.exports = { signup,login }