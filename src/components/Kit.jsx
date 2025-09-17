import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Kit.css';

const kitProducts = [
  {
    id: 1,
    name: 'Puppy Starter Kit',
    description: 'All the essential nutrition for a growing puppy. Includes high-protein kibble, soft training treats, and a chew toy.',
    image: '/images/kit1.jpg',
    price: '$49.99'
  },
  {
    id: 2,
    name: 'Kitten Essentials Pack',
    description: 'A perfect start for your new kitten. Features grain-free food, a feather wand, and a cozy blanket.',
    image: '/images/kit2.jpg',
    price: '$45.99'
  },
  {
    id: 3,
    name: 'Adult Dog Wellness Kit',
    description: 'Maintain your dog\'s health with this balanced kit. Comes with premium kibble, dental chews, and joint support supplements.',
    image: '/images/kit3.jpg',
    price: '$59.99'
  },
  {
    id: 4,
    name: 'Senior Cat Care Package',
    description: 'Specially formulated for older cats. Includes soft, easy-to-digest food, a heated bed, and mobility supplements.',
    image: '/images/kit4.jpg',
    price: '$64.99'
  },
  {
    id: 5,
    name: 'Small Animal Starter Kit',
    description: 'Perfect for rabbits or guinea pigs. Contains high-fiber hay, fortified pellets, and a fun chewable activity log.',
    image: '/images/kit5.jpg',
    price: '$39.99'
  },
  {
    id: 6,
    name: 'Exotic Bird Feed Box',
    description: 'A gourmet selection for your feathered friend. Includes a mix of seeds, nuts, and dried fruits to keep them happy and healthy.',
    image: '/images/kit6.jpg',
    price: '$35.99'
  }
];

const Kit = ({ addToCart, cartCount }) => {
  const navigate = useNavigate();
  return (
    <div className="kit-container">
      <header className="kit-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
        <h1>Adoption Kits & Food</h1>
        <p>Everything you need to welcome your new friend home.</p>
                <button className="cart-icon-btn" onClick={() => navigate('/cart')}>
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </header>
      <main className="kit-grid">
        {kitProducts.map(product => (
          <div className="kit-card" key={product.id}>
            <img src={product.image} alt={product.name} className="kit-image" />
            <div className="kit-card-content">
              <h3 className="kit-name">{product.name}</h3>
              <p className="kit-description">{product.description}</p>
              <div className="kit-card-footer">
                <span className="kit-price">{product.price}</span>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                <button className="contact-btn" onClick={() => navigate('/feedback#contact-section')}>Contact</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Kit;