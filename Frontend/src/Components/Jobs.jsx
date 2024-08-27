

import NotLoggedIn from "./helper/NotLoggedIn";
import { useLoggedIn } from "../services/authService";

function Jobs() {
  const loggedIn = useLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <h1 className="text-4xl font-bold mb-4">Jobs</h1>
      ) : (
       <NotLoggedIn text="Jobs" />
      )}
    </div>
  );
}

export default Jobs;
