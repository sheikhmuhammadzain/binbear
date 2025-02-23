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
