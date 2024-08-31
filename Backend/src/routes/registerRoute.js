const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const collegeController = require("../controllers/collegeController");
const studentController = require("../controllers/studentController");


// Route for alumni registration
router.post("/user", registerController);

// Route for college registration
router.post("/college", collegeController);

// Route for college registration
router.post("/student", studentController);

module.exports = router;
