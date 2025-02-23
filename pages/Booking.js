import Layout from "@/components/layout/Layout";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useRouter } from "next/router"; // Import useRouter for navigation

export default function Login() {
    const [zipCode, setZipCode] = useState(""); // Initialize state for zip code
    const [message, setMessage] = useState(""); // State to manage success or error messages
    const [isMobile, setIsMobile] = useState(false); // State to manage screen size
    const router = useRouter(); // Initialize router

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        setMessage(""); // Clear message when typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the zip code
        if (zipCode === "") {
            setMessage("Good news! We've got you covered.");
            setTimeout(() => {
                router.push("/choose-service"); // Redirect after 3 seconds
            }, 3000);
        } else if (zipCode.length === 5 && !isNaN(zipCode)) {
            setMessage("Sorry, we don't have coverage for this zip code.");
        } else {
            setMessage("Sorry, please enter a valid 5-digit zip code.");
        }
    };

    // Detect screen size and update isMobile state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial state

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Layout>
            <section className="section box-login">
                <div className="row align-items-center m-0">
                    <div
                        className="col-lg-6"
                        style={{
                            marginBottom: "150px",
                            marginLeft: isMobile ? "0px" : "400px", // Adjust left margin on mobile
                            marginRight: isMobile ? "0px" : "0", // Adjust right margin on mobile
                        }}
                    >
                        <div className="box-login-left">
                            <h2
                                className="color-brand-2 mb-10 wow animate__animated animate__fadeIn"
                                style={{ marginLeft: isMobile ? "0px" : "70px" }}
                            >
                                Booking Now
                            </h2>
                            <p
                                className="font-md color-grey-500 wow animate__animated animate__fadeIn"
                                style={{ marginLeft: isMobile ? "10px" : "70px" }}
                            >
                                Access to all features. No credit card required.
                            </p>

                            <div className="box-form-login wow animate__animated animate__fadeIn">
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        maxWidth: "400px",
                                        margin: "20px auto",
                                        textAlign: "center",
                                        position: "relative",
                                    }}
                                >
                                    <label
                                        htmlFor="zip-code"
                                        style={{
                                            display: "block",
                                            marginBottom: "10px",
                                            fontSize: "16px",
                                        }}
                                    >
                                        Enter Your Zip Code
                                    </label>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "10px",
                                            alignItems: "center",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <input
                                            type="text"
                                           
                                            placeholder="ZIP Code"
                                            className="zip-code-input"
                                            style={{
                                                flex: "1",
                                                minWidth: "250px",
                                                maxWidth: "500px",
                                                padding: "10px",
                                                fontSize: "16px",
                                                border: "1px solid #ccc",
                                                borderRadius: "4px",
                                                height: "50px",
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            style={{
                                                height: "50px",
                                                padding: "10px",
                                                backgroundColor: " #FF7F00",
                                                color: "black",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                                minWidth: "100px",
                                                maxWidth: "150px",
                                                flexShrink: 0,
                                                marginRight: isMobile ? "65px" : "0", // Adjust right margin on mobile
                                            }}
                                        >
                                            Submit
                                        </button>
                                    </div>

                                    {/* Conditional Message Rendering */}
                                    <p
                                        style={{
                                            marginTop: "20px",
                                            fontSize: "16px",
                                            color:
                                                message ===
                                                "Good news! We've got you covered."
                                                    ? "green"
                                                    : "red",
                                            textAlign: "center",
                                        }}
                                    >
                                        {message}
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                @media (max-width: 768px) {
                    .box-login-left {
                        text-align: center; /* Center the content */
                    }

                    .zip-code-input,
                {
                        width: 100%; /* Make input and button full width */
                        max-width: 400px; /* Adjust max width for small screens */
                       margin :0px ; /* Center the input and button */
                    }
button {  justify-content: center;
            align-items: center;
                        width: 100%; /* Make input and button full width */
                        max-width: 400px; /* Adjust max width for small screens */
                       margin-left :30% ; /* Center the input and button */
                    }

                    .box-form-login {
                        margin-left: 0;
                    }
                }
            `}</style>
        </Layout>
    );
}
