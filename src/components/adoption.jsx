import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adoption.css';
import AdoptionForm from './AdoptionForm';
import ShelterModal from './ShelterModal';

export const animals = [
  {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '3-4 years',
    gender: 'Male',
    size: 'Large',
    location: 'New York',
    image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'dog',
    description: 'Friendly and energetic dog who loves playing fetch and going for walks.',
    vaccinated: true,
    neutered: true,
    price: 50,
    phone: '123-456-7890'
  },
  {
    id: 2,
    name: 'Luna',
    breed: 'Golden Retriever',
    age: '4-5 years',
    gender: 'Female',
    size: 'Large',
    location: 'California',
    image: 'https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'dog',
    description: 'Calm and gentle dog perfect for families with children.',
    vaccinated: true,
    neutered: true,
    price: 60,
    phone: '123-456-7891'
  },
  {
    id: 3,
    name: 'Whiskers',
    breed: 'Persian',
    age: '2-3 years',
    gender: 'Male',
    size: 'Medium',
    location: 'Texas',
    image: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'cat',
    description: 'Independent cat who enjoys quiet spaces and gentle pets.',
    vaccinated: true,
    neutered: true,
    price: 40,
    phone: '123-456-7892'
  },
  {
    id: 4,
    name: 'Bella',
    breed: 'Holstein',
    age: '5-6 years',
    gender: 'Female',
    size: 'Large',
    location: 'Wisconsin',
    image: 'https://images.pexels.com/photos/1824353/pexels-photo-1824353.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'cow',
    description: 'Gentle cow perfect for farm life and pasture grazing.',
    vaccinated: true,
    neutered: false,
    price: 150,
    phone: '123-456-7893'
  },
  {
    id: 5,
    name: 'Cotton',
    breed: 'Dutch',
    age: '1-2 years',
    gender: 'Female',
    size: 'Small',
    location: 'Oregon',
    image: 'https://images.pexels.com/photos/458976/pexels-photo-458976.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'rabbit',
    description: 'Playful rabbit who loves fresh vegetables and hopping around.',
    vaccinated: true,
    neutered: true,
    price: 30,
    phone: '123-456-7894'
  },
  {
    id: 6,
    name: 'Billy',
    breed: 'Boer',
    age: '2-3 years',
    gender: 'Male',
    size: 'Medium',
    location: 'Montana',
    image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'farm',
    description: 'Energetic goat who loves climbing and exploring new areas.',
    vaccinated: true,
    neutered: true,
    price: 75,
    phone: '123-456-7895'
  },
  {
    id: 7,
    name: 'Polly',
    breed: 'Macaw',
    age: '5 years',
    gender: 'Female',
    size: 'Small',
    location: 'Florida',
    image: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'bird',
    description: 'A colorful and talkative parrot who loves attention.',
    vaccinated: true,
    neutered: false,
    price: 120,
    phone: '123-456-7896'
  },
  {
    id: 8,
    name: 'Oink',
    breed: 'Pot-bellied pig',
    age: '2 years',
    gender: 'Male',
    size: 'Medium',
    location: 'Iowa',
    image: 'https://images.pexels.com/photos/1416833/pexels-photo-1416833.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    type: 'farm',
    description: 'A very smart and clean pig who loves belly rubs.',
    vaccinated: true,
    neutered: true,
    price: 90,
    phone: '123-456-7897'
  }
];

