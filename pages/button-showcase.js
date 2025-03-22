import React from 'react';
import Layout from "@/components/layout/Layout";
import PremiumButton from '@/components/elements/PremiumButton';

export default function ButtonShowcase() {
    return (
        <Layout>
            <section className="section-premium">
                <div className="container">
                    <div className="section-premium-header">
                        <h2 className="section-premium-title">Premium Button Showcase</h2>
                        <p className="section-premium-subtitle">
                            Explore our collection of premium, enterprise-level buttons with modern styling and interactive effects.
                        </p>
                    </div>

                    <div className="row mt-50">
                        <div className="col-lg-12">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Button Types</h3>
                                    <p className="card-premium-text">Different button types for various use cases.</p>
                                    
                                    <div className="button-showcase">
                                        <PremiumButton type="primary">Primary Button</PremiumButton>
                                        <PremiumButton type="secondary">Secondary Button</PremiumButton>
                                        <PremiumButton type="accent">Accent Button</PremiumButton>
                                        <PremiumButton type="outline">Outline Button</PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Button Sizes</h3>
                                    <p className="card-premium-text">Buttons in different sizes for various contexts.</p>
                                    
                                    <div className="button-showcase">
                                        <PremiumButton size="sm">Small Button</PremiumButton>
                                        <PremiumButton size="md">Medium Button</PremiumButton>
                                        <PremiumButton size="lg">Large Button</PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Button with Icons</h3>
                                    <p className="card-premium-text">Buttons with icons for better visual cues.</p>
                                    
                                    <div className="button-showcase">
                                        <PremiumButton 
                                            icon={
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            }
                                        >
                                            Add New
                                        </PremiumButton>
                                        
                                        <PremiumButton 
                                            type="secondary"
                                            icon={
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            }
                                        >
                                            Confirm
                                        </PremiumButton>
                                        
                                        <PremiumButton 
                                            type="accent"
                                            icon={
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            }
                                        >
                                            Download
                                        </PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Link Buttons</h3>
                                    <p className="card-premium-text">Buttons that function as links to other pages.</p>
                                    
                                    <div className="button-showcase">
                                        <PremiumButton href="/">Home Page</PremiumButton>
                                        <PremiumButton href="/Booking" type="secondary">Booking Page</PremiumButton>
                                        <PremiumButton href="/contact" type="outline">Contact Us</PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Block Buttons</h3>
                                    <p className="card-premium-text">Full-width buttons for mobile or call-to-action sections.</p>
                                    
                                    <div className="button-showcase-block">
                                        <PremiumButton block={true}>Full Width Button</PremiumButton>
                                        <div className="mt-15"></div>
                                        <PremiumButton block={true} type="secondary">Full Width Secondary</PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 mt-30">
                            <div className="card-premium">
                                <div className="card-premium-content">
                                    <h3 className="card-premium-title">Button States</h3>
                                    <p className="card-premium-text">Buttons in different states: normal, hover, and disabled.</p>
                                    
                                    <div className="button-showcase">
                                        <PremiumButton>Normal Button</PremiumButton>
                                        <PremiumButton className="button-hover-state">Hover State</PremiumButton>
                                        <PremiumButton disabled={true}>Disabled Button</PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .button-showcase {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 15px;
                    margin-top: 20px;
                }
                
                .button-showcase-block {
                    margin-top: 20px;
                }
                
                .button-hover-state {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
                }
                
                @media (max-width: 768px) {
                    .button-showcase {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </Layout>
    );
} 