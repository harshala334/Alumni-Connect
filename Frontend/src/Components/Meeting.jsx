import { useState } from 'react';
import { Link } from "react-router-dom";
import { useLoggedIn } from '../services/authService';

const VideoConference = () => {
  const loggedIn = useLoggedIn();
  const [meetingLink, setMeetingLink] = useState('');

  const handleGenerateMeetingLink = () => {
    const newMeetingLink = 'https://meet.google.com/jcq-kjmw-ftf'; 
    setMeetingLink(newMeetingLink);
  };

  const handleJoinMeeting = () => {
    if (meetingLink) {
      window.open(meetingLink, '_blank'); // Open the link in a new tab
    }
  };

  return (
    <div className="max-w-md my-12 mx-auto p-6 bg-white rounded-md shadow-md">
      {loggedIn ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Video Conference with Alumni</h2>

          <div className="mb-4">
            <label htmlFor="meetingLink" className="block text-sm font-medium text-gray-600">
              Meeting Link
            </label>
            <input
              id="meetingLink"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={meetingLink}
              readOnly
            />
          </div>

          <div className="mb-4">
            <button
              className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={handleGenerateMeetingLink}
            >
              Generate Meeting Link
            </button>
          </div>

          <div className="mb-4">
            <button
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
              onClick={handleJoinMeeting}
              disabled={!meetingLink}
            >
              Join Video Conference
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-auto">You are Not Logged In</h1>
          <p className="text-gray-600 mb-4">
            Please log in to access our meeting tab.
          </p>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default VideoConference;
