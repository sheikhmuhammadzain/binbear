import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FaTruck } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import { IoArrowBackOutline, IoCloseOutline } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';
import { GiCrownCoin } from 'react-icons/gi';
import ScheduleForm from '@/components/ScheduleForm';
import Link from 'next/link';

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
          <IoArrowBackOutline size={24} />
        </button>
        <div className="phone-number">
          <GiCrownCoin size={20} className="crown-icon" />
          <span>(888) 888-JUNK</span>
        </div>
        <button className="close-button" onClick={() => router.push('/')}>
          <IoCloseOutline size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="content-header">
          <h1 className="main-title">By Items or Pickup Truck Loads?</h1>
          <div className="location">
            <HiLocationMarker size={18} className="location-pin" /> 
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
                  <li>Appliance Disposal & Recycling</li>
                  <li>Electronics Disposal & Recycling</li>
                  <li>Mattress Disposal</li>
                  <li>Hot Tub Disposal</li>
                </ul>
              </div>
              <Link href="/register">
                <button className="action-button">
                  Add My Items
                </button>
              </Link>
            </div>
          </div>

          {/* Truck Loads Card */}
          <div className="card">
            <div className="card-inner">
              <div className="truck-illustration">
                <div className="small-trucks">
                  <div className="truck-row">
                    <BsTruck size={22} className="small-truck" />
                    <BsTruck size={22} className="small-truck" />
                    <BsTruck size={22} className="small-truck" />
                  </div>
                  <div className="truck-row">
                    <BsTruck size={22} className="small-truck" />
                    <BsTruck size={22} className="small-truck" />
                    <BsTruck size={22} className="small-truck" />
                  </div>
                </div>
                <div className="equals-sign">=</div>
                <FaTruck size={40} className="large-truck" />
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
              <Link href="/register">
                <button className="action-button">
                  By Pickup Truck Loads
                </button>
              </Link>
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
          background-color: #ffffff;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          color: #ffffff;
          background-color: #000000;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .back-button, .close-button {
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .phone-number {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: #ffffff;
        }

        .crown-icon {
          color: #FF7701;
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
          font-size: 1.75rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.875rem;
        }

        .location-pin {
          color: #FF7701;
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
          background: #ffffff;
          border: 1px solid #eee;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-inner {
          padding: 1.25rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding: 0.5rem;
        }

        .item-icon {
          font-size: 1.5rem;
          text-align: center;
        }

        .truck-illustration {
          margin-bottom: 1rem;
          padding: 0.5rem;
          text-align: center;
        }

        .small-trucks {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .truck-row {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
        }

        .small-truck {
          color: #FF7701;
        }

        .equals-sign {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          color: #333;
          text-align: center;
          font-weight: 500;
        }

        .large-truck {
          color: #FF7701;
          display: block;
          margin: 0 auto;
        }

        .card-title {
          color: #333;
          font-size: 1.25rem;
          text-align: center;
          margin: 0.75rem 0;
          font-weight: 600;
        }

        .recommended-section {
          flex: 1;
          margin: 0.75rem 0;
        }

        .recommended-section h3 {
          color: #333;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .recommended-section ul {
          list-style: none;
          padding: 0;
          color: #666;
        }

        .recommended-section li {
          margin-bottom: 0.5rem;
          font-size: 0.8125rem;
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .recommended-section li::before {
          content: "✓";
          color: #FF7701;
          font-weight: bold;
        }

        .action-button {
          background-color: #FF7701;
          color: white;
          border: none;
          padding: 0.625rem;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease;
          margin-top: auto;
        }

        .action-button:hover {
          background-color: #e66901;
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .cards-container {
            grid-template-columns: 1fr;
            max-width: 400px;
            gap: 1rem;
          }

          .content {
            padding: 1rem;
          }

          .main-title {
            font-size: 1.5rem;
          }

          .card-inner {
            padding: 1rem;
          }

          .icons-grid {
            gap: 0.5rem;
          }

          .item-icon {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ConstructionCleanup;