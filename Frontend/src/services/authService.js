import { useSelector } from "react-redux";

// Custom hook for getting user data
function useUserData() {
    return useSelector((state) => {
        console.log("useUserData called", state.currentUser);
        return state.currentUser;
    });
}

// Custom hook for checking if the user is logged in
function useLoggedIn() {
    const loggedIn = useSelector((state) => state.loggedIn);
    console.log("Logged in?", loggedIn);
    return loggedIn;
}

// Custom hook for getting the user's role
function useUserRole() {
    const role = useSelector((state) => state.role);
    console.log("User Role:", role);
    return role;
}

export { useUserData, useLoggedIn, useUserRole };