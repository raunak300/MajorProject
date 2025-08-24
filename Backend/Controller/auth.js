const User = require("../Model/UserModule");
const jwt = require('jsonwebtoken')
const cookie = require('cookie')
const bcrypt = require('bcrypt')

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
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        return res.status(201).send("User Created succesfully");
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error signup" })
    }
}

const login = async (req, res) => {
    const { ventId, pass } = req.body;
    try {
        const user = await User.findOne({ ventId });
        if (!user) {
            res.status(404).send({ message: "no user exist" });
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
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        res.status(200).send({ message: "user exist" })
        return;

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error login" })
    }
}

const verify = async (req, res) => {
    const token = req.cookies.vent_token; // cookie sent automatically by browser
    if (!token) return res.status(401).send({ valid: false });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).send({ valid: true, id: decoded.id }); // send user info if needed
    } catch (err) {
        res.status(401).send({ valid: false, message: "Invalid token" });
    }
};

const logout = async (req, res) => {
    try {
        res.cookie("vent_token", "", {
            httpOnly: true,
            expires: new Date(0), // sets the cookie expiration in the past
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production"
        });
        res.status(200).send({ message: "Logged out successfully" });
    } catch (error) {
        res.status(500).send({ messgae: "server error" })
    }
}

module.exports = { signup, login, verify, logout }