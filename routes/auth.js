const express = require("express");
const schema = require("../Model/User");
const router = express.Router();
const { getAll, getById } = require("../Controller/GET.js");
const { Post } = require("../Controller/POST.js");
const { Put } = require("../Controller/PUT.js");
const { Delete } = require("../Controller/DELETE.js");
const Check = require("../Controller/CHECK.js");
router.use('/student/:id',Check);
router.route('/student').get(getAll);
router.route('/student/:id').get(getById);
router.route('/student').post(Post);
router.route('/student/:id').put(Put);
router.route('/student/:id').delete(Delete);
module.exports = router;


/*
--------------------------------POST----------------------
async (req, res) => {

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
});

*/
/*
--------------------------------PUT----------------------
async (req, res) => {
    try {
        const data = await schema.findById({ _id: req.params.id });
        data.Age = req.body.Age;
        data.save();
        res.status(200).json(data);
    }
    catch (err) {
        res.send("Error" + " " + err);
    }
});
*/

/*
------------------------------------------------DELETE-----------------------
async (req, res) => {
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
});

*/