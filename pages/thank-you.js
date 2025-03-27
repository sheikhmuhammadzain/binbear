import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ThankYou() {
    const router = useRouter();

    return (
        <Layout>
            <section className="section pt-100 pb-100">
                <div className="container">
                    <div className="thank-you-container">
                        <div className="thank-you-icon">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <h1 className="thank-you-title">Thank You!</h1>
                        <p className="thank-you-text">
                            We've received your request for a construction cleanup estimate. Our team will review your information and photos, and we'll get back to you within 24-48 hours with a customized quote.
                        </p>
                        <p className="contact-info">
                            If you need immediate assistance, please contact us at:
                            <br />
                            <span className="contact-highlight">612-444-JUNK</span> or <span className="contact-highlight">info@binbear.com</span>
                        </p>
                        <div className="action-buttons">
                            <Link href="/" className="btn btn-home">
                                Return to Home
                            </Link>
                            <Link href="/choose-service" className="btn btn-services">
                                Explore Other Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .thank-you-container {
                    max-width: 700px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 50px 20px;
                    background-color: white;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .thank-you-icon {
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #FF7F00;
                    color: white;
                    border-radius: 50%;
                }
                
                .thank-you-icon svg {
                    width: 60px;
                    height: 60px;
                }
                
                .thank-you-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #212121;
                    margin-bottom: 20px;
                }
                
                .thank-you-text {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #666;
                    margin-bottom: 25px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                .contact-info {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #666;
                    margin-bottom: 30px;
                }
                
                .contact-highlight {
                    color: #FF7F00;
                    font-weight: 600;
                }
                
                .action-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 30px;
                }
                
                .btn {
                    display: inline-block;
                    padding: 12px 25px;
                    font-size: 16px;
                    font-weight: 600;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-home {
                    background-color: #FF7F00;
                    color: white;
                }
                
                .btn-home:hover {
                    background-color: #e67300;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-services {
                    background-color: transparent;
                    color: #666;
                    border: 1px solid #ccc;
                }
                
                .btn-services:hover {
                    background-color: #f5f5f5;
                    color: #FF7F00;
                    border-color: #FF7F00;
                    transform: translateY(-2px);
                }
                
                @media (max-width: 768px) {
                    .thank-you-container {
                        padding: 40px 20px;
                    }
                    
                    .thank-you-title {
                        font-size: 30px;
                    }
                    
                    .thank-you-text {
                        font-size: 16px;
                    }
                }
                
                @media (max-width: 576px) {
                    .action-buttons {
                        flex-direction: column;
                        gap: 10px;
                    }
                    
                    .thank-you-icon {
                        width: 80px;
                        height: 80px;
                    }
                    
                    .thank-you-icon svg {
                        width: 48px;
                        height: 48px;
                    }
                    
                    .thank-you-title {
                        font-size: 26px;
                    }
                }
            `}</style>
        </Layout>
    );
} 