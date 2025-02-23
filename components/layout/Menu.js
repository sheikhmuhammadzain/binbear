
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
            <ul className={`main-menu ${isMobileMenuOpen ? "mobile-open" : ""}`}style={{  listStyle:'none',padding:'0px',margin:'0px',background:'black',color:'white',height:'100%'
   }}>
                {/* "What We Do" Menu */}
                <li className="has-children">
                    <Link
                        className={`active ${isActive("/")}`}
                        href="/"
                        style={{ color: "white" }}
                    >
                        What We Do
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Item-we-take">Items we take</Link>
                        </li>
                        <li>
                            <Link href="/history">Quick Junk Removal History</Link>
                        </li>
                        <li>
                            <Link href="/Recycle">We Recycle</Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                        <li>
                            <Link href="/">
                                
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* "How it Works" Menu */}
                <li className="has-children">
                    <Link
                        className={isActive("/workprocess")}
                        href="/Residential"
                        style={{ color: "white" }}
                    >
                        How It Works
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Residential">Residential</Link>
                        </li>
                       
                        <li>
                            <Link href="/Commercial">Commercial</Link>
                        </li>
                        <li>
                            <Link href="/pricing">Estimate pricing</Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                    </ul>
                </li>

                {/* "Pricing" Menu */}
                <li className="has-children">
                    <Link
                        className={isActive("/Estimate")}
                        href="/Estimate"
                        style={{ color: "white" }}
                    >
                        Pricing
                    </Link>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/Estimateprice">Book Online</Link>
                        </li>
                        <li>
                            <Link href="/jk-removal-price">
                                JK Removal Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/"></Link>
                        </li>
                    </ul>
                </li>

                {/* "More" Menu */}
               
            </ul>

            {/* Mobile menu toggle button */}
            <button className="burger-icon" onClick={handleMobileMenuToggle}>
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
            </button>
        </>
    );
}
