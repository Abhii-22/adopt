import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="A happy dog being held by its owner" />
        </div>
        <div className="about-content">
          <h2>About PetAdopt</h2>
          <p>
            At PetAdopt, our mission is to connect loving families with animals in need. We believe every pet deserves a safe and happy home, and we work tirelessly to make that a reality.
          </p>
          <p>
            Our platform provides a simple and intuitive way to find your perfect companion. Browse through our available pets, learn their stories, and start your adoption journey today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
