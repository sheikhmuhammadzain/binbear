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
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <div className="box-login-content text-center">
                                <h2 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">
                                    Booking Now
                                </h2>
                                <p className="font-md color-grey-500 mb-30 wow animate__animated animate__fadeIn">
                                    Access to all features. No credit card required.
                                </p>

                                <div className="box-form-login wow animate__animated animate__fadeIn">
                                    {step === 1 ? (
                                        // Step 1: ZIP Code Form
                                        <form onSubmit={handleZipSubmit} className="zip-form">
                                            <label htmlFor="zip-code" className="form-label">
                                                Enter Your ZIP Code
                                            </label>

                                            <div className="input-group-wrapper">
                                                <input
                                                    type="text"
                                                    id="zip-code"
                                                    placeholder="ZIP Code"
                                                    className="zip-code-input"
                                                    value={zipCode}
                                                    onChange={handleZipCodeChange}
                                                />
                                                <button type="submit" className="zip-submit-btn">
                                                    Check Coverage
                                                </button>
                                            </div>

                                            {/* Conditional Message Rendering */}
                                            <p className={`message ${message.includes("Good news") ? "success" : "error"}`}>
                                                {message}
                                            </p>
                                        </form>
                                    ) : (
                                        // Step 2: Email Validation Form
                                        <form onSubmit={handleEmailSubmit} className="email-form">
                                            <div className="success-message">
                                                <p className="success-headline">
                                                    Great news! We service your area.
                                                </p>
                                                <p className="success-subtitle">
                                                    Please enter your email to continue.
                                                </p>
                                            </div>

                                            <label htmlFor="email" className="form-label text-left">
                                                Your Email Address
                                            </label>

                                            <div className="email-input-container">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder="email@example.com"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    className={emailError ? "error-input" : ""}
                                                />
                                                
                                                {emailError && (
                                                    <p className="error-message">
                                                        {emailError}
                                                    </p>
                                                )}

                                                <div className="button-group">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="back-btn"
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="continue-btn"
                                                    >
                                                        Continue
                                                    </button>
                                                </div>

                                                <p className="privacy-note">
                                                    We respect your privacy and will only use your email to contact you about our services.
                                                </p>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .section.box-login {
                    padding: 80px 0;
                }
                
                .box-login-content {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 20px;
                }
                
                .form-label {
                    display: block;
                    margin-bottom: 15px;
                    font-size: 16px;
                    font-weight: 500;
                }
                
                .zip-form, .email-form {
                    max-width: 450px;
                    margin: 0 auto;
                    text-align: center;
                }
                
                .input-group-wrapper {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .zip-code-input {
                    flex: 1;
                    min-width: 200px;
                    padding: 12px 15px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    height: 50px;
                }
                
                .zip-submit-btn {
                    height: 50px;
                    padding: 12px 20px;
                    background-color: #FF7F00;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: bold;
                    min-width: 150px;
                }
                
                .message {
                    margin-top: 20px;
                    font-size: 16px;
                    text-align: center;
                }
                
                .success {
                    color: green;
                }
                
                .error {
                    color: #ff4d4f;
                }
                
                .email-input-container {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                
                .email-input-container input {
                    width: 100%;
                    padding: 12px 15px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    height: 50px;
                }
                
                .error-input {
                    border: 1px solid #ff4d4f !important;
                }
                
                .error-message {
                    margin: 0;
                    font-size: 14px;
                    color: #ff4d4f;
                    text-align: left;
                }
                
                .button-group {
                    display: flex;
                    gap: 10px;
                    margin-top: 10px;
                }
                
                .back-btn {
                    height: 50px;
                    padding: 12px 15px;
                    background-color: #f5f5f5;
                    color: #333;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    cursor: pointer;
                    flex: 1;
                    font-weight: 500;
                }
                
                .continue-btn {
                    height: 50px;
                    padding: 12px 15px;
                    background-color: #FF7F00;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    flex: 2;
                    font-weight: bold;
                }
                
                .success-message {
                    margin-bottom: 20px;
                    text-align: center;
                }
                
                .success-headline {
                    color: green;
                    font-weight: bold;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                
                .success-subtitle {
                    color: #555;
                    margin-top: 0;
                }
                
                .privacy-note {
                    font-size: 12px;
                    color: #666;
                    margin-top: 15px;
                    text-align: center;
                }
                
                .text-left {
                    text-align: left;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @media (max-width: 768px) {
                    .input-group-wrapper {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .zip-code-input, .zip-submit-btn {
                        width: 100%;
                        max-width: 100%;
                    }
                    
                    .button-group {
                        flex-direction: column;
                    }
                    
                    .back-btn, .continue-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </Layout>
    );
}
