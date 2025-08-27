const express = require("express");
const schema = require("../Model/User");
const router = express.Router();

module.exports=check=async(req,res,next)=>{
    try {
        const StudentId = req.params.id;
        const data = await schema.findById(req.params.id);
        //res.status(200).json(data);
         //return;
        next();
    }
    catch (err) {
        console.log("Error" + " " + err);
        res.status(500).send("Error" + " " + err);
    }
};
