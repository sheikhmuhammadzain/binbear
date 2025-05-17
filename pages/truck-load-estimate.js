import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaTruck } from 'react-icons/fa';

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
        const total = (quantities.full * 429) + (quantities.half * 229);
        return {
            min: total,
            max: total + 20
        };
    };

    const calculateTruckFillPercentage = () => {
        const totalLoad = quantities.full + (quantities.half * 0.5);
        const percentage = (totalLoad / 6) * 100;
        return Math.min(100, percentage);
    };

    const estimate = calculateTotal();
    const fillPercentage = calculateTruckFillPercentage();

    const handleBookIt = () => {
        if (estimate.min === 0) return;

        const truckLoadBookingInput = {
            type: 'truckLoad',
            quantities: quantities,
            estimatePrice: estimate.min
        };

        if (typeof window !== 'undefined') {
            localStorage.setItem('pendingBookingDetails', JSON.stringify(truckLoadBookingInput));
        }
        router.push('/ScheduleDumpster');
    };

    return (
        <Layout>
            <div className="container mt-4 mb-4">
                <div className="estimate-container" style={{
                    maxWidth: "550px",
                    margin: "0 auto",
                    padding: "15px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    {/* Header */}
                    <div className="header" style={{
                        backgroundColor: "#FF7701",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px 8px 0 0",
                        marginBottom: "15px",
                        position: "relative"
                    }}>
                            <button 
                            onClick={() => router.back()}
                            style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "none",
                                border: "none",
                                color: "white",
                                cursor: "pointer",
                                fontSize: "14px",
                                padding: "5px"
                            }}
                        >
                            ←
                            </button>
                        <h2 style={{ margin: 0, textAlign: "center", fontSize: "20px" }}>How Many Loads?</h2>
                        <p style={{ margin: "5px 0 0 0", fontSize: "12px", textAlign: "center" }}>Junk King North Texas (75056)</p>
                        </div>

                    {/* Context Text */}
                    <div style={{ textAlign: "center", marginBottom: "12px", color: "#666", fontSize: "12px" }}>
                        <p>*1 Junk King Truck = 6 Regular Pickup Truck Loads</p>
                    </div>

                    {/* Truck Selection */}
                    <div className="truck-selection" style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: "25px",
                        flexWrap: "wrap",
                        gap: "15px"
                    }}>
                        {/* Full Truck Option */}
                        <div className="truck-option" style={{
                            flex: "1",
                            minWidth: "160px",
                            maxWidth: "220px",
                            textAlign: "center",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "15px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            backgroundColor: "white"
                        }}>
                            <FaTruck size={70} color="#FF7701" />
                            <p style={{ margin: "8px 0", fontSize: "14px" }}>Full Pickup Truck Load(s)</p>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px"
                            }}>
                                <button 
                                    onClick={() => handleQuantityChange('full', -1)}
                                    className="quantity-button"
                                    style={{ 
                                        padding: "8px 12px",
                                        backgroundColor: "#FF7701",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    }}
                                >−</button>
                                <span style={{ fontSize: "18px", minWidth: "25px" }}>{quantities.full}</span>
                                <button 
                                    onClick={() => handleQuantityChange('full', 1)}
                                    className="quantity-button"
                                    style={{ 
                                        padding: "8px 12px",
                                        backgroundColor: "#FF7701",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    }}
                                >+</button>
                            </div>
                        </div>

                        {/* Half Truck Option - with similar reduced dimensions */}
                        <div className="truck-option" style={{
                            flex: "1",
                            minWidth: "160px",
                            maxWidth: "220px",
                            textAlign: "center",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "15px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                            backgroundColor: "white"
                        }}>
                            <div style={{ position: "relative", width: "70px", height: "70px", margin: "0 auto" }}>
                                <FaTruck size={70} style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)', color: '#FF7701', position: 'absolute', top: 0, left: 0 }} />
                                <FaTruck size={70} style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)', color: '#ccc', position: 'absolute', top: 0, left: 0 }} />
                            </div>
                            <p style={{ margin: "8px 0", fontSize: "14px" }}>Half Pickup Truck Load(s)</p>
                            {/* Quantity controls - same as full truck but for half */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px"
                            }}>
                            <button 
                                onClick={() => handleQuantityChange('half', -1)}
                                    className="quantity-button"
                                    style={{
                                        padding: "8px 12px",
                                        backgroundColor: "#FF7701",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    }}
                                >−</button>
                                <span style={{ fontSize: "18px", minWidth: "25px" }}>{quantities.half}</span>
                            <button 
                                onClick={() => handleQuantityChange('half', 1)}
                                    className="quantity-button"
                                    style={{
                                        padding: "8px 12px",
                                        backgroundColor: "#FF7701",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "18px"
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </div>

                    {/* Truck Fill Indicator */}
                    <div className="truck-fill-indicator" style={{
                        width: "100%",
                        marginBottom: "25px",
                        textAlign: "center"
                    }}>
                        <div style={{
                            position: "relative",
                            width: "70%",
                            height: "35px",
                            backgroundColor: "#f0f0f0",
                            margin: "0 auto",
                            borderRadius: "4px",
                            overflow: "hidden"
                        }}>
                            <div style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                height: "100%",
                                width: `${fillPercentage}%`,
                                backgroundColor: "#FF7701",
                                transition: "width 0.3s ease-in-out"
                            }}></div>
                        </div>
                        <p style={{
                            margin: "8px 0 0 0",
                            color: "#333",
                            fontWeight: "bold",
                            fontSize: "14px"
                        }}>
                            {Math.round(fillPercentage)}% FULL JUNK KING TRUCK
                        </p>
                </div>

                    {/* Estimate */}
                    <div style={{
                        textAlign: "center",
                        marginBottom: "15px"
                    }}>
                        <h3 style={{ color: "#333", fontSize: "18px" }}>Your Estimate: ${estimate.min} - ${estimate.max}</h3>
                    </div>

                    {/* Call to Action */}
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px"
                    }}>
                    <button 
                            onClick={handleBookIt}
                            disabled={estimate.min === 0}
                            className="book-button"
                            style={{
                                padding: "12px 40px",
                                backgroundColor: "#4CAF50",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: estimate.min === 0 ? "not-allowed" : "pointer",
                                fontSize: "18px",
                                opacity: estimate.min === 0 ? 0.7 : 1
                            }}
                        >
                            Book It!
                    </button>
                    </div>

                    {/* Disclaimer */}
                    <p style={{
                        textAlign: "center",
                        color: "#666",
                        fontSize: "12px",
                        marginTop: "20px"
                    }}>
                        * Final price may vary based on actual load size and materials
                    </p>
                </div>
                </div>

            {/* Global Styles */}
                <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                    100% { transform: scale(1); }
                }
                .truck-fill-indicator {
                    animation: ${fillPercentage >= 100 ? 'pulse 1s infinite' : 'none'};
                }
                .quantity-button {
                    transition: filter 0.2s ease-in-out;
                }
                .quantity-button:hover {
                    filter: brightness(1.1);
                }
                .book-button {
                    transition: all 0.2s ease-in-out;
                }
                .book-button:hover:not(:disabled) {
                    transform: scale(1.02);
                    boxShadow: 0 4px 8px rgba(0,0,0,0.2);
                    }
                `}</style>
        </Layout>
    );
}