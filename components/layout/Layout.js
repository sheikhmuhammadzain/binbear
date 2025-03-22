import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Footer from './Footer'
import FooterNewsletter from "./FooterNewsletter"
import Header1 from './Header1'
import Header2 from './Header2'
import HeaderNewsletter from "./HeaderNewsletter"
import PageHead from './PageHead'
import Sidebar from './Sidebar'
import WelcomePopup from '../WelcomePopup'
import { useRouter } from 'next/router'

export default function Layout({ headerStyle, footerStyle, headTitle, children, topBarStyle }) {
    const router = useRouter();
    const [scroll, setScroll] = useState(0)
    const [openClass, setOpenClass] = useState('');
    const [hideBookNow, setHideBookNow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Clear hasSeenPopup for testing
        if (process.env.NODE_ENV !== 'production') {
            sessionStorage.removeItem('hasSeenPopup');
        }
        
        if (router.pathname === '/') {
            // Force show popup on homepage
            console.log('On homepage, showing popup');
            setTimeout(() => {
                setShowPopup(true);
                console.log('Popup set to show');
            }, 800);
        } else {
            setShowPopup(false);
        }

        setTimeout(() => {
            setPageLoaded(true);
        }, 200);
        
        const hideOnPages = ['/item-estimate', '/Booking', '/choose-service'];
        const shouldHide = hideOnPages.includes(router.pathname);
        setHideBookNow(shouldHide);

        if (shouldHide) {
            const stickyContainers = document.querySelectorAll('.sticky-container, .jsx-84cd9f3fe42f54c9.sticky-container');
            stickyContainers.forEach(container => {
                if (container) {
                    container.style.display = 'none';
                    container.style.visibility = 'hidden';
                    container.style.opacity = '0';
                    container.style.pointerEvents = 'none';
                    container.style.position = 'absolute';
                    container.style.zIndex = '-1';
                }
            });
        }
        
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;
            
            const id = target.getAttribute('href');
            if (id === '#') return;
            
            const element = document.querySelector(id);
            if (element) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };
        
        document.addEventListener('click', handleAnchorClick);
        
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, [router.pathname]);

    const closeWelcomePopup = () => {
        setShowPopup(false);
        sessionStorage.setItem('hasSeenPopup', 'true');
    };

    const resetPopup = () => {
        sessionStorage.removeItem('hasSeenPopup');
        setShowPopup(true);
        console.log('Popup reset, should show now');
    };

    const handleMobileMenuOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleMobileMenuClose = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
            
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        document.addEventListener("scroll", handleScroll);

        const AOS = require('aos');
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic',
            delay: 50
        });
        
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false,
            offset: 50,
            mobile: true,
            callback: function(box) {
                box.classList.add('animated-complete');
            }
        });
        window.wow.init();
        
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <div className={`layout-premium ${pageLoaded ? 'page-loaded' : ''} ${isScrolled ? 'is-scrolled' : ''}`}>
            <PageHead headTitle={headTitle} />
            <div className="body-overlay" onClick={handleMobileMenuClose} />
            
            {!headerStyle && (
                <Header1 
                    topBarStyle={topBarStyle} 
                    scroll={scroll} 
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    hideBookNow={hideBookNow}
                />
            )}
            {headerStyle == 1 && (
                <Header1 
                    topBarStyle={topBarStyle} 
                    scroll={scroll} 
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    hideBookNow={hideBookNow}
                />
            )}
            {headerStyle == 2 && (
                <Header2 
                    topBarStyle={topBarStyle} 
                    scroll={scroll} 
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    hideBookNow={hideBookNow}
                />
            )}
            {headerStyle == "newsletter" && (
                <HeaderNewsletter 
                    topBarStyle={topBarStyle} 
                    scroll={scroll} 
                    handleMobileMenuOpen={handleMobileMenuOpen}
                    hideBookNow={hideBookNow}
                />
            )}
            
            <Sidebar 
                openClass={openClass} 
                handleMobileMenuClose={handleMobileMenuClose}
                hideBookNow={hideBookNow}
            />
          
            <main className="main page-content">
                {children}
            </main>

            {!footerStyle && <Footer hideBookNow={hideBookNow} />}
            {footerStyle == 1 && <Footer hideBookNow={hideBookNow} />}
            {footerStyle == "newsletter" && <FooterNewsletter hideBookNow={hideBookNow} />}

            {!hideBookNow && <BackToTop />}

            {showPopup && <WelcomePopup closePopup={closeWelcomePopup} />}

            <div className="reset-popup-container">
                <button onClick={resetPopup} className="reset-popup-button">
                    Show Popup
                </button>
                <div className="popup-status">Popup status: {showPopup ? 'Showing' : 'Hidden'}</div>
            </div>

            <style jsx global>{`
                :root {
                    --primary-color: #FF7F00;
                    --primary-dark: #FF5E00;
                    --primary-light: #FFA64D;
                    --secondary-color: #1a1a1a;
                    --text-color: #333333;
                    --light-text: #777777;
                    --white: #ffffff;
                    --light-bg: #f5f7fa;
                    --border-color: #e0e0e0;
                    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
                    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
                    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
                    --transition-fast: 0.2s ease;
                    --transition-normal: 0.3s ease;
                    --transition-slow: 0.5s ease;
                    --border-radius-sm: 4px;
                    --border-radius-md: 8px;
                    --border-radius-lg: 12px;
                    --container-width: 1200px;
                    --header-height: 70px;
                    --header-height-scrolled: 60px;
                }
                
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
                
                html {
                    scroll-behavior: smooth;
                    scroll-padding-top: var(--header-height);
                    overflow-x: hidden;
                    width: 100%;
                }
                
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    color: var(--text-color);
                    line-height: 1.5;
                    overflow-x: hidden;
                    background-color: #ffffff;
                    font-size: 16px;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                }
                
                h1, h2, h3, h4, h5, h6 {
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 0.75rem;
                    color: var(--secondary-color);
                }
                
                h1 {
                    font-size: 2.25rem;
                }
                
                h2 {
                    font-size: 1.875rem;
                }
                
                h3 {
                    font-size: 1.5rem;
                }
                
                h4 {
                    font-size: 1.25rem;
                }
                
                h5 {
                    font-size: 1.125rem;
                }
                
                h6 {
                    font-size: 1rem;
                }
                
                p {
                    margin-bottom: 0.75rem;
                }
                
                a {
                    color: var(--primary-color);
                    text-decoration: none;
                    transition: color var(--transition-normal);
                }
                
                a:hover {
                    color: var(--primary-dark);
                }
                
                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
                
                .layout-premium {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    position: relative;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: opacity 0.4s ease, transform 0.4s ease;
                    width: 100%;
                    overflow-x: hidden;
                }
                
                .layout-premium.page-loaded {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .layout-premium.is-scrolled {
                    --header-height: var(--header-height-scrolled);
                }

                .main {
                    flex: 1;
                    position: relative;
                    z-index: 1;
                    padding-top: 0;
                    width: 100%;
                    overflow-x: hidden;
                }
                
                .page-content {
                    position: relative;
                    z-index: 1;
                    width: 100%;
                    overflow-x: hidden;
                }
                
                .page-content-inner {
                    position: relative;
                    max-width: var(--container-width);
                    margin: 0 auto;
                    width: 100%;
                }
                
                .body-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 998;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                }
                
                .mobile-menu-active .body-overlay {
                    opacity: 1;
                    visibility: visible;
                }
                
                .section {
                    padding: 60px 0;
                    position: relative;
                    width: 100%;
                }
                
                .section-title {
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                    text-align: center;
                }
                
                .section-subtitle {
                    font-size: 1.125rem;
                    color: var(--light-text);
                    margin-bottom: 40px;
                    text-align: center;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .section-bg-light {
                    background-color: var(--light-bg);
                }
                
                .section-bg-dark {
                    background-color: var(--secondary-color);
                    color: var(--white);
                }
                
                .section-bg-dark .section-title {
                    color: var(--white);
                }
                
                .section-bg-dark .section-subtitle {
                    color: rgba(255, 255, 255, 0.7);
                }
                
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }
                
                .row {
                    margin-left: -10px;
                    margin-right: -10px;
                }
                
                [class*="col-"] {
                    padding-left: 10px;
                    padding-right: 10px;
                }
                
                @media (min-width: 1400px) {
                    .container, .container-lg, .container-xl, .container-xxl {
                        max-width: 1320px;
                    }
                }
                
                @media (min-width: 1200px) and (max-width: 1399px) {
                    .container, .container-lg, .container-xl {
                        max-width: 1140px;
                    }
                }
                
                @media (min-width: 992px) and (max-width: 1199px) {
                    .container, .container-lg, .container-md {
                        max-width: 960px;
                    }
                    
                    .section {
                        padding: 50px 0;
                    }
                }
                
                @media (min-width: 768px) and (max-width: 991px) {
                    .container, .container-md, .container-sm {
                        max-width: 720px;
                    }
                    
                    .section {
                        padding: 40px 0;
                    }
                    
                    .section-title {
                        font-size: 2rem;
                    }
                }
                
                @media (min-width: 576px) and (max-width: 767px) {
                    .container, .container-sm {
                        max-width: 540px;
                    }
                    
                    .section {
                        padding: 30px 0;
                    }
                    
                    .section-title {
                        font-size: 1.75rem;
                    }
                    
                    .section-subtitle {
                        font-size: 1rem;
                        margin-bottom: 30px;
                    }
                }
                
                @media (max-width: 575px) {
                    .section {
                        padding: 25px 0;
                    }
                    
                    .section-title {
                        font-size: 1.5rem;
                    }
                    
                    .section-subtitle {
                        font-size: 0.875rem;
                        margin-bottom: 25px;
                    }
                }
                
                @media (max-width: 991px) {
                    .container {
                        max-width: 100%;
                        padding-left: 20px;
                        padding-right: 20px;
                    }
                }
            `}</style>
            <style jsx>{`
                .reset-popup-container {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    z-index: 9998;
                    background-color: #fff;
                    border-radius: 4px;
                    padding: 10px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
                }
                .reset-popup-button {
                    background-color: var(--primary-color);
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 8px 15px;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: bold;
                }
                .reset-popup-button:hover {
                    background-color: var(--primary-dark);
                }
                .popup-status {
                    margin-top: 5px;
                    font-size: 12px;
                    color: #666;
                }
            `}</style>
        </div>
    )
}

