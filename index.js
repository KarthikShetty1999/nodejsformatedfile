//importing the express
const express = require("express");
const app = express();

//importing the routers admin and user
const userRouter = require("./Routers/userRouter");
const adminRouter = require("./Routers/adminRouter");

// const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//user router
app.use("/users",userRouter);

//admin router
app.use("/admin",adminRouter);

//this is for port number
app.listen(process.env.PORT,()=>
{
    console.log("Running...")
})