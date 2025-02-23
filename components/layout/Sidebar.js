
import Link from "next/link";
import { useState } from "react";

export default function Sidebar({ openClass, handleMobileMenuClose }) {
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
                    <div className="mobile-logo">
                        <Link
                            className="btn btn-brand-1 hover-up"
                            href="/Booking"
                            style={{ backgroundColor: "#FF7701" }}
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                ></path>
                            </svg>
                             Book Now
                        </Link>
                    </div>
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
                                            <li><a href="/Item-we-take">Item we take</a></li>
                                            <li><a href="/history">Quick Junk Removal History</a></li>
                                            <li><a href="/Recycle">Recycle</a></li>
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
                                            <li><a href="/Residential">Residential</a></li>
                                            
                                            <li><a href="/Commercial">Commercial</a></li>
                                            <li><a href="/pricing">Estimate pricing</a></li>
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
                                            <li><a href="/Estimateprice">Estimate Pricing</a></li>
                                            <li><a href="/jk-removal-price">JK Removal Pricing</a></li>
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
           
        </div>
    );
}