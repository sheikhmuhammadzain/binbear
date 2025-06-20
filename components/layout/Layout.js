import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Footer from './Footer'
import FooterNewsletter from "./FooterNewsletter"
import Header1 from './Header1'
import Header2 from './Header2'
import HeaderNewsletter from "./HeaderNewsletter"
import PageHead from './PageHead'
import WelcomePopup from '../WelcomePopup'
import { useRouter } from 'next/router'

export default function Layout({ headerStyle, footerStyle, headTitle, children, topBarStyle }) {
    const router = useRouter();
    const [scroll, setScroll] = useState(0)
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
        
        const hideOnPages = ['/item-estimate', '/Booking', '/choose-service', '/item-selection'];
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
            <div id="wrapper">
                <PageHead headTitle={headTitle} />

                {headerStyle === "headerStyle2" ? (
                    <Header2 scroll={scroll} hideBookNow={hideBookNow} />
                ) : headerStyle === "headernewsletter" ? (
                    <HeaderNewsletter />
                ) : (
                    <Header1 scroll={scroll} hideBookNow={hideBookNow} />
                )}

                <main className="main">
                    <div className="site-content">
                        {children}
                    </div>
                </main>

                {footerStyle === "footerNewsletter" ? <FooterNewsletter /> : <Footer />}

                <BackToTop />
                
                {showPopup && <WelcomePopup onClose={closeWelcomePopup} />}
            </div>
            
            <style jsx>{`
                #wrapper {
                    position: relative;
                    width: 100%;
                    overflow-x: hidden;
                    min-height: 100vh;
                }
                
                .main {
                    margin-bottom: 0;
                    position: relative;
                }

                .site-content {
                    width: 100%;
                    overflow-x: hidden;
                }

                :global(.site-container) {
                    max-width: 1320px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                }

                :global(.container) {
                    max-width: 1320px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                }
            `}</style>
        </>
    )
}

