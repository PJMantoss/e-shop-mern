const router = require("express").Router();

const User = require("../models/User");

const CryptoJS = require("crypto-js");

const jwt = require("jasonwebtoken");

//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET).toString(),
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    
    try{
        const user = await User.findOne({ username: req.body.username });

        !user && res.status(401).json("Wrong Credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET);

        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.utf8);

        OriginalPassword !== req.body.password && res.status(401).json("Wrong Credentials!");

        const accessToken = jwt.sign({});

        const { password, ...others } = user._doc;

        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;