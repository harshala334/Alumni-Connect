import PropTypes from 'prop-types';

const MentorCard = ({ mentor }) => {
    const cardStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        textAlign: 'center',
        width: '300px',
        marginBottom: '20px',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    };

    const imageStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
    };

    const statusStyle = {
        backgroundColor: '#f0f8ff',
        padding: '10px',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        marginTop: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
    };

    const profileButtonStyle = {
        backgroundColor: 'transparent',
        color: '#4CAF50',
        border: '1px solid #4CAF50',
        padding: '10px 10px',
        marginTop: '20px',
        cursor: 'pointer',
        borderRadius: '5px',
    };

    return (
        <div style={cardStyle}>
            <div style={imageContainerStyle}>
                <img src={mentor.image} alt={mentor.name} style={imageStyle} />
            </div>
            <h3>{mentor.name}</h3>
            {mentor.status ? (
                <div style={statusStyle}>
                    <p>{mentor.status}</p>
                    <button style={buttonStyle}>MESSAGE ADMIN</button>
                </div>
            ) : (
                <p>{mentor.expertise}</p>
            )}
            <button style={profileButtonStyle}>View Profile</button>
        </div>
    );
};

// Adding propTypes for validation
MentorCard.propTypes = {
    mentor: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string,
        image: PropTypes.string.isRequired,
        expertise: PropTypes.string,
    }).isRequired,
};

export default MentorCard;
