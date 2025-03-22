import Link from "next/link";
import { useState } from "react";

const Sidebar = ({ hideBookNow }) => {
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
                                <img src="/assets/imgs/logo.png" alt="BinBear" />
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
                        
                        <div className="burger-icon burger-icon-white">
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
                                                    <Link href="/services/residential" className="sidebar-menu-link">
                                                        Residential
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/commercial" className="sidebar-menu-link">
                                                        Commercial
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/recycling" className="sidebar-menu-link">
                                                        Recycling
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/dumpster-rental" className="sidebar-menu-link">
                                                        Dumpster Rental
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/junk-removal" className="sidebar-menu-link">
                                                        Junk Removal
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
                    left: 0;
                    width: 320px;
                    height: 100vh;
                    z-index: 999;
                    background-color: #fff;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }
                
                .mobile-header-active.sidebar-visible {
                    transform: translateX(0);
                }
                
                .mobile-header-wrapper-inner {
                    height: 100%;
                    overflow-y: auto;
                }
                
                .mobile-header-content-area {
                    padding: 20px;
                }
                
                .mobile-logo {
                    padding: 10px 0;
                    text-align: center;
                    border-bottom: 1px solid #eee;
                    margin-bottom: 20px;
                }
                
                .mobile-logo img {
                    max-width: 150px;
                }
                
                .burger-icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                }
                
                .burger-icon span {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: #333;
                    margin: 6px 0;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .mobile-menu li {
                    position: relative;
                    border-bottom: 1px solid #eee;
                }
                
                .mobile-menu li a {
                    display: block;
                    padding: 12px 0;
                    color: #333;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu li.active > a {
                    color: #FF7F00;
                }
                
                .menu-expand {
                    position: absolute;
                    right: 0;
                    top: 12px;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-size: 18px;
                    transition: all 0.3s ease;
                }
                
                .mobile-menu li.active .menu-expand i {
                    transform: rotate(180deg);
                }
                
                .sidebar-submenu {
                    list-style: none;
                    padding: 0 0 0 15px;
                    margin: 0;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .sidebar-submenu li {
                    border-bottom: none;
                }
                
                .sidebar-menu-link {
                    font-size: 14px !important;
                    padding: 8px 0 !important;
                    color: #666 !important;
                }
                
                .sidebar-menu-link:hover {
                    color: #FF7F00 !important;
                    padding-left: 5px !important;
                }
                
                .btn-brand {
                    background-color: #FF7F00;
                    border-color: #FF7F00;
                    padding: 10px 25px;
                    border-radius: 5px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }
                
                .btn-shadow-brand {
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.3);
                }
                
                .hover-up:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </>
    );
};

export default Sidebar;