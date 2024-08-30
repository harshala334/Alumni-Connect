import { useState } from 'react';
import {
  FaHome,
  FaBriefcase,
  FaSearch,
  FaEnvelopeOpenText,
  FaUpload,
  FaVideo,
  FaBars,
  FaTimes,
  FaBook,
  FaChevronDown,
  FaListAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaHandHoldingHeart,
  FaBell,
  FaUser,
  FaCalendar,
  FaCamera,
  FaBullhorn,
  FaTrophy
} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useLoggedIn } from '../services/authService';

function Topbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [engageDropdownOpen, setEngageDropdownOpen] = useState(false);
  const [connectDropdownOpen, setConnectDropdownOpen] = useState(false);
  const [whatsNewDropdownOpen, setWhatsNewDropdownOpen] = useState(false);
  const [mentorshipDropdownOpen, setMentorshipDropdownOpen] = useState(false);
  const loggedIn = useLoggedIn();
  const dispatch = useDispatch();
 

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleEngageDropdown = () => {
    setEngageDropdownOpen(!engageDropdownOpen);
    setConnectDropdownOpen(false);
    setWhatsNewDropdownOpen(false);
    setMentorshipDropdownOpen(false);
  };

  const toggleConnectDropdown = () => {
    setConnectDropdownOpen(!connectDropdownOpen);
    setEngageDropdownOpen(false);
    setWhatsNewDropdownOpen(false);
    setMentorshipDropdownOpen(false);
  };

  const toggleWhatsNewDropdown = () => {
    setWhatsNewDropdownOpen(!whatsNewDropdownOpen);
    setEngageDropdownOpen(false);
    setConnectDropdownOpen(false);
    setMentorshipDropdownOpen(false);
  };

  

  const toggleMentorshipDropdown = () => {
    setMentorshipDropdownOpen(!mentorshipDropdownOpen);
    setEngageDropdownOpen(false);
    setConnectDropdownOpen(false);
    setWhatsNewDropdownOpen(false);
  };

  return (
    <div className="bg-slate-100 text-black p-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex items-center mb-4 lg:mb-0">
        <Link to="/" className="flex items-center">
          <img
            src="../src/assets/img/futureconnect_icon.png"
            alt="Logo"
            className="mr-2 h-12 w-14"
          />
          <h2 className="text-2xl font-extrabold text-gray-800 ">FutureConnect</h2>
        </Link>
      </div>

      <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
      </div>

      <nav
        className={`lg:flex lg:flex-row lg:space-x-4 font-semibold items-center ${
          isMobileMenuOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        {loggedIn ? (
          <Link to="/dashboard" className="text-sm flex items-center">
            <FaHome className="mr-1" /> Dashboard
          </Link>
        ) : (
          <Link to="/home" className="text-sm flex items-center">
            <FaHome className="mr-1" /> Home
          </Link>
        )}

        <div className="relative">
          <button
            onClick={toggleEngageDropdown}
            className="text-sm font-semibold flex items-center focus:outline-none"
          >
            Let&apos;s Engage <FaChevronDown className="ml-1" />
          </button>
          {engageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <Link
                to="/yearbook"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaUsers className="mr-2 inline-block" /> Scholar Groups
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaListAlt className="mr-2 inline-block" /> Hackathons
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaHandHoldingHeart className="mr-2 inline-block" /> Volunteering
              </Link>
            </div>
          )}
        </div>

        <Link to="/jobs" className="text-sm font-semibold flex items-center">
          <FaBriefcase className="mr-1" /> Jobs
        </Link>

        <div className="relative">
          <button
            onClick={toggleConnectDropdown}
            className="text-sm font-semibold flex items-center focus:outline-none"
          >
            Let&apos;s Connect <FaChevronDown className="ml-1" />
          </button>
          {connectDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <Link
                to="/yearbook"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaBook className="mr-2 inline-block" /> YearBook
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaSearch className="mr-2 inline-block" /> Search Alumni
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaListAlt className="mr-2 inline-block" /> Scholar Directory
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaMapMarkerAlt className="mr-2 inline-block" /> Scholars Nearby
              </Link>
            </div>
          )}
        </div>

        <Link to="/meeting" className="text-sm font-semibold flex items-center">
          <FaVideo className="mr-1" /> Meeting
        </Link>

        <div className="relative">
          <button
            onClick={toggleMentorshipDropdown}
            className="text-sm font-semibold flex items-center focus:outline-none"
          >
            Mentorship <FaChevronDown className="ml-1" />
          </button>
          {mentorshipDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <Link
                to="/mentorship"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaUser className="mr-2 inline-block" /> Mentorship Homepage
              </Link>
              <Link
                to="/becomeamentor"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaUser className="mr-2 inline-block" /> Become a Mentor
              </Link>
              <Link
                to="/becomeamentee"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaUser className="mr-2 inline-block" /> Become a Mentee
              </Link>
              <Link
                to="/search-people"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaUser className="mr-2 inline-block" /> Mentorship Feedback
              </Link>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={toggleWhatsNewDropdown}
            className="text-sm font-semibold flex items-center focus:outline-none"
          >
            What&apos;s New! <FaChevronDown className="ml-1" />
          </button>
          {whatsNewDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <Link
                to="/latest-updates"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaBell className="mr-2 inline-block" /> Latest Updates
              </Link>
              <Link
                to="/events-webinars"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaCalendar className="mr-2 inline-block" /> Events and Webinars
              </Link>
              <Link
                to="/galleries"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaCamera className="mr-2 inline-block" /> Galleries
              </Link>
              <Link
                to="/scholar-achievements"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaTrophy className="mr-2 inline-block" /> Scholar Achievements
              </Link>
              <Link
                to="/campaigns"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <FaBullhorn className="mr-2 inline-block" /> Campaigns
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/bulk-upload"
          className="text-sm font-semibold flex items-center"
        >
          <FaUpload className="mr-1" /> Bulk Import
        </Link>

        <Link to="/send-mail" className="text-sm font-semibold flex items-center">
          <FaEnvelopeOpenText className="mr-1" /> Send Mail
        </Link>

        {loggedIn ? (
          <>
            <NavLink
              onClick={() => {
                dispatch(logout());
              }}
              className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium mt-2 lg:mt-0"
            >
              Login
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Topbar;
