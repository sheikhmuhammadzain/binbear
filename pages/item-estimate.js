// components/JunkRemovalBooking.jsx
import { useState } from 'react';
import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function JunkRemovalBooking() {
  const [estimate, setEstimate] = useState(40.00);
  const [items, setItems] = useState({
    diningTable: 1,
    coffeeTable: 0,
    endTable: 0,
    dresser: 0,
    dishwasher: 0,
    microwave: 0
  });

  const handleItemChange = (item, change) => {
    const newCount = Math.max(0, items[item] + change);
    setItems({ ...items, [item]: newCount });
    
    // In a real app, you would calculate the estimate based on the items
    // This is just a simple example
    calculateEstimate();
  };

  const calculateEstimate = () => {
    // Simple calculation logic - would be more complex in a real app
    const basePrice = 40.00;
    setEstimate(basePrice);
  };

  const clearItems = () => {
    setItems({
      diningTable: 0,
      coffeeTable: 0,
      endTable: 0,
      dresser: 0,
      dishwasher: 0,
      microwave: 0
    });
    setEstimate(0);
  };

  return (
    <Layout>
      <div className="item-estimate-container">
        <main className="main-content">
          <div className="header">
            <Link href="/booking" className="back-button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="back-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </Link>
            <h1 className="page-title">Add Your Items</h1>
            <div className="location-indicator">
              <div className="location-dot"></div>
              <span>BinBear Junk Removal</span>
            </div>
          </div>

          <div className="divider"></div>

          {/* Estimate Display */}
          <div className="estimate-display">
            <div className="estimate-amount">
              <span>Your Estimate: ${estimate.toFixed(2)}</span>
            </div>
            <button onClick={clearItems} className="clear-button">
              Clear Items
            </button>
          </div>

          {/* Items Selection */}
          <div className="items-container">
            {/* Tables & Dressers Category */}
            <div className="category-box">
              <div className="item-row">
                <span>Dresser</span>
                <div className="quantity-controls">
                  <button onClick={() => handleItemChange('dresser', -1)} className="quantity-btn">-</button>
                  <span className="quantity-display">{items.dresser}</span>
                  <button onClick={() => handleItemChange('dresser', 1)} className="quantity-btn">+</button>
                </div>
              </div>
            </div>

            {/* Appliances */}
            <div className="category-box">
              <div className="item-row">
                <span>Dishwasher</span>
                <div className="quantity-controls">
                  <button onClick={() => handleItemChange('dishwasher', -1)} className="quantity-btn">-</button>
                  <span className="quantity-display">{items.dishwasher}</span>
                  <button onClick={() => handleItemChange('dishwasher', 1)} className="quantity-btn">+</button>
                </div>
              </div>

              <div className="item-row">
                <span>Microwave</span>
                <div className="quantity-controls">
                  <button onClick={() => handleItemChange('microwave', -1)} className="quantity-btn">-</button>
                  <span className="quantity-display">{items.microwave}</span>
                  <button onClick={() => handleItemChange('microwave', 1)} className="quantity-btn">+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="bottom-cta">
            <button className="book-now-btn">
              Book Now & Save $20!*
            </button>
            <p className="discount-note">
              * Online booking discount applied at checkout.
            </p>
          </div>
        </main>

        <style jsx>{`
          .item-estimate-container {
            min-height: calc(100vh - 160px); /* Adjust based on header/footer height */
            background: white;
            position: relative;
            padding-bottom: 120px; /* Space for the fixed bottom CTA */
          }

          .main-content {
            max-width: 56rem;
            margin: 0 auto;
            padding: 1rem;
          }

          .header {
            padding: 1rem 0;
            display: flex;
            align-items: center;
          }

          .back-button {
            color: #FF7701;
            text-decoration: none;
          }

          .back-icon {
            width: 2rem;
            height: 2rem;
          }

          .page-title {
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            flex: 1;
          }

          .location-indicator {
            display: flex;
            align-items: center;
          }

          .location-dot {
            width: 0.75rem;
            height: 0.75rem;
            background: #ec4899;
            border-radius: 50%;
            margin-right: 0.5rem;
          }

          .divider {
            border-top: 1px solid #e5e7eb;
            margin: 1rem 0;
          }

          .estimate-display {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 0.375rem;
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .estimate-amount {
            font-size: 1.25rem;
            font-weight: 500;
          }

          .clear-button {
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            padding: 0.5rem 1rem;
            color: #4b5563;
            background: white;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .clear-button:hover {
            background: #f3f4f6;
          }

          .items-container {
            margin-bottom: 1.5rem;
          }

          .category-box {
            border: 1px solid #e5e7eb;
            border-radius: 0.375rem;
            margin-bottom: 1rem;
            background: white;
          }

          .item-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid #e5e7eb;
          }

          .item-row:last-child {
            border-bottom: none;
          }

          .quantity-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .quantity-btn {
            width: 2rem;
            height: 2rem;
            border: 1px solid #d1d5db;
            border-radius: 0.375rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4b5563;
            background: white;
            cursor: pointer;
            transition: background-color 0.2s;
          }

          .quantity-btn:hover {
            background: #f3f4f6;
          }

          .quantity-display {
            min-width: 1rem;
            text-align: center;
          }

          .bottom-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1);
            z-index: 50;
          }

          .book-now-btn {
            background: #FF7701;
            color: white;
            font-weight: 500;
            padding: 0.75rem;
            width: 100%;
            max-width: 400px;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 0 auto;
            display: block;
          }

          .book-now-btn:hover {
            background: #e66901;
          }

          .discount-note {
            color: #6b7280;
            font-size: 0.875rem;
            text-align: center;
            margin-top: 0.75rem;
          }

          @media (max-width: 768px) {
            .item-estimate-container {
              min-height: calc(100vh - 120px); /* Adjust for smaller header/footer */
            }

            .main-content {
              padding: 0.5rem;
            }

            .page-title {
              font-size: 1.25rem;
            }

            .bottom-cta {
              padding: 1rem;
            }

            .book-now-btn {
              font-size: 0.875rem;
              padding: 0.5rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}