// controllers/registerController.js
const Student = require("../models/studentModel");
const { User } = require("../models/user"); // Replace with your User model

const studentController = async (req, res) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      course,
      year,
      cgpa,
      studentId,
      role
    } = req.body;
    console.log("registerController 2");
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Email is already registered. Please use a different email.",
      });
    }

    // Create the user
    const newUser = await User.create({
      email,
      password,
      role,
    });

    // Create the college profile
    const student = await Student.create({
      user: newUser._id,
      email,
      password,
      firstName,
      lastName,
      course,
      year,
      cgpa,
      studentId
    });

    res.status(201).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    console.log("registerController 2");
    console.error("Error during college registration:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

module.exports = studentController;