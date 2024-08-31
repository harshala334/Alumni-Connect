import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { login } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../Components/Loader";

function Login() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: selectedRole,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Options for the role dropdown
  const roleOptions = [
    { value: "alumni", label: "Alumni" },
    { value: "student", label: "Student" },
    { value: "college", label: "College" },
  ];

  // Handle role selection
  const handleRoleChange = (selectedOption) => {
    setSelectedRole(selectedOption);
    setUser((prev) => ({ ...prev, role: selectedOption?.value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }
    setLoading(true);
    const url = "http://localhost:8080/auth/login";
    try {
      const response = await axios.post(url, user);
      const payload = {
        ...(selectedRole.value === "alumni"
          ? response.data.alumni
          : response.data.admin),
        role: selectedRole.value,
      };

      dispatch(login(payload));
      toast.success("Login Successful");
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      if (err.response) {
        toast.error(err.response.data.message || err.message);
      } else {
        toast.error(err.message + "! Database server is down.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100 mt-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-2">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                value={user.email}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={user.password}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <Select
                id="role"
                name="role"
                options={roleOptions}
                onChange={handleRoleChange}
                value={selectedRole}
                placeholder="Select your role"
                className="mt-2 text-sm"
                classNamePrefix="select"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 border border-transparent mt-3 text-sm font-medium rounded-md text-white bg-black hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? "opacity-50 cursor-wait" : ""
                }`}
                style={{marginTop:10}}
              >
                {loading ? <Loader text="Please Wait.." /> : "Sign In"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
