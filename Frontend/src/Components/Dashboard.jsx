import { Navigate } from "react-router-dom";
import { useLoggedIn, useUserData } from "../services/authService";

function Home() {
  // Get logged-in status and user data using the hooks
  const loggedin = useLoggedIn();
  const { role, email, firstName, adminName } = useUserData() || {}; // Handle cases where the user data might be undefined

  // Conditional redirect if not logged in
  if (!loggedin) {
    return <Navigate to="/login" />;
  }

  // Determine the display name based on the role
  const displayName = role === "admin" ? adminName : firstName;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold">Dashboard</h1>
      <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-bold">User Data</h3>
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-lg font-bold">Name: {displayName}</h4>
          <h4 className="text-lg font-bold">Email: {email}</h4>
          <h4 className="text-lg font-bold">Role: {role}</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
