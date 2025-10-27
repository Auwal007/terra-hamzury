'use client'

export default function Home() {
  const handleHamburgerClick = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks?.classList.toggle('active');
  };

  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="logo">TCTI</div>
        <div className="hamburger" onClick={handleHamburgerClick}>☰</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#projects">Projects</a>
          <a href="#apply">Apply</a>
          <a href="#complaints">Complaints</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Where Land Meets Water, Technology Sustains Both</h1>
        <p>As an NGO, TCTI empowers communities and champions their climate concerns to global authorities.</p>
        <div className="cta-buttons">
          <a href="#apply">Join Our Mission</a>
          <a href="#complaints">Submit a Complaint</a>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pillars">
        <h2>Our Pillars</h2>
        <div className="pillar-grid">
          <div className="pillar-card">
            <i>💧</i>
            <h3>Water Stewardship</h3>
            <p>River restoration, clean water access, flood control, and ocean protection.</p>
          </div>
          <div className="pillar-card">
            <i>🌳</i>
            <h3>Land Renewal</h3>
            <p>Reforestation, soil health, erosion control, and green cities.</p>
          </div>
          <div className="pillar-card">
            <i>🚁</i>
            <h3>Tech for Climate</h3>
            <p>Drones, sensors, and AI dashboards for land and water monitoring.</p>
          </div>
          <div className="pillar-card">
            <i>🤝</i>
            <h3>Community Capacity</h3>
            <p>Training youth, farmers, and advocating for climate-affected communities.</p>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>250+</h3>
            <p>Communities Reached</p>
          </div>
          <div className="impact-card">
            <h3>120+</h3>
            <p>Projects Deployed</p>
          </div>
          <div className="impact-card">
            <h3>5,000+</h3>
            <p>Voices Amplified</p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones">
        <h2>Our Milestones</h2>
        <div className="milestone-grid">
          <div className="milestone-card">
            <h3>2018</h3>
            <p>Founded as an NGO, launched river restoration in Uganda.</p>
          </div>
          <div className="milestone-card">
            <h3>2020</h3>
            <p>Deployed AI dashboards across 10 African countries.</p>
          </div>
          <div className="milestone-card">
            <h3>2023</h3>
            <p>Partnered with UNDP for ocean protection advocacy.</p>
          </div>
          <div className="milestone-card">
            <h3>2025</h3>
            <p>Amplified 5,000 community voices to authorities.</p>
          </div>
        </div>
      </section>

      {/* Voice for the People Section */}
      <section className="voice">
        <h2>Voice for the People</h2>
        <p>TCTI, as an NGO, stands with communities impacted by climate change, ensuring their concerns reach the right authorities for action.</p>
        <a href="#complaints">Submit Your Climate Concern</a>
      </section>

      {/* Complaints Form */}
      <section className="complaints-form" id="complaints">
        <h2>Submit a Climate Complaint</h2>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Community/Location" required />
            <select required>
              <option value="">Select Issue Type</option>
              <option value="flooding">Flooding</option>
              <option value="drought">Drought</option>
              <option value="pollution">Pollution</option>
              <option value="other">Other</option>
            </select>
            <textarea placeholder="Describe Your Concern" rows={5} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Apply Form */}
      <section className="apply-form" id="apply">
        <h2>Join Our Mission</h2>
        <div className="form-container">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Organization (Optional)" />
            <select required>
              <option value="">Select Area of Interest</option>
              <option value="volunteer">Volunteers</option>
              <option value="community">Community Requests</option>
              <option value="partner">Corporate Partners</option>
            </select>
            <input type="text" placeholder="Country" required />
            <textarea placeholder="Message" rows={5} required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* About Page */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>Terra Climate & Technology Initiative, an NGO, restores ecosystems, empowers communities, and champions the voices of those affected by climate change to global authorities.</p>
        <div className="about-quote">
          <p>&quot;To care for land, we must care for water first.&quot;</p>
        </div>
        <h2>Who We Are</h2>
        <div className="who-we-are-grid">
          <div className="who-we-are-card">
            <img src="https://via.placeholder.com/100?text=Headshot" alt="Dr. Aisha Bello" />
            <h3>Dr. Aisha Bello</h3>
            <p>Climate Tech Advisor</p>
          </div>
          <div className="who-we-are-card">
            <img src="https://via.placeholder.com/100?text=Headshot" alt="John Okoro" />
            <h3>John Okoro</h3>
            <p>Community Advocacy Lead</p>
          </div>
          <div className="who-we-are-card">
            <img src="https://via.placeholder.com/100?text=Headshot" alt="Sarah Mwangi" />
            <h3>Sarah Mwangi</h3>
            <p>Water Specialist</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Contact: <a href="mailto:info@terraclimate.org">info@terraclimate.org</a></p>
        <p><a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">Instagram</a></p>
        <p>&copy; 2025 Terra Climate & Technology Initiative</p>
      </footer>
    </>
  )
}
