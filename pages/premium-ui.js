import React from 'react';
import Layout from "@/components/layout/Layout";
import PremiumButton from '@/components/elements/PremiumButton';
import PremiumCard from '@/components/elements/PremiumCard';
import Link from 'next/link';

export default function PremiumUI() {
    return (
        <Layout>
            <section className="section-premium hero-premium">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-premium-content" data-aos="fade-up">
                                <h1 className="hero-premium-title">Premium UI Components</h1>
                                <p className="hero-premium-subtitle">
                                    Explore our collection of premium, enterprise-level UI components designed to enhance your website's user experience.
                                </p>
                                <div className="hero-premium-buttons">
                                    <PremiumButton href="/button-showcase" size="lg">
                                        Explore Buttons
                                    </PremiumButton>
                                    <PremiumButton href="/card-showcase" type="outline" size="lg">
                                        Explore Cards
                                    </PremiumButton>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-premium-image" data-aos="fade-left" data-aos-delay="200">
                                <img src="/img/bear.png.png" alt="Premium UI" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-premium">
                <div className="container">
                    <div className="section-premium-header">
                        <h2 className="section-premium-title">Featured Components</h2>
                        <p className="section-premium-subtitle">
                            Our premium components are designed to provide a consistent, professional look and feel across your entire website.
                        </p>
                    </div>

                    <div className="row mt-50">
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Premium Buttons"
                                description="Modern, interactive buttons with various styles, sizes, and states. Perfect for calls-to-action and user interactions."
                                imageSrc="/assets/imgs/page/homepage1/img-tool-1.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="Premium Buttons"
                                buttonText="View Buttons"
                                buttonHref="/button-showcase"
                                icon={
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                }
                            />
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Premium Cards"
                                description="Versatile card components with various layouts and styles. Ideal for displaying content, products, or features."
                                imageSrc="/assets/imgs/page/homepage1/img-tool-2.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="Premium Cards"
                                buttonText="View Cards"
                                buttonHref="/card-showcase"
                                icon={
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                                        <path d="M3 9H21" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                }
                            />
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Premium Maps"
                                description="Interactive map components with custom styling and overlays. Perfect for displaying location information."
                                imageSrc="/assets/imgs/page/homepage1/img-tool-3.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="Premium Maps"
                                buttonText="View Example"
                                buttonHref="/"
                                icon={
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-premium bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-right">
                                <h2 className="mb-20">Why Use Premium UI Components?</h2>
                                <div className="benefits-list">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M22 4L12 14.01L9 11.01" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="benefit-content">
                                            <h4>Consistent Design Language</h4>
                                            <p>Maintain a consistent look and feel across your entire website, enhancing brand recognition and user experience.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16 8L8 16" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8 8L16 16" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="benefit-content">
                                            <h4>Reduced Development Time</h4>
                                            <p>Save time and resources by using pre-built, tested components that can be easily integrated into your website.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="benefit-item">
                                        <div className="benefit-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="benefit-content">
                                            <h4>Enhanced User Experience</h4>
                                            <p>Provide a better user experience with interactive, responsive, and visually appealing components.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="premium-cta-card" data-aos="fade-left">
                                <h3>Ready to Upgrade Your Website?</h3>
                                <p>Implement our premium UI components today and transform your website into a modern, professional platform that engages users and drives conversions.</p>
                                <PremiumButton href="/button-showcase" size="lg">Get Started</PremiumButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .hero-premium {
                    padding: 120px 0;
                    background: linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%);
                }
                
                .hero-premium-content {
                    padding-right: 30px;
                }
                
                .hero-premium-title {
                    font-size: 48px;
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: #333;
                    line-height: 1.2;
                }
                
                .hero-premium-subtitle {
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 30px;
                    line-height: 1.6;
                }
                
                .hero-premium-buttons {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                .hero-premium-image {
                    text-align: center;
                }
                
                .hero-premium-image img {
                    max-width: 100%;
                    height: auto;
                }
                
                .bg-light {
                    background-color: #f9f9f9;
                }
                
                .benefit-item {
                    display: flex;
                    margin-bottom: 30px;
                }
                
                .benefit-icon {
                    flex: 0 0 50px;
                    height: 50px;
                    background-color: rgba(255, 127, 0, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 20px;
                }
                
                .benefit-content {
                    flex: 1;
                }
                
                .benefit-content h4 {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #333;
                }
                
                .benefit-content p {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.6;
                }
                
                .premium-cta-card {
                    background: linear-gradient(135deg, #ff8a00, #ff5e00);
                    color: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 15px 30px rgba(255, 94, 0, 0.2);
                }
                
                .premium-cta-card h3 {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                
                .premium-cta-card p {
                    font-size: 16px;
                    margin-bottom: 30px;
                    opacity: 0.9;
                }
                
                @media (max-width: 992px) {
                    .hero-premium {
                        padding: 80px 0;
                    }
                    
                    .hero-premium-title {
                        font-size: 36px;
                    }
                    
                    .hero-premium-content {
                        padding-right: 0;
                        margin-bottom: 40px;
                    }
                }
                
                @media (max-width: 768px) {
                    .hero-premium {
                        padding: 60px 0;
                    }
                    
                    .hero-premium-title {
                        font-size: 30px;
                    }
                    
                    .premium-cta-card {
                        padding: 30px;
                    }
                    
                    .premium-cta-card h3 {
                        font-size: 24px;
                    }
                }
            `}</style>
        </Layout>
    );
} 