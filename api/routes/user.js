const {verifyToken} = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyToken, (req, res) => {
    if(req.user.id === req.params.id || req.user.isAdmin){}
});

module.exports = router;

// router.get("/usertest", (req, res) => {
//     res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     res.send("Your username is " + username);
// });