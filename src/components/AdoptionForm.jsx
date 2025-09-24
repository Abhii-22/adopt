import React, { useState } from 'react';
import './AdoptionForm.css';

const AdoptionForm = ({ animal, onClose }) => {
  const [formData, setFormData] = useState({
    animalName: animal.name,
    vaccinated: animal.vaccinated ? 'Yes' : 'No',
    price: animal.price,
    phone: '',
    email: '',
    paymentMethod: 'cash'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Adoption form submitted:', formData);
    alert('Thank you for your adoption request!');
    onClose();
  };

  return (
    <div className="adoption-form-modal-overlay" onClick={onClose}>
      <div className="adoption-form-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="animal-image-container">
          <img src={animal.image} alt={animal.name} className="animal-form-image" />
        </div>
        <div className="form-fields-container">
          <h2>Adoption Form for {animal.name}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <span className="icon">🐾</span>
              <label>Animal Name</label>
              <input type="text" name="animalName" value={formData.animalName} readOnly />
            </div>
            <div className="form-group">
              <span className="icon">💉</span>
              <label>Vaccinated</label>
              <input type="text" name="vaccinated" value={formData.vaccinated} readOnly />
            </div>
            <div className="form-group">
              <span className="icon">₹</span>
              <label>Adoption Fee</label>
              <input type="text" name="price" value={`₹${formData.price}`} readOnly />
            </div>
            <div className="form-group">
              <span className="icon">📱</span>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <span className="icon">✉️</span>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleChange} />
                  Cash on Delivery
                </label>
                <label>
                  <input type="radio" name="paymentMethod" value="online" checked={formData.paymentMethod === 'online'} onChange={handleChange} />
                  Online Payment
                </label>
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;
