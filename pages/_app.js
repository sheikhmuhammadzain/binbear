import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import "../public/assets/css/style.css"
import "../public/ast/globals.css"
import 'swiper/css';
// import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

        // Check if zip code was entered
        const hasEnteredZip = sessionStorage.getItem('hasEnteredZip');
        if (hasEnteredZip === 'true') {
            // Force remove sticky container
            const style = document.createElement('style');
            style.textContent = `
                .sticky-container,
                .jsx-84cd9f3fe42f54c9.sticky-container,
                div[class*="sticky-container"] {
                    display: none !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                    position: absolute !important;
                    z-index: -1 !important;
                }
            `;
            document.head.appendChild(style);
        }
    }, [])
    return (<>
        {!loading ? (
            <Component {...pageProps} />
        ) : (
            <Preloader />
        )}
    </>)
}

export default MyApp
