import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ hideBookNow, handleMobileMenuClose }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-content-area">
                        <div className="mobile-logo">
                            <Link href="/" className="d-flex">
                                <img src="/img/bear.png.png" alt="BinBear" />
                            </Link>
                        </div>
                        
                        {!hideBookNow && (
                            <div className="perfect-scroll">
                                <div className="mobile-menu-wrap mobile-header-border">
                                    <div className="d-flex justify-content-center mt-4 mb-4">
                                        <Link href="/booking" className="btn btn-brand text-white btn-shadow-brand hover-up">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="burger-icon burger-icon-white" onClick={handleMobileMenuClose}>
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                        
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="site-copyright">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "active" : ""}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand">
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" className="active">
                                                What we do
                                            </Link>
                                            <ul className={isActive.key == 1 ? "sidebar-submenu d-block" : "sidebar-submenu d-none"}>
                                                <li>
                                                    <Link href="/Residential" className="sidebar-menu-link">
                                                        Residential
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Commercial" className="sidebar-menu-link">
                                                        Commercial
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Item-we-take" className="sidebar-menu-link">
                                                        Items We Take
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Dumpster-Rental" className="sidebar-menu-link">
                                                        Dumpster Rental
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/history" className="sidebar-menu-link">
                                                        Our History
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 2 ? "active" : ""}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand">
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" className="active">
                                                How it works
                                            </Link>
                                            <ul className={isActive.key == 2 ? "sidebar-submenu d-block" : "sidebar-submenu d-none"}>
                                                <li>
                                                    <Link href="/how-it-works" className="sidebar-menu-link">
                                                        Process
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/faq" className="sidebar-menu-link">
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/testimonials" className="sidebar-menu-link">
                                                        Testimonials
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 3 ? "active" : ""}>
                                            <span onClick={() => handleToggle(3)} className="menu-expand">
                                                <i className="fi-rr-angle-small-down"></i>
                                            </span>
                                            <Link href="#" className="active">
                                                Pricing
                                            </Link>
                                            <ul className={isActive.key == 3 ? "sidebar-submenu d-block" : "sidebar-submenu d-none"}>
                                                <li>
                                                    <Link href="/pricing/residential" className="sidebar-menu-link">
                                                        Residential Pricing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing/commercial" className="sidebar-menu-link">
                                                        Commercial Pricing
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pricing/custom" className="sidebar-menu-link">
                                                        Custom Quote
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/blog" className="sidebar-menu-link">
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about" className="sidebar-menu-link">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="sidebar-menu-link">
                                                Contact
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/login" className="sidebar-menu-link">
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .mobile-header-active {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 80%;
                    max-width: 320px;
                    height: 100%;
                    z-index: 9999;
                    background-color: #000;
                    color: #fff;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    transition: right 0.3s ease;
                }
                
                #wrapper.sidebar-visible .mobile-header-active {
                    right: 0;
                    display: block !important;
                    visibility: visible !important;
                }
                
                .mobile-header-wrapper-inner {
                    height: 100%;
                    overflow-y: auto;
                }
                
                .mobile-header-content-area {
                    padding: 15px;
                }
                
                .mobile-logo {
                    margin-bottom: 20px;
                    text-align: center;
                }
                
                .mobile-logo img {
                    max-width: 150px;
                    height: auto;
                }
                
                .burger-icon {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
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
                    top: 0px;
                    transform: rotate(45deg) !important;
                    top: 10px !important;
                }
                
                .burger-icon-mid {
                    opacity: 0 !important;
                }
                
                .burger-icon-bottom {
                    top: 20px;
                    transform: rotate(-45deg) !important;
                    top: 10px !important;
                }
                
                .mobile-menu {
                    padding: 0;
                    list-style: none;
                }
                
                .mobile-menu li {
                    position: relative;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .mobile-menu li a {
                    display: block;
                    padding: 12px 0;
                    color: #fff;
                    text-decoration: none;
                    font-size: 16px;
                }
                
                .menu-expand {
                    position: absolute;
                    right: 0;
                    top: 6px;
                    padding: 5px;
                    cursor: pointer;
                    color: #fff;
                }
                
                .sidebar-submenu {
                    padding-left: 15px;
                    list-style: none;
                }
                
                .sidebar-submenu li {
                    border-bottom: none;
                }
                
                .sidebar-menu-link {
                    color: #ccc !important;
                    font-size: 14px !important;
                }
                
                .btn-brand {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                }
            `}</style>
        </>
    );
};

export default Sidebar;