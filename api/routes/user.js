const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});

router.get("/userposttest", (req, res) => {
    const username = req.body.username;
});

module.exports = router;