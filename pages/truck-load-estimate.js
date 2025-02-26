import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaTruck } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function TruckLoadEstimate() {
    const router = useRouter();
    const [quantities, setQuantities] = useState({
        full: 0,
        half: 0
    });

    const handleQuantityChange = (type, change) => {
        setQuantities(prev => ({
            ...prev,
            [type]: Math.max(0, prev[type] + change)
        }));
    };

    const calculateTotal = () => {
        return (quantities.full * 429) + (quantities.half * 229);
    };

    const handleContinue = () => {
        if (quantities.full > 0 || quantities.half > 0) {
            router.push('/ScheduleDumpster');
        }
    };

    return (
        <Layout>
            <div className="container">
                <div className="header-section">
                    <button className="back-button" onClick={() => router.back()}>
                        ← Back
                    </button>
                    <h1>How Many Loads?</h1>
                    <p className="subtitle">Choose the number of truck loads you need</p>
                </div>

                <div className="trucks-container">
                    {/* Full Truck */}
                    <div className="truck-option">
                        <div className="truck-visual">
                            <FaTruck size={80} className="truck-icon" />
                            <div className="load-label">Full Pickup Truck Load</div>
                            <div className="price">$429</div>
                        </div>
                        <div className="quantity-controls">
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('full', -1)}
                            >
                                <AiOutlineMinus />
                            </button>
                            <span className="quantity">{quantities.full}</span>
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('full', 1)}
                            >
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>

                    {/* Half Truck */}
                    <div className="truck-option">
                        <div className="truck-visual">
                            <div className="half-truck-wrapper">
                                <FaTruck 
                                    size={80} 
                                    style={{ 
                                        clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
                                        color: '#FF7701',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }} 
                                />
                                <FaTruck 
                                    size={80} 
                                    style={{ 
                                        clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                                        color: '#ccc',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }} 
                                />
                            </div>
                            <div className="load-label">Half Pickup Truck Load</div>
                            <div className="price">$229</div>
                        </div>
                        <div className="quantity-controls">
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('half', -1)}
                            >
                                <AiOutlineMinus />
                            </button>
                            <span className="quantity">{quantities.half}</span>
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange('half', 1)}
                            >
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="estimate-section">
                    <div className="total">
                        Your Estimate: ${calculateTotal().toFixed(2)}
                    </div>
                    <button 
                        className="continue-button"
                        disabled={calculateTotal() === 0}
                        onClick={handleContinue}
                    >
                        Book Now
                    </button>
                    <p className="note">* Final price may vary based on actual load size and materials</p>
                </div>

                <style jsx>{`
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        padding: 20px;
                        min-height: calc(100vh - 300px);
                    }
                    .header-section {
                        text-align: center;
                        margin-bottom: 40px;
                        position: relative;
                    }
                    .back-button {
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        background: none;
                        border: none;
                        color: #333;
                        cursor: pointer;
                        font-size: 16px;
                        display: flex;
                        align-items: center;
                        gap: 5px;
                    }
                    .back-button:hover {
                        color: #FF7701;
                    }
                    h1 {
                        font-size: 32px;
                        color: #333;
                        margin-bottom: 10px;
                    }
                    .subtitle {
                        color: #666;
                        font-size: 16px;
                    }
                    .trucks-container {
                        display: flex;
                        justify-content: center;
                        gap: 40px;
                        margin: 40px 0;
                    }
                    .truck-option {
                        background: #fff;
                        border: 2px solid #eee;
                        border-radius: 10px;
                        padding: 30px;
                        width: 300px;
                        text-align: center;
                        transition: all 0.3s ease;
                    }
                    .truck-option:hover {
                        border-color: #FF7701;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    }
                    .truck-visual {
                        margin-bottom: 20px;
                        position: relative;
                    }
                    .truck-icon {
                        color: #FF7701;
                        margin-bottom: 10px;
                    }
                    .half-truck-wrapper {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        margin: 0 auto;
                    }
                    .load-label {
                        font-weight: bold;
                        color: #333;
                        margin: 10px 0;
                    }
                    .price {
                        font-size: 24px;
                        color: #FF7701;
                        font-weight: bold;
                        margin: 10px 0;
                    }
                    .quantity-controls {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 15px;
                        margin-top: 20px;
                    }
                    .quantity-btn {
                        background: #f5f5f5;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }
                    .quantity-btn:hover {
                        background: #eee;
                        border-color: #ccc;
                    }
                    .quantity {
                        font-size: 20px;
                        font-weight: bold;
                        color: #333;
                        min-width: 30px;
                        text-align: center;
                    }
                    .estimate-section {
                        text-align: center;
                        margin-top: 40px;
                    }
                    .total {
                        font-size: 24px;
                        font-weight: bold;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .continue-button {
                        background-color: #FF7701;
                        color: white;
                        border: none;
                        padding: 15px 40px;
                        border-radius: 5px;
                        font-size: 18px;
                        font-weight: bold;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .continue-button:hover:not(:disabled) {
                        background-color: #e66901;
                    }
                    .continue-button:disabled {
                        background-color: #ccc;
                        cursor: not-allowed;
                    }
                    .note {
                        color: #666;
                        font-size: 14px;
                        margin-top: 10px;
                    }
                    @media (max-width: 768px) {
                        .container {
                            padding: 15px;
                        }
                        .trucks-container {
                            flex-direction: column;
                            align-items: center;
                            gap: 20px;
                        }
                        .truck-option {
                            width: 100%;
                            max-width: 300px;
                        }
                        h1 {
                            font-size: 24px;
                            margin-top: 30px;
                        }
                        .back-button {
                            top: -25px;
                            transform: none;
                        }
                    }
                    @media (max-width: 480px) {
                        .container {
                            padding: 10px;
                        }
                        .truck-option {
                            padding: 20px;
                        }
                        .continue-button {
                            width: 100%;
                            padding: 12px 20px;
                            font-size: 16px;
                        }
                        .price {
                            font-size: 20px;
                        }
                    }
                `}</style>
            </div>
        </Layout>
    );
}
