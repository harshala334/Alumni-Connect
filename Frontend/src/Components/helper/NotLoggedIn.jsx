import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropTypes from "prop-types"; // Import PropTypes
import noDataIllustration from "../../assets/img/no_data.svg";  
import { useEffect } from "react";

function NotLoggedIn({ text }) {
  useEffect(() => {
    // Show a toast if the user is not logged in
    toast.error("Please log in to access this page");
  }, []);

  return (
    <>
      <img
        src={noDataIllustration}
        alt="No Data Illustration"
        className="flex items-center h-20 w-20"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">You are Not Logged In</h1>
        <p className="text-gray-600 mb-4">Please log in to access our {text} Tab.</p>
        <Link
          to="/login"
          className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Login
        </Link>
      </div>
    </>
  );
}

// Define the propTypes
NotLoggedIn.propTypes = {
  text: PropTypes.string.isRequired, // Ensures 'text' is a required string
};

export default NotLoggedIn;
