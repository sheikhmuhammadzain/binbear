import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState, useRef } from "react";
import { useRouter } from "next/router";

export default function ConstructionContact() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [images, setImages] = useState([]);
    const [formStatus, setFormStatus] = useState(""); // For success/error messages
    const fileInputRef = useRef(null);

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

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 5) {
            setFormStatus("You can upload a maximum of 5 images.");
            return;
        }

        if (images.length + files.length > 5) {
            setFormStatus(`You can only upload ${5 - images.length} more images.`);
            return;
        }

        // Create preview URLs for the images
        const newImages = files.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));

        setImages(prevImages => [...prevImages, ...newImages]);
        setFormStatus("");
    };

    const removeImage = (index) => {
        const newImages = [...images];
        URL.revokeObjectURL(newImages[index].preview); // Clean up the URL
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");

        if (!name || !email || !phone || !message || !date || !time) {
            setFormStatus("Please fill in all required fields.");
            return;
        }

        const bookingData = {
            service_name: "Construction Cleanup Estimate Request",
            service_option: "Custom Quote Required",
            name: name,
            address: null, // Not collected on this form
            email: email,
            phone_number: phone,
            date: date,
            time: time,
            full_pickup_truck_load: null, // Not applicable for this estimate request type
            half_pickup_truck_load: null, // Not applicable for this estimate request type
            price: "0", // Estimate request, price to be determined
            units: "1", // Default or could be null
            estimated_price: "0", // Estimate request, price to be determined
            dumpster_size: null, // Not specified here
            city: null, // Not collected on this form
            state: null, // Not collected on this form
            zip_code: null, // Not collected on this form
            detail: message, // User's project details
            details: [], // No itemized sub-details for this type of request
            // Images are not sent here. You'll need a separate mechanism for image uploads.
            // For example, you could upload images to a service, get URLs,
            // and then potentially send those URLs in the 'detail' field or a custom field if the API supports it.
        };

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
                setFormStatus("Your estimate request has been submitted successfully! We'll contact you soon.");
                console.log(result);
                // Reset form
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
                setDate("");
                setTime("");
                images.forEach(img => URL.revokeObjectURL(img.preview)); // Clean up all preview URLs
                setImages([]);
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""; // Attempt to clear the file input
                }
                
                // Optional: Redirect after a delay
                setTimeout(() => {
                     // router.push("/thank-you-estimate"); // Example: redirect to a specific thank you page
                }, 3000);

            } else {
                setFormStatus(`Error: ${result.message || 'Failed to submit request. Please try again.'}`);
                console.error("API Error:", result);
            }
        } catch (error) {
            console.error("Network or submission error:", error);
            setFormStatus("Network error. Please check your connection and try again.");
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <Layout>
                <section className="section pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-50">
                                <h2 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                                    Construction Cleanup Estimate
                                </h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">
                                    Upload photos of your construction site and provide details for a custom quote
                                </p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="box-contact-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-form-left" style={{ backgroundColor: 'black' }}>
                                                <h3 className="color-white mb-15 wow animate__animated animate__fadeIn">Request an Estimate</h3>
                                                <p className="font-md color-white mb-30 wow animate__animated animate__fadeIn">
                                                    Upload 4-5 photos of your construction site to help us provide an accurate estimate.
                                                </p>

                                                <div className="image-upload-container mb-30">
                                                    <div className="upload-box" onClick={triggerFileInput}>
                                                        <input
                                                            type="file"
                                                            multiple
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                            ref={fileInputRef}
                                                            style={{ display: 'none' }}
                                                        />
                                                        <div className="upload-icon">
                                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path>
                                                            </svg>
                                                        </div>
                                                        <p className="upload-text">Click to upload images</p>
                                                        <p className="upload-hint">(Max 5 images)</p>
                                                    </div>
                                                </div>

                                                {images.length > 0 && (
                                                    <div className="image-previews">
                                                        <h4 className="color-white mb-15">Uploaded Images</h4>
                                                        <div className="preview-grid">
                                                            {images.map((image, index) => (
                                                                <div key={index} className="preview-item">
                                                                    <img src={image.preview} alt={`Upload ${index + 1}`} />
                                                                    <button
                                                                        className="remove-btn"
                                                                        onClick={() => removeImage(index)}
                                                                        type="button"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <div className="contact-form-right">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row wow animate__animated animate__fadeIn">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Your name *"
                                                                    value={name}
                                                                    onChange={(e) => setName(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: name ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Your email *"
                                                                    value={email}
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: email ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Your phone number *"
                                                                    value={phone}
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: phone ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <input
                                                                    type="date"
                                                                    placeholder="Preferred date *"
                                                                    value={date}
                                                                    onChange={(e) => setDate(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: date ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <select
                                                                    value={time}
                                                                    onChange={(e) => setTime(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: time ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                >
                                                                    <option value="">Select a time *</option>
                                                                    {timeSlots.map((timeSlot, index) => (
                                                                        <option key={index} value={timeSlot}>
                                                                            {timeSlot}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <textarea
                                                                    placeholder="Project details (size, type of debris, timeline, etc.) *"
                                                                    rows={6}
                                                                    value={message}
                                                                    onChange={(e) => setMessage(e.target.value)}
                                                                    required
                                                                    style={{
                                                                        width: "100%",
                                                                        padding: "10px",
                                                                        border: message ? "1px solid #ccc" : "1px solid black",
                                                                        borderRadius: "5px",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>

                                                        {formStatus && (
                                                            <div className="col-lg-12 mb-15">
                                                                <div className={`alert ${formStatus.includes("submitted") ? "alert-success" : "alert-danger"}`}>
                                                                    {formStatus}
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="col-lg-12">
                                                            <button
                                                                type="submit"
                                                                style={{
                                                                    width: "100%",
                                                                    padding: "13px 20px",
                                                                    backgroundColor: "#FF7F00",
                                                                    color: "#fff",
                                                                    border: "none",
                                                                    borderRadius: "5px",
                                                                    cursor: "pointer",
                                                                    fontSize: "16px",
                                                                    fontWeight: "bold",
                                                                    marginTop: "10px"
                                                                }}
                                                            >
                                                                Submit Request
                                                            </button>
                                                        </div>

                                                        <div className="col-lg-12 mt-20 text-center">
                                                            <button
                                                                type="button"
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
                                                                ← Back to services
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>{`
                    .box-contact-form {
                        background-color: #fff;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                    
                    .contact-form-left {
                        padding: 40px;
                        background-color: #FF7F00;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .contact-form-right {
                        padding: 40px;
                    }
                    
                    .upload-box {
                        border: 2px dashed rgba(255, 255, 255, 0.5);
                        border-radius: 10px;
                        padding: 30px;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    
                    .upload-box:hover {
                        border-color: #fff;
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                    
                    .upload-icon {
                        display: flex;
                        justify-content: center;
                        margin-bottom: 15px;
                    }
                    
                    .upload-icon svg {
                        width: 40px;
                        height: 40px;
                        color: white;
                    }
                    
                    .upload-text {
                        color: white;
                        font-size: 16px;
                        font-weight: 500;
                        margin-bottom: 5px;
                    }
                    
                    .upload-hint {
                        color: rgba(255, 255, 255, 0.7);
                        font-size: 14px;
                        margin-bottom: 0;
                    }
                    
                    .image-previews {
                        margin-top: 20px;
                    }
                    
                    .preview-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                    }
                    
                    .preview-item {
                        position: relative;
                        border-radius: 8px;
                        overflow: hidden;
                        height: 100px;
                    }
                    
                    .preview-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .remove-btn {
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: white;
                        font-size: 16px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        cursor: pointer;
                        opacity: 0.8;
                        transition: opacity 0.2s ease;
                    }
                    
                    .remove-btn:hover {
                        opacity: 1;
                    }
                    
                    .form-control {
                        height: auto;
                        padding: 12px 15px;
                        font-size: 15px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        margin-bottom: 15px;
                    }
                    
                    .form-control:focus {
                        border-color: #FF7F00;
                        box-shadow: 0 0 0 2px rgba(255, 127, 0, 0.2);
                    }
                    
                    .btn-brand-1-big {
                        padding: 12px 24px;
                        background-color: #FF7F00;
                        color: white !important;
                        font-size: 16px;
                        font-weight: 600;
                        border-radius: 8px;
                        transition: all 0.3s ease;
                    }
                    
                    .btn-brand-1-big:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(255, 127, 0, 0.3);
                    }
                    
                    .btn-link {
                        color: #6c757d;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }
                    
                    .btn-link:hover {
                        color: #FF7F00;
                    }
                    
                    .alert {
                        padding: 12px 15px;
                        border-radius: 8px;
                        font-size: 14px;
                    }
                    
                    .alert-success {
                        background-color: rgba(25, 135, 84, 0.1);
                        color: #198754;
                        border: 1px solid rgba(25, 135, 84, 0.2);
                    }
                    
                    .alert-danger {
                        background-color: rgba(220, 53, 69, 0.1);
                        color: #dc3545;
                        border: 1px solid rgba(220, 53, 69, 0.2);
                    }
                    
                    @media (max-width: 992px) {
                        .contact-form-left, .contact-form-right {
                            padding: 30px;
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .preview-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                        
                        .contact-form-left {
                            margin-bottom: 0;
                        }
                    }
                    
                    @media (max-width: 576px) {
                        .contact-form-left, .contact-form-right {
                            padding: 20px;
                        }
                        
                        .upload-box {
                            padding: 20px;
                        }
                        
                        .preview-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}</style>
            </Layout>
        </>
    )
} 