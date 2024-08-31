//import React from 'react';

const MentorshipFeedback = () => {
  const containerStyle = {
    textAlign: 'center',
    margin: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const feedbackButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const feedbackButtonStyle = {
    margin: '0 15px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '250px', // Adjust size as necessary
    height: 'auto',
    marginBottom: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

//   const buttonHoverStyle = {
//     backgroundColor: '#218838',
//   };

  return (
    <div style={containerStyle}>
      <h1>Mentorship Feedback</h1>
      <p>
        We value your experiences in our Mentorship Program. Whether you are a
        mentor or a mentee, your feedback is crucial in helping us enhance the
        program. Please share your reflections on the mentorship journey to
        assist us in creating a more impactful and supportive community.
      </p>
      <div style={feedbackButtonsStyle}>
        <div style={feedbackButtonStyle}>
          <img src="../src/assets/img/feedback.png" alt="Mentor" style={imageStyle} />
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Feedback About A Mentor
          </button>
        </div>
        <div style={feedbackButtonStyle}>
          <img src="../src/assets/img/feedback.png" alt="Mentee" style={imageStyle} />
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Feedback About A Mentee
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentorshipFeedback;
