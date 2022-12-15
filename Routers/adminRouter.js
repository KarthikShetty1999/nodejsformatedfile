const express = require("express");
const adminRouter = express.Router();

const admin = require("../Models/Admin");

adminRouter.post("/signup",async(req,res)=>{
    const user=new admin({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    })
    const val = await user.save();
    res.json(val);
});

adminRouter.get("/signin",(req,res)=>{
    admin.find(({}),function(error,val){
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

module.exports = adminRouter;