import { useState } from 'react';
import MentorCard from './MentorCard'; // Adjust the path based on your file structure
import { FaCaretDown } from 'react-icons/fa'; // Importing the dropdown icon
import { useNavigate } from 'react-router-dom';

const mentors = [
    {
        name: 'Harshala Mahajan',
        status: 'Pending for approval',
        image: '../src/assets/img/avatar.jpg',
        expertise: '',
    },
    {
        name: 'Rushali Agrawal',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Internship support/guidance, Guidance to develop technical skills...',
    },
    {
        name: 'Dhwanil Bhavsar',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Academic related doubts, Academic related projects, Technology support...',
    },
    {
        name: 'New Mentor 1',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 2',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
    {
        name: 'New Mentor 3',
        status: '',
        image: '../src/assets/img/avatar.jpg',
        expertise: 'Some expertise...',
    },
];

const MentorshipPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const navbarStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #ddd',
        marginBottom: '20px',
    };

    const headingStyle = {
        fontSize: '48px',
        fontWeight: 'bold',
        textAlign: 'left', // Aligned to the left
    };

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };

    const dropdownStyle = {
        position: 'relative',
        display: 'inline-block',
    };

    const dropdownContentStyle = {
        display: dropdownOpen ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
    };

    const dropdownItemStyle = {
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
        cursor: 'pointer',
    };

    const buttonStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px', // For spacing between text and icon
    };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    return (
        <div>
            {/* Navigation Bar */}
            <div style={navbarStyle}>
                <h1 style={headingStyle}>Welcome, Admin</h1>
                <div style={buttonContainerStyle}>
                    <div style={dropdownStyle}>
                        <button style={buttonStyle} onClick={toggleDropdown}>
                            My Preferences <FaCaretDown />
                        </button>
                        <div style={dropdownContentStyle}>
                            <div style={dropdownItemStyle}>Edit preferences as a mentor</div>
                            <div style={dropdownItemStyle}>Edit preferences as a mentee</div>
                            <div style={dropdownItemStyle}>Remove as mentor</div>
                            <div style={dropdownItemStyle}>Remove as mentee</div>
                        </div>
                    </div>
                    <button style={buttonStyle} onClick={() => navigate('/mentorshippage')}>
        Mentorship Homepage
      </button>
                </div>
            </div>

            {/* Mentor Cards Container */}
            <div style={containerStyle}>
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} mentor={mentor} />
                ))}
            </div>
        </div>
    );
};

export default MentorshipPage;
