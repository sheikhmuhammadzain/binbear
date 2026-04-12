import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <section className="section pt-80 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '10px' }}>Privacy Policy</h1>
                            <p style={{ color: '#888', marginBottom: '40px' }}>Last updated: April 12, 2026</p>

                            <div className="policy-section">
                                <h2>1. Information We Collect</h2>
                                <p>When you use our website or contact us for services, we may collect the following personal information:</p>
                                <ul>
                                    <li>Name, email address, and phone number</li>
                                    <li>Service address and billing information</li>
                                    <li>Photos you upload for estimates</li>
                                    <li>Messages and notes you submit through our forms</li>
                                    <li>Technical data such as IP address and browser type</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>2. How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul>
                                    <li>Process and fulfill service requests and bookings</li>
                                    <li>Provide price estimates and communicate quotes</li>
                                    <li>Send service confirmations and follow-up communications</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                                <p>We will only contact you using the information you provide. We do not sell your personal information to third parties.</p>
                            </div>

                            <div className="policy-section">
                                <h2>3. Text Message & Phone Communications</h2>
                                <p>By providing your phone number and checking the opt-in box on our forms, you consent to receive text messages and phone calls from BinBear related to your service requests, estimates, and bookings. Message and data rates may apply. You may opt out at any time by replying STOP to any text message or by contacting us directly.</p>
                            </div>

                            <div className="policy-section">
                                <h2>4. Sharing Your Information</h2>
                                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                                <ul>
                                    <li>With service providers who assist in our business operations (e.g., payment processors)</li>
                                    <li>When required by law or government authorities</li>
                                    <li>To protect the rights, property, or safety of BinBear, our customers, or others</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>5. Data Security</h2>
                                <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                            </div>

                            <div className="policy-section">
                                <h2>6. Cookies</h2>
                                <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect some functionality of our website.</p>
                            </div>

                            <div className="policy-section">
                                <h2>7. Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul>
                                    <li>Request access to the personal information we hold about you</li>
                                    <li>Request correction or deletion of your personal information</li>
                                    <li>Opt out of marketing communications at any time</li>
                                    <li>Lodge a complaint with a supervisory authority</li>
                                </ul>
                            </div>

                            <div className="policy-section">
                                <h2>8. Children's Privacy</h2>
                                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
                            </div>

                            <div className="policy-section">
                                <h2>9. Changes to This Policy</h2>
                                <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.</p>
                            </div>

                            <div className="policy-section">
                                <h2>10. Contact Us</h2>
                                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                                <ul>
                                    <li>Phone: <a href="tel:+12149014769" style={{ color: '#FF6C00' }}>214 901 4769</a></li>
                                    <li>Email: <a href="mailto:contact@binbearjunk.com" style={{ color: '#FF6C00' }}>contact@binbearjunk.com</a></li>
                                </ul>
                            </div>

                            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                <Link href="/terms-of-service" style={{ color: '#FF6C00', marginRight: '20px' }}>Terms of Service</Link>
                                <Link href="/contact" style={{ color: '#FF6C00' }}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .policy-section {
                    margin-bottom: 35px;
                }

                .policy-section h2 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 12px;
                }

                .policy-section p {
                    color: #555;
                    line-height: 1.7;
                    margin-bottom: 10px;
                }

                .policy-section ul {
                    color: #555;
                    line-height: 1.7;
                    padding-left: 20px;
                    margin-bottom: 10px;
                }

                .policy-section ul li {
                    margin-bottom: 6px;
                }
            `}</style>
        </Layout>
    );
}
