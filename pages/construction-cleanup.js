import React, { useState } from 'react';
import { useRouter } from "next/router";
import { FaTruck } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import { IoArrowBackOutline } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

function ConstructionCleanup() {
  const router = useRouter();

  return (
    <Layout>
      <div className="container">
        <div className="page-header">
          <button className="back-button" onClick={() => router.back()}>
            <IoArrowBackOutline size={20} /> Back
          </button>
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
              <Link href="/item-selection">
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
              <Link href="/truck-load-estimate">
                <button className="action-button">
                  By Pickup Truck Loads
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          min-height: calc(100vh - 350px);
        }

        .page-header {
          text-align: center;
          margin-bottom: 30px;
          position: relative;
        }

        .back-button {
          position: absolute;
          left: 0;
          top: 0;
          background: none;
          border: none;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 16px;
          padding: 5px;
        }

        .back-button:hover {
          color: #FF7701;
        }

        .main-title {
          font-size: 28px;
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          color: #666;
          font-size: 14px;
        }

        .location-pin {
          color: #FF7701;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          padding: 10px;
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
          height: 100%;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .card-inner {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 15px;
        }

        .item-icon {
          font-size: 24px;
          text-align: center;
        }

        .truck-illustration {
          margin-bottom: 15px;
          padding: 0.5rem;
          text-align: center;
        }

        .small-trucks {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .truck-row {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .small-truck {
          color: #FF7701;
        }

        .equals-sign {
          font-size: 18px;
          margin: 8px 0;
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
          font-size: 20px;
          text-align: center;
          margin: 10px 0;
          font-weight: 600;
        }

        .recommended-section {
          flex: 1;
          margin: 10px 0 20px;
        }

        .recommended-section h3 {
          color: #333;
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: 600;
        }

        .recommended-section ul {
          list-style: none;
          padding: 0;
          color: #666;
        }

        .recommended-section li {
          margin-bottom: 8px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
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
          padding: 10px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
          transition: all 0.2s ease;
          margin-top: auto;
        }

        .action-button:hover {
          background-color: #e66901;
        }

        @media (max-width: 768px) {
          .cards-container {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .main-title {
            font-size: 24px;
            margin-top: 30px;
          }

          .back-button {
            top: -25px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 15px 10px;
          }
          
          .card-inner {
            padding: 15px;
          }

          .icons-grid {
            gap: 8px;
          }

          .item-icon {
            font-size: 20px;
          }

          .card-title {
            font-size: 18px;
          }

          .recommended-section li {
            font-size: 13px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default ConstructionCleanup;