const Adoption = () => {
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [showShelterModal, setShowShelterModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || animal.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleAdoptClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  const handleShowAdoptionForm = () => {
    setShowAdoptionForm(true);
  };

  const handleCloseAdoptionForm = () => {
    setShowAdoptionForm(false);
    setSelectedAnimal(null);
  };

  const handleShowShelterModal = () => {
    setShowShelterModal(true);
  };

  const handleCloseShelterModal = () => {
    setShowShelterModal(false);
  };

  return (
    <div className="adoption-container">
      {/* Header */}
      <div className="header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <span className="back-icon">←</span>
          <span className="back-text">Back to Home</span>
        </button>
        
      </div>

      {/* Search and Filter Bar */}
      <div className="search-filter-bar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filterType === 'dog' ? 'active' : ''}`}
            onClick={() => setFilterType('dog')}
          >
            Dogs
          </button>
          <button 
            className={`filter-btn ${filterType === 'cat' ? 'active' : ''}`}
            onClick={() => setFilterType('cat')}
          >
            Cats
          </button>
          <button 
            className={`filter-btn ${filterType === 'farm' ? 'active' : ''}`}
            onClick={() => setFilterType('farm')}
          >
            Farm
          </button>
          <button 
            className={`filter-btn ${filterType === 'bird' ? 'active' : ''}`}
            onClick={() => setFilterType('bird')}
          >
            Birds
          </button>
        </div>
      </div>

      {/* Animals Grid */}
      <div className="animals-grid">
        {filteredAnimals.map((animal) => (
          <div key={animal.id} className="adoption-card">
            <div className="card-header">
              <div className="animal-badge">{animal.type.toUpperCase()}</div>
              <div className="animal-status">
                {animal.vaccinated && <span className="status-icon">💉</span>}
                {animal.neutered && <span className="status-icon">✓</span>}
              </div>
            </div>
            
            <div className="animal-image">
              <img src={animal.image} alt={animal.name} />
              <div className="image-overlay">
                <button className="quick-view-btn" onClick={() => handleAdoptClick(animal)}>
                  Quick View
                </button>
              </div>
            </div>
            
            <div className="animal-info">
              <div className="animal-details">
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-breed">{animal.breed}</p>
                <div className="animal-meta">
                  <span className="meta-item">📍 {animal.location}</span>
                  <span className="meta-item">👤 {animal.gender}</span>
                  <span className="meta-item">📏 {animal.size}</span>
                </div>
                <p className="animal-age">{animal.age}</p>
                <p className="animal-description">{animal.description}</p>
                <p className="animal-price">Adoption Fee: ₹{animal.price}</p>
              </div>
              <button className="adopt-btn" onClick={() => handleAdoptClick(animal)}>
                <span className="btn-icon">❤️</span>
                Adopt Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAnimal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <div className="modal-header">
              <img src={selectedAnimal.image} alt={selectedAnimal.name} className="modal-image" />
              <div className="modal-info">
                <h2>{selectedAnimal.name}</h2>
                <p className="modal-breed">{selectedAnimal.breed}</p>
                <div className="modal-meta">
                  <span>📍 {selectedAnimal.location}</span>
                  <span>👤 {selectedAnimal.gender}</span>
                  <span>📏 {selectedAnimal.size}</span>
                  <span>🎂 {selectedAnimal.age}</span>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <h3>About {selectedAnimal.name}</h3>
              <p>{selectedAnimal.description}</p>
              <div className="modal-features">
                <div className="feature-item">
                  <span className="feature-icon">💉</span>
                  <span>{selectedAnimal.vaccinated ? 'Vaccinated' : 'Not Vaccinated'}</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span>{selectedAnimal.neutered ? 'Neutered/Spayed' : 'Not Neutered/Spayed'}</span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-adopt-btn" onClick={handleShowAdoptionForm}>
                <span className="btn-icon">❤️</span>
                Adopt {selectedAnimal.name}
              </button>
              <button className="modal-contact-btn" onClick={handleShowShelterModal}>Contact Shelter</button>
            </div>
          </div>
        </div>
      )}

      {showAdoptionForm && selectedAnimal && (
        <AdoptionForm animal={selectedAnimal} onClose={handleCloseAdoptionForm} />
      )}

      {showShelterModal && selectedAnimal && (
        <ShelterModal animal={selectedAnimal} onClose={handleCloseShelterModal} />
      )}
    </div>
  );
};

export default Adoption;
