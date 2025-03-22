import React from 'react';
import Layout from "@/components/layout/Layout";
import PremiumCard from '@/components/elements/PremiumCard';
import PremiumButton from '@/components/elements/PremiumButton';

export default function CardShowcase() {
    return (
        <Layout>
            <section className="section-premium">
                <div className="container">
                    <div className="section-premium-header">
                        <h2 className="section-premium-title">Premium Card Showcase</h2>
                        <p className="section-premium-subtitle">
                            Explore our collection of premium, enterprise-level cards with modern styling and interactive effects.
                        </p>
                    </div>

                    <div className="row mt-50">
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Basic Card"
                                description="A simple card with title and description. Perfect for displaying basic information."
                                buttonText="Learn More"
                                buttonHref="#"
                            />
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Card with Image"
                                description="A card with an image, title, and description. Great for showcasing products or features."
                                imageSrc="/img/bear.png.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="BinBear Logo"
                                buttonText="View Details"
                                buttonHref="#"
                                buttonType="secondary"
                            />
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <PremiumCard
                                title="Card with Icon"
                                description="A card with an icon, title, and description. Ideal for highlighting services or benefits."
                                icon={
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                                buttonText="Get Info"
                                buttonHref="#"
                                buttonType="accent"
                            />
                        </div>
                        
                        <div className="col-lg-6 col-md-12 mt-30">
                            <PremiumCard
                                title="Horizontal Card"
                                description="A horizontal card layout with image on the left and content on the right. Perfect for featured content or important announcements."
                                imageSrc="/img/bear.png.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="BinBear Logo"
                                buttonText="Explore"
                                buttonHref="#"
                                horizontal={true}
                            />
                        </div>
                        
                        <div className="col-lg-6 col-md-12 mt-30">
                            <PremiumCard
                                title="Card with Footer"
                                description="A card with a footer section. Useful for displaying additional information or metadata."
                                imageSrc="/img/bear.png.png"
                                imageWidth={400}
                                imageHeight={250}
                                imageAlt="BinBear Logo"
                                buttonText="Read More"
                                buttonHref="#"
                                footerText="Last updated: June 2023"
                            />
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <PremiumCard
                                title="Card with Custom Content"
                                description="A card with custom content. You can add any React components inside the card."
                            >
                                <div className="custom-content">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Features</h4>
                                            <ul>
                                                <li>Responsive design</li>
                                                <li>Modern styling</li>
                                                <li>Interactive effects</li>
                                                <li>Customizable options</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Benefits</h4>
                                            <ul>
                                                <li>Improved user experience</li>
                                                <li>Increased engagement</li>
                                                <li>Better conversion rates</li>
                                                <li>Professional appearance</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-20 d-flex gap-3">
                                        <PremiumButton type="primary">Primary Action</PremiumButton>
                                        <PremiumButton type="outline">Secondary Action</PremiumButton>
                                    </div>
                                </div>
                            </PremiumCard>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .custom-content {
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    padding: 20px;
                    margin-top: 10px;
                }
                
                .custom-content h4 {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #333;
                }
                
                .custom-content ul {
                    padding-left: 20px;
                    margin-bottom: 0;
                }
                
                .custom-content li {
                    margin-bottom: 5px;
                    color: #666;
                }
                
                .gap-3 {
                    gap: 15px;
                }
                
                @media (max-width: 768px) {
                    .custom-content .row {
                        flex-direction: column;
                    }
                    
                    .custom-content .col-md-6:first-child {
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </Layout>
    );
} 