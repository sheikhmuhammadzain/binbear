import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import Image from 'next/image';

const Header = ({ scroll, handleMobileMenuOpen, hideBookNow }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <header className={`header sticky-bar ${scroll ? "stick" : ""}`}>
                <div className="box-bar bg-grey-900" style={{backgroundColor: 'black'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8 col-sm-7 col-7">
                                <Link className="phone-icon mr-30" href="tel:+01-246-357">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                    </svg>
                                </Link>
                                <Link className="email-icon" href="mailto:contact@binbear.com">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                    </svg>
                                    contact@binbear.com
                                </Link>
                            </div>
                            <div className="col-lg-5 col-md-4 col-sm-5 col-5 text-end">
                                <Link
                                    className="hover-pointer"
                                    href="/contact"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                    }}
                                >
                                    Apply Locally
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <Image src="/img/bear.png.png" alt="BinBear" width={100} height={44} />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <Menu />
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenuOpen}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            {!hideBookNow && (
                                <div className="book-now-container">
                                    <Link 
                                        className="btn-premium btn-premium-primary" 
                                        href="/Booking"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .header {
                    position: relative;
                    z-index: 100;
                    background: black;
                    width: 100%;
                }
                
                .box-bar {
                    padding: 6px 0;
                }

                .sticky-bar.stick {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 100;
                    background: black;
                    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
                }
                
                .main-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 0;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                }
                
                .header-logo {
                    margin-right: 20px;
                }
                
                .header-nav {
                    display: flex;
                    align-items: center;
                }

                .book-now-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 15px;
                }

                .btn-premium {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px 20px;
                    font-weight: bold;
                    text-decoration: none;
                    border-radius: 6px;
                    transition: all 0.3s ease;
                    text-align: center;
                    white-space: nowrap;
                    
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
                }

                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: white;
                }

                .btn-premium:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
                    color: white;
                }
                
                .phone-icon, .email-icon {
                    color: white;
                    display: inline-flex;
                    align-items: center;
                    margin-right: 15px;
                    font-size: 14px;
                }
                
                .phone-icon svg, .email-icon svg {
                    width: 16px;
                    height: 16px;
                    margin-right: 5px;
                }
                
                .burger-icon {
                    cursor: pointer;
                    width: 24px;
                    height: 18px;
                    position: relative;
                    margin-left: 15px;
                }
                
                .burger-icon span {
                    display: block;
                    position: absolute;
                    height: 2px;
                    width: 100%;
                    background: white;
                    opacity: 1;
                    left: 0;
                    transform: rotate(0deg);
                    transition: .25s ease-in-out;
                }
                
                .burger-icon-top {
                    top: 0;
                }
                
                .burger-icon-mid {
                    top: 8px;
                }
                
                .burger-icon-bottom {
                    top: 16px;
                }

                @media (max-width: 991px) {
                    .header-logo {
                        margin-right: 10px;
                    }
                }

                @media (max-width: 768px) {
                    .book-now-container {
                        margin: 0;
                    }
                    
                    .btn-premium {
                        padding: 8px 16px;
                        min-width: 100px;
                        font-size: 14px;
                    }
                    
                    .main-header {
                        padding: 8px 0;
                    }
                    
                    .phone-icon, .email-icon {
                        margin-right: 8px;
                    }
                }
                
                @media (max-width: 576px) {
                    .email-icon {
                        display: none;
                    }
                    
                    .phone-icon {
                        margin-right: 0;
                    }
                    
                    .phone-icon svg, .email-icon svg {
                        width: 14px;
                        height: 14px;
                        margin-right: 3px;
                    }
                    
                    .header-logo {
                        margin-right: 5px;
                    }
                }
            `}</style>
        </>
    )
}

export default Header
 