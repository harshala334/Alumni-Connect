const mongoose = require("mongoose");
// Define the Student schema
const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  cgpa: {
    type: Number,
    required: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student ;
