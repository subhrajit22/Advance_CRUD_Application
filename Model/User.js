const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    StudentId: {
        type: String,
        // required:true
    },
    FirstName: {
        type: String,
        required:true
    },
    LastName: {
        type: String,
        // required:true
    },
    Age: {
        type: String,
        // required:true
    },
    Department: {
        type: String,
        // required:true
    }
})

const Student= mongoose.model('Student', StudentSchema);

module.exports = Student;