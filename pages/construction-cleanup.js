import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FaTruck } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import { IoArrowBackOutline, IoCloseOutline } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';
import { GiCrownCoin } from 'react-icons/gi';
import ScheduleForm from '@/components/ScheduleForm';

function ConstructionCleanup() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  const handleButtonClick = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="modal-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={() => router.back()}>
          <IoArrowBackOutline />
        </button>
        <div className="phone-number">
          <GiCrownCoin className="crown-icon" />
          <span>(888) 888-JUNK</span>
        </div>
        <button className="close-button" onClick={() => router.push('/')}>
          <IoCloseOutline />
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="content-header">
          <h1 className="main-title">By Items or Pickup Truck Loads?</h1>
          <div className="location">
            <HiLocationMarker className="location-pin" /> 
            <span>Junk King Macon (31217)</span>
          </div>
        </div>
        
        <div className="cards-container">
          {/* Items Card */}
          <div className="card">
            <div className="card-inner">
              <div className="icons-grid">
                <div className="item-icon">🪑</div>
                <div className="item-icon">📺</div>
                <div className="item-icon">🛋️</div>
                <div className="item-icon">🚲</div>
                <div className="item-icon">🏠</div>
                <div className="item-icon">🛁</div>
              </div>
              <h2 className="card-title">Add My Items</h2>
              <div className="recommended-section">
                <h3>Recommended for</h3>
                <ul>
                  <li>Furniture Removal</li>
                  <li>Appliance Disposal &amp; Recycling</li>
                  <li>Electronics Disposal &amp; Recycling</li>
                  <li>Mattress Disposal</li>
                  <li>Hot Tub Disposal</li>
                </ul>
              </div>
              <button 
                className="action-button"
                onClick={() => handleButtonClick('items')}
              >
                Add My Items
              </button>
            </div>
          </div>

          {/* Truck Loads Card */}
          <div className="card">
            <div className="card-inner">
              <div className="truck-illustration">
                <div className="small-trucks">
                  <div className="truck-row">
                    <BsTruck className="small-truck red" />
                    <BsTruck className="small-truck red" />
                    <BsTruck className="small-truck gold" />
                  </div>
                  <div className="truck-row">
                    <BsTruck className="small-truck gold" />
                    <BsTruck className="small-truck gold" />
                    <BsTruck className="small-truck gold" />
                  </div>
                </div>
                <div className="equals-sign">=</div>
                <FaTruck className="large-truck" />
              </div>
              <h2 className="card-title">By Pickup Truck Loads</h2>
              <div className="recommended-section">
                <h3>Recommended for:</h3>
                <ul>
                  <li>Yard Waste Removal</li>
                  <li>Construction Waste Removal</li>
                  <li>Foreclosure Clean Outs</li>
                  <li>Trash/Garbage Removal</li>
                  <li>Garage Clean Outs</li>
                </ul>
              </div>
              <button 
                className="action-button"
                onClick={() => handleButtonClick('truckload')}
              >
                By Pickup Truck Loads
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <ScheduleForm 
          onClose={() => setShowForm(false)}
          formType={formType}
        />
      )}

      <style jsx>{`
        .modal-container {
          background-color: #EE1133;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          color: white;
          background-color: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .back-button, .close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .back-button:hover, .close-button:hover {
          transform: scale(1.1);
        }

        .phone-number {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .crown-icon {
          font-size: 1.875rem;
          color: #FFD700;
        }

        .content {
          flex: 1;
          padding: 1.5rem 1rem;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }

        .content-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.75rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: white;
          font-size: 1.125rem;
        }

        .location-pin {
          font-size: 1.25rem;
          color: #FFD700;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 0.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .card {
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
        }

        .card-inner {
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .item-icon {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          background-color: #f8f9fa;
          border-radius: 0.5rem;
          transition: transform 0.2s ease;
        }

        .item-icon:hover {
          transform: scale(1.1);
        }

        .truck-illustration {
          margin-bottom: 1.5rem;
          padding: 0.5rem;
        }

        .small-trucks {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .truck-row {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
        }

        .small-truck {
          font-size: 2.5rem;
          transition: transform 0.2s ease;
        }

        .small-truck:hover {
          transform: scale(1.1);
        }

        .small-truck.red {
          color: #EE1133;
        }

        .small-truck.gold {
          color: #FFD700;
        }

        .equals-sign {
          font-size: 1.75rem;
          margin: 0.75rem 0;
          color: #333;
          text-align: center;
          font-weight: bold;
        }

        .large-truck {
          font-size: 6rem;
          color: #FFD700;
          display: block;
          margin: 0 auto;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        }

        .card-title {
          color: #EE1133;
          font-size: 1.75rem;
          text-align: center;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .recommended-section {
          flex: 1;
          margin: 1rem 0;
        }

        .recommended-section h3 {
          color: #333;
          margin-bottom: 0.75rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .recommended-section ul {
          list-style: none;
          padding: 0;
          color: #666;
        }

        .recommended-section li {
          margin-bottom: 0.5rem;
          font-size: 0.9375rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .recommended-section li::before {
          content: "✓";
          color: #4CAF50;
          font-weight: bold;
        }

        .action-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 0.875rem;
          border-radius: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .action-button:hover {
          background-color: #45a049;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        @media (max-width: 900px) {
          .cards-container {
            grid-template-columns: 1fr;
            max-width: 450px;
          }

          .main-title {
            font-size: 2rem;
          }

          .card-inner {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 0.75rem;
          }

          .crown-icon {
            font-size: 1.5rem;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .cards-container {
            padding: 0.25rem;
            gap: 1rem;
          }

          .item-icon {
            font-size: 1.5rem;
          }

          .small-truck {
            font-size: 2rem;
          }

          .large-truck {
            font-size: 4rem;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .recommended-section li {
            font-size: 0.875rem;
          }

          .action-button {
            font-size: 1rem;
            padding: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ConstructionCleanup; 