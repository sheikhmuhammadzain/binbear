import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import { createJobberClient, getAvailableTimes, createJobberJobDraft, startStripeCheckout } from '@/util/jobberApi';

const AcceptQuotePage = () => {
    const router = useRouter();
    const { quoteId } = router.query;

    const [quoteDetails, setQuoteDetails] = useState(null); // Simulate fetching quote details
    const [jobberClient, setJobberClient] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentStep, setCurrentStep] = useState(1); // 1: Accept Quote, 2: Pick Time, 3: Payment

    // Simulate fetching quote details based on quoteId
    useEffect(() => {
        if (quoteId) {
            // In a real app, fetch quote details from your backend
            setQuoteDetails({
                id: quoteId,
                customerName: 'John Doe', // Placeholder
                customerEmail: 'john.doe@example.com', // Placeholder
                customerPhone: '555-123-4567', // Placeholder
                serviceDescription: 'Large Skip Bin Rental',
                amount: 150.00,
            });
        }
    }, [quoteId]);

    const handleAcceptQuote = async () => {
        if (!quoteDetails) return;
        setIsLoading(true);
        setError('');
        try {
            // Step 1: Create Jobber Client
            const clientData = {
                first_name: quoteDetails.customerName.split(' ')[0],
                last_name: quoteDetails.customerName.split(' ').slice(1).join(' ') || 'N/A',
                email: quoteDetails.customerEmail,
                phone: quoteDetails.customerPhone,
                // You might want to add custom fields or more address details here
            };
            const client = await createJobberClient(clientData);
            setJobberClient(client);
            console.log('Jobber client created:', client);

            // Step 2: Fetch available time slots
            // Adjust params as needed for your getAvailableTimes endpoint
            const times = await getAvailableTimes({ startDate: new Date().toISOString().split('T')[0] }); 
            setAvailableTimes(times.slots || []); // Assuming times.slots is an array of time strings/objects
            setCurrentStep(2);
        } catch (err) {
            console.error('Error accepting quote or fetching times:', err);
            setError(err.message || 'Failed to process quote acceptance.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleTimeSelection = async (time) => {
        setSelectedTime(time);
        // Potentially, you could create the job draft here or wait for a "Proceed to Payment" click
        // For this flow, we'll create draft and then proceed to payment in one go.
    };

    const handleProceedToPayment = async () => {
        if (!selectedTime || !jobberClient || !quoteDetails) {
            setError('Please select a time slot and ensure quote details are loaded.');
            return;
        }
        setIsLoading(true);
        setError('');
        try {
            // Step 3: Create Jobber Job (Unscheduled/Draft)
            const jobDraftData = {
                client_id: jobberClient.client_id, // Assuming client object has client_id
                // scheduled_at: selectedTime, // If your backend handles this for a draft
                job_description: quoteDetails.serviceDescription,
                // Add line items based on your quote
                line_items: [
                    {
                        name: quoteDetails.serviceDescription,
                        quantity: 1,
                        unit_cost: quoteDetails.amount
                    }
                ],
                // custom fields linking to your quoteId if necessary
                custom_fields: {
                    quote_id: quoteDetails.id
                }
            };
            const jobDraft = await createJobberJobDraft(jobDraftData);
            console.log('Jobber job draft created:', jobDraft);

            // Step 4: Provision Stripe Checkout session
            const checkoutData = {
                customer_name: quoteDetails.customerName,
                customer_email: quoteDetails.customerEmail,
                customer_phone: quoteDetails.customerPhone,
                pickup_time: selectedTime, // Ensure this is in a format Stripe/your backend expects
                jobber_client_id: jobberClient.client_id,
                job_quote_id: quoteDetails.id,
                // Potentially pass jobDraft.id if needed by backend for webhook linking
                jobber_draft_job_id: jobDraft.id 
            };
            
            // This function will attempt to redirect to Stripe
            await startStripeCheckout(checkoutData);
            // If redirection doesn't happen (e.g. error or misconfiguration in startStripeCheckout)
            // isLoading will remain true, so a user message might be needed.
            // For now, if it fails, an error will be caught and displayed.

        } catch (err) {
            console.error('Error creating job draft or starting checkout:', err);
            setError(err.message || 'Failed to proceed to payment.');
            setIsLoading(false); // Ensure loading is stopped on error
        }
        // No finally setIsLoading(false) here because successful startStripeCheckout navigates away
    };

    if (!quoteDetails) {
        return <Layout headTitle="Loading Quote..."><div className="container_page">Loading quote details...</div></Layout>;
    }

    return (
        <Layout headTitle={`Accept Quote: ${quoteDetails.serviceDescription}`}>
            <div className="container_page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1>Quote: {quoteDetails.serviceDescription}</h1>
                <p><strong>Amount:</strong> ${quoteDetails.amount.toFixed(2)}</p>
                <p><strong>Customer:</strong> {quoteDetails.customerName} ({quoteDetails.customerEmail})</p>

                {error && <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>{error}</p>}

                {currentStep === 1 && (
                    <div className="step-accept-quote">
                        <h2>Step 1: Accept Your Quote</h2>
                        <p>Please review your quote details above. Click below to accept and choose your service time.</p>
                        <button onClick={handleAcceptQuote} disabled={isLoading} className="btn btn-primary">
                            {isLoading ? 'Processing...' : 'Accept Quote & Choose Time'}
                        </button>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="step-pick-time">
                        <h2>Step 2: Pick Your Service Time Slot</h2>
                        {isLoading && <p>Loading available times...</p>}
                        {availableTimes.length > 0 ? (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {availableTimes.map((time, index) => (
                                    <li key={index} style={{ marginBottom: '10px' }}>
                                        <button 
                                            onClick={() => handleTimeSelection(time)} 
                                            style={{
                                                padding: '10px 15px', 
                                                border: selectedTime === time ? '2px solid #FF7701' : '1px solid #ccc', 
                                                borderRadius: '5px', 
                                                width: '100%', 
                                                textAlign: 'left',
                                                background: selectedTime === time ? '#fff5e6' : 'white'
                                            }}
                                        >
                                            {/* Assuming time is a string like "2025-06-05T10:00:00" */}
                                            {/* You'll want to format this nicely */}
                                            {new Date(time).toLocaleString()} 
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            !isLoading && <p>No available time slots found for the selected criteria. Please contact us.</p>
                        )}
                        {selectedTime && (
                            <div style={{ marginTop: '20px' }}>
                                <p><strong>Selected Time:</strong> {new Date(selectedTime).toLocaleString()}</p>
                                <button onClick={handleProceedToPayment} disabled={isLoading || !selectedTime} className="btn btn-primary">
                                    {isLoading ? 'Processing...' : 'Confirm Time & Proceed to Payment'}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Step 3 (Payment) is handled by redirecting to Stripe */}
            </div>
        </Layout>
    );
};

export default AcceptQuotePage; 