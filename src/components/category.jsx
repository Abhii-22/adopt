import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './category.css';

const Category = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Dogs',
      icon: '🐕',
      description: 'Loyal companions who bring joy to every home',
      count: 25,
      color: '#FF6B6B',
      bgImage: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Golden Retriever', count: 8 },
        { name: 'Labrador', count: 6 },
        { name: 'German Shepherd', count: 4 },
        { name: 'Beagle', count: 3 },
        { name: 'Poodle', count: 2 },
        { name: 'Others', count: 2 }
      ]
    },
    {
      id: 2,
      name: 'Cats',
      icon: '🐱',
      description: 'Independent spirits with hearts full of love',
      count: 18,
      color: '#4ECDC4',
      bgImage: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Persian', count: 5 },
        { name: 'Maine Coon', count: 4 },
        { name: 'Siamese', count: 3 },
        { name: 'British Shorthair', count: 2 },
        { name: 'Ragdoll', count: 2 },
        { name: 'Others', count: 2 }
      ]
    },
    {
      id: 3,
      name: 'Birds',
      icon: '🐦',
      description: 'Colorful melodies that brighten your day',
      count: 12,
      color: '#45B7D1',
      bgImage: 'https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Parakeet', count: 4 },
        { name: 'Canary', count: 3 },
        { name: 'Cockatiel', count: 2 },
        { name: 'Lovebird', count: 2 },
        { name: 'Others', count: 1 }
      ]
    },
    {
      id: 4,
      name: 'Rabbits',
      icon: '🐰',
      description: 'Gentle souls with boundless energy',
      count: 8,
      color: '#96CEB4',
      bgImage: 'https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Dutch', count: 3 },
        { name: 'Holland Lop', count: 2 },
        { name: 'Mini Rex', count: 2 },
        { name: 'Others', count: 1 }
      ]
    },
    {
      id: 5,
      name: 'Farm Animals',
      icon: '🐄',
      description: 'Hardy friends for rural adventures',
      count: 15,
      color: '#FECA57',
      bgImage: 'https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Cows', count: 6 },
        { name: 'Goats', count: 4 },
        { name: 'Sheep', count: 3 },
        { name: 'Pigs', count: 2 }
      ]
    },
    {
      id: 6,
      name: 'Exotic',
      icon: '🦎',
      description: 'Unique companions for special hearts',
      count: 6,
      color: '#A55EEA',
      bgImage: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      animals: [
        { name: 'Reptiles', count: 3 },
        { name: 'Amphibians', count: 2 },
        { name: 'Others', count: 1 }
      ]
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleViewAdoptions = () => {
    navigate('/adoption');
  };

  return (
    <div className="category-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <button className="back-btn" onClick={() => navigate('/')}>
            <span className="back-icon">←</span>
            <span className="back-text">Back to Home</span>
          </button>
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Choose Your</span>
              <span className="title-highlight">Perfect Match</span>
            </h1>
            <p className="hero-subtitle">
              Discover amazing animals organized by category. Each one is waiting for a loving home like yours.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">84</span>
                <span className="stat-label">Total Animals</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Love Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <p className="section-subtitle">Click on any category to explore available animals</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={`category-card ${hoveredCategory === category.id ? 'hovered' : ''}`}
              onClick={() => handleCategoryClick(category)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              style={{ 
                '--category-color': category.color,
                '--category-bg': category.bgImage,
                '--animation-delay': `${index * 0.1}s`
              }}
            >
              <div className="card-background">
                <div className="bg-overlay"></div>
                <div className="bg-image" style={{ backgroundImage: `url(${category.bgImage})` }}></div>
              </div>
              
              <div className="card-content">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-count">
                    <span className="count-number">{category.count}</span>
                    <span className="count-label">available</span>
                  </div>
                </div>
                
                <div className="category-info">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  <div className="category-actions">
                    <button className="explore-btn">
                      <span>Explore</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Find Your New Best Friend?</h2>
          <p className="cta-subtitle">Browse all available animals or go back to home</p>
          <div className="cta-buttons">
            <button className="cta-btn primary" onClick={handleViewAdoptions}>
              <span className="btn-icon">🔍</span>
              <span>View All Adoptions</span>
            </button>
            <button className="cta-btn secondary" onClick={() => navigate('/')}>
              <span className="btn-icon">🏠</span>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              <span>×</span>
            </button>
            
            <div className="modal-header">
              <div className="modal-hero">
                <div 
                  className="modal-bg"
                  style={{ backgroundImage: `url(${selectedCategory.bgImage})` }}
                ></div>
                <div className="modal-bg-overlay"></div>
                <div className="modal-icon">{selectedCategory.icon}</div>
              </div>
              <div className="modal-info">
                <h2 className="modal-title">{selectedCategory.name}</h2>
                <p className="modal-description">{selectedCategory.description}</p>
                <div className="modal-count">
                  <span className="count-number">{selectedCategory.count}</span>
                  <span className="count-text">animals waiting for adoption</span>
                </div>
              </div>
            </div>
            
            <div className="modal-body">
              <h3 className="breeds-title">Available Breeds & Types</h3>
              <div className="breeds-grid">
                {selectedCategory.animals.map((animal, index) => (
                  <div key={index} className="breed-card">
                    <span className="breed-name">{animal.name}</span>
                    <span className="breed-count">{animal.count} available</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="modal-footer">
              <button 
                className="modal-adopt-btn"
                onClick={handleViewAdoptions}
              >
                <span className="btn-icon">❤️</span>
                <span>View {selectedCategory.name} Adoptions</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
