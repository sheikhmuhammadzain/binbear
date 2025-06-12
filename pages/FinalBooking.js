import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // For navigation
import Layout from "@/components/layout/Layout";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// TODO: Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51OwyxlDpzTk27cNa6FXzgqDb5f5mW3kjcl7P7m7VLKfy8rcSAk97XfkrWBfymarJcOPYHsBVaSbI21XcfPGzPge300ZkTHW3UA';
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    nameOnCard: "",
    billingZip: "",
  });
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [bookingDetails, setBookingDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0); // Amount in cents
  const [clientSecret, setClientSecret] = useState(""); // Added for Payment Intent

  useEffect(() => {
    // Load booking details from localStorage to display and determine amount
    if (typeof window !== 'undefined') {
        const storedDetails = localStorage.getItem('bookingData');
        if (storedDetails) {
            try {
                const parsedDetails = JSON.parse(storedDetails);
                setBookingDetails(parsedDetails);
                const priceInDollars = parseFloat(parsedDetails.price); 
                if (!isNaN(priceInDollars)) {
                    const amountInCents = Math.round(priceInDollars * 100);
                    setTotalAmount(amountInCents);

                    // Fetch client secret once totalAmount is known
                    if (amountInCents >= 50) { // Stripe minimum amount
                        const fetchClientSecret = async () => {
                            try {
                                const response = await fetch('https://backend.binbearjunk.com/api/payment-key-generate', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    // Ensure price is a string with two decimal places as per example
                                    body: JSON.stringify({ 
                                        items: [{ price: (amountInCents / 100).toFixed(2) }],
                                        currency: parsedDetails.currency || 'usd' // Use currency from booking or default to USD
                                    }),
                                });
                                const data = await response.json();
                                if (data.success && data.data && data.data.payment_intent_id) {
                                    setClientSecret(data.data.payment_intent_id);
                                } else {
                                    console.error("Failed to fetch client secret:", data.message || "Unknown error");
                                    setError("Error: Could not initialize payment. " + (data.message || ""));
                                }
                            } catch (apiError) {
                                console.error("API error fetching client secret:", apiError);
                                setError("Error: Could not connect to payment service.");
                            }
                        };
                        fetchClientSecret();
                    } else if (amountInCents > 0) {
                         setError("Error: Booking amount is below the minimum processing limit.");
                    }

                } else {
                    console.error("Could not parse price from bookingData");
                    setError("Error: Could not determine booking amount.");
                }
            } catch (e) {
                console.error("Error parsing bookingData from localStorage", e);
                setError("Error: Could not load booking details.");
            }
        } else {
             setError("Error: No booking details found to proceed with payment.");
        }
    }
  }, []); // Ensure dependencies are correct if any external vars are used inside

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!totalAmount || totalAmount < 50) {
        setError("Invalid booking amount. Cannot process payment.");
        return;
    }
    if (!clientSecret) {
        setError("Payment cannot be initialized. Missing client secret. Please refresh and try again.");
        setProcessing(false);
        return;
    }
    setProcessing(true);
    setError(null);
    setPaymentStatus("");

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded. Please try again shortly.");
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
      card: cardElement,
      billing_details: {
        name: formData.nameOnCard,
        address: {
          postal_code: formData.billingZip,
        },
      },
            },
            // You can add `receipt_email: bookingDetails?.email` here if you want Stripe to send a receipt,
            // though your backend /process-payment might also handle this.
        }
    );

    if (confirmError) {
      setError(confirmError.message || "An unexpected error occurred during payment confirmation.");
      setProcessing(false);
      return;
    }

    // Handle successful payment confirmation
    if (paymentIntent && paymentIntent.status === 'succeeded') {
      setPaymentStatus(`Payment confirmed (ID: ${paymentIntent.id}). Finalizing booking...`);
      
      // Send relevant paymentIntent data and booking details to your /process-payment endpoint
      try {
        const processPaymentPayload = {
            payment_data: {
                id: paymentIntent.id,
                object: paymentIntent.object || 'payment_intent',
                amount: paymentIntent.amount, // in cents
                currency: paymentIntent.currency,
                status: paymentIntent.status,
                client_secret: paymentIntent.client_secret, // Include client_secret
                payment_method: paymentIntent.payment_method,
                // Add other fields from your example as needed, checking if they exist on paymentIntent
                amount_details: paymentIntent.amount_details || { tip: {} },
                automatic_payment_methods: paymentIntent.automatic_payment_methods,
                canceled_at: paymentIntent.canceled_at,
                cancellation_reason: paymentIntent.cancellation_reason,
                capture_method: paymentIntent.capture_method || 'automatic_async',
                confirmation_method: paymentIntent.confirmation_method || 'automatic',
                created: paymentIntent.created || Math.floor(Date.now() / 1000),
                description: paymentIntent.description || `Booking for ${bookingDetails?.service_name || 'Service'}`,
                last_payment_error: paymentIntent.last_payment_error,
                livemode: paymentIntent.livemode || false,
                next_action: paymentIntent.next_action,
                payment_method_configuration_details: paymentIntent.payment_method_configuration_details,
                payment_method_types: paymentIntent.payment_method_types || ['card'],
                processing: paymentIntent.processing,
                receipt_email: paymentIntent.receipt_email,
                setup_future_usage: paymentIntent.setup_future_usage, 
                shipping: paymentIntent.shipping,
                source: paymentIntent.source,
            },
            email: bookingDetails?.email || `${formData.nameOnCard.split(' ').join('.').toLowerCase()}@example.com`, // Placeholder if no email in bookingData
            product_name: `${bookingDetails?.service_name || 'Selected Service'} - ${bookingDetails?.service_option || 'Selected Option'}`,
            price: (paymentIntent.amount / 100), // Price in main currency unit (e.g., dollars, euros)
            interval: bookingDetails?.interval || "one-time" // Or from bookingDetails if it's a subscription
        };

        const response = await fetch('https://backend.binbearjunk.com/api/process-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(processPaymentPayload), 
        });
        
        const responseData = await response.json();

        if (response.ok && responseData.success) { // Check your backend's success condition
          setPaymentStatus("Booking successfully processed! Redirecting...");
          localStorage.setItem('bookingConfirmationDetails', JSON.stringify(responseData)); // Save confirmation for next page
          localStorage.removeItem('bookingData'); // Clear sensitive booking data
          router.push("/BookingConfirmationPage"); // Redirect to your confirmation page
        } else {
          setError(responseData.message || "Failed to process booking with our system. Please contact support.");
          setPaymentStatus("Payment was successful, but there was an issue finalizing your booking. Reference: " + paymentIntent.id);
        }

      } catch (backendError) {
        console.error("Error calling /process-payment:", backendError);
        setError("An error occurred while finalizing your booking with our system. Payment ID: " + paymentIntent.id);
        setPaymentStatus("Payment successful, but a system error occurred. Please contact support with payment ID: " + paymentIntent.id);
      }
    } else if (paymentIntent && paymentIntent.status === 'requires_action') {
      setError("Further action is required to complete your payment (e.g., 3D Secure). Please follow the prompts from Stripe.");
      // Stripe.js will often handle 3D Secure by opening a modal. 
      // You might not need to do much here unless you have specific UI requirements for it.
    } else {
      // Some other error occurred
      setError(paymentIntent?.last_payment_error?.message || "Payment failed. Please check your card details and try again, or use a different card.");
    }

    setProcessing(false);
  };
  
  const cardElementOptions = {
    style: {
      base: {
        color: "#32325D",
        fontWeight: '500',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: "16px",
        fontSmoothing: "antialiased",
        "::placeholder": { color: "#CFD7DF" },
        ":-webkit-autofill": { color: "#32325D" },
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE",
      },
    },
    hidePostalCode: true,
  };

  return (
    <Layout>
      <div className="final-booking-container">
        <div className="payment-form-wrapper">
            <button className="back-button-top" onClick={() => router.back()}>
                &larr; Go Back
            </button>
            <h2 className="form-title">Complete Your Booking</h2>
            <p className="form-subtitle">Securely enter your payment details below.</p>
            
            {bookingDetails && (
                <div className="booking-summary">
                    <h4>Booking Summary:</h4>
                    <p>Service: {bookingDetails.service_name}</p>
                    <p>Option: {bookingDetails.service_option}</p>
                    <p>Date: {bookingDetails.date} at {bookingDetails.time}</p>
                    <p className="summary-price">Total Amount: <span>${(totalAmount / 100).toFixed(2)}</span></p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="stripe-form">
            <div className="form-row">
                <label htmlFor="nameOnCard" className="form-label">Name on Card</label>
                <input
                type="text"
                id="nameOnCard"
                name="nameOnCard"
                className="form-input"
                value={formData.nameOnCard}
                onChange={handleChange}
                placeholder="Full Name as on Card"
                required
                />
            </div>
            
            <div className="form-row">
                <label htmlFor="card-element" className="form-label">Card Details</label>
                <div className="card-element-container">
                    <CardElement id="card-element" options={cardElementOptions} />
                </div>
            </div>

            <div className="form-row">
                <label htmlFor="billingZip" className="form-label">Billing ZIP/Postal Code</label>
                <input
                type="text"
                id="billingZip"
                name="billingZip"
                className="form-input"
                value={formData.billingZip}
                onChange={handleChange}
                placeholder="e.g. 12345"
                required
                />
            </div>

            {error && <div className="error-message-box"> <span className="error-icon">⚠️</span> {error}</div>}
            {paymentStatus && <div className="status-message-box"> <span className="status-icon">✓</span> {paymentStatus}</div>}

            <div className="form-actions">
                <button type="submit" disabled={!stripe || processing || !totalAmount || totalAmount < 50} className="submit-button">
                {processing ? "Processing Payment..." : `Pay $${(totalAmount / 100).toFixed(2)} Securely`}
                </button>
            </div>
            <p className="ssl-info">Secure SSL Encryption <span role="img" aria-label="lock">🔒</span></p>
            </form>
        </div>
      </div>
      <style jsx>{`
        .final-booking-container {
          padding: 20px;
          min-height: 80vh;
          display: flex;
          align-items: center; /* Vertically center for shorter content */
          justify-content: center;
          background: #f4f7f6; /* Light background for the page */
        }

        .payment-form-wrapper {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          text-align: left;
        }
        .back-button-top {
            display: inline-block;
            margin-bottom: 25px;
            color: #555;
            background: none;
            border: none;
            font-size: 15px;
            cursor: pointer;
            transition: color 0.2s ease;
        }
        .back-button-top:hover {
            color: #FF7701;
        }

        .form-title {
          font-size: 26px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
          text-align: center;
        }
        .form-subtitle {
            font-size: 16px;
            color: #666;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .booking-summary {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            border: 1px solid #eee;
        }
        .booking-summary h4 {
            margin-top: 0;
            margin-bottom: 10px;
            color: #333;
            font-size: 18px;
        }
        .booking-summary p {
            margin: 5px 0;
            color: #555;
            font-size: 14px;
        }
        .summary-price {
            font-weight: bold;
            color: #FF7701 !important; /* Ensure this color is applied */
            margin-top: 10px !important;
            font-size: 16px !important;
        }
        .summary-price span {
             color: #FF7701 !important;
        }

        .stripe-form .form-row {
          margin-bottom: 20px;
        
         
        }

        .form-label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          margin-bottom: 8px;
        }

        .form-input,
        .card-element-container {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #DDE3EC;
          border-radius: 6px;
          font-size: 16px;
          background-color: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .form-input:focus,
        .card-element-container:focus-within { /* For CardElement wrapper */
            border-color: #FF7701;
            box-shadow: 0 0 0 2px rgba(255, 119, 1, 0.15);
            outline: none;
        }
        /* Specific styling for the CardElement itself is via cardElementOptions */
         .card-element-container {
            padding: 0; /* Reset padding for the div, CardElement will have its own */
         }
         /* Ensure CardElement has padding if its internal padding isn't enough */
         .card-element-container .StripeElement {
            padding: 12px 15px;
         }

        .error-message-box, .status-message-box {
            padding: 12px 15px;
            margin-bottom: 20px;
            border-radius: 6px;
            font-size: 15px;
            display: flex;
            align-items: center;
        }
        .error-message-box {
            background-color: #FFF3F3;
            color: #D63636;
            border: 1px solid #FFD0D0;
        }
        .status-message-box {
            background-color: #F0FFF4;
            color: #2B6CB0;
            border: 1px solid #C6F6D5;
        }
        .error-icon, .status-icon {
            margin-right: 8px;
            font-size: 18px;
        }

        .form-actions {
          text-align: center;
          margin-top: 25px;
        }

        .submit-button {
          background-color: #FF7701;
          color: white;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .submit-button:hover:not(:disabled) {
          background-color: #e66900;
          transform: translateY(-1px);
        }
        .submit-button:disabled {
          background-color: #FFD1A3;
          cursor: not-allowed;
        }
        .ssl-info {
            text-align: center;
            font-size: 13px;
            color: #777;
            margin-top: 20px;
        }
      `}</style>
    </Layout>
  );
};

const FinalBookingPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default FinalBookingPage;
