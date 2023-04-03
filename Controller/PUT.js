const express = require("express");
const { model } = require("mongoose");
const schema = require("../Model/User");
const router = express.Router();


exports.Put=async (req, res) => {
    try {
        const data = await schema.findById({ _id: req.params.id });
        data.Age = req.body.Age;
        await data.save();
        res.status(200).json(data);
    }
    catch (err) {
        res.send("Error" + " " + err);
    }
};