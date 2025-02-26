import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useRouter } from "next/router"; // Import useRouter for navigation

export default function Booking() {
    const [zipCode, setZipCode] = useState(""); // Initialize state for zip code
    const [email, setEmail] = useState(""); // Initialize state for email
    const [message, setMessage] = useState(""); // State to manage success or error messages
    const [isMobile, setIsMobile] = useState(false); // State to manage screen size
    const [emailError, setEmailError] = useState(""); // State to manage email validation error
    const [step, setStep] = useState(1); // Step 1: Zip code, Step 2: Email validation
    const router = useRouter(); // Initialize router

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        setMessage(""); // Clear message when typing
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(""); // Clear error when typing
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleZipSubmit = (e) => {
        e.preventDefault();

        // Validate the zip code
        if (zipCode === "") {
            setMessage("Please enter your ZIP code.");
        } else if (zipCode.length === 5 && !isNaN(zipCode)) {
            setMessage("Good news! We've got you covered.");
            // Move to email validation step
            setStep(2);
        } else {
            setMessage("Please enter a valid 5-digit ZIP code.");
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();

        // Validate the email
        if (!email) {
            setEmailError("Email address is required.");
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
        } else {
            // Email is valid, proceed to next page
            setEmailError("");
            // Store the email in session storage or state management if needed
            sessionStorage.setItem("userEmail", email);
            handleZipCodeSubmit();
        }
    };

    const handleZipCodeSubmit = () => {
        // When zip code is entered successfully
        sessionStorage.setItem('hasEnteredZip', 'true');
        
        // Force remove sticky container
        const stickyContainers = document.querySelectorAll('.sticky-container, .jsx-84cd9f3fe42f54c9.sticky-container');
        stickyContainers.forEach(container => {
            container.style.display = 'none';
            container.style.opacity = '0';
            container.style.visibility = 'hidden';
            container.style.pointerEvents = 'none';
            container.remove(); // Physically remove from DOM
        });

        // Navigate to next page
        router.push('/choose-service');
    };

    // Detect screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Layout>
            <section className="section box-login">
                <div className="row align-items-center m-0">
                    <div
                        className="col-lg-6"
                        style={{
                            marginBottom: "150px",
                            marginLeft: isMobile ? "0px" : "400px", // Adjust left margin on mobile
                            marginRight: isMobile ? "0px" : "0", // Adjust right margin on mobile
                        }}
                    >
                        <div className="box-login-left">
                            <h2
                                className="color-brand-2 mb-10 wow animate__animated animate__fadeIn"
                                style={{ marginLeft: isMobile ? "0px" : "70px" }}
                            >
                                Booking Now
                            </h2>
                            <p
                                className="font-md color-grey-500 wow animate__animated animate__fadeIn"
                                style={{ marginLeft: isMobile ? "10px" : "70px" }}
                            >
                                Access to all features. No credit card required.
                            </p>

                            <div className="box-form-login wow animate__animated animate__fadeIn">
                                {step === 1 ? (
                                    // Step 1: ZIP Code Form
                                    <form
                                        onSubmit={handleZipSubmit}
                                        style={{
                                            maxWidth: "400px",
                                            margin: "20px auto",
                                            textAlign: "center",
                                            position: "relative",
                                        }}
                                    >
                                        <label
                                            htmlFor="zip-code"
                                            style={{
                                                display: "block",
                                                marginBottom: "10px",
                                                fontSize: "16px",
                                            }}
                                        >
                                            Enter Your ZIP Code
                                        </label>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: "10px",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            <input
                                                type="text"
                                                id="zip-code"
                                                placeholder="ZIP Code"
                                                className="zip-code-input"
                                                value={zipCode}
                                                onChange={handleZipCodeChange}
                                                style={{
                                                    flex: "1",
                                                    minWidth: "250px",
                                                    maxWidth: "500px",
                                                    padding: "10px",
                                                    fontSize: "16px",
                                                    border: "1px solid #ccc",
                                                    borderRadius: "4px",
                                                    height: "50px",
                                                }}
                                            />
                                            <button
                                                type="submit"
                                                style={{
                                                    height: "50px",
                                                    padding: "10px",
                                                    backgroundColor: "#FF7F00",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                    minWidth: "100px",
                                                    maxWidth: "150px",
                                                    flexShrink: 0,
                                                    marginRight: isMobile ? "65px" : "0", // Adjust right margin on mobile
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Check Coverage
                                            </button>
                                        </div>

                                        {/* Conditional Message Rendering */}
                                        <p
                                            style={{
                                                marginTop: "20px",
                                                fontSize: "16px",
                                                color: message.includes("Good news") ? "green" : "#ff4d4f",
                                                textAlign: "center",
                                            }}
                                        >
                                            {message}
                                        </p>
                                    </form>
                                ) : (
                                    // Step 2: Email Validation Form
                                    <form
                                        onSubmit={handleEmailSubmit}
                                        style={{
                                            maxWidth: "400px",
                                            margin: "20px auto",
                                            textAlign: "center",
                                            position: "relative",
                                            animation: "fadeIn 0.5s",
                                        }}
                                    >
                                        <div style={{ marginBottom: "15px", textAlign: "center" }}>
                                            <p style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
                                                Great news! We service your area.
                                            </p>
                                            <p style={{ marginTop: "10px", color: "#555" }}>
                                                Please enter your email to continue.
                                            </p>
                                        </div>

                                        <label
                                            htmlFor="email"
                                            style={{
                                                display: "block",
                                                marginBottom: "10px",
                                                fontSize: "16px",
                                                textAlign: "left",
                                            }}
                                        >
                                            Your Email Address
                                        </label>

                                        <div
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "10px",
                                            }}
                                        >
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="email@example.com"
                                                value={email}
                                                onChange={handleEmailChange}
                                                style={{
                                                    width: "100%",
                                                    padding: "10px",
                                                    fontSize: "16px",
                                                    border: emailError ? "1px solid #ff4d4f" : "1px solid #ccc",
                                                    borderRadius: "4px",
                                                    height: "50px",
                                                }}
                                            />
                                            
                                            {emailError && (
                                                <p
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "14px",
                                                        color: "#ff4d4f",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    {emailError}
                                                </p>
                                            )}

                                            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                                <button
                                                    type="button"
                                                    onClick={() => setStep(1)}
                                                    style={{
                                                        height: "50px",
                                                        padding: "10px",
                                                        backgroundColor: "#f5f5f5",
                                                        color: "#333",
                                                        border: "1px solid #ccc",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        flex: "1",
                                                    }}
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    style={{
                                                        height: "50px",
                                                        padding: "10px",
                                                        backgroundColor: "#FF7F00",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        cursor: "pointer",
                                                        flex: "2",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    Continue
                                                </button>
                                            </div>

                                            <p style={{ 
                                                fontSize: "12px", 
                                                color: "#666", 
                                                marginTop: "15px",
                                                textAlign: "center" 
                                            }}>
                                                We respect your privacy and will only use your email to contact you about our services.
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                @media (max-width: 768px) {
                    .box-login-left {
                        text-align: center; /* Center the content */
                    }

                    .zip-code-input {
                        width: 100%; /* Make input and button full width */
                        max-width: 400px; /* Adjust max width for small screens */
                        margin: 0px; /* Center the input and button */
                    }
                    
                    button {  
                        justify-content: center;
                        align-items: center;
                        width: 100%; /* Make input and button full width */
                        max-width: 400px; /* Adjust max width for small screens */
                        margin-left: 30%; /* Center the input and button */
                    }

                    .box-form-login {
                        margin-left: 0;
                    }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </Layout>
    );
}
