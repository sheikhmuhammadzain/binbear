import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bgmap from "@/components/sections/homepage1/Bgmap";

export default function ScheduleDumpster() {
    const router = useRouter();
    const [pendingBookingInput, setPendingBookingInput] = useState(null);
    
    // Fetch coupons when component mounts
    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await fetch('https://backend.binbearjunk.com/api/coupons');
                const result = await response.json();
                
                if (result.success) {
                    setCoupons(result.data);
                    console.log('Coupons loaded:', result.data);
                }
            } catch (error) {
                console.error('Error fetching coupons:', error);
            }
        };
        
        fetchCoupons();
        
        // Load pending booking input from localStorage if available
        if (typeof window !== 'undefined') {
            const bookingDetailsString = localStorage.getItem('pendingBookingDetails');
            if (bookingDetailsString) {
                try {
                    const parsedData = JSON.parse(bookingDetailsString);
                    setPendingBookingInput(parsedData);
                    console.log('Loaded pending booking input:', parsedData);
                } catch (error) {
                    console.error('Error parsing pending booking input:', error);
                }
            }
        }
    }, []);

    const verifyCoupon = () => {
        const couponCode = formData.couponCode.trim();
        if (!couponCode) {
            setCouponMessage("Please enter a coupon code");
            setCouponStatus("error");
            return;
        }

        setIsVerifyingCoupon(true);
        setCouponMessage("");
        setSelectedCoupon(null);

        // Find the coupon in our loaded coupons array
        setTimeout(() => {
            const foundCoupon = coupons.find(coupon => 
                coupon.name.toUpperCase() === couponCode.toUpperCase());
            
            if (foundCoupon) {
                // Check if coupon is still valid
                const today = new Date();
                const validFrom = new Date(foundCoupon.valid_from);
                const validTill = new Date(foundCoupon.valid_till);
                
                if (foundCoupon.status !== "Active") {
                    setCouponMessage("This coupon is not active");
                    setCouponStatus("error");
                } else if (today < validFrom) {
                    setCouponMessage(`This coupon is not valid yet. Valid from ${validFrom.toLocaleDateString()}.`);
                    setCouponStatus("error");
                } else if (today > validTill) {
                    setCouponMessage(`This coupon has expired. It was valid until ${validTill.toLocaleDateString()}.`);
                    setCouponStatus("error");
                } else {
                    setSelectedCoupon(foundCoupon);
                    setCouponMessage("Coupon applied successfully!");
                    setCouponStatus("success");
                }
            } else {
                setCouponMessage("Invalid coupon code");
                setCouponStatus("error");
            }
            
            setIsVerifyingCoupon(false);
        }, 1000); // Simulate network delay
    };

    const handlemyClick = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validateForm()) {
            // Extract city, state, zip from address if possible
            const addressParts = formData.address.split(',');
            let city = '';
            let state = '';
            let zipCode = '';
            
            const zipMatch = formData.address.match(/\b\d{5}(?:-\d{4})?\b|[A-Z]\d[A-Z]\s?\d[A-Z]\d/i);
            if (zipMatch) {
                zipCode = zipMatch[0];
            }
            
            if (addressParts.length > 2) {
                city = addressParts[addressParts.length - 2]?.trim() || '';
                const stateZipPart = addressParts[addressParts.length - 1]?.trim() || '';
                state = stateZipPart.split(' ')[0] || '';
            }

            let basePrice = 200; // Default base price
            let bookingApiDetailsArray = [{ category_id: 4, subcategory_id: 7 }]; // Default API details
            let service_name_val = "Junk Removal";
            let service_option_val = "Full Load";
            let units_val = "2";
            let full_pickup_truck_load_val = "yes";
            let half_pickup_truck_load_val = "no";
            let dumpster_size_val = "10 Yard";
            let apiDetailField = "";

            if (pendingBookingInput) {
                if (pendingBookingInput.type === 'itemSelection') {
                    service_name_val = "Junk Removal (Items)";
                    if (pendingBookingInput.totalEstimate > 0) {
                        basePrice = pendingBookingInput.totalEstimate;
                    }
                    if (basePrice < 200 && Object.keys(pendingBookingInput.items || {}).length > 0) basePrice = 200;
                    bookingApiDetailsArray = pendingBookingInput.detailsApiArray || [{ category_id: 4, subcategory_id: 7 }];
                    apiDetailField = "Booked via Item Selection.";
                } else if (pendingBookingInput.type === 'truckLoad') {
                    basePrice = pendingBookingInput.estimatePrice;
                     if (basePrice === 0 && (pendingBookingInput.quantities.full > 0 || pendingBookingInput.quantities.half > 0)) {
                        basePrice = (pendingBookingInput.quantities.full * 429) + (pendingBookingInput.quantities.half * 229);
                    }
                    service_name_val = "Truck Bed Load";
                    service_option_val = `${pendingBookingInput.quantities.full} Full, ${pendingBookingInput.quantities.half} Half Truck(s)`;
                    units_val = (pendingBookingInput.quantities.full + pendingBookingInput.quantities.half * 0.5).toString();
                    full_pickup_truck_load_val = pendingBookingInput.quantities.full.toString();
                    half_pickup_truck_load_val = pendingBookingInput.quantities.half.toString();
                    dumpster_size_val = "N/A - Truck Load";
                    bookingApiDetailsArray = []; 
                    apiDetailField = "Booked via Truck Load Estimator.";
                } else if (pendingBookingInput.type === 'unitEstimate') {
                    basePrice = pendingBookingInput.estimatedPrice;
                    // Ensure base price for unit estimate is not zero if units are selected
                    if (basePrice === 0 && pendingBookingInput.units > 0) {
                         // This might happen if pricePerUnit was 0, recalculate to be safe
                        basePrice = pendingBookingInput.units * (pendingBookingInput.pricePerUnit || 40); 
                    }
                     // Optional: ensure a minimum price for unit-based service too
                    // if (basePrice < 50 && pendingBookingInput.units > 0) basePrice = 50; 

                    service_name_val = "Construction Unit Service";
                    service_option_val = `${pendingBookingInput.units} Unit(s) @ $${pendingBookingInput.pricePerUnit}/unit`;
                    units_val = pendingBookingInput.units.toString();
                    full_pickup_truck_load_val = null; // Not applicable
                    half_pickup_truck_load_val = null; // Not applicable
                    dumpster_size_val = `${pendingBookingInput.units} Units Requested`; // Or could be N/A
                    bookingApiDetailsArray = []; // No itemized details for unit estimate
                    apiDetailField = `Booked via Price Estimator: ${pendingBookingInput.units} units.`;
                } else if (pendingBookingInput.type === 'dumpsterRental') {
                    const { dumpsterDetails, date, time, serviceType } = pendingBookingInput;
                    const priceString = dumpsterDetails.price.replace(/[^\d.-]/g, ''); // Remove non-numeric characters like '$'
                    basePrice = parseFloat(priceString) || 0;

                    service_name_val = "Dumpster Rental";
                    service_option_val = `${dumpsterDetails.name} - ${serviceType === 'dropoff' ? 'Drop-off' : 'Pick-up'}`;
                    units_val = "1"; // Typically one dumpster is rented
                    full_pickup_truck_load_val = null; // Not applicable
                    half_pickup_truck_load_val = null; // Not applicable
                    dumpster_size_val = dumpsterDetails.name; // e.g., "Small (10 yard)"
                    bookingApiDetailsArray = []; // No itemized details for dumpster rental
                    
                    // Override date and time from form with data from Dumpster-Rental page
                    formData.date = date; 
                    formData.time = time;

                    apiDetailField = `Dumpster: ${dumpsterDetails.name}, Service: ${serviceType}, Dimensions: ${dumpsterDetails.dimensions}.`;
                }
            }
            
            let finalPrice = basePrice;
            if (selectedCoupon) {
                if (selectedCoupon.discount_type === "Percentage") {
                    finalPrice = basePrice * (1 - selectedCoupon.discount_value/100);
                } else {
                    finalPrice = basePrice - selectedCoupon.discount_value;
                }
                if (finalPrice < 0) finalPrice = 0; // Price cannot be negative
            }

            const bookingData = {
                service_name: service_name_val,
                service_option: service_option_val,
                name: formData.firstName,
                address: formData.address,
                email: formData.email,
                phone_number: formData.phone,
                date: formData.date,
                time: formData.time,
                full_pickup_truck_load: full_pickup_truck_load_val,
                half_pickup_truck_load: half_pickup_truck_load_val,
                price: finalPrice.toFixed(2).toString(), // Ensure two decimal places
                units: units_val,
                estimated_price: basePrice.toFixed(2).toString(), // Store pre-coupon price as estimated
                dumpster_size: dumpster_size_val,
                city: city,
                state: state,
                zip_code: zipCode,
                detail: apiDetailField,
                details: bookingApiDetailsArray
            };

            submitBooking(bookingData);
        } else {
            setIsSubmitting(false);
        }
    };

    const submitBooking = async (bookingData) => {
        try {
            const response = await fetch('https://backend.binbearjunk.com/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();
            
            if (response.ok) {
                console.log('Booking successful:', result);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('bookingData', JSON.stringify(bookingData));
                    localStorage.setItem('bookingResponse', JSON.stringify(result));
                    localStorage.removeItem('pendingBookingDetails'); // Clear the consolidated input
                }
                
                router.push({
                    pathname: "/FinalBooking",
                    query: { bookingSuccess: true }
                });
            } else {
                setSubmissionError('Booking failed: ' + (result.message || 'Unknown error'));
                console.error('Booking failed:', result);
                setIsSubmitting(false);
            }
        } catch (error) {
            setSubmissionError('Network error. Please try again.');
            console.error('Error submitting booking:', error);
            setIsSubmitting(false);
        }
    };

    const [formData, setFormData] = useState({
        firstName: "",
        address: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        couponCode: "",
    });

    const [coupons, setCoupons] = useState([]);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [couponMessage, setCouponMessage] = useState("");
    const [couponStatus, setCouponStatus] = useState(""); // "success", "error", or ""
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState("");

    const [errors, setErrors] = useState({});
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: "" }); 
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.email) newErrors.email = "Email address is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.date) newErrors.date = "Please select a date.";
        if (!formData.time) newErrors.time = "Please select a time.";
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    };

    const verifyAddress = async (address) => {
        setIsVerifying(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=5`
            );
            const data = await response.json();
            setAddressSuggestions(data);
        } catch (error) {
            console.error('Error verifying address:', error);
        }
        setIsVerifying(false);
    };

    const selectAddress = (address) => {
        handleChange("address", address.display_name);
        setAddressSuggestions([]);
        if (address.lat && address.lon) {
            setFormData(prev => ({
                ...prev,
                coordinates: `${address.lat},${address.lon}`
            }));
        }
    };

    const timeSlots = [];
    for (let hour = 8; hour <= 18; hour++) {
        const hourFormatted = hour > 12 ? hour - 12 : hour;
        const amPm = hour >= 12 ? 'PM' : 'AM';
        timeSlots.push(`${hourFormatted}:00 ${amPm}`);
        if (hour < 18) {
            timeSlots.push(`${hourFormatted}:30 ${amPm}`);
        }
    }

    return (
        <Layout>
            <div
                style={{
                    textAlign: "center",
                    padding: "20px",
                    minHeight: "65vh",
                    marginBottom: "50px",
                    position: "relative",
                }}
            >
                <h4 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>Schedule Your Dumpster/Service</h4>

                <form
                    style={{
                        backgroundColor: "#fff",
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* First Name and Address */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) => handleChange("firstName", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.firstName ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            {errors.firstName && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.firstName}</p>
                            )}
                        </div>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                onFocus={() => setShowTooltip(true)}
                                onBlur={() => setTimeout(() => setShowTooltip(false), 200)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.address ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            {showTooltip && (
                                <div 
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        backgroundColor: '#FF7701',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        fontSize: '12px',
                                        zIndex: 1000
                                    }}
                                    onClick={() => verifyAddress(formData.address)}
                                >
                                    Verify Address
                                </div>
                            )}
                            {addressSuggestions.length > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                    marginTop: '5px',
                                    zIndex: 1000,
                                    maxHeight: '200px',
                                    overflowY: 'auto'
                                }}>
                                    {addressSuggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                padding: '10px',
                                                borderBottom: '1px solid #eee',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            }}
                                            onClick={() => selectAddress(suggestion)}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            {suggestion.display_name}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {isVerifying && (
                                <div style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)'
                                }}>
                                    Verifying...
                                </div>
                            )}
                            {errors.address && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.address}</p>
                            )}
                        </div>
                    </div>

                    {/* Email and Phone Number */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        <div style={{ flex: 1 }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.email ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            {errors.email && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.email}</p>
                            )}
                        </div>
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.phone ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            {errors.phone && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Date and Time Picker */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                        <div style={{ flex: 1 }}>
                            <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => handleChange("date", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.date ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            {errors.date && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.date}</p>
                            )}
                        </div>
                        <div style={{ flex: 1 }}>
                            <select
                                value={formData.time}
                                onChange={(e) => handleChange("time", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.time ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            >
                                <option value="">Select a Time</option>
                                {timeSlots.map((timeSlot, index) => (
                                    <option key={index} value={timeSlot}>
                                        {timeSlot}
                                    </option>
                                ))}
                            </select>
                            {errors.time && (
                                <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.time}</p>
                            )}
                        </div>
                    </div>

                    {/* Booking Input Summary */}
                    {pendingBookingInput && pendingBookingInput.type === 'itemSelection' && (
                        <div style={{ marginBottom: "20px", textAlign: "left", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                            <h5 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>Selected Items:</h5>
                            <ul style={{ margin: 0, padding: "0 0 0 20px", listStyleType: "disc" }}>
                                {Object.entries(pendingBookingInput.items).map(([name, itemData], index) => (
                                    <li key={index} style={{ marginBottom: "5px", fontSize: "14px" }}>
                                        {name} x{itemData.count} - ${(itemData.price * itemData.count).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: "10px", fontWeight: "bold", color: "#FF7701" }}>
                                Subtotal: ${pendingBookingInput.totalEstimate.toFixed(2)}
                            </div>
                        </div>
                    )}
                    {pendingBookingInput && pendingBookingInput.type === 'truckLoad' && (
                        <div style={{ marginBottom: "20px", textAlign: "left", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                            <h5 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>Truck Load Details:</h5>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}>Full Pickup Truck Loads: {pendingBookingInput.quantities.full}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}>Half Pickup Truck Loads: {pendingBookingInput.quantities.half}</p>
                            <div style={{ marginTop: "10px", fontWeight: "bold", color: "#FF7701" }}>
                                Estimated Price (before coupon): ${pendingBookingInput.estimatePrice.toFixed(2)}
                            </div>
                        </div>
                    )}
                    {pendingBookingInput && pendingBookingInput.type === 'unitEstimate' && (
                        <div style={{ marginBottom: "20px", textAlign: "left", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                            <h5 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>Unit Estimate Details:</h5>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}>Number of Units: {pendingBookingInput.units}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}>Price Per Unit: ${pendingBookingInput.pricePerUnit.toFixed(2)}</p>
                            <div style={{ marginTop: "10px", fontWeight: "bold", color: "#FF7701" }}>
                                Estimated Price (before coupon): ${pendingBookingInput.estimatedPrice.toFixed(2)}
                            </div>
                        </div>
                    )}
                    {pendingBookingInput && pendingBookingInput.type === 'dumpsterRental' && (
                        <div style={{ marginBottom: "20px", textAlign: "left", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                            <h5 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>Dumpster Rental Details:</h5>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Size:</strong> {pendingBookingInput.dumpsterDetails.name}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Price:</strong> {pendingBookingInput.dumpsterDetails.price}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Dimensions:</strong> {pendingBookingInput.dumpsterDetails.dimensions}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Service Date:</strong> {new Date(pendingBookingInput.date).toLocaleDateString()}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Service Time:</strong> {pendingBookingInput.time}</p>
                            <p style={{ margin: "5px 0", fontSize: "14px" }}><strong>Service Type:</strong> {pendingBookingInput.serviceType === 'dropoff' ? 'Drop-off' : 'Pick-up'}</p>
                        </div>
                    )}

                    {/* Coupon Code */}
                    <div style={{ marginBottom: "20px" }}>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <input
                                type="text"
                                placeholder="Enter Coupon Code"
                                value={formData.couponCode}
                                onChange={(e) => handleChange("couponCode", e.target.value.toUpperCase())}
                                style={{
                                    flex: 1,
                                    padding: "10px",
                                    border: errors.couponCode ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
                            <button
                                type="button"
                                disabled={!formData.couponCode || isVerifyingCoupon}
                                onClick={verifyCoupon}
                                style={{
                                    padding: "10px 15px",
                                    backgroundColor: "#FF7F00",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: formData.couponCode && !isVerifyingCoupon ? "pointer" : "not-allowed",
                                    opacity: formData.couponCode && !isVerifyingCoupon ? 1 : 0.7,
                                }}
                            >
                                {isVerifyingCoupon ? "Verifying..." : "Apply"}
                            </button>
                        </div>
                        {errors.couponCode && (
                            <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.couponCode}</p>
                        )}
                        {couponMessage && (
                            <div 
                                style={{ 
                                    marginTop: "10px", 
                                    padding: "10px", 
                                    borderRadius: "5px", 
                                    backgroundColor: couponStatus === "success" ? "#e6f7e6" : "#fce4e4",
                                    color: couponStatus === "success" ? "#2c662d" : "#cc0033",
                                    border: couponStatus === "success" ? "1px solid #c3e6cb" : "1px solid #f5c6cb",
                                }}
                            >
                                {couponMessage}
                            </div>
                        )}
                        {selectedCoupon && (
                            <div style={{ marginTop: "10px", padding: "10px", borderRadius: "5px", backgroundColor: "#fff8e6", border: "1px solid #ffe5b4" }}>
                                <h4 style={{ margin: "0 0 5px 0", color: "#FF7F00" }}>{selectedCoupon.name}</h4>
                                <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                                    {selectedCoupon.discount_type === "Percentage" 
                                        ? `${selectedCoupon.discount_value}% off your order` 
                                        : `$${selectedCoupon.discount_value} off your order`}
                                </p>
                                <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
                                    Valid until {new Date(selectedCoupon.valid_till).toLocaleDateString()}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Submission Error Message */}
                    {submissionError && (
                        <div 
                            style={{ 
                                marginBottom: "15px", 
                                padding: "10px", 
                                backgroundColor: "#fce4e4",
                                color: "#cc0033",
                                border: "1px solid #f5c6cb",
                                borderRadius: "5px",
                                textAlign: "left"
                            }}
                        >
                            {submissionError}
                        </div>
                    )}

                    {/* Next Button */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                            marginBottom: "20px",
                        }}
                    >
                        <button
                            type="button"
                            style={{
                                width: "300px",
                                padding: "13px 20px",
                                backgroundColor: "#FF7F00",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: isSubmitting ? "not-allowed" : "pointer",
                                fontSize: "16px",
                                fontWeight: "bold",
                                opacity: isSubmitting ? 0.7 : 1,
                                position: "relative"
                            }}
                            onClick={handlemyClick}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Confirm & Book"}
                        </button>
                    </div>
                </form>

                {/* Back Button */}
                <button
                    className="back-button"
                    onClick={() => router.back()}
                    style={{
                        marginTop: "20px",
                        color: "black",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    ← Back
                </button>
            </div>
        </Layout>
    );
}
