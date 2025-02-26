import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ openClass, handleMobileMenuClose, hideBookNow }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        setIsActive((prevState) =>
            prevState.key === key
                ? { status: false, key: "" }
                : { status: true, key }
        );
    };

    return (
        <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
            <div className="mobile-header-wrapper-inner">
                <div className="mobile-header-content-area">
                    {!hideBookNow && (
                        <div className="mobile-logo">
                            <Link
                                className="btn btn-brand-1 hover-up"
                                href="/Booking"
                                style={{ backgroundColor: "#FF7701" }}
                            >
                                Book Now
                            </Link>
                        </div>
                    )}
                    
                    <div className="burger-icon burger-close" onClick={handleMobileMenuClose}>
                        <span className="burger-icon-top" />
                        <span className="burger-icon-mid" />
                        <span className="burger-icon-bottom" />
                    </div>
                    
                    <div className="perfect-scroll">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav className="mt-8">
                                <ul className="mobile-menu font-heading">
                                    <li
                                        className={isActive.key === 1 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(1)}
                                    >
                                        <span className="menu-expand">
                                            <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href="/">What we do</span>
                                        <ul
                                            className={isActive.key === 1 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
                                            <li><Link href="/Item-we-take">Item we take</Link></li>
                                            <li><Link href="/history">Quick Junk Removal History</Link></li>
                                            <li><Link href="/Recycle">Recycle</Link></li>
                                        </ul>
                                    </li>

                                    <li
                                        className={isActive.key === 2 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(2)}
                                    >
                                        <span className="menu-expand">
                                            <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href="">How it works</span>
                                        <ul
                                            className={isActive.key === 2 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
                                            <li><Link href="/Residential">Residential</Link></li>
                                            <li><Link href="/Commercial">Commercial</Link></li>
                                            <li><Link href="/pricing">Estimate pricing</Link></li>
                                        </ul>
                                    </li>

                                    <li
                                        className={isActive.key === 3 ? "has-children active" : "has-children"}
                                        onClick={() => handleToggle(3)}
                                    >
                                        <span className="menu-expand">
                                            <svg
                                                className="w-6 h-6 icon-16"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span href="#">Pricing</span>
                                        <ul
                                            className={isActive.key === 3 ? "sub-menu d-block" : "sub-menu d-none"}
                                        >
                                            <li><Link href="/Estimateprice">Estimate Pricing</Link></li>
                                            <li><Link href="/jk-removal-price">JK Removal Pricing</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="site-copyright color-grey-400 mt-0">
                            <div className="box-download-app">
                                <p className="font-xs color-grey-900 mb-25">
                                    Download our Apps and get an extra 15% Discount on your first order…!
                                </p>
                            </div>
                            <div className="mb-0">
                                <span className="font-xs color-grey-500">
                                    ©Transp Official {new Date().getFullYear()}. All rights reserved.
                                </span>
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
                    width: 300px;
                    height: 100vh;
                    z-index: 1000;
                    background: white;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease;
                }

                .mobile-header-active.sidebar-visible {
                    transform: translateX(0);
                }

                .burger-close {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    cursor: pointer;
                }

                .mobile-menu {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .has-children {
                    position: relative;
                    padding: 10px 15px;
                    border-bottom: 1px solid #eee;
                }

                .menu-expand {
                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                }

                .sub-menu {
                    list-style: none;
                    padding-left: 15px;
                }

                .sub-menu.d-none {
                    display: none;
                }

                .sub-menu.d-block {
                    display: block;
                }

                .btn-brand-1 {
                    display: inline-block;
                    padding: 10px 20px;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    margin: 15px;
                    text-align: center;
                    width: calc(100% - 30px);
                }

                .btn-brand-1:hover {
                    opacity: 0.9;
                }
            `}</style>
        </div>
    );
}