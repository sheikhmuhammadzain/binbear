import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{message}</p>
      
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          width: 100%;
        }
        
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #FF7701;
          animation: spin 1s ease infinite;
          margin-bottom: 15px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        p {
          color: #666;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner; 