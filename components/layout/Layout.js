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
        // Check for popup cookie
        const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
        
        if (router.pathname === '/' && !hasSeenPopup) {
            // Show popup on homepage if user hasn't seen it
            setTimeout(() => {
                setShowPopup(true);
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

    const handleMobileMenuOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible");
    }

    const handleMobileMenuClose = () => {
        document.body.classList.remove("mobile-menu-active");
        setOpenClass("");
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition >= 50) {
                setScroll(1);
                setIsScrolled(true);
            } else {
                setScroll(0);
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <PageHead headTitle={headTitle} />
            
            <div className={openClass && "body-overlay-1"} onClick={handleMobileMenuClose}></div>

            <div id="wrapper">
                {headerStyle === 2 ? (
                    <Header2 
                        scroll={scroll}
                        handleMobileMenuOpen={handleMobileMenuOpen}
                        hideBookNow={hideBookNow}
                    />
                ) : (
                    <Header1
                        scroll={scroll}
                        handleMobileMenuOpen={handleMobileMenuOpen}
                        hideBookNow={hideBookNow}
                    />
                )}

                <Sidebar openClass={openClass} handleMobileMenuClose={handleMobileMenuClose} />
                
                <main className="main">
                    {children}
                </main>

                {showPopup && pageLoaded && <WelcomePopup closeModal={closeWelcomePopup} />}

                {footerStyle === 2 ? <FooterNewsletter/> : <Footer/>}
                
                <BackToTop/>
            </div>

            <style jsx>{`
                .body-overlay-1 {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                    top: 0;
                    left: 0;
                }
                
                #wrapper {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                
                .main {
                    flex: 1;
                }
                
                @media (max-width: 992px) {
                    .main {
                        margin-top: 0;
                    }
                }
            `}</style>
        </>
    )
}

