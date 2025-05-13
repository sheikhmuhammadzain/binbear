import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Bgmap from "@/components/sections/homepage1/Bgmap";

export default function ScheduleDumpster() {
    const router = useRouter();
    
    // Fetch coupons when component mounts
    useEffect(() => {
        const fetchCoupons = async () => {
            try {
                const response = await fetch('https://binbear.njnylimo.us/public/api/coupons');
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
        
        // Load selected items data from localStorage if available
        if (typeof window !== 'undefined') {
            const selectedItemsData = localStorage.getItem('selectedItems');
            if (selectedItemsData) {
                try {
                    const parsedData = JSON.parse(selectedItemsData);
                    setSelectedItemsData(parsedData);
                    console.log('Loaded selected items data:', parsedData);
                } catch (error) {
                    console.error('Error parsing selected items data:', error);
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
            
            // Try to extract zip code (assuming it's the last part with numbers)
            const zipMatch = formData.address.match(/\b\d{5}(?:-\d{4})?\b|[A-Z]\d[A-Z]\s?\d[A-Z]\d/i);
            if (zipMatch) {
                zipCode = zipMatch[0];
            }
            
            // Try to get city and state from address parts
            if (addressParts.length > 2) {
                // Typical format: Street, City, State ZIP
                city = addressParts[addressParts.length - 2]?.trim() || '';
                // Extract state from the last part (before zip if present)
                const stateZipPart = addressParts[addressParts.length - 1]?.trim() || '';
                state = stateZipPart.split(' ')[0] || '';
            }

            // Calculate the base price from selected items or use default
            let basePrice = 200; // Default price
            let totalUnits = 2; // Default units
            
            // If we have selected items data, use it for price and details
            if (selectedItemsData && selectedItemsData.totalEstimate > 0) {
                basePrice = selectedItemsData.totalEstimate;
                // If the price is less than the minimum, set to minimum
                if (basePrice < 200) basePrice = 200;
            }
            
            // Apply coupon discount if available
            let finalPrice = basePrice;
            if (selectedCoupon) {
                if (selectedCoupon.discount_type === "Percentage") {
                    finalPrice = basePrice * (1 - selectedCoupon.discount_value/100);
                } else {
                    finalPrice = basePrice - selectedCoupon.discount_value;
                }
                // Ensure price doesn't go below minimum
                if (finalPrice < 0) finalPrice = 0;
            }

            // Prepare data for API submission using the exact structure required
            const bookingData = {
                service_name: "Junk Removal",
                service_option: "Full Load",
                name: formData.firstName,
                address: formData.address,
                email: formData.email,
                phone_number: formData.phone,
                date: formData.date,
                time: formData.time,
                full_pickup_truck_load: "yes", 
                half_pickup_truck_load: "no",
                price: finalPrice.toString(),
                units: totalUnits.toString(),
                estimated_price: finalPrice.toString(),
                dumpster_size: "10 Yard",
                city: city,
                state: state,
                zip_code: zipCode,
                detail: "",
                details: selectedItemsData?.details || [
                    {
                        category_id: 4,
                        subcategory_id: 7
                    }
                ]
            };

            // Submit the data to API
            submitBooking(bookingData);
        } else {
            setIsSubmitting(false);
        }
    };

    const submitBooking = async (bookingData) => {
        try {
            const response = await fetch('https://binbear.njnylimo.us/public/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();
            
            if (response.ok) {
                console.log('Booking successful:', result);
                // Store the booking data in localStorage or context for the next page
                if (typeof window !== 'undefined') {
                    localStorage.setItem('bookingData', JSON.stringify(bookingData));
                    localStorage.setItem('bookingResponse', JSON.stringify(result));
                    // Clear the selected items data as it's now been processed
                    localStorage.removeItem('selectedItems');
                }
                
                // Redirect to confirmation page
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
    const [selectedItemsData, setSelectedItemsData] = useState(null);

    const [errors, setErrors] = useState({});
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isVerifyingCoupon, setIsVerifyingCoupon] = useState(false);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: "" }); // Clear error when the field is updated
    };

    const validateForm = () => {
        const newErrors = {};

        // Validation for each field
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.email) newErrors.email = "Email address is required.";
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        if (!formData.date) newErrors.date = "Please select a date.";
        if (!formData.time) newErrors.time = "Please select a time.";
        
        // Make coupon code optional
        // if (!formData.couponCode) newErrors.couponCode = "Coupon code is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    };

    const verifyAddress = async (address) => {
        setIsVerifying(true);
        try {
            // Using OpenStreetMap Nominatim API (free)
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
        // Update map coordinates if needed
        if (address.lat && address.lon) {
            setFormData(prev => ({
                ...prev,
                coordinates: `${address.lat},${address.lon}`
            }));
        }
    };

    // Generate time slots from 8:00 AM to 6:00 PM
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
                <h4 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>Schedule Your Dumpster</h4>

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

                    {/* Selected Items Summary (if any) */}
                    {selectedItemsData && (
                        <div style={{ marginBottom: "20px", textAlign: "left", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
                            <h5 style={{ margin: "0 0 10px 0", fontSize: "16px", color: "#333" }}>Selected Items:</h5>
                            <ul style={{ margin: 0, padding: "0 0 0 20px" }}>
                                {Object.entries(selectedItemsData.items).map(([name, item], index) => (
                                    <li key={index} style={{ marginBottom: "5px", fontSize: "14px" }}>
                                        {name} x{item.count} - ${item.price * item.count}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: "10px", fontWeight: "bold", color: "#FF7701" }}>
                                Total: ${selectedItemsData.totalEstimate}
                            </div>
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
                            {isSubmitting ? "Submitting..." : "Next"}
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
