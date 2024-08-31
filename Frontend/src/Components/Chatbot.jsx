import { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import { Webchat, WebchatProvider, useClient } from '@botpress/webchat';

const Chatbot = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const client = useClient({ clientId: '5854f826-7fd7-411f-af2c-af11ec0cc757' }); // Replace with your actual clientId

  const handleClick = () => {
    setChatOpen(!isChatOpen); // Toggle chat window visibility
  };

  // Inline styles for the chatbot icon
  const chatbotIconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    padding: '15px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: '1000',
    transition: 'background-color 0.3s ease',
  };

  const chatbotHoverStyle = {
    backgroundColor: '#0056b3',
  };

  // Inline styles for the chat window
  const chatWindowStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '450px',
    height: '600px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  };

  const chatHeaderStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };

  return (
    <>
      <div
        style={chatbotIconStyle}
        onClick={handleClick}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = chatbotHoverStyle.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = chatbotIconStyle.backgroundColor}
      >
        {isChatOpen ? <FaTimes size="2em" /> : <FaComments size="2em" />}
      </div>

      {isChatOpen && (
        <div style={chatWindowStyle}>
          <div style={chatHeaderStyle}>
            <span>Chatbot</span>
            <FaTimes onClick={handleClick} style={{ cursor: 'pointer' }} />
          </div>
          <WebchatProvider client={client}>
            <Webchat />
          </WebchatProvider>
        </div>
      )}
    </>
  );
};

export default Chatbot;
