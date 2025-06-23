import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Footer = () => {
    const [showBookingButton, setShowBookingButton] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Check if zip code was entered
        const hasEnteredZip = sessionStorage.getItem('hasEnteredZip');
        if (hasEnteredZip === 'true') {
            setShowBookingButton(true);
        }
    }, []);
    
    const handleSubscribe = (e) => {
        e.preventDefault();
        setIsSubscribed(true);
        setTimeout(() => {
            setIsSubscribed(false);
        }, 3000);
    };

    return (
        <>
            <footer className="layout-premium-footer">
                    <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="footer-logo mb-4">
                                    <Link href="/" className="logo-link">
                                        <Image src="/img/bear.png.png" alt="BinBear" width={100} height={60} />
                                </Link>
                                </div>
                                <p className="footer-desc mb-4">
                                    BinBear provides premium waste management services for residential and commercial properties. Our mission is to make waste disposal easy, efficient, and environmentally friendly.
                                </p>
                                {/* <div className="social-links">
                                    <a href="#" className="social-link">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social-link">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div> */}
                            </div>

                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h4 className="footer-title">Services</h4>
                                <ul className="footer-links">
                                    <li><Link href="/services/residential" className="footer-link">Residential</Link></li>
                                    <li><Link href="/services/commercial" className="footer-link">Commercial</Link></li>
                                    <li><Link href="/services/recycling" className="footer-link">Recycling</Link></li>
                                    <li><Link href="/services/dumpster-rental" className="footer-link">Dumpster Rental</Link></li>
                                    <li><Link href="/services/junk-removal" className="footer-link">Junk Removal</Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h4 className="footer-title">Company</h4>
                                <ul className="footer-links">
                                    <li><Link href="/about" className="footer-link">About Us</Link></li>
                                    <li><Link href="/blog" className="footer-link">Blog</Link></li>
                                    <li><Link href="/how-it-works" className="footer-link">How It Works</Link></li>
                                    <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
                                  
                                    <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <h4 className="footer-title">Newsletter</h4>
                                <p className="mb-4">Subscribe to our newsletter to receive updates and special offers.</p>
                                <div className="newsletter-form">
                                    {!isSubscribed ? (
                                        <form onSubmit={handleSubscribe}>
                                            <div className="form-group">
                                                <input 
                                                    type="email" 
                                                    className="form-premium-input" 
                                                    placeholder="Your email address" 
                                                    required 
                                                />
                                                <button type="submit" className="btn-premium">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="alert-premium alert-premium-success">
                                            Thank you for subscribing!
                            </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="divider-premium"></div>
                    
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <p className="copyright">
                                    &copy; {new Date().getFullYear()} BinBear. All rights reserved.
                                </p>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <div className="footer-bottom-links">
                                    <Link href="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
                                    <Link href="/terms-of-service" className="footer-bottom-link">Terms of Service</Link>
                                    <Link href="/sitemap" className="footer-bottom-link">Sitemap</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* {showBookingButton && (
                    <div className=\"booking-button-container\">
                        <Link href=\"/booking\" className=\"btn-premium btn-premium-lg\">
                            <i className=\"fas fa-calendar-alt me-2\"></i>
                            Book Now
                        </Link>
                    </div>
                )} */}
            </footer>

            <style jsx>{`
                .layout-premium-footer {
                    background-color: #212121;
                    color: white;
                    padding-top: 60px;
                }
                
                .footer-top {
                    padding: 0 0 30px;
                }
                
                .footer-logo {
                    margin-bottom: 20px;
                }
                
                .footer-desc {
                    color: #b0b0b0;
                    line-height: 1.6;
                    font-size: 15px;
                }
                
                .social-links {
                    display: flex;
                    gap: 15px;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: white;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background-color: #FF7F00;
                    transform: translateY(-3px);
                }
                
                .footer-title {
                    color: white;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 25px;
                    position: relative;
                    padding-bottom: 10px;
                }
                
                .footer-title::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 40px;
                    height: 2px;
                    background-color: #FF7F00;
                }
                
                .footer-links {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-links li {
                    margin-bottom: 12px;
                }
                
                .footer-link {
                    color: #b0b0b0;
                    transition: all 0.3s ease;
                    font-size: 15px;
                    display: inline-block;
                }
                
                .footer-link:hover {
                    color: #FF7F00;
                    transform: translateX(5px);
                }
                
                .logo-link {
                    display: inline-block;
                }
                
                .newsletter-form .form-group {
                    position: relative;
                }
                
                .form-premium-input {
                    width: 100%;
                    padding: 12px 15px;
                    border-radius: 6px;
                    border: none;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                
                .newsletter-form .form-premium-input {
                    padding-right: 120px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                }
                
                .newsletter-form .form-premium-input::placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                
                .newsletter-form .form-premium-input:focus {
                    background-color: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.3);
                    outline: none;
                }
                
                .newsletter-form .btn-premium {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    padding: 8px 15px;
                    font-size: 14px;
                    background-color: #FF7F00;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .newsletter-form .btn-premium:hover {
                    background-color: #e67600;
                }
                
                .divider-premium {
                    height: 1px;
                    background-color: rgba(255, 255, 255, 0.1);
                    margin: 10px 0;
                }
                
                .footer-bottom {
                    padding: 20px 0;
                }
                
                .copyright {
                    color: #b0b0b0;
                    font-size: 14px;
                    margin: 0;
                }
                
                .footer-bottom-links {
                    display: flex;
                    justify-content: flex-end;
                    gap: 20px;
                }
                
                .footer-bottom-link {
                    color: #b0b0b0;
                    font-size: 14px;
                    transition: all 0.3s ease;
                }
                
                .footer-bottom-link:hover {
                    color: #FF7F00;
                }
                
                /* .booking-button-container {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 99;
                }
                
                .booking-button-container .btn-premium {
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.4);
                } */
                
                .alert-premium {
                    padding: 12px 15px;
                    border-radius: 6px;
                    margin-bottom: 20px;
                    font-size: 14px;
                }
                
                .alert-premium-success {
                    background-color: rgba(25, 135, 84, 0.2);
                    color: #198754;
                    border: 1px solid rgba(25, 135, 84, 0.3);
                }
                
                .btn-premium-lg {
                    display: inline-flex;
                    align-items: center;
                    padding: 12px 24px;
                    background-color: #FF7F00;
                    color: white;
                    font-weight: 600;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-premium-lg:hover {
                    background-color: #e67600;
                    transform: translateY(-3px);
                    color: white;
                }
                
                @media (max-width: 991px) {
                    .footer-top {
                        padding: 0 0 20px;
                    }
                }
                
                @media (max-width: 767px) {
                    .footer-bottom-links {
                        justify-content: center;
                        margin-top: 15px;
                    }
                    
                    .copyright {
                        text-align: center;
                    }
                    
                    /* .booking-button-container {
                        bottom: 20px;
                        right: 20px;
                    } */
                }
                
                @media (max-width: 576px) {
                    .footer-top {
                        padding: 0 0 20px;
                    }
                    
                    .footer-title {
                        margin-bottom: 20px;
                    }
                    
                    .footer-bottom-links {
                        gap: 15px;
                        flex-wrap: wrap;
                    }
                }
            `}</style>
        </>
    );
}

export default Footer;
