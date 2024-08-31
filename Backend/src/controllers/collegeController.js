// controllers/registerController.js
const College = require("../models/collegeModel");
const { User } = require("../models/user"); // Replace with your User model

const collegeController = async (req, res) => {
  try {
    const {
      email,
      password,
      collegeName,
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
    const college = await College.create({
      user: newUser._id,
      email,
      password,
      collegeName,
    });

    res.status(201).json({
      status: "success",
      data: {
        college,
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

module.exports = collegeController;