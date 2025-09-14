import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">
          <span role="img" aria-label="paw">🐾</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/adoption">Adoption</Link>
          <Link to="/category">Category</Link>
          <a href="/about">About</a>
        </nav>
        <div className="header-right">
          <span role="img" aria-label="search">🔍</span>
          <span role="img" aria-label="menu">☰</span>
        </div>
      </header>
      <main className="main-content">
        <div className="animals-section">
          <h1>Our Adorable Animals</h1>
          <div className="animals-grid">
            <div className="animal-card">
              <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2" alt="Dog" />
              <h3>Dogs</h3>
              <p>Loyal and loving companions</p>
            </div>
            <div className="animal-card">
              <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2" alt="Cat" />
              <h3>Cats</h3>
              <p>Independent and affectionate</p>
            </div>
            <div className="animal-card">
              <img src="https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2" alt="Cow" />
              <h3>Cows</h3>
              <p>Gentle and peaceful animals</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
