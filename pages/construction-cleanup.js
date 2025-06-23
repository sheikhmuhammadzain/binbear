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
    <Layout hideBookNow={true}>
      <div className="container">
        <div className="page-header">
          <button className="back-button" onClick={() => router.back()}>
            <IoArrowBackOutline size={20} /> Back
          </button>
          <h1 className="main-title">By Items or Pickup Truck Loads?</h1>
          <div className="location">
            <HiLocationMarker size={18} className="location-pin" /> 
            <span>BinBear Macon (31217)</span>
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
          padding: 20px 15px;
          min-height: calc(100vh - 200px);
        }

        .page-header {
          text-align: center;
          margin-bottom: 25px;
          position: relative;
          padding: 0 15px;
        }

        .back-button {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          color: #FF7701;
          background: #fff;
          border-color: #FF7701;
        }

        .main-title {
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 600;
          color: #333;
          margin-bottom: 10px;
          line-height: 1.3;
          padding: 0 60px;
        }

        .location {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #666;
          font-size: 14px;
        }

        .location-pin {
          color: #FF7701;
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .card {
          background: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          min-height: 400px;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-color: #FF7701;
        }

        .card-inner {
          padding: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .icons-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 10px;
          height: auto;
          min-height: 80px;
          align-items: center;
        }

        .item-icon {
          font-size: clamp(20px, 3vw, 26px);
          text-align: center;
          line-height: 1;
        }

        .truck-illustration {
          margin-bottom: 10px;
          padding: 15px;
          text-align: center;
          height: auto;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .small-trucks {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 10px;
        }

        .truck-row {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .small-truck {
          color: #FF7701;
          font-size: clamp(18px, 2.5vw, 22px);
        }

        .equals-sign {
          font-size: clamp(14px, 2vw, 18px);
          margin: 6px 0;
          color: #333;
          text-align: center;
          font-weight: 600;
        }

        .large-truck {
          color: #FF7701;
          display: block;
          margin: 0 auto;
          font-size: clamp(32px, 4vw, 40px);
        }

        .card-title {
          color: #333;
          font-size: clamp(16px, 2.5vw, 20px);
          text-align: center;
          margin: 0;
          font-weight: 700;
          line-height: 1.3;
        }

        .recommended-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recommended-section h3 {
          color: #333;
          margin: 0;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
        }

        .recommended-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .recommended-section li {
          color: #555;
          position: relative;
          padding-left: 22px;
          line-height: 1.4;
          font-size: clamp(13px, 1.8vw, 15px);
        }

        .recommended-section li:before {
          content: "✓";
          color: #FF7701;
          position: absolute;
          left: 0;
          top: 0;
          font-weight: bold;
          font-size: 14px;
        }

        .action-button {
          background: linear-gradient(135deg, #FF7701, #e66901);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px 20px;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          margin-top: auto;
          height: auto;
          min-height: 44px;
          box-shadow: 0 2px 8px rgba(255, 119, 1, 0.3);
        }

        .action-button:hover {
          background: linear-gradient(135deg, #e66901, #cc5a01);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 119, 1, 0.4);
        }

        /* Tablet landscape and smaller desktops */
        @media (max-width: 1024px) {
          .cards-container {
            gap: 15px;
            max-width: 700px;
          }
          
          .card {
            min-height: 350px;
          }
        }

        /* Tablet portrait */
        @media (max-width: 768px) {
          .container {
            padding: 15px 10px;
          }
          
          .page-header {
            margin-bottom: 20px;
            padding: 0 10px;
          }
          
          .main-title {
            padding: 0 50px;
          }
          
          .back-button {
            position: relative;
            top: auto;
            transform: none;
            margin-bottom: 15px;
            align-self: flex-start;
          }
          
          .cards-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .card {
            min-height: 320px;
          }
          
          .card-inner {
            padding: 18px;
            gap: 12px;
          }
        }

        /* Mobile landscape and smaller */
        @media (max-width: 640px) {
          .main-title {
            padding: 0 40px;
          }
          
          .card {
            min-height: 300px;
          }
          
          .icons-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            min-height: 60px;
          }
          
          .truck-illustration {
            min-height: 60px;
            padding: 10px;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .container {
            padding: 15px 8px;
          }
          
          .page-header {
            padding: 0 8px;
            margin-bottom: 15px;
          }
          
          .main-title {
            padding: 0 30px;
          }
          
          .back-button {
            font-size: 13px;
            padding: 6px 10px;
            gap: 6px;
          }
          
          .card {
            min-height: 280px;
          }
          
          .card-inner {
            padding: 15px;
            gap: 10px;
          }

          .icons-grid {
            gap: 6px;
            min-height: 50px;
          }
          
          .truck-illustration {
            min-height: 50px;
            padding: 8px;
          }
          
          .truck-row {
            gap: 8px;
          }
          
          .action-button {
            min-height: 40px;
            padding: 10px 16px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .main-title {
            padding: 0 20px;
          }
          
          .card-inner {
            padding: 12px;
          }
          
          .icons-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default ConstructionCleanup;