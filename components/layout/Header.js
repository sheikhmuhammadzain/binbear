import { useEffect, useState } from 'react';

export default function Header() {
    const [hideBooking, setHideBooking] = useState(false);

    useEffect(() => {
        // Check if zip code was entered
        const hasEnteredZip = sessionStorage.getItem('hasEnteredZip');
        setHideBooking(hasEnteredZip === 'true');
    }, []);

    return (
        <header>
            <nav>
                {/* Your regular header content */}
                {!hideBooking && (
                    <a href="/Booking" className="header-book-btn">Book Now</a>
                )}
            </nav>

            <style jsx global>{`
                /* Force hide sticky elements */
                .sticky-container,
                .jsx-84cd9f3fe42f54c9.sticky-container {
                    display: none !important;
                }
            `}</style>
        </header>
    );
} 