import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import Image from "next/image";

export default function Header2({ handleMobileMenuOpen, hideBookNow }) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
   


    return (
        <>
            <div className="box-bar bg-grey-900" style={{backgroundColor: 'black'}}>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-8 col-sm-5 col-4">
                            <Link className="phone-icon mr-45" href="tel:+01-246-357">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                </svg>
                            </Link>
                            <Link className="email-icon" href="mailto:contact@transp.eu.com">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                </svg>
                                contact@junking.eu.com
                            </Link>
                        </div>
                        <div className="col-lg-5 col-md-4 col-sm-7 col-8 text-end">
                            <Link
                                className="hover-pointer"
                                href="/contact"
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                }}
                            >
                                Apply Locally
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}>
                <div className="container" style={{backgroundColor: 'black', color: 'white', width: '100%', maxWidth: '3000px'}}>
                    <div className="main-header" style={{backgroundColor: 'black', marginLeft: '39px', marginInlineEnd: '50px'}}>
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <Image src="/img/bear.png.png" alt="Ecom" width={150} height={60} />
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
                                        className="btn-book-now" 
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
                }

                .sticky-bar.stick {
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 100;
                    background: black;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
                }

                .book-now-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 20px;
                }

                .btn-book-now {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #FF7F00;
                    color: white;
                    font-weight: bold;
                    text-decoration: none;
                    border-radius: 5px;
                    transition: all 0.3s ease;
                    text-align: center;
                    min-width: 120px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                .btn-book-now:hover {
                    background-color: #e67600;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
                }

                @media (max-width: 768px) {
                    .book-now-container {
                        margin: 10px 0;
                    }
                    
                    .btn-book-now {
                        width: 100%;
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </>
    );
}
