import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PriceEstimate() {
  const router = useRouter();
  const [unitCount, setUnitCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const pricePerUnit = 40; // Price per unit - $40

  const handleRangeChange = (e) => {
    setUnitCount(parseInt(e.target.value));
  };

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value);
    
    // Handle validation - only enforce minimum
    if (isNaN(value)) {
      value = 1;
    } else if (value < 1) {
      value = 1;
    }
    
    setUnitCount(value);
  };

  const handleSaveEstimate = () => {
    setLoading(true);
    const estimatedPrice = unitCount * pricePerUnit;

    const unitEstimateBookingInput = {
      type: 'unitEstimate',
      units: unitCount,
      estimatedPrice: estimatedPrice,
      pricePerUnit: pricePerUnit
    };

    if (typeof window !== 'undefined') {
        localStorage.setItem('pendingBookingDetails', JSON.stringify(unitEstimateBookingInput));
    }
    
    // Redirect to the scheduling page
    setTimeout(() => {
      router.push("/ScheduleDumpster");
      // setLoading(false); // Not strictly needed if navigating away
    }, 500); // Small delay for better UX
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="price-estimate-container">
        <div className="estimate-header">
          <h1>Select Number of Units</h1>
          <p>Use the slider or input field to specify how many units you need for construction cleanup services</p>
        </div>

        <div className="estimate-card">
          <div className="price-display">
            <div className="units-section">
              <span className="display-label">Your Units:</span>
              <div className="unit-input-container">
                <input 
                  type="number" 
                  min="1"
                  value={unitCount}
                  onChange={handleInputChange}
                  className="unit-input"
                />
              </div>
              <div className="per-unit-price">
                ${pricePerUnit} per unit
              </div>
            </div>
            <div className="price-section">
              <span className="display-label">Estimated Price:</span>
              <div className="total-price">${unitCount * pricePerUnit}</div>
            </div>
          </div>

          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={unitCount > 100 ? 100 : unitCount}
              onChange={handleRangeChange}
              className="price-slider"
            />
            <div className="price-range-labels">
              <span>1 Unit</span>
              <span>100+ Units</span>
            </div>
          </div>

          <div className="price-description">
            <p>Please specify the number of units you need for your construction cleanup services. You can adjust using the slider or directly enter any number. Our team will coordinate the delivery and pickup of your requested units.</p>
          </div>

          <div className="estimate-actions">
            <button 
              onClick={handleBackClick} 
              className="back-button"
            >
              Back
            </button>
            <button 
              onClick={handleSaveEstimate} 
              className="save-button"
              disabled={loading}
            >
              {loading ? "Processing..." : "Save & Continue"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .price-estimate-container {
          max-width: 800px;
          margin: 50px auto;
          padding: 0 20px;
        }

        .estimate-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .estimate-header h1 {
          color: #333;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .estimate-header p {
          color: #666;
          font-size: 16px;
        }

        .estimate-card {
          background-color: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }

        .price-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 0 10px;
        }

        .units-section, .price-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .display-label {
          font-size: 18px;
          color: #555;
          margin-bottom: 8px;
        }

        .per-unit-price {
          font-size: 14px;
          color: #777;
          margin-top: 5px;
        }

        .total-price {
          font-size: 32px;
          font-weight: 700;
          color: #FF7701;
        }

        .unit-input-container {
          display: inline-block;
        }

        .unit-input {
          font-size: 32px;
          font-weight: 700;
          color: #FF7701;
          width: 100px;
          text-align: center;
          border: 2px solid #FF7701;
          border-radius: 5px;
          padding: 5px;
        }

        .unit-input:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(255, 119, 1, 0.3);
        }

        .slider-container {
          margin-bottom: 30px;
        }

        .price-slider {
          width: 100%;
          height: 8px;
          -webkit-appearance: none;
          appearance: none;
          background: #f0f0f0;
          outline: none;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FF7701;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .price-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FF7701;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .price-slider::-webkit-slider-runnable-track {
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(to right, #f0f0f0 ${props => Math.min((unitCount - 1) / 99 * 100, 100)}%, #FF7701 0);
        }

        .price-range-labels {
          display: flex;
          justify-content: space-between;
          color: #666;
          font-size: 14px;
        }

        .price-description {
          background-color: #f9f9f9;
          border-left: 4px solid #FF7701;
          padding: 15px;
          margin-bottom: 30px;
          border-radius: 0 4px 4px 0;
        }

        .price-description p {
          color: #555;
          font-size: 14px;
          line-height: 1.5;
          margin: 0;
        }

        .estimate-actions {
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .back-button, .save-button {
          padding: 12px 24px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          flex: 1;
        }

        .back-button {
          background-color: #f0f0f0;
          color: #555;
          border: 1px solid #ddd;
        }

        .back-button:hover {
          background-color: #e5e5e5;
        }

        .save-button {
          background-color: #FF7701;
          color: white;
          border: none;
          box-shadow: 0 3px 10px rgba(255, 119, 1, 0.2);
        }

        .save-button:hover {
          background-color: #e66900;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 119, 1, 0.3);
        }

        .save-button:disabled {
          background-color: #ffb980;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 576px) {
          .price-estimate-container {
            margin: 30px auto;
          }

          .estimate-header h1 {
            font-size: 28px;
          }

          .estimate-card {
            padding: 20px;
          }

          .price-display {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </Layout>
  );
} 