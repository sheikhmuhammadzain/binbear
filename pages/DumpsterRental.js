import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";

export default function DumpsterRental() {
    const [showPopup, setShowPopup] = useState(false); // State for pop-up visibility
    const router = useRouter();

    const handlePopupClose = () => {
        setShowPopup(false); // Close the pop-up
        router.push("/ScheduleDumpster"); // Redirect to the form page
    };

    return (
        <Layout>
            <div style={{ textAlign: "center", padding: "20px", backgroundColor: "red", color: "white" }}>
                <h1 style={{ color: "white", fontSize: "40px" }}>Dumpster Rental</h1>
                <h2 style={{ color: "white", fontSize: "20px" }}>3-Day Dumpster Drop-off</h2>
                <div
                    style={{
                        margin: "20px auto",
                        padding: "10px",
                        backgroundColor: "#fff",
                        color: "black",
                        maxWidth: "600px",
                        borderRadius: "10px",
                    }}
                >
                    <p>Only Pay for the Space You Use</p>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p>
                            <strong>Minimum:</strong> <span style={{ color: "red" }}>$228</span>
                        </p>
                        <p>
                            <strong>Full:</strong> <span style={{ color: "red" }}>$478</span>
                        </p>
                    </div>
                    <button
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            backgroundColor: "orange",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                        onClick={() => setShowPopup(true)} // Open the pop-up on button click
                    >
                        Schedule Drop-off
                    </button>
                </div>

                {/* Pop-up */}
                {showPopup && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1000,
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "#fff",
                                padding: "20px",
                                borderRadius: "10px",
                                textAlign: "center",
                                width: "400px",
                            }}
                        >
                            <h5 style={{marginBottom:'30px'}}>Review Our Terms and Conditions</h5>
                            <p style={{color:'grey'}}>
                               Due to BedLoad/weight limitation we reserve the right to not accept concrete ,dirt and gravel in the junk King Dumpster.These type of material can be damaging to not only our dumpster but to our trucks therefore
                            they are not allowed.See full term and conditions for more information.
                            </p>
                            <button
                                style={{
                                    width:'200px',
                                    marginTop: "20px",
                                    padding: "10px 20px",
                                    backgroundColor: "orange",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    fontSize: "16px",
                                }}
                                onClick={handlePopupClose} // Close the pop-up and redirect
                            >
                                Got It
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
