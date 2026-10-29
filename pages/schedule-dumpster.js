import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from "@/components/layout/Layout";

export default function ScheduleDumpster() {
  const router = useRouter();
  const [rentalData, setRentalData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Retrieve the rental data from localStorage
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('dumpsterRental');
      if (storedData) {
        setRentalData(JSON.parse(storedData));
      } else {
        // If no rental data, redirect back to dumpster rental page
        router.push('/dumpster-rental');
      }
    }
  }, [router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you'd make an API call here
      console.log('Form submitted:', { ...formData, rentalData });
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear localStorage after successful submission
      localStorage.removeItem('dumpsterRental');
      
      // Redirect to confirmation page after a delay
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }, 1500);
  };

  // Get size label based on selected size
  const getSizeLabel = (sizeId) => {
    const sizes = {
      'small': 'Small (10 yard)',
      'medium': 'Medium (20 yard)',
      'large': 'Large (30 yard)'
    };
    return sizes[sizeId] || sizeId;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Layout>
      <div className="schedule-container">
        <h1 className="page-title">Schedule Your Dumpster</h1>
        <p className="page-description">Enter your information to complete your dumpster rental request</p>
        
        {isSubmitted ? (
          <div className="success-message">
            <div className="check-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your dumpster rental request has been successfully submitted.</p>
            <p>We'll contact you shortly to confirm your reservation.</p>
            <p>Redirecting you to the homepage...</p>
          </div>
        ) : (
          <div className="form-and-summary">
            {/* Order Summary */}
            {rentalData && (
              <div className="order-summary">
                <h2>Order Summary</h2>
                <div className="summary-content">
                  <div className="summary-item">
                    <span className="label">Dumpster Size:</span>
                    <span className="value">{getSizeLabel(rentalData.size)}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Service Date:</span>
                    <span className="value">{formatDate(rentalData.date)}</span>
                  </div>
                  <div className="summary-item">
                    <span className="label">Service Type:</span>
                    <span className="value">{rentalData.serviceType === 'dropoff' ? 'Drop-off' : 'Pick-up'}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Contact Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name*</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <h2>Service Address</h2>
              
              <div className="form-group full-width">
                <label htmlFor="address">Street Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City*</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State*</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code*</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="specialInstructions">Special Instructions (Optional)</label>
                <textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  rows="4"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="button-container">
                <button 
                  type="button" 
                  className="back-button" 
                  onClick={() => router.back()}
                  disabled={isSubmitting}
                >
                  ← Back
                </button>
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Order'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .schedule-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .page-title {
          text-align: center;
          color: #333;
          margin-bottom: 16px;
          font-size: 32px;
        }
        
        .page-description {
          text-align: center;
          color: #666;
          margin-bottom: 40px;
          font-size: 18px;
        }
        
        .form-and-summary {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 30px;
        }
        
        .order-summary {
          background-color: #f8f8f8;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          align-self: flex-start;
          position: sticky;
          top: 20px;
        }
        
        .order-summary h2 {
          margin-bottom: 20px;
          color: #333;
          font-size: 22px;
          padding-bottom: 10px;
          border-bottom: 2px solid #FF7701;
        }
        
        .summary-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .summary-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .summary-item .label {
          font-weight: 500;
          color: #555;
        }
        
        .summary-item .value {
          color: #333;
          font-weight: 600;
        }
        
        .contact-form {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .contact-form h2 {
          margin-bottom: 20px;
          color: #333;
          font-size: 22px;
          padding-bottom: 10px;
          border-bottom: 2px solid #FF7701;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group.full-width {
          grid-column: 1 / -1;
        }
        
        label {
          display: block;
          margin-bottom: 8px;
          color: #444;
          font-weight: 500;
        }
        
        input, textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
          color: #333;
          transition: border-color 0.3s ease;
        }
        
        input:focus, textarea:focus {
          border-color: #FF7701;
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 119, 1, 0.1);
        }
        
        textarea {
          resize: vertical;
        }
        
        .button-container {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }
        
        .back-button, .submit-button {
          padding: 12px 24px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .back-button {
          color: #333;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
        }
        
        .back-button:hover:not(:disabled) {
          background-color: #e9e9e9;
        }
        
        .submit-button {
          background-color: #FF7701;
          color: white;
          border: none;
          padding: 12px 30px;
        }
        
        .submit-button:hover:not(:disabled) {
          background-color: #e66901;
        }
        
        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .success-message {
          background-color: #f8fff8;
          border: 1px solid #d4f5d4;
          border-radius: 8px;
          padding: 40px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .check-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background-color: #4CAF50;
          color: white;
          font-size: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .success-message h2 {
          color: #333;
          font-size: 28px;
          margin-bottom: 15px;
        }
        
        .success-message p {
          color: #666;
          margin-bottom: 10px;
          font-size: 16px;
        }
        
        @media (max-width: 768px) {
          .form-and-summary {
            grid-template-columns: 1fr;
          }
          
          .order-summary {
            position: static;
          }
        }
      `}</style>
    </Layout>
  );
} 