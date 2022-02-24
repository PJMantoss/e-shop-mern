const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    "mongodb+srv://mantoss:superstars@cluster0.kxgzl.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connection Successfull!"))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log("Backend Server is running!");
});