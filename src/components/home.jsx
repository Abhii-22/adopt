import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import About from './About';
import FeedbackAndContact from './Feedback';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: 'url(/images/black_dog.png)' }}>
      <header className="header">
        <div className="logo">
          <span role="img" aria-label="paw">🐾</span>
          <span className="logo-text">PetAdopt</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/adoption" className="nav-link">Adoption</Link>
          <Link to="/category" className="nav-link">Category</Link>
          <a href="#about-section-home" onClick={(e) => { e.preventDefault(); document.getElementById('about-section-home').scrollIntoView({ behavior: 'smooth' }); }} className="nav-link">About</a>
          <Link to="/kit" className="nav-link">Kit</Link>
        </nav>
      </header>
      <main className="main-content">
        <div className="animals-section">
          <div className="text-content">
            <h1>Find Your New Best Friend</h1>
            <p>Ready to bring joy and companionship into your life? We have amazing animals waiting to become part of your family.</p>
             <Link to="/adoption" className="adopt-button">Start Your Adoption Journey</Link>
          </div>
        </div>
      </main>
      <div id="about-section-home">
        <About />
      </div>
      <FeedbackAndContact />
    </div>
  );
};

export default Home;
