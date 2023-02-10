const router = require("express").Router();
let User = require("../models/user.model");
const crypto = require('crypto');

function sha256(data) {
    return crypto.createHash("sha256").update(data, "binary").digest("hex");
    //                                               ------  binary: hash the byte string
}

router.route("/").get((req,res)=>{
    User.find().then(users=>res.json(users)).catch(err=>res.status(400).json("error: "+ err));
});

router.route("/add").post((req,res)=>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save().then(()=>res.json("User added!")).catch(err => res.status(400).json("Error: "+ err));

});


router.route("/login").post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = sha256(req.body.password);

    User.findOne({username,email,password}).then(users=>res.json(users)).catch(err=>res.status(400).json("error: "+ err));

});


router.route("/register").post((req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = sha256(req.body.password);

    const newUser = new User({username,email,password});

    newUser.save().then(()=>res.json("User added!")).catch(err => res.status(400).json("Error: "+ err));

});

module.exports = router;