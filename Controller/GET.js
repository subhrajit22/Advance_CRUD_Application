const express = require("express");
const { model } = require("mongoose");
const schema = require("../Model/User");
const router = express.Router();

exports.getAll = async (req, res, next) => {
    try {
        const data = await schema.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.send("Error" + " " + err);
    }
    finally{
        next();
    }
}
exports.getById = async (req, res, next) => {
    try {
        const StudentId = req.params.id;
        //console.log(StudentId);
        const data = await schema.findById(req.params.id);
        res.status(200).json(data);
    }
    catch (err) {
        res.send("Error" + " " + err);
    }
    finally{
        next();
    }
}
model.exports = router;
