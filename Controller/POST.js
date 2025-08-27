const express = require("express");
const { model } = require("mongoose");
const schema = require("../Model/User");
const router = express.Router();

exports.Post = async (req, res,next) => {

    const data = new schema({
        StudentId: req.body.StudentId,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Age: req.body.Age,
        Department: req.body.Department
    });
    try {
        const a1 = await data.save();
        res.send(a1);
    }
    catch (err) {
        res.send("Error" + " " + err);
    }
    finally{
        next();
    }
};