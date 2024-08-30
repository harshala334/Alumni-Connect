//import React from 'react';
import { FaGoogle, FaWhatsapp, FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
const YearbookPage = () => {
  const batchYears = [
    { year: 'Class Of 2023', members: 4994 },
    { year: 'Class Of 2022', members: 5000 },
    { year: 'Class Of 2021', members: 60 },
    { year: 'Class Of 2020', members: 38 },
    { year: 'Class Of 2019', members: 1 },
    { year: 'Class Of 2018', members: 1 },
    { year: 'Class Of 2017', members: 1 },
    { year: 'Class Of 2016', members: 1 },
    { year: 'Class Of 2015', members: 1 },
    { year: 'Class Of 2014', members: 1 },
    { year: 'Unknown', members: 1 }
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ backgroundColor: '#f1f1f1', padding: '10px', marginBottom: '20px' }}>
        <img 
          src="../../src/assets/img/yearbook-banner.jpg" 
          alt="Yearbook Banner" 
          style={{ width: '100%', height: 'auto' }}
        />
        <div 
          style={{ 
            position: 'absolute', 
            top: '480px', 
            right: '50px', 
            backgroundColor: '#fff', 
            padding: '10px', 
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h3><b>Share this Yearbook</b></h3>
          <p>Make sure all of your friends are part of <b>FutureConnect</b> yearbook</p>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <a href="mailto:?subject=Check%20out%20this%20yearbook&body=Here%20is%20the%20link%20to%20the%20FutureConnect%20yearbook" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaGoogle size={23} color="#DB4437" />
            </a>
            <a href="https://wa.me/?text=Check%20out%20this%20yearbook%20at%20[URL]" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaWhatsapp size={23} color="#25D366" />
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=[URL]" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaFacebook size={23} color="#1877F2" />
            </a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=[URL]&title=Check%20out%20this%20yearbook" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaLinkedin size={23} color="#0A66C2" />
            </a>
            <a href="https://telegram.me/share/url?url=[URL]&text=Check%20out%20this%20yearbook" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaTelegram size={23} color="#0088CC" />
            </a>
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20yearbook%20at%20[URL]" 
               target="_blank" 
               rel="noopener noreferrer">
              <FaTwitter size={23} color="#1DA1F2" />
            </a>
          </div>
        </div>
      </div>

      <h2>Select Year</h2>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '20px 0' }}>
        {batchYears.map((batch, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: '#fff', 
              padding: '20px', 
              margin: '10px', 
              borderRadius: '5px', 
              width: '200px', 
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            <h3>{batch.year}</h3>
            <p>{batch.members} Members</p>
          </div>
        ))}
      </div>
      
      <button style={{ padding: '10px 20px', marginTop: '20px', backgroundColor: 'black', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        View My Batchmates
      </button>
      
      <div style={{ marginTop: '20px' }}>
        <a href="#top" style={{ color: '#007bff', textDecoration: 'none' }}>Go to top</a>
      </div>
    </div>
  );
};

export default YearbookPage;
