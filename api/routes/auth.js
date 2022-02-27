const router = require("express").Router();

const User = require("../models/User");

const CryptoJS = require("crypto-js");

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

        const password = hashedPassword.toString(CryptoJS.enc.utf8);
        password !== req.body.password && res.status(401).json("Wrong Credentials!");
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;