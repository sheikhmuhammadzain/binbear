import React, { useState } from 'react';
import { verifyZipCode } from '@/util/locationApi';

const ZipCodeForm = ({ onZipValidated }) => {
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleZipChange = (e) => {
    setZipCode(e.target.value);
    
    // Clear message when typing
    if (message) {
      setMessage('');
      setMessageType('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!zipCode) {
      setMessage('Please enter your ZIP code.');
      setMessageType('error');
      return;
    }

    if (zipCode.length !== 5 || isNaN(zipCode)) {
      setMessage('Please enter a valid 5-digit ZIP code.');
      setMessageType('error');
      return;
    }

    setLoading(true);

    try {
      const zipInfo = await verifyZipCode(zipCode);
      
      if (zipInfo) {
        setMessage(`Good news! We've got you covered in ${zipInfo.city_name}.`);
        setMessageType('success');
        
        // Call the callback with the validated information
        onZipValidated({
          zipCode,
          cityName: zipInfo.city_name
        });
      } else {
        setMessage('Sorry, we don\'t service this area yet. Please try another ZIP code.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error checking ZIP code:', error);
      setMessage('An error occurred while checking your ZIP code. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="zip-code-form">
      <label htmlFor="zip-code" className="form-label">
        Enter Your ZIP Code
      </label>
      
      <div className="input-group">
        <input
          type="text"
          id="zip-code"
          value={zipCode}
          onChange={handleZipChange}
          placeholder="ZIP Code"
          maxLength={5}
          disabled={loading}
          className="zip-input"
        />
        <button 
          type="submit" 
          disabled={loading}
          className={`submit-btn ${loading ? 'loading' : ''}`}
        >
          {loading ? 'Checking...' : 'Check Coverage'}
        </button>
      </div>
      
      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}
      
      <style jsx>{`
        .zip-code-form {
          max-width: 450px;
          margin: 0 auto;
          text-align: center;
        }
        
        .form-label {
          display: block;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;
        }
        
        .input-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .zip-input {
          flex: 1;
          min-width: 200px;
          padding: 12px 15px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 50px;
        }
        
        .submit-btn {
          height: 50px;
          padding: 12px 20px;
          background-color: #FF7F00;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          min-width: 150px;
          transition: background-color 0.3s ease;
        }
        
        .submit-btn:hover {
          background-color: #E67300;
        }
        
        .submit-btn.loading, 
        .submit-btn:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        
        .message {
          margin-top: 20px;
          padding: 10px;
          border-radius: 4px;
          font-size: 15px;
        }
        
        .message.success {
          background-color: rgba(0, 128, 0, 0.1);
          color: green;
          border-left: 4px solid green;
        }
        
        .message.error {
          background-color: rgba(255, 0, 0, 0.1);
          color: #d32f2f;
          border-left: 4px solid #d32f2f;
        }
        
        @media (max-width: 768px) {
          .input-group {
            flex-direction: column;
          }
          
          .zip-input, 
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default ZipCodeForm; 