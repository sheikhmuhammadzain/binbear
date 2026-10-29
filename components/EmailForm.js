import React, { useState } from 'react';

const EmailForm = ({ onEmailSubmit, onBack, cityName }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email address is required.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Valid email, proceed with submission
    onEmailSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <div className="success-message">
        <p className="success-headline">
          Great news! We service your area{cityName ? ` in ${cityName}` : ''}.
        </p>
        <p className="success-subtitle">
          Please enter your email to continue.
        </p>
      </div>

      <label htmlFor="email" className="form-label text-left">
        Your Email Address
      </label>

      <div className="email-input-container">
        <input
          type="email"
          id="email"
          placeholder="email@example.com"
          value={email}
          onChange={handleEmailChange}
          className={error ? "error-input" : ""}
        />
        
        {error && (
          <p className="error-message">{error}</p>
        )}

        <div className="button-group">
          <button
            type="submit"
            className="continue-btn"
          >
            Continue
          </button>
          <button
            type="button"
            onClick={onBack}
            className="back-btn"
          >
            Back
          </button>
        </div>

        <p className="privacy-note">
          We respect your privacy and will only use your email to contact you about our services.
        </p>
      </div>

      <style jsx>{`
        .email-form {
          max-width: 450px;
          margin: 0 auto;
          text-align: center;
        }
        
        .success-message {
          margin-bottom: 20px;
          text-align: center;
        }
        
        .success-headline {
          color: green;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
        }
        
        .success-subtitle {
          color: #555;
          margin-top: 0;
        }
        
        .form-label {
          display: block;
          margin-bottom: 15px;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
        }
        
        .email-input-container {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .email-input-container input {
          width: 100%;
          padding: 12px 15px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          height: 50px;
        }
        
        .error-input {
          border: 1px solid #ff4d4f !important;
        }
        
        .error-message {
          margin: 0;
          font-size: 14px;
          color: #ff4d4f;
          text-align: left;
        }
        
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 10px;
        }
        
        .back-btn {
          height: 50px;
          padding: 12px 15px;
          background-color: #f5f5f5;
          color: #333;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          font-weight: 500;
        }
        
        .continue-btn {
          height: 50px;
          padding: 12px 15px;
          background-color: #FF7F00;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
          font-weight: bold;
        }
        
        .privacy-note {
          font-size: 12px;
          color: #666;
          margin-top: 15px;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .back-btn, .continue-btn {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default EmailForm; 