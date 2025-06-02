import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookingConfirmationPage = () => {
    const router = useRouter();
    const [confirmationDetails, setConfirmationDetails] = useState(null);
    const [error, setError] = useState(null);
    const [isProcessingPaymentRecord, setIsProcessingPaymentRecord] = useState(false);
    const [paymentRecordProcessed, setPaymentRecordProcessed] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedDetails = localStorage.getItem('bookingConfirmationDetails');
            if (storedDetails) {
                try {
                    const parsedDetails = JSON.parse(storedDetails);
                    setConfirmationDetails(parsedDetails);
                    // Optional: Clear the details from localStorage after displaying
                    // localStorage.removeItem('bookingConfirmationDetails');
                } catch (e) {
                    console.error("Error parsing booking confirmation details from localStorage", e);
                    setError("Could not load booking confirmation details properly.");
                }
            } else {
                console.warn("No booking confirmation details found in localStorage.");
                // setError("No booking confirmation details found. If you just booked, there might be a slight delay or issue.");
            }
        }
    }, []);

    useEffect(() => {
        // ADDED CONSOLE LOGS FOR DEBUGGING
        console.log("Debug: confirmationDetails:", confirmationDetails);
        console.log("Debug: paymentRecordProcessed:", paymentRecordProcessed);
        console.log("Debug: isProcessingPaymentRecord:", isProcessingPaymentRecord);
        if (confirmationDetails && confirmationDetails.payment_data) { // Log payment_data status if available
             console.log("Debug: confirmationDetails.payment_data.status:", confirmationDetails.payment_data.status);
        }
         if (confirmationDetails) { // Log other relevant fields if confirmationDetails exists
            console.log("Debug: confirmationDetails.email:", confirmationDetails.email);
            console.log("Debug: confirmationDetails.product_name:", confirmationDetails.product_name);
            console.log("Debug: confirmationDetails.price:", confirmationDetails.price);
            console.log("Debug: confirmationDetails.interval:", confirmationDetails.interval);
        }

        if (confirmationDetails && 
            confirmationDetails.payment_data && 
            confirmationDetails.payment_data.status === 'succeeded' && 
            !paymentRecordProcessed && 
            !isProcessingPaymentRecord) {

            // Check for all required fields in the structure you provided
            if (confirmationDetails.email && 
                confirmationDetails.product_name && 
                typeof confirmationDetails.price !== 'undefined' && 
                confirmationDetails.interval) {
                
                setIsProcessingPaymentRecord(true);
                
                const payload = {
                    payment_data: confirmationDetails.payment_data,
                    email: confirmationDetails.email,
                    product_name: confirmationDetails.product_name,
                    price: confirmationDetails.price, // Ensure this is the correct numeric value (e.g., 147 for €147)
                    interval: confirmationDetails.interval
                };

                console.log("Payload being sent to /process-payment:", payload);

                fetch('https://binbear.njnylimo.us/public/api/process-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(payload)
                })
                .then(response => {
                    if (!response.ok) {
                        return response.json().then(errData => {
                            throw new Error(errData.message || `HTTP error! status: ${response.status}`);
                        }).catch(() => {
                             throw new Error(`HTTP error! status: ${response.status}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Payment data successfully sent to process-payment API:', data);
                    setPaymentRecordProcessed(true); 
                })
                .catch(apiError => {
                    console.error('Error posting to process-payment API:', apiError);
                    setError(prevError => prevError ? `${prevError}\\nError recording payment: ${apiError.message}` : `Error recording payment: ${apiError.message}`);
                })
                .finally(() => {
                    setIsProcessingPaymentRecord(false);
                });
            } else {
                console.warn('Missing required fields in confirmationDetails to call process-payment API. Needed: payment_data, email, product_name, price, interval. Data:', confirmationDetails);
                // Optionally set an error message for the user if critical data is missing
                // setError("Could not record payment details: essential information missing.");
            }
        }
    }, [confirmationDetails, paymentRecordProcessed, isProcessingPaymentRecord, setError]);

    const renderDetailItem = (label, value, isPlaceholder = false) => {
        if (!value && !isPlaceholder) return null; 
        
        const displayValue = value || (isPlaceholder ? 'Will be updated shortly' : 'N/A');
        // Apply placeholder style only if it IS a placeholder AND the value is currently missing.
        const className = `detail-item ${isPlaceholder && !value ? 'placeholder-text' : ''}`; 

        return (
            <p className={className}>
                <strong>{label}:</strong> <span>{displayValue}</span>
            </p>
        );
    };

    // Helper to safely access nested properties
    const getNestedValue = (obj, path, defaultValue = null) => {
        if (!obj || !path) return defaultValue;
        const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
        return value === undefined ? defaultValue : value;
    };

    return (
        <Layout headTitle="Booking Confirmed - BinBear">
            <div className="confirmation-container">
                <div className="confirmation-card">
                    <div className="icon-success">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                        </svg>
                    </div>
                    <h1 className="title">Thank You For Your Booking!</h1>
                    <p className="subtitle">Your BinBear service is confirmed.</p>

                    {error && <p className="error-message">{error}</p>}

                    {confirmationDetails ? (
                        <div className="details-section">
                            <h2 className="details-title">Booking Summary</h2>
                            
                            {/* Stripe Payment Details (from existing logic) */}
                            {renderDetailItem("Confirmation ID", getNestedValue(confirmationDetails, 'data.payment_intent_id') || getNestedValue(confirmationDetails, 'payment_data.id') || getNestedValue(confirmationDetails, 'id'))}
                            {renderDetailItem("Service", getNestedValue(confirmationDetails, 'product_name') || getNestedValue(confirmationDetails, 'data.service_description'))}
                            
                            {getNestedValue(confirmationDetails, 'payment_data.status') && renderDetailItem("Payment Status", getNestedValue(confirmationDetails, 'payment_data.status'))}
                            {getNestedValue(confirmationDetails, 'payment_data.amount') && renderDetailItem("Amount Paid", `$${(getNestedValue(confirmationDetails, 'payment_data.amount') / 100).toFixed(2)} ${getNestedValue(confirmationDetails, 'payment_data.currency', '').toUpperCase()}`)}

                            {/* Jobber Specific Details - these might come from data passed before Stripe, or enriched if the page is reloaded/visited later */}
                            {renderDetailItem("Scheduled Time", confirmationDetails.pickup_time ? new Date(confirmationDetails.pickup_time).toLocaleString() : getNestedValue(confirmationDetails, 'data.pickup_time') ? new Date(getNestedValue(confirmationDetails, 'data.pickup_time')).toLocaleString() : null, !confirmationDetails.pickup_time && !getNestedValue(confirmationDetails, 'data.pickup_time'))}
                            {renderDetailItem("Jobber Client ID", getNestedValue(confirmationDetails, 'jobber_client_id') || getNestedValue(confirmationDetails, 'data.jobber_client_id'))}
                            {renderDetailItem("Jobber Quote ID", getNestedValue(confirmationDetails, 'job_quote_id') || getNestedValue(confirmationDetails, 'data.job_quote_id'))}
                            {/* These details are usually confirmed/created after the webhook */}
                            {(() => {
                                const finalJobId = getNestedValue(confirmationDetails, 'jobber_job_id') || getNestedValue(confirmationDetails, 'data.jobber_job_id');
                                const draftJobId = getNestedValue(confirmationDetails, 'jobber_draft_job_id') || getNestedValue(confirmationDetails, 'data.jobber_draft_job_id');
                                let jobDisplayValue = null;
                                let jobIsPlaceholder = true; // Assume placeholder unless a value is found

                                if (finalJobId) {
                                    jobDisplayValue = finalJobId;
                                    jobIsPlaceholder = false;
                                } else if (draftJobId) {
                                    jobDisplayValue = `${draftJobId} (Draft)`; // Indicate it's a draft
                                    jobIsPlaceholder = false;
                                }
                                return renderDetailItem("Jobber Job ID", jobDisplayValue, jobIsPlaceholder);
                            })()}
                            {renderDetailItem("Assigned Technician", getNestedValue(confirmationDetails, 'jobber_assigned_employee') || getNestedValue(confirmationDetails, 'data.jobber_assigned_employee'), true)}


                            {confirmationDetails.message && !getNestedValue(confirmationDetails, 'data') && (
                                <p className="detail-item note">{confirmationDetails.message}</p>
                            )}
                            
                            <p className="detail-item note">You will receive an email confirmation shortly with all the details, including final job information.</p>
                         </div>
                    ) : (
                        <p>Loading confirmation details or no details to display.</p>
                    )}

                    <div className="actions">
                        <Link href="/" legacyBehavior>
                            <a className="button-primary">Back to Homepage</a>
                        </Link>
                        {/* You can add more actions here, like "View My Bookings" if applicable */}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .confirmation-container {
                    padding: 40px 20px;
                    min-height: 70vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: #f4f7f6;
                }
                .confirmation-card {
                    background-color: #ffffff;
                    padding: 30px 40px;
                    border-radius: 12px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 600px;
                    width: 100%;
                }
                .icon-success {
                    color: #4CAF50;
                    font-size: 50px; /* Increased size */
                    margin-bottom: 15px;
                    width: 60px; /* Explicit width */
                    height: 60px; /* Explicit height */
                    display: inline-block; /* For sizing */
                }
                .icon-success svg {
                    width: 100%;
                    height: 100%;
                }
                .title {
                    font-size: 28px;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 10px;
                }
                .subtitle {
                    font-size: 18px;
                    color: #555;
                    margin-bottom: 25px;
                    line-height: 1.6;
                }
                .error-message {
                    color: #e74c3c;
                    background-color: #fdd;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                }
                .details-section {
                    background-color: #f9f9f9;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 20px;
                    margin-bottom: 30px;
                    text-align: left;
                    border: 1px solid #eee;
                }
                .details-title {
                    font-size: 20px;
                    color: #333;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 10px;
                }
                .detail-item {
                    font-size: 15px;
                    color: #444;
                    margin-bottom: 10px;
                    line-height: 1.5;
                }
                .detail-item strong {
                    color: #222;
                    margin-right: 8px;
                }
                .detail-item span {
                    word-break: break-word;
                }
                .detail-item.placeholder-text span {
                    color: #777;
                    font-style: italic;
                }
                .detail-item.note {
                    font-style: italic;
                    color: #666;
                    margin-top: 15px;
                    font-size: 14px;
                }
                .actions {
                    margin-top: 30px;
                }
                .button-primary {
                    background-color: #FF7701;
                    color: white;
                    padding: 12px 25px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                    transition: background-color 0.2s ease;
                    display: inline-block;
                }
                .button-primary:hover {
                    background-color: #e66900;
                }
            `}</style>
        </Layout>
    );
};

export default BookingConfirmationPage; 