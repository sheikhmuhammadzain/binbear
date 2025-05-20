import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

const BookingConfirmationPage = () => {
    const router = useRouter();
    const [confirmationDetails, setConfirmationDetails] = useState(null);
    const [error, setError] = useState(null);

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
                // setError("No booking confirmation details found. If you just booked, there might be a slight delay or issue.");
                // For development, let's assume a structure if nothing is found, so the page renders something.
                // In production, you might want a different fallback or error message.
                console.warn("No booking confirmation details found in localStorage.");
            }
        }
    }, []);

    const renderDetailItem = (label, value) => {
        if (!value) return null;
        return (
            <p className="detail-item">
                <strong>{label}:</strong> <span>{typeof value === 'object' ? JSON.stringify(value, null, 2) : value}</span>
            </p>
        );
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

                    {confirmationDetails && confirmationDetails.data ? (
                        <div className="details-section">
                            <h2 className="details-title">Booking Summary</h2>
                            {/* Assuming 'data' object from your /process-payment response structure */}
                            {/* Modify these based on the actual structure of `processPaymentData.data` */}
                            {renderDetailItem("Confirmation ID", confirmationDetails.data.payment_intent_id || confirmationDetails.data.id)}
                            {renderDetailItem("Service", confirmationDetails.product_name)}
                            {/* The 'data' object from payment-key-generate had payment_intent_id, which looks like client_secret. */}
                            {/* The /process-payment response has a 'payment_data' object which contains the PI details. */}
                            {confirmationDetails.payment_data && (
                                <>
                                    {renderDetailItem("Payment Status", confirmationDetails.payment_data.status)}
                                    {renderDetailItem("Amount Paid", `$${(confirmationDetails.payment_data.amount / 100).toFixed(2)} ${confirmationDetails.payment_data.currency.toUpperCase()}`)}
                                </>
                            )}
                            {/* If your backend's response `processPaymentData` directly has more user-friendly fields under `data`, display them */}
                            {/* Example: {renderDetailItem("Booking Date", confirmationDetails.data.booking_date)} */}
                            {/* Example: {renderDetailItem("Service Type", confirmationDetails.data.service_type)} */}
                             <p className="detail-item note">You will receive an email confirmation shortly with all the details.</p>
                        </div>
                    ) : confirmationDetails && confirmationDetails.message ? (
                        // Fallback if structure is just { success: true, message: "...", data: { ... } }
                         <div className="details-section">
                             <h2 className="details-title">Booking Status</h2>
                             <p>{confirmationDetails.message}</p>
                             {confirmationDetails.data && confirmationDetails.data.payment_intent_id && renderDetailItem("Payment ID", confirmationDetails.data.payment_intent_id)}
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