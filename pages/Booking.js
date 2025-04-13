import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ZipCodeForm from "@/components/ZipCodeForm";
import EmailForm from "@/components/EmailForm";

export default function Booking() {
    const [step, setStep] = useState(1); // Step 1: Zip code, Step 2: Email validation
    const [isMobile, setIsMobile] = useState(false); // State to manage screen size
    const [zipData, setZipData] = useState(null); // Store validated zip code data
    const router = useRouter(); // Initialize router

    // Handle successful zip code validation
    const handleZipValidated = (data) => {
        setZipData(data);
        setStep(2);
    };

    // Handle email submission
    const handleEmailSubmit = (email) => {
        // Store data in session storage
        sessionStorage.setItem("userEmail", email);
        sessionStorage.setItem("userZipCode", zipData.zipCode);
        sessionStorage.setItem("userCity", zipData.cityName);
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

    // Go back to zip code step
    const handleBackToZip = () => {
        setStep(1);
    };

    // Detect screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
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
                                        <ZipCodeForm onZipValidated={handleZipValidated} />
                                    ) : (
                                        <EmailForm 
                                            onEmailSubmit={handleEmailSubmit} 
                                            onBack={handleBackToZip}
                                            cityName={zipData?.cityName} 
                                        />
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
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </Layout>
    );
}
