//import React from 'react';
import './App2.css'; // Import the CSS file

function App2() {
  return (
    <div className="container">
      <div className="profile-card">
        <div className="profile-pic">
          <img src="../src/Components/khadija/avatar.webp" alt="user avatar" />
        </div>

        <div className="profile-details">
          <div className="intro">
            <h2>Harshala Mahajan</h2>
            <h4>UI/UX Designer</h4>
            <div className="social">
              <a href="#"><i className="fab fa-facebook" style={{ color: 'var(--blue)' }}></i></a>
              <a href="#"><i className="fab fa-twitter" style={{ color: 'var(--skyblue)' }}></i></a>
              <a href="#"><i className="fab fa-dribbble" style={{ color: 'var(--dark-pink)' }}></i></a>
              <a href="#"><i className="fab fa-linkedin" style={{ color: 'var(--light-blue)' }}></i></a>
            </div>
          </div>

          <div className="contact-info">
            <div className="row">
              <div className="icon">
                <i className="fa fa-phone" style={{ color: 'var(--dark-magenta)' }}></i>
              </div>
              <div className="content">
                <span>Phone</span>
                <h5>+123 456 789</h5>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <i className="fa fa-envelope-open" style={{ color: 'var(--light-green)' }}></i>
              </div>
              <div className="content">
                <span>Email</span>
                <h5>example@gmail.com</h5>
              </div>
            </div>

            <div className="row">
              <div className="icon">
                <i className="fa fa-map-marker" style={{ color: 'var(--light-purple)' }}></i>
              </div>
              <div className="content">
                <span>Location</span>
                <h5>Hongkong China</h5>
              </div>
            </div>
          </div>
          <button className="download-btn">
            <i className="fa fa-download"></i> Download CV
          </button>
        </div>
      </div>

      <div className="about">
        <h1>User Profile</h1>

        <p>
          Creative Director and UI/UX Designer from Sydney, Australia, working in web development and
          print media. 
        </p>

        <p>
          My aim is to bring across your message and identity in the most creative way. I created web
          design for many famous brand companies.
        </p>
        <h2>What I Do !!!</h2>
        <div className="work">
          <div className="workbox">
            <div className="icon">
              <img src="../src/Components/khadija/ui.svg" alt="" />
            </div>
            <div className="desc">
              <h3>UI/UX Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
            </div>
          </div>

          <div className="workbox">
            <div className="icon">
              <img src="../src/Components/khadija/app.svg" alt="" />
            </div>
            <div className="desc">
              <h3>App Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
            </div>
          </div>

          <div className="workbox">
            <div className="icon">
              <img src="../src/Components/khadija/api.svg" alt="" />
            </div>
            <div className="desc">
              <h3>API Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
            </div>
          </div>

          <div className="workbox">
            <div className="icon">
              <img src="../src/Components/khadija/web.svg" alt="" />
            </div>
            <div className="desc">
              <h3>Web Development</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;

