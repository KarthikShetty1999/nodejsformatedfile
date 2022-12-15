const express = require("express");
const userRouter = express.Router();

const userdb = require("../Models/User");

userRouter.post("/signup",async(req,res)=>{
    const user=new userdb({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    })
    const val = await user.save();
    res.json(val);
})

userRouter.get("/signin",(req,res)=>{
    userdb.find(({}),function(error,val){
        if(error){
            res.send("Error");
        }else{
        if(val.legnth==0)
        {
            res.send("data does not exists");
        }
        else{
            res.send(val);
        }
    }
    })
});

module.exports = userRouter;