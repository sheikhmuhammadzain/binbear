import React, { useEffect } from 'react';

export default function WelcomePopup({ onClose }) {
    useEffect(() => {
        // Prevent scrolling when popup is shown
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            // Re-enable scrolling when popup is closed
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-button" onClick={onClose} aria-label="Close popup">×</button>

                <div className="popup-scroll-content">
                    <h2 className="popup-title">What is Your Time Worth?</h2>

                    <div className="popup-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                            alt="Take back your time"
                            className="popup-main-image"
                            loading="eager"
                            width="550" // Keep original aspect ratio hint
                            height="300"// Keep original aspect ratio hint
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    <p className="popup-description">
                        Let BinBear take care of loading, sorting, donating and sitting in
                        the line at the recycle center for everything else - while you enjoy
                        what you really want to do!
                    </p>

                    <a href="/Booking" className="popup-button">
                        Book Now & Get Started
                    </a>
                </div>
            </div>

            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    inset: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    z-index: 9999;
                    overflow-y: auto;
                }

                .popup-container {
                    background-color: #FF7701;
                    width: 100%;
                    max-width: 450px; /* Reduced max-width */
                    border-radius: 8px;
                    position: relative;
                    color: white;
                    text-align: center;
                    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
                    transform: translateY(0);
                    animation: popup-animation 0.4s ease-out;
                    display: flex;
                    flex-direction: column;
                    max-height: 90vh;
                }

                @keyframes popup-animation {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.98);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .close-button {
                    position: absolute;
                    top: 8px;  /* Slightly closer */
                    right: 8px; /* Slightly closer */
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 26px; /* Slightly smaller */
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1;
                    width: 28px; /* Smaller */
                    height: 28px; /* Smaller */
                    line-height: 28px;
                    text-align: center;
                    border-radius: 50%;
                    transition: transform 0.2s ease, background-color 0.2s ease;
                }

                .close-button:hover {
                    transform: scale(1.1);
                    background-color: rgba(0, 0, 0, 0.2);
                }

                .popup-scroll-content {
                    padding: 25px 25px 20px 25px; /* Reduced padding */
                    overflow-y: auto;
                    flex-grow: 1;
                     /* Custom scrollbar (optional, webkit browsers) */
                    &::-webkit-scrollbar {
                      width: 5px; /* Thinner scrollbar */
                    }
                    &::-webkit-scrollbar-thumb {
                      background-color: rgba(255, 255, 255, 0.5);
                      border-radius: 3px;
                    }
                     &::-webkit-scrollbar-track {
                      background-color: rgba(0, 0, 0, 0.1);
                    }
                }

                .popup-title {
                    font-size: 26px; /* Reduced size */
                    font-weight: bold;
                    margin-bottom: 15px; /* Reduced margin */
                    margin-top: 0;
                    color: white;
                    line-height: 1.2;
                }

                .popup-image-wrapper {
                    margin-bottom: 20px; /* Reduced margin */
                    position: relative;
                    border-radius: 6px;
                    overflow: hidden;
                    line-height: 0;
                }

                .popup-description {
                    font-size: 16px; /* Reduced size */
                    line-height: 1.5; /* Adjusted line height */
                    margin: 0 auto 25px auto; /* Reduced margin */
                    color: white;
                    max-width: 400px; /* Adjust max-width relative to container */
                }

                .popup-button {
                    display: inline-block;
                    background: white;
                    color: #FF7701;
                    padding: 12px 24px; /* Reduced padding */
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 17px; /* Reduced size */
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 0;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .popup-button:hover {
                    transform: translateY(-2px); /* Slightly less movement */
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Adjusted shadow */
                    background: #f8f8f8;
                }

                /* Responsive Adjustments for smaller base size */
                @media (max-width: 480px) {
                     .popup-overlay {
                         padding: 10px; /* Even less padding */
                     }
                    .popup-container {
                        max-width: 95%; /* Allow it to fill more on small screens */
                        max-height: 95vh;
                    }
                     .popup-scroll-content {
                        padding: 20px 20px 15px 20px; /* Keep this padding */
                    }
                    .popup-title {
                        font-size: 22px; /* Further reduce */
                        margin-bottom: 12px;
                    }
                     .popup-image-wrapper {
                        margin-bottom: 15px;
                    }
                    .popup-description {
                        font-size: 14px; /* Further reduce */
                        margin-bottom: 20px;
                    }
                    .popup-button {
                        font-size: 15px; /* Further reduce */
                        padding: 10px 20px; /* Further reduce */
                        width: 85%; /* Adjust width */
                        max-width: 280px; /* Adjust max width */
                    }
                     .close-button {
                        top: 6px;
                        right: 6px;
                        width: 26px;
                        height: 26px;
                        line-height: 26px;
                        font-size: 22px; /* Further reduce */
                    }
                }
            `}</style>
        </div>
    );
}