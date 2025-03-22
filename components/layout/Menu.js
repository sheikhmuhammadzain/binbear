import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Menu() {
    const router = useRouter();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu visibility
    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Check if the current route is active
    const isActive = (path) => (router.pathname === path ? "active" : "");

    return (
        <>
            <ul className={`main-menu ${isMobileMenuOpen ? "mobile-open" : ""}`} style={{
                listStyle: 'none',
                padding: '0',
                margin: '0',
                background: 'black',
                color: 'white',
                height: '100%',
                display: 'flex'
            }}>
                {/* "What We Do" Menu */}
                <li className="has-children">
                    <Link
                        className={`menu-item ${isActive("/")}`}
                        href="/"
                        style={{ color: "white" }}
                    >
                        What We Do
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Item-we-take" className="menu-link">Items we take</Link>
                        </li>
                        <li>
                            <Link href="/history" className="menu-link">Quick Junk Removal History</Link>
                        </li>
                        <li>
                            <Link href="/Recycle" className="menu-link">We Recycle</Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link"></Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link"></Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link"></Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link">
                                
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* "How it Works" Menu */}
                <li className="has-children">
                    <Link
                        className={`menu-item ${isActive("/workprocess")}`}
                        href="/Residential"
                        style={{ color: "white" }}
                    >
                        How It Works
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Residential" className="menu-link">Residential</Link>
                        </li>
                       
                        <li>
                            <Link href="/Commercial" className="menu-link">Commercial</Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="menu-link">Estimate pricing</Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link"></Link>
                        </li>
                    </ul>
                </li>

                {/* "Pricing" Menu */}
                <li className="has-children">
                    <Link
                        className={`menu-item ${isActive("/Estimate")}`}
                        href="/Estimate"
                        style={{ color: "white" }}
                    >
                        Pricing
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Estimateprice" className="menu-link">Book Online</Link>
                        </li>
                        <li>
                            <Link href="/jk-removal-price" className="menu-link">
                                JK Removal Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="menu-link"></Link>
                        </li>
                    </ul>
                </li>

                {/* "More" Menu */}
               
                {/* "Premium UI" Menu */}
                <li className="has-children">
                    <Link
                        className={`menu-item ${isActive("/premium-ui") || isActive("/button-showcase") || isActive("/card-showcase") ? "active" : ""}`}
                        href="/premium-ui"
                        style={{ color: "white" }}
                    >
                        Premium UI
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/premium-ui" className="menu-link">Overview</Link>
                        </li>
                        <li>
                            <Link href="/button-showcase" className="menu-link">Button Showcase</Link>
                        </li>
                        <li>
                            <Link href="/card-showcase" className="menu-link">Card Showcase</Link>
                        </li>
                    </ul>
                </li>
            </ul>

            {/* Mobile menu toggle button */}
            <button className="burger-icon" onClick={handleMobileMenuToggle}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
            </button>

            <style jsx>{`
                .main-menu {
                    gap: 10px;
                }
                
                .main-menu > li {
                    position: relative;
                }
                
                .menu-item {
                    display: block;
                    padding: 8px 12px;
                    font-size: 15px;
                    font-weight: 500;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                }
                
                .menu-item:hover, .menu-item.active {
                    color: #FF7F00 !important;
                }
                
                .has-children {
                    position: relative;
                }
                
                .has-children:hover .sub-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                
                .sub-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: white;
                    border-radius: 4px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    padding: 8px 0;
                    min-width: 200px;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                    z-index: 100;
                }
                
                .menu-link {
                    display: block;
                    padding: 6px 12px;
                    color: #333;
                    font-size: 14px;
                    transition: all 0.2s ease;
                }
                
                .menu-link:hover {
                    color: #FF7F00;
                    background-color: rgba(255, 127, 0, 0.05);
                    padding-left: 16px;
                }
                
                @media (max-width: 1199px) {
                    .main-menu {
                        display: none;
                    }
                    
                    .main-menu.mobile-open {
                        display: block;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 280px;
                        height: 100vh;
                        background-color: white;
                        z-index: 1000;
                        padding: 20px;
                        overflow-y: auto;
                    }
                    
                    .menu-item {
                        color: #333 !important;
                        padding: 10px 0;
                        border-bottom: 1px solid #eee;
                    }
                    
                    .sub-menu {
                        position: static;
                        opacity: 1;
                        visibility: visible;
                        transform: none;
                        box-shadow: none;
                        padding: 0 0 0 15px;
                        min-width: auto;
                    }
                    
                    .menu-link {
                        padding: 8px 0;
                        border-bottom: none;
                    }
                }
            `}</style>
        </>
    );
}
