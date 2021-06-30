const { response } = require("express");
const express=require("express");
const shoesModel=require("../models/shoes");
const app=express();

app.get("/shoes",async(req,res)=>
{
    const shoes=await shoesModel.find({});

    try {
        res.send(shoes);
    } catch (error) {
        res.status(500).send(error);
    }
});




module.exports=app;