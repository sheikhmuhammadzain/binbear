import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import "../public/assets/css/style.css"
import "../public/assets/css/premium.css"
import "../public/assets/css/full-width.css"
import "../styles/globals.css"
import 'swiper/css';
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { PremiumButtonStyles } from "@/components/elements/PremiumButton";
import { PremiumCardStyles } from "@/components/elements/PremiumCard";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);
    const [premiumStylesLoaded, setPremiumStylesLoaded] = useState(false);

    useEffect(() => {
        // Set loading state
        setTimeout(() => {
            setLoading(false);
        }, 1000);

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

        // Initialize AOS animation library
        if (typeof window !== 'undefined') {
            const AOS = require('aos');
            require('aos/dist/aos.css');
            AOS.init({
                duration: 800,
                once: true,
                easing: 'ease-out-cubic',
                offset: 100
            });
            
            // Load premium buttons script
            const premiumButtonsScript = document.createElement('script');
            premiumButtonsScript.src = '/assets/js/premium-buttons.js';
            premiumButtonsScript.async = true;
            document.body.appendChild(premiumButtonsScript);
            
            // Add premium component styles
            const premiumStyles = document.createElement('style');
            premiumStyles.id = 'premium-component-styles';
            premiumStyles.textContent = `
                ${PremiumButtonStyles}
                ${PremiumCardStyles}
                
                /* Additional Premium Styles */
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
                }
                
                /* Premium Input Styles */
                .premium-input {
                    display: block;
                    width: 100%;
                    padding: 12px 16px;
                    font-size: 15px;
                    line-height: 1.5;
                    color: var(--text-color);
                    background-color: var(--white);
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius-md);
                    transition: all var(--transition-normal);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                }
                
                .premium-input:focus {
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(255, 127, 0, 0.15);
                    outline: none;
                }
                
                /* Premium Select Styles */
                .premium-select {
                    display: block;
                    width: 100%;
                    padding: 12px 16px;
                    font-size: 15px;
                    line-height: 1.5;
                    color: var(--text-color);
                    background-color: var(--white);
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius-md);
                    transition: all var(--transition-normal);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23777777' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    background-size: 16px;
                    padding-right: 40px;
                }
                
                .premium-select:focus {
                    border-color: var(--primary-color);
                    box-shadow: 0 0 0 3px rgba(255, 127, 0, 0.15);
                    outline: none;
                }
                
                /* Premium Checkbox & Radio Styles */
                .premium-checkbox-container,
                .premium-radio-container {
                    display: flex;
                    align-items: center;
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 12px;
                    cursor: pointer;
                    font-size: 15px;
                    user-select: none;
                }
                
                .premium-checkbox-container input,
                .premium-radio-container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }
                
                .premium-checkbox-checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 20px;
                    width: 20px;
                    background-color: var(--white);
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius-sm);
                    transition: all var(--transition-normal);
                }
                
                .premium-radio-checkmark {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 20px;
                    width: 20px;
                    background-color: var(--white);
                    border: 1px solid var(--border-color);
                    border-radius: 50%;
                    transition: all var(--transition-normal);
                }
                
                .premium-checkbox-container:hover input ~ .premium-checkbox-checkmark,
                .premium-radio-container:hover input ~ .premium-radio-checkmark {
                    border-color: var(--primary-color);
                }
                
                .premium-checkbox-container input:checked ~ .premium-checkbox-checkmark,
                .premium-radio-container input:checked ~ .premium-radio-checkmark {
                    background-color: var(--primary-color);
                    border-color: var(--primary-color);
                }
                
                .premium-checkbox-checkmark:after,
                .premium-radio-checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
                
                .premium-checkbox-container input:checked ~ .premium-checkbox-checkmark:after,
                .premium-radio-container input:checked ~ .premium-radio-checkmark:after {
                    display: block;
                }
                
                .premium-checkbox-container .premium-checkbox-checkmark:after {
                    left: 7px;
                    top: 3px;
                    width: 5px;
                    height: 10px;
                    border: solid white;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
                
                .premium-radio-container .premium-radio-checkmark:after {
                    top: 6px;
                    left: 6px;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: white;
                }
                
                /* Premium Form Group */
                .premium-form-group {
                    margin-bottom: 20px;
                }
                
                .premium-form-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    font-size: 15px;
                    color: var(--text-color);
                }
                
                .premium-form-hint {
                    display: block;
                    margin-top: 6px;
                    font-size: 13px;
                    color: var(--light-text);
                }
                
                .premium-form-error {
                    display: block;
                    margin-top: 6px;
                    font-size: 13px;
                    color: #d32f2f;
                }
                
                /* Premium Table Styles */
                .premium-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    border-radius: var(--border-radius-md);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                }
                
                .premium-table th,
                .premium-table td {
                    padding: 16px;
                    text-align: left;
                    border-bottom: 1px solid var(--border-color);
                }
                
                .premium-table th {
                    background-color: var(--light-bg);
                    font-weight: 600;
                    color: var(--secondary-color);
                }
                
                .premium-table tr:last-child td {
                    border-bottom: none;
                }
                
                .premium-table tbody tr {
                    transition: background-color var(--transition-normal);
                }
                
                .premium-table tbody tr:hover {
                    background-color: rgba(0, 0, 0, 0.02);
                }
                
                /* Premium Badge Styles */
                .premium-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px 10px;
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 1;
                    border-radius: 50px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .premium-badge-primary {
                    background-color: rgba(255, 127, 0, 0.1);
                    color: var(--primary-color);
                }
                
                .premium-badge-secondary {
                    background-color: rgba(26, 26, 26, 0.1);
                    color: var(--secondary-color);
                }
                
                .premium-badge-success {
                    background-color: rgba(76, 175, 80, 0.1);
                    color: #388E3C;
                }
                
                .premium-badge-danger {
                    background-color: rgba(211, 47, 47, 0.1);
                    color: #D32F2F;
                }
                
                .premium-badge-warning {
                    background-color: rgba(255, 193, 7, 0.1);
                    color: #FFA000;
                }
                
                .premium-badge-info {
                    background-color: rgba(33, 150, 243, 0.1);
                    color: #1976D2;
                }
                
                /* Premium Alert Styles */
                .premium-alert {
                    position: relative;
                    padding: 16px 20px;
                    margin-bottom: 20px;
                    border-radius: var(--border-radius-md);
                    border-left: 4px solid transparent;
                }
                
                .premium-alert-primary {
                    background-color: rgba(255, 127, 0, 0.1);
                    border-left-color: var(--primary-color);
                    color: var(--text-color);
                }
                
                .premium-alert-secondary {
                    background-color: rgba(26, 26, 26, 0.1);
                    border-left-color: var(--secondary-color);
                    color: var(--text-color);
                }
                
                .premium-alert-success {
                    background-color: rgba(76, 175, 80, 0.1);
                    border-left-color: #388E3C;
                    color: var(--text-color);
                }
                
                .premium-alert-danger {
                    background-color: rgba(211, 47, 47, 0.1);
                    border-left-color: #D32F2F;
                    color: var(--text-color);
                }
                
                .premium-alert-warning {
                    background-color: rgba(255, 193, 7, 0.1);
                    border-left-color: #FFA000;
                    color: var(--text-color);
                }
                
                .premium-alert-info {
                    background-color: rgba(33, 150, 243, 0.1);
                    border-left-color: #1976D2;
                    color: var(--text-color);
                }
                
                /* Premium Tooltip */
                .premium-tooltip {
                    position: relative;
                    display: inline-block;
                }
                
                .premium-tooltip .premium-tooltip-text {
                    visibility: hidden;
                    width: 200px;
                    background-color: var(--secondary-color);
                    color: var(--white);
                    text-align: center;
                    border-radius: var(--border-radius-md);
                    padding: 8px 12px;
                    position: absolute;
                    z-index: 1000;
                    bottom: 125%;
                    left: 50%;
                    transform: translateX(-50%);
                    opacity: 0;
                    transition: opacity var(--transition-normal);
                    font-size: 13px;
                    line-height: 1.5;
                    box-shadow: var(--shadow-md);
                }
                
                .premium-tooltip .premium-tooltip-text::after {
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: var(--secondary-color) transparent transparent transparent;
                }
                
                .premium-tooltip:hover .premium-tooltip-text {
                    visibility: visible;
                    opacity: 1;
                }
                
                /* Premium Accordion */
                .premium-accordion {
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius-md);
                    overflow: hidden;
                }
                
                .premium-accordion-item {
                    border-bottom: 1px solid var(--border-color);
                }
                
                .premium-accordion-item:last-child {
                    border-bottom: none;
                }
                
                .premium-accordion-header {
                    padding: 16px 20px;
                    background-color: var(--white);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 600;
                    transition: background-color var(--transition-normal);
                }
                
                .premium-accordion-header:hover {
                    background-color: var(--light-bg);
                }
                
                .premium-accordion-icon {
                    transition: transform var(--transition-normal);
                }
                
                .premium-accordion-item.active .premium-accordion-icon {
                    transform: rotate(180deg);
                }
                
                .premium-accordion-content {
                    padding: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height var(--transition-normal), padding var(--transition-normal);
                }
                
                .premium-accordion-item.active .premium-accordion-content {
                    padding: 16px 20px;
                    max-height: 1000px;
                }
                
                /* Premium Tabs */
                .premium-tabs {
                    display: flex;
                    flex-direction: column;
                }
                
                .premium-tabs-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border-color);
                    margin-bottom: 20px;
                    overflow-x: auto;
                    scrollbar-width: none;
                }
                
                .premium-tabs-nav::-webkit-scrollbar {
                    display: none;
                }
                
                .premium-tab-item {
                    padding: 12px 20px;
                    cursor: pointer;
                    font-weight: 600;
                    color: var(--light-text);
                    border-bottom: 2px solid transparent;
                    transition: all var(--transition-normal);
                    white-space: nowrap;
                }
                
                .premium-tab-item:hover {
                    color: var(--primary-color);
                }
                
                .premium-tab-item.active {
                    color: var(--primary-color);
                    border-bottom-color: var(--primary-color);
                }
                
                .premium-tab-content {
                    display: none;
                }
                
                .premium-tab-content.active {
                    display: block;
                }
                
                /* Premium Modal */
                .premium-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity var(--transition-normal), visibility var(--transition-normal);
                }
                
                .premium-modal-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }
                
                .premium-modal {
                    background-color: var(--white);
                    border-radius: var(--border-radius-lg);
                    box-shadow: var(--shadow-lg);
                    width: 90%;
                    max-width: 500px;
                    max-height: 90vh;
                    overflow-y: auto;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: transform var(--transition-normal), opacity var(--transition-normal);
                }
                
                .premium-modal-overlay.active .premium-modal {
                    transform: translateY(0);
                    opacity: 1;
                }
                
                .premium-modal-header {
                    padding: 20px;
                    border-bottom: 1px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .premium-modal-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin: 0;
                }
                
                .premium-modal-close {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 1.5rem;
                    color: var(--light-text);
                    transition: color var(--transition-normal);
                }
                
                .premium-modal-close:hover {
                    color: var(--text-color);
                }
                
                .premium-modal-body {
                    padding: 20px;
                }
                
                .premium-modal-footer {
                    padding: 20px;
                    border-top: 1px solid var(--border-color);
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                }
            `;
            document.head.appendChild(premiumStyles);
            setPremiumStylesLoaded(true);
        }
    }, []);
    
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            
        {!loading ? (
                <Component {...pageProps} premiumStylesLoaded={premiumStylesLoaded} />
        ) : (
            <Preloader />
        )}
        </>
    );
}

export default MyApp
