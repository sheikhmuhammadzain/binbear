import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookNowButton() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY < 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            {hasScrolled && (
                <div className="sticky-container">
                    {/* Image Above the Button */}
                    <div className="image-container">
                        <img 
                            src="/img/logo.png" 
                            alt="Discount Offer"
                            className="promo-image"
                        />
                    </div>

                    {/* Book Now Button */}
                    <Link href="/Booking" className="book-now-btn"style={{backgroundColor:' #FF7F00',  width: '150px', height: '50px',justifyContent:'center',alignItems:'center',display:'flex',right: '20px'}}>
                        Book Now
                    </Link>
                </div>
            )}

            <style jsx>{`
                /* Transparent container for image + button */
                .sticky-container {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: transparent; /* Transparent container */
                    padding: 10px;
                    border-radius: 10px;
                }

                /* Image Styling */
                .image-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 8px; /* Space between image and button */
                }

                .promo-image {
                    max-width: 100px; /* Adjust image size */
                    height: auto;
                }

                /* Book Now Button */
                .book-now-btn {
                    background-color: #FF7F00; /* Orange button */
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    text-decoration: none;
                    text-align: center;
                    padding: 12px 24px;
                    border-radius: 30px;
                    cursor: pointer;
                    width: 150px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: background 0.3s ease, transform 0.2s ease;
                }

                .book-now-btn:hover {
                    background-color: #e67600;
                    transform: scale(1.05);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .sticky-container {
                        bottom: 15px;
                        right: 15px;
                    }

                    .promo-image {
                        max-width: 80px;
                    }

                    .book-now-btn {
                        font-size: 14px;
                        padding: 10px 20px;
                        width: 130px;
                    }
                }
            `}</style>
        </>
    );
}
