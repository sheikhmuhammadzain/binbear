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
    const [scroll, setScroll] = useState(0)
    const [openClass, setOpenClass] = useState('');
    const router = useRouter();
    const [hideBookNow, setHideBookNow] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Check if we're on a page where we should hide the book now button
        const hideOnPages = ['/item-estimate', '/Booking', '/choose-service'];
        const shouldHide = hideOnPages.includes(router.pathname);
        setHideBookNow(shouldHide);

        // Only show popup on homepage
        setShowPopup(router.pathname === '/');

        // Force remove any existing sticky containers when needed
        if (shouldHide) {
            const stickyContainers = document.querySelectorAll('.sticky-container, .jsx-84cd9f3fe42f54c9.sticky-container');
            stickyContainers.forEach(container => {
                if (container) {
                    container.style.display = 'none';
                    container.style.visibility = 'hidden';
                    container.remove();
                }
            });
        }
    }, [router.pathname]);

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
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        });

        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
    }, []);

    return (
        <div className="layout-container">
            <PageHead headTitle={headTitle} />
            <div className="body-overlay-1" onClick={handleMobileMenuClose} />
            
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
          
            <main className="main">
                {children}
            </main>

            {!footerStyle && <Footer hideBookNow={hideBookNow} />}
            {footerStyle == 1 && <Footer hideBookNow={hideBookNow} />}
            {footerStyle == "newsletter" && <FooterNewsletter hideBookNow={hideBookNow} />}

            {!hideBookNow && <BackToTop />}

            {/* Welcome Popup - only shown on homepage */}
            {showPopup && <WelcomePopup />}

            <style jsx global>{`
                /* Global styles for layout management */
                .layout-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    position: relative;
                }

                .main {
                    flex: 1;
                    position: relative;
                    z-index: 1;
                }

                /* Improved sticky container handling */
                ${hideBookNow ? `
                    .sticky-container,
                    .jsx-84cd9f3fe42f54c9.sticky-container,
                    div[class*="sticky-container"],
                    .bottom-cta {
                        display: none !important;
                        opacity: 0 !important;
                        visibility: hidden !important;
                        pointer-events: none !important;
                        position: absolute !important;
                        z-index: -1 !important;
                    }
                ` : `
                    .sticky-container {
                        z-index: 1000;
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                    }
                `}

                /* Ensure proper stacking context */
                .body-overlay-1 {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 999;
                    background: rgba(0, 0, 0, 0.5);
                    display: ${openClass ? 'block' : 'none'};
                }

                /* Improved header positioning */
                .header {
                    position: relative;
                    z-index: 100;
                }

                /* Footer positioning */
                footer {
                    position: relative;
                    z-index: 1;
                }
            `}</style>
        </div>
    )
}

