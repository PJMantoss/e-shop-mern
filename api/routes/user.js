const User = require("../models/User");
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(
            req.body.password, 
            process.env.PASSWORD_SECRET
            ).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: req.body
            },
            {
                new: true
            },
            );

            res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
    }catch(err){}
})

module.exports = router;

// router.get("/usertest", (req, res) => {
//     res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     res.send("Your username is " + username);
// });