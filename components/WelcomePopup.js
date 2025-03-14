import { useState, useEffect } from 'react';

export default function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the popup has been shown before
        const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');
        
        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true);
                // Set flag in localStorage so it doesn't show again in this session
                localStorage.setItem('hasSeenWelcomePopup', 'true');
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    // For testing - reset the popup so it shows again
    const resetPopup = () => {
        localStorage.removeItem('hasSeenWelcomePopup');
        window.location.reload();
    };

    if (!isOpen) {
        // Show a small reset button for testing purposes
        return (
            <div className="reset-popup-container">
                <button onClick={resetPopup} className="reset-popup-button">
                    Reset Popup (Testing)
                </button>
                <style jsx>{`
                    .reset-popup-container {
                        position: fixed;
                        bottom: 10px;
                        left: 10px;
                        z-index: 9998;
                    }
                    .reset-popup-button {
                        background-color: #f1f1f1;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        padding: 5px 10px;
                        font-size: 12px;
                        cursor: pointer;
                        opacity: 0.7;
                    }
                    .reset-popup-button:hover {
                        opacity: 1;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-button" onClick={closePopup}>×</button>
                
                <div className="popup-content">
                    <h2 className="popup-title">What is Your Time Worth?</h2>
                    
                    <div className="popup-image-container">
                        <div className="popup-image-left">
                            {/* Placeholder for worker image */}
                            <div className="placeholder-image worker-image"></div>
                        </div>
                        <div className="popup-arrow">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ffffff">
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </div>
                        <div className="popup-image-right">
                            {/* Placeholder for family image */}
                            <div className="placeholder-image family-image"></div>
                        </div>
                    </div>
                    
                    <div className="popup-banner">
                        <h3>TAKE BACK YOUR TIME!</h3>
                    </div>
                    
                    <p className="popup-description">
                        Let Junk King take care of loading, sorting, donating
                        and sitting in the line at the recycle center for
                        everything else - while you enjoy what you really
                        want to do!
                    </p>
                    
                    <a href="/Booking" className="popup-button">
                        Book Now & Save $20*
                    </a>
                </div>
            </div>
            
            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }
                
                .popup-container {
                    background-color: #ed1c24;
                    width: 90%;
                    max-width: 500px;
                    border-radius: 8px;
                    position: relative;
                    padding: 20px;
                    color: white;
                    text-align: center;
                }
                
                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 1;
                }
                
                .popup-title {
                    font-size: 32px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                
                .popup-image-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                
                .popup-image-left, .popup-image-right {
                    width: 45%;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                .placeholder-image {
                    width: 100%;
                    height: 150px;
                    border-radius: 8px;
                }
                
                .worker-image {
                    background-color: #333;
                    background-image: linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444),
                    linear-gradient(45deg, #444 25%, transparent 25%, transparent 75%, #444 75%, #444);
                    background-size: 20px 20px;
                    background-position: 0 0, 10px 10px;
                }
                
                .family-image {
                    background-color: #4a7;
                    background-image: linear-gradient(45deg, #5b8 25%, transparent 25%, transparent 75%, #5b8 75%, #5b8),
                    linear-gradient(45deg, #5b8 25%, transparent 25%, transparent 75%, #5b8 75%, #5b8);
                    background-size: 20px 20px;
                    background-position: 0 0, 10px 10px;
                }
                
                .popup-arrow {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .popup-banner {
                    background-color: white;
                    color: #ed1c24;
                    padding: 10px;
                    margin: 15px 0;
                    border-radius: 4px;
                }
                
                .popup-banner h3 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: bold;
                }
                
                .popup-description {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                }
                
                .popup-button {
                    display: inline-block;
                    background: linear-gradient(to bottom, #4CAF50, #2E7D32);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 18px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 10px;
                }
                
                .popup-button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                }
                
                @media (max-width: 768px) {
                    .popup-title {
                        font-size: 24px;
                    }
                    
                    .popup-banner h3 {
                        font-size: 20px;
                    }
                    
                    .popup-button {
                        font-size: 16px;
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </div>
    );
} 