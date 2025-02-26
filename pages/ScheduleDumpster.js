import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

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
        couponCode: "",
    });

    const [errors, setErrors] = useState({});

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
        
        // Make coupon code optional
        // if (!formData.couponCode) newErrors.couponCode = "Coupon code is required.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    };

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
                        <div style={{ flex: 1 }}>
                            <input
                                type="text"
                                placeholder="Address"
                                value={formData.address}
                                onChange={(e) => handleChange("address", e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "10px",
                                    border: errors.address ? "1px solid red" : "1px solid #ccc",
                                    borderRadius: "5px",
                                }}
                            />
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

                    {/* Date Picker */}
                    <div style={{ marginBottom: "20px" }}>
                        <select
                            value={formData.date}
                            onChange={(e) => handleChange("date", e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: errors.date ? "1px solid red" : "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        >
                            <option value="">Select a Date</option>
                            <option value="2024-12-01">December 1, 2024</option>
                            <option value="2024-12-02">December 2, 2024</option>
                            <option value="2024-12-03">December 3, 2024</option>
                            <option value="2024-12-04">December 4, 2024</option>
                            <option value="2024-12-05">December 5, 2024</option>
                        </select>
                        {errors.date && (
                            <p style={{ color: "red", fontSize: "14px", textAlign: "left", marginTop: "5px" }}>{errors.date}</p>
                        )}
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
