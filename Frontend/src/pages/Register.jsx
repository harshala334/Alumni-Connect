import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import './RegistrationForm.css'; 

function Register() {
  // State for loading
  const [loading, setLoading] = useState(false);

  // State for selected options
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);

  // Initial form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // Alumni-specific fields
    startYear: "",
    endYear: "",
    degree: "",
    branch: "",
    rollNumber: "",
    firstName: "",
    lastName: "",
    // College-specific fields
    collegeName: "",
    adminId: "",
    // Student-specific fields
    course: "",
    year: "",
    cgpa: "",
    studentId: "",
    role: "",
  });

  const navigate = useNavigate();

  // Role options
  const roleOptions = [
    { value: "alumni", label: "Alumni" },
    { value: "college", label: "College" },
    { value: "student", label: "Student" },
  ];

  // Degree options for alumni
  const degreeOptions = [
    { value: "bachelor", label: "Bachelor" },
    { value: "master", label: "Master" },
    { value: "phd", label: "PhD" },
  ];

  // Handle changes for Select components
  const handleDegreeChange = (selectedOption) => {
    setSelectedDegree(selectedOption);
    setFormData({ ...formData, degree: selectedOption.value });
  };

  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
    setFormData({ 
      ...formData, 
      role: selectedOption.value,
      // Reset fields when role changes
      collegeName: "",
      adminId: "",
      startYear: "",
      endYear: "",
      degree: "",
      branch: "",
      rollNumber: "",
      firstName: "",
      lastName: "",
      course: "",
      year: "",
      cgpa: "",
      studentId: "",
    });
  };

  // Handle changes for input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Determine the endpoint based on role
    let endpoint;
    if (formData.role === "college") {
      endpoint = "http://localhost:8080/register/college";
    } else if (formData.role === "alumni") {
      endpoint = "http://localhost:8080/register/user";
    } else if (formData.role === "student") {
      endpoint = "http://localhost:8080/register/student";
    }

    try {
      const response = await axios.post(endpoint, formData);
      const { status } = response.data;

      if (status === "success") {
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during registration:", error);
      // Extract error message if available
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="registration-form-container">
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Create your account</h2>
          
          {/* Role Selection */}
          <div>
            <label htmlFor="role">Role</label>
            <Select
              id="role"
              name="role"
              options={roleOptions}
              value={selectedRole}
              onChange={handleRoleChange}
              placeholder="Select your role"
              isClearable
            />
          </div>

          {/* Common Fields */}
          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={handleChange}
              placeholder="Email address"
              disabled={!formData.role}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              onChange={handleChange}
              placeholder="Password"
              disabled={!formData.role}
            />
          </div>

          {/* Conditional Rendering Based on Role */}
          {formData.role === "alumni" && (
            <>
              <div>
                <label htmlFor="startYear">Start Year</label>
                <input
                  id="startYear"
                  name="startYear"
                  type="number"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Start Year"
                />
              </div>
              <div>
                <label htmlFor="endYear">End Year</label>
                <input
                  id="endYear"
                  name="endYear"
                  type="number"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="End Year"
                />
              </div>
              <div>
                <label htmlFor="degree">Degree</label>
                <Select
                  id="degree"
                  name="degree"
                  options={degreeOptions}
                  value={selectedDegree}
                  onChange={handleDegreeChange}
                  placeholder="Select your degree"
                />
              </div>
              <div>
                <label htmlFor="branch">Branch</label>
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Branch"
                />
              </div>
              <div>
                <label htmlFor="rollNumber">Roll Number</label>
                <input
                  id="rollNumber"
                  name="rollNumber"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Roll Number"
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </>
          )}

          {formData.role === "college" && (
            <>
              <div>
                <label htmlFor="collegeName">College Name</label>
                <input
                  id="collegeName"
                  name="collegeName"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="College Name"
                />
              </div>
            </>
          )}

          {formData.role === "student" && (
            <>
              <div>
                <label htmlFor="course">Course</label>
                <input
                  id="course"
                  name="course"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Course"
                />
              </div>
              <div>
                <label htmlFor="year">Year</label>
                <input
                  id="year"
                  name="year"
                  type="number"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Year"
                />
              </div>
              <div>
                <label htmlFor="cgpa">CGPA</label>
                <input
                  id="cgpa"
                  name="cgpa"
                  type="number"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="CGPA"
                />
              </div>
              <div>
                <label htmlFor="studentId">Student ID</label>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Student ID"
                />
              </div>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={handleChange}
                  placeholder="Last Name"
                />
              </div>
            </>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading || !formData.role}
            className="register-button"
          >
            {loading ? <Loader /> : "Register"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
