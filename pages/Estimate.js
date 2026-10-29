import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Home2() {
    const [fullTruckLoads, setFullTruckLoads] = useState(0)
    const [halfTruckLoads, setHalfTruckLoads] = useState(0)

    const calculateEstimate = () => {
        // Example pricing logic - adjust these values according to your business model
        const fullTruckPrice = 368
        const halfTruckPrice = 188
        const total = (fullTruckLoads * fullTruckPrice) + (halfTruckLoads * halfTruckPrice)
        return {
            min: total,
            max: total + 20 // Adding a small range
        }
    }

    const estimate = calculateEstimate()

    return (
            <Layout>
            <div className="container mt-4 mb-4">
                <div className="estimate-container" style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                    <div className="header" style={{
                        backgroundColor: "#c41e3a",
                        color: "white",
                        padding: "15px",
                        borderRadius: "8px 8px 0 0",
                        marginBottom: "20px"
                    }}>
                        <h2 style={{ margin: 0 }}>How Many Loads?</h2>
                        <p style={{ margin: "5px 0 0 0", fontSize: "14px" }}>BinBear Estimate</p>
                    </div>

                    <div className="truck-selection" style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginBottom: "30px"
                    }}>
                        <div className="truck-option">
                            <img src="/assets/imgs/page/workprocess/cargo-ship.png" alt="Full Truck" style={{ width: "120px", height: "auto" }} />
                            <p>Full Pickup Truck Load(s)</p>
                            <div className="quantity-selector" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px"
                            }}>
                                <button 
                                    onClick={() => setFullTruckLoads(Math.max(0, fullTruckLoads - 1))}
            style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#c41e3a",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >-</button>
                                <span>{fullTruckLoads}</span>
                                <button 
                                    onClick={() => setFullTruckLoads(fullTruckLoads + 1)}
                style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#c41e3a",
                                        color: "white",
                    border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >+</button>
                            </div>
                        </div>
                    
                        <div className="truck-option">
                            <img src="/assets/imgs/page/workprocess/cargo-ship.png" alt="Half Truck" style={{ width: "120px", height: "auto" }} />
                            <p>Half Pickup Truck Load(s)</p>
                            <div className="quantity-selector" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px"
                            }}>
                                <button 
                                    onClick={() => setHalfTruckLoads(Math.max(0, halfTruckLoads - 1))}
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#c41e3a",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >-</button>
                                <span>{halfTruckLoads}</span>
                                <button 
                                    onClick={() => setHalfTruckLoads(halfTruckLoads + 1)}
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "#c41e3a",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer"
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </div>

                    <div className="estimate-result" style={{
                        textAlign: "center",
                        marginBottom: "20px"
                    }}>
                        <h3>Your Estimate: ${estimate.min} - ${estimate.max}</h3>
                    </div>

                    <div className="action-buttons" style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px"
                    }}>
                        <button 
                            onClick={() => window.location.href = '/Booking'}
  style={{
                                padding: "12px 24px",
                                backgroundColor: "#4CAF50",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontSize: "16px"
                            }}
                        >
                            Book It!
                        </button>
    </div>
    </div>
  </div>
            </Layout>
    )
}