const verifyToken = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyToken);

module.exports = router;

// router.get("/usertest", (req, res) => {
//     res.send("user test is successful");
// });

// router.post("/userposttest", (req, res) => {
//     const username = req.body.username;
//     res.send("Your username is " + username);
// });