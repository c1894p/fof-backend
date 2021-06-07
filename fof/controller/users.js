const express = require("express");
const router = express.Router();
const User = require("../db/models/user.model");

router.get('/', async(req, res) =>{
    try{
        const users = await User.find({});
        res.send(users);
    } catch(e){
        console.log(e)
    }
});

router.post("/", async(req,res) =>{
    try{
        const newUser = new User(req.body);
        await newUser.save()
        const allUsers = await User.find({});
        res.json(allUsers)
    } catch(e){
        console.log(e)
    }
})


module.exports = router;