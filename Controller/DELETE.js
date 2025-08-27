const express = require("express");
const { model } = require("mongoose");
const schema = require("../Model/User");
const router = express.Router();

exports.Delete = async (req, res, next) => {
    try {
        const data = await schema.deleteOne({ _id: req.params.id });
        if (data) {
            console.log(data)
            res.status(200).json(data);
        }
        else {
            console.log("No data Present");
        }

    }
    catch (err) {
        res.send("Error" + " " + err);
    }
    finally {
        next();
    }

}
