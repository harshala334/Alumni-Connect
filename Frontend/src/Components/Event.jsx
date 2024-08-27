//import React, { useEffect } from 'react';

//import { Link } from 'react-router-dom';
import NotLoggedIn from './helper/NotLoggedIn';
//import { ToastContainer, toast } from 'react-toastify';
import { useLoggedIn } from '../services/authService';
// Replace with the actual path

function Event() {
  const loggedIn = useLoggedIn();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loggedIn ? (
        <h1 className="text-4xl font-bold mb-4">Event</h1>
      ) : (
        <NotLoggedIn text="Event" />
      )}
    </div>
  );
}

export default Event;
