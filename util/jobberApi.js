async function createJobberClient(clientData) {
    const response = await fetch('/api/jobber/create-client', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create Jobber client and could not parse error.' }));
        throw new Error(errorData.message || 'Failed to create Jobber client');
    }
    return response.json();
}

async function getAvailableTimes(params) {
    // Params might include date range, service type, etc.
    const queryParams = new URLSearchParams(params).toString();
    const response = await fetch(`/api/jobber/get-available-times?${queryParams}`);
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to fetch available times and could not parse error.' }));
        throw new Error(errorData.message || 'Failed to fetch available times');
    }
    return response.json();
}

async function createJobberJobDraft(jobData) {
    const response = await fetch('/api/jobber/create-job-draft', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create Jobber job draft and could not parse error.' }));
        throw new Error(errorData.message || 'Failed to create Jobber job draft');
    }
    return response.json();
}

async function startStripeCheckout(checkoutData) {
    const response = await fetch('/api/jobber/start-checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to start Stripe checkout and could not parse error.' }));
        throw new Error(errorData.message || 'Failed to start Stripe checkout');
    }
    const session = await response.json();
    // Assuming the backend returns a Stripe session URL or ID to redirect
    // For example, if it returns { redirectUrl: '...' }
    if (session.redirectUrl) {
        window.location.href = session.redirectUrl;
    } else if (session.sessionId) {
        // If you are using Stripe.js to redirect
        // const stripe = await loadStripe('your-stripe-public-key');
        // await stripe.redirectToCheckout({ sessionId: session.sessionId });
        console.warn("Received sessionId, but Stripe.js redirect is not fully implemented in this snippet.");
        alert("Stripe session created. Implement redirect using Stripe.js or ensure backend sends a redirectUrl.");
    } else {
        throw new Error('Invalid response from start-checkout endpoint.');
    }
    return session; // Or handle redirect directly
}

export {
    createJobberClient,
    getAvailableTimes,
    createJobberJobDraft,
    startStripeCheckout,
}; 