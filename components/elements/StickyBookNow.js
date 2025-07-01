import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyBookNow() {
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
                <div className="sticky-book-container">
                    {/* Logo */}
                    <div className="logo-container">
                        <img
                            src="/img/logo.png"
                            alt="BinBear Logo"
                            className="logo-image"
                        />
                    </div>

                    {/* Book Now Button */}
                    <Link href="/Booking" className="book-now-btn" style={{ backgroundColor: '#FF7F00', color: 'white' }}>
                        Book Now
                    </Link>
                </div>
            )}

            <style jsx>{`
                .sticky-book-container {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: transparent;
                    animation: slideIn 0.3s ease-out;
                }

                .logo-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 12px;
                }

                .logo-image {
                    width: 100px;
                    height: 100px;
                    object-fit: contain;
                    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
                }

                .book-now-btn {
                    font-size: 18px;
                    font-weight: bold;
                    text-decoration: none;
                    text-align: center;
                    padding: 15px 30px;
                    border-radius: 30px;
                    cursor: pointer;
                    min-width: 150px;
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.4);
                    transition: all 0.3s ease;
                    border: none;
                }

                .book-now-btn:hover {
                    background-color: #e67600 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.5);
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .sticky-book-container {
                        bottom: 20px;
                        right: 20px;
                    }

                    .logo-image {
                        width: 70px;
                        height: 70px;
                    }

                    .book-now-btn {
                        font-size: 16px;
                        padding: 12px 25px;
                        min-width: 130px;
                    }
                }

                @media (max-width: 480px) {
                    .sticky-book-container {
                        bottom: 15px;
                        right: 15px;
                    }

                    .logo-image {
                        width: 60px;
                        height: 60px;
                    }

                    .book-now-btn {
                        font-size: 14px;
                        padding: 10px 20px;
                        min-width: 110px;
                    }
                }
            `}</style>
        </>
    );
} 