import React from 'react';
import './Feedback.css';

const testimonials = [
  {
    id: 1,
    name: 'ABHI.',
    feedback: 'Adopting Buddy was the best decision we ever made! The process was so smooth, and the staff were incredibly helpful. He has brought so much joy into our home.',
  },
  {
    id: 2,
    name: 'KIRAN.',
    feedback: 'I was so impressed with how much they care for the animals. Finding Luna was a dream come true. She is the sweetest cat and has settled in perfectly.',
  },
  {
    id: 3,
    name: 'NIRU',
    feedback: 'We are so grateful to PetAdopt for helping us find our furry friend, Rocky. The adoption process was straightforward and the team was very supportive.',
  },
  {
    id: 4,
    name: 'SHALS.',
    feedback: 'The volunteers are amazing and truly passionate about what they do. They helped me find the perfect companion in Daisy. Highly recommend them!',
  },
    {
    id: 5,
    name: 'RAKESH.',
    feedback: 'A wonderful experience from start to finish. Our new puppy, Max, is healthy, happy, and has already become a beloved member of our family.',
  }
];

const Feedback = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="feedback-section">
      <h2 className="feedback-title">Happy Tails from Our Adopters</h2>
      <div className="feedback-container">
        <div className="feedback-scroller">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div className="feedback-card" key={index}>
              <p className="feedback-text">"{testimonial.feedback}"</p>
              <div className="adopter-info">
                <span className="adopter-name">- {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact-section" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">We're here to help you on your adoption journey. Reach out to us with any questions!</p>
      <div className="contact-content-wrapper">
        <div className="contact-info-map">
          <div className="contact-details">
            <h3>Our Location & Hours</h3>
            <p>123 Animal Lover Lane<br/>Pawsburg, CA 94102</p>
            <p><strong>Email:</strong> contact@petadopt.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195754992453!2d-122.41941548468113!3d37.77492957975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f95d8e7f%3A0x1e27a1abe7a0a0b5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616000000000!5m2!1sen!2sus" 
              width="100%" 
              height="250" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Our Location">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedbackAndContact = () => {
  return (
    <>
      <Feedback />
      <Contact />
    </>
  );
};

export default FeedbackAndContact;