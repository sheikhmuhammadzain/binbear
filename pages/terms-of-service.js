import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <Layout>
            <section className="section pt-80 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h1 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '10px' }}>Terms of Service</h1>
                            <p style={{ color: '#888', marginBottom: '40px' }}>Last updated: April 12, 2026</p>

                            <div className="terms-section">
                                <h2>1. Acceptance of Terms</h2>
                                <p>By accessing or using the BinBear website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                            </div>

                            <div className="terms-section">
                                <h2>2. Services</h2>
                                <p>BinBear provides junk removal, dumpster rental, construction cleanup, and related services. All services are subject to availability and may require a confirmed booking or estimate.</p>
                                <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
                            </div>

                            <div className="terms-section">
                                <h2>3. Booking & Estimates</h2>
                                <p>Price estimates provided through our website or phone are not guaranteed final prices. Actual pricing may vary based on the volume of items, accessibility, and other factors assessed at the time of service.</p>
                                <p>By submitting a booking or estimate request, you authorize BinBear to contact you at the phone number or email address provided to confirm your appointment and discuss service details.</p>
                            </div>

                            <div className="terms-section">
                                <h2>4. Communication Consent</h2>
                                <p>By submitting your contact information through any form on our website, you consent to receive communications from BinBear including:</p>
                                <ul>
                                    <li>Service confirmations and appointment reminders</li>
                                    <li>Estimate follow-ups and quotes</li>
                                    <li>Promotional offers and service updates (if opted in)</li>
                                    <li>Text messages related to your service requests</li>
                                </ul>
                                <p>You may opt out of marketing communications at any time by replying STOP to any text, or by contacting us directly.</p>
                            </div>

                            <div className="terms-section">
                                <h2>5. Payment</h2>
                                <p>Payment is due at the time of service unless otherwise arranged. We accept major credit cards and other payment methods as displayed during checkout. All prices are in US dollars.</p>
                                <p>In the event of a cancellation, please notify us at least 24 hours in advance to avoid a cancellation fee.</p>
                            </div>

                            <div className="terms-section">
                                <h2>6. Customer Responsibilities</h2>
                                <p>You agree to:</p>
                                <ul>
                                    <li>Provide accurate information when booking or requesting estimates</li>
                                    <li>Ensure our team has safe and legal access to the service location</li>
                                    <li>Not include hazardous materials, biohazards, or prohibited items in junk removal requests</li>
                                    <li>Comply with all applicable local laws and regulations</li>
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h2>7. Prohibited Items</h2>
                                <p>We do not remove hazardous waste, chemicals, asbestos, medical waste, flammable materials, or any items prohibited by local, state, or federal law. Attempting to include prohibited items may result in service refusal and additional charges.</p>
                            </div>

                            <div className="terms-section">
                                <h2>8. Limitation of Liability</h2>
                                <p>BinBear's liability for any claim arising out of or related to our services is limited to the amount paid for the specific service giving rise to the claim. We are not liable for indirect, incidental, special, or consequential damages.</p>
                                <p>We are not responsible for pre-existing damage to property or items not clearly identified prior to service.</p>
                            </div>

                            <div className="terms-section">
                                <h2>9. Intellectual Property</h2>
                                <p>All content on this website, including text, graphics, logos, and images, is the property of BinBear and is protected by applicable copyright and trademark laws. You may not reproduce or distribute content without our written permission.</p>
                            </div>

                            <div className="terms-section">
                                <h2>10. Governing Law</h2>
                                <p>These Terms of Service are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts located in Dallas County, Texas.</p>
                            </div>

                            <div className="terms-section">
                                <h2>11. Changes to Terms</h2>
                                <p>We reserve the right to update these Terms of Service at any time. Changes will be effective upon posting to this page. Your continued use of our services following any changes constitutes acceptance of the new terms.</p>
                            </div>

                            <div className="terms-section">
                                <h2>12. Contact Us</h2>
                                <p>If you have questions about these Terms of Service, please contact us:</p>
                                <ul>
                                    <li>Phone: <a href="tel:+12149014769" style={{ color: '#FF6C00' }}>214 901 4769</a></li>
                                    <li>Email: <a href="mailto:contact@binbearjunk.com" style={{ color: '#FF6C00' }}>contact@binbearjunk.com</a></li>
                                </ul>
                            </div>

                            <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                                <Link href="/privacy-policy" style={{ color: '#FF6C00', marginRight: '20px' }}>Privacy Policy</Link>
                                <Link href="/contact" style={{ color: '#FF6C00' }}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .terms-section {
                    margin-bottom: 35px;
                }

                .terms-section h2 {
                    font-size: 20px;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 12px;
                }

                .terms-section p {
                    color: #555;
                    line-height: 1.7;
                    margin-bottom: 10px;
                }

                .terms-section ul {
                    color: #555;
                    line-height: 1.7;
                    padding-left: 20px;
                    margin-bottom: 10px;
                }

                .terms-section ul li {
                    margin-bottom: 6px;
                }
            `}</style>
        </Layout>
    );
}
