const express = require("express");
const router = express.Router({mergeParams : true});



const Train = require("../models/train.js");

const wrapAsync = require("../utils/wrapasync.js");

const {isLoggedIn} = require("../middlewares.js");





// train home route

router.get("", isLoggedIn,  wrapAsync(async (req,res) => {
    res.render("./train/home.ejs")
}))



// search train route

router.get("/search_train" , isLoggedIn , wrapAsync(async (req,res) => {
    let from = req.query.from;
    let to = req.query.to;
    let date = req.query.date;
    res.render("./train/search_train.ejs" , {from , to , date});
}))






module.exports = router;