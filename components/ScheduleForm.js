import React, { useState } from 'react';

const ScheduleForm = ({ onClose, formType }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    address: '',
    email: '',
    phone: '',
    date: '',
    couponCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h1 className="form-title">Schedule Your Dumpster</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              required
            />
            
            <input
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              required
            />
          </div>

          <div className="form-grid">
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <select 
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          >
            <option value="">Select a Date</option>
            {/* Add date options dynamically */}
            <option value="tomorrow">Tomorrow</option>
            <option value="next-week">Next Week</option>
          </select>

          <input
            type="text"
            placeholder="Coupon Code"
            value={formData.couponCode}
            onChange={(e) => setFormData({...formData, couponCode: e.target.value})}
          />

          <button type="submit" className="next-button">Next</button>
        </form>

        <button className="back-button" onClick={onClose}>← Back</button>
      </div>

      <style jsx>{`
        .form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .form-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        input, select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        input::placeholder {
          color: #666;
        }

        select {
          background-color: white;
          cursor: pointer;
        }

        .next-button {
          width: 100%;
          padding: 1rem;
          background-color: #FF6B00;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 1rem;
        }

        .next-button:hover {
          background-color: #FF5500;
        }

        .back-button {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          background: #E5E5E5;
          color: #333;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        .back-button:hover {
          background: #D5D5D5;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-container {
            padding: 1.5rem;
            width: 95%;
          }

          .form-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ScheduleForm; 