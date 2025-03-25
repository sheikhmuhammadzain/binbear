import React, { useEffect } from 'react';
import Image from 'next/image';

export default function WelcomePopup({ onClose }) {
    useEffect(() => {
        // Prevent scrolling when popup is shown
        document.body.style.overflow = 'hidden';
        
        return () => {
            // Re-enable scrolling when popup is closed
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-button" onClick={onClose}>×</button>
                
                <div className="popup-content">
                    <h2 className="popup-title">What is Your Time Worth?</h2>
                    
                    <div className="popup-image-wrapper">
                        <img 
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                            alt="Take back your time" 
                            className="popup-main-image"
                            loading="eager"
                            width="550"
                            height="300"
                            style={{ width: '100%', height: 'auto' }}
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
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 10vh;
                    z-index: 9999;
                }
                
                .popup-container {
                    background-color: #FF7701;
                    width: 90%;
                    max-width: 550px;
                    border-radius: 8px;
                    position: relative;
                    padding: 20px;
                    color: white;
                    text-align: center;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
                    transform: translateY(0);
                    animation: popup-animation 0.5s ease;
                }
                
                @keyframes popup-animation {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .close-button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 28px;
                    font-weight: bold;
                    cursor: pointer;
                    z-index: 1;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    transition: transform 0.2s ease;
                }

                .close-button:hover {
                    transform: scale(1.1);
                }
                
                .popup-title {
                    font-size: 36px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    margin-top: 10px;
                    color: white;
                    text-transform: none;
                }
                
                .popup-image-wrapper {
                    margin: 0 -20px;
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                }
                
                .popup-main-image {
                    display: block;
                    object-fit: cover;
                }
                
                .popup-description {
                    font-size: 18px;
                    line-height: 1.5;
                    margin: 20px 0;
                    color: white;
                }
                
                .popup-button {
                    display: inline-block;
                    background: white;
                    color: #FF7701;
                    padding: 14px 28px;
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 20px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                
                .popup-button:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    background: #f8f8f8;
                }
                
                @media (max-width: 768px) {
                    .popup-container {
                        width: 95%;
                        padding: 15px;
                    }
                    
                    .popup-overlay {
                        padding-top: 5vh;
                    }
                    
                    .popup-title {
                        font-size: 28px;
                        margin-bottom: 15px;
                    }
                    
                    .popup-description {
                        font-size: 16px;
                        margin: 15px 0;
                    }
                    
                    .popup-button {
                        font-size: 18px;
                        padding: 12px 24px;
                    }
                }
                
                @media (max-width: 480px) {
                    .popup-overlay {
                        padding-top: 3vh;
                    }
                    
                    .popup-title {
                        font-size: 24px;
                    }
                    
                    .popup-description {
                        font-size: 14px;
                    }
                    
                    .popup-button {
                        font-size: 16px;
                        padding: 10px 20px;
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
} 