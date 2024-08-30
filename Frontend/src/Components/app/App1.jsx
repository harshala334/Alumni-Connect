import "./App1.css";

function App1() {
  return (
    <div className="App">
      

      <section className="hero">
        <div className="hero-content">
          <h1>Connecting Generations, Building Futures</h1>
          <p>Where experience meets aspiration. Join the network today!</p>
          <button className="cta-button">Join the Network</button>
        </div>
      </section>

      <section className="introduction">
        <h2>Welcome to Our Platform</h2>
        <p>
          Our goal is to connect students with alumni for mentorship,
          networking, and collaboration. Explore our features to see how we can
          help you grow.
        </p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vcSljNT_uTo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      <section className="features-section">
        <div className="features-text">
          <img src="../src/assets/img/f.png" alt="F" />
          <img src="../src/assets/img/e.png" alt="E" />
          <img src="../src/assets/img/a.png" alt="A" />
          <img src="../src/assets/img/t.png" alt="T" />
          <img src="../src/assets/img/u.png" alt="U" />
          <img src="../src/assets/img/r.png" alt="R" />
          <img src="../src/assets/img/e.png" alt="E" />
          <img src="../src/assets/img/s.png" alt="S" />
        </div>

        <div className="feature-cards">
          <div className="feature-card">
            <img src="../src/assets/img/mentorship.png" alt="Mentorship Programs" />
            <h3>Mentorship Programs</h3>
            <p>Connect with alumni for guidance and support.</p>
          </div>
          <div className="feature-card">
            <img src="../src/assets/img/job.png" alt="Job Opportunities" />
            <h3>Job Opportunities</h3>
            <p>Exclusive job postings and internships.</p>
          </div>
          <div className="feature-card">
            <img src="../src/assets/img/network.png" alt="Networking Events" />
            <h3>Networking Events</h3>
            <p>Attend webinars, meetups, and reunions.</p>
          </div>
          <div className="feature-card">
            <img src="../src/assets/img/discuss_forum.png" alt="Discussion Forums" />
            <h3>Discussion Forums</h3>
            <p>Engage in discussions on various topics.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>&quot;This platform helped me find my first job!&quot; - Alumni</p>
        </div>
        <div className="testimonial">
          <p>
          &quot;I received invaluable advice from experienced alumni.&quot; - Student
          </p>
        </div>
      </section>

      
    </div>
  );
}

export default App1;
