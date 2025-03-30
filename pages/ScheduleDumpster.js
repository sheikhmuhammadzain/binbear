import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Bgmap from "@/components/sections/homepage1/Bgmap";

export default function ScheduleDumpster() {
    const router = useRouter();
    
    const handlemyClick = (e) => {
        e.preventDefault();
        if (validateForm()) {
            router.push("/FinalBooking");
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

    const [errors, setErrors] = useState({});
    const [addressSuggestions, setAddressSuggestions] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

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

                    {/* Coupon Code */}
          

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
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            onClick={handlemyClick}
                        >
                            Next
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
