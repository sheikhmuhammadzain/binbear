import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Footer from './Footer'
import FooterNewsletter from "./FooterNewsletter"
import Header1 from './Header1'
import Header2 from './Header2'
import HeaderNewsletter from "./HeaderNewsletter"
import PageHead from './PageHead'
import Sidebar from './Sidebar'

export default function Layout({ headerStyle, footerStyle, headTitle, children, topBarStyle }) {
    const [scroll, setScroll] = useState(0)

    const [openClass, setOpenClass] = useState('');

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
        <>










<PageHead headTitle={headTitle} />
            <div className="body-overlay-1" onClick={handleMobileMenuClose} />
            {!headerStyle && <Header1 topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
            {headerStyle == 1 && <Header1 topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
            {headerStyle == 2 && <Header2 topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
           
             {headerStyle == "newsletter" && <HeaderNewsletter topBarStyle={topBarStyle} scroll={scroll} handleMobileMenuOpen={handleMobileMenuOpen} />}
            <Sidebar openClass={openClass} handleMobileMenuClose={handleMobileMenuClose} />
          
            <main className="main">
                {children}
            </main>

            


            {!footerStyle && <Footer />}
            {footerStyle == 1 && <Footer />}
            {footerStyle == "newsletter" && <FooterNewsletter />}

            <BackToTop />
        </>
    )
}

