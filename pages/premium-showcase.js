import React from 'react';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

export default function PremiumShowcase() {
    return (
        <Layout headTitle="Premium UI Showcase | BinBear">
            <div className="premium-showcase-container">
                <div className="premium-showcase-header">
                    <h1>Premium UI Showcase</h1>
                    <p>A showcase of premium UI components and styles for BinBear</p>
                </div>
                
                <div className="premium-card">
                    <h2>Premium Components</h2>
                    <div className="components-grid">
                        <div className="component-item">
                            <h3>Premium Buttons</h3>
                            <div className="buttons-showcase">
                                <Link href="/" className="btn-premium btn-premium-primary">
                                    <span>Primary Button</span>
                                </Link>
                                <Link href="/" className="btn-premium btn-premium-secondary">
                                    <span>Secondary Button</span>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="component-item">
                            <h3>Premium Cards</h3>
                            <div className="card-showcase">
                                <div className="premium-showcase-card">
                                    <div className="card-body">
                                        <h4>Sample Card</h4>
                                        <p>This is a premium styled card component with enhanced shadows and effects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="back-link">
                    <Link href="/">
                        Return to Home Page
                    </Link>
                </div>
            </div>
            
            <style jsx>{`
                .premium-showcase-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }
                
                .premium-showcase-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .premium-showcase-header h1 {
                    font-size: 36px;
                    color: #333;
                    margin-bottom: 10px;
                }
                
                .premium-showcase-header p {
                    font-size: 18px;
                    color: #666;
                }
                
                .premium-card {
                    background: #fff;
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                    padding: 30px;
                    margin-bottom: 30px;
                }
                
                .premium-card h2 {
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #212121;
                    border-bottom: 2px solid #f5f5f5;
                    padding-bottom: 10px;
                }
                
                .components-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 20px;
                }
                
                .component-item {
                    margin-bottom: 30px;
                }
                
                .component-item h3 {
                    font-size: 20px;
                    margin-bottom: 15px;
                    color: #333;
                }
                
                .buttons-showcase {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }
                
                .card-showcase {
                    margin-bottom: 20px;
                }
                
                .premium-showcase-card {
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border-left: 4px solid #FF7F00;
                }
                
                .premium-showcase-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
                }
                
                .premium-showcase-card h4 {
                    font-size: 18px;
                    margin-bottom: 10px;
                    color: #212121;
                }
                
                .premium-showcase-card p {
                    font-size: 14px;
                    color: #666;
                    line-height: 1.6;
                }
                
                .back-link {
                    text-align: center;
                    margin-top: 30px;
                }
                
                .back-link a {
                    color: #FF7F00;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                }
                
                .back-link a:hover {
                    color: #FF5E00;
                    text-decoration: underline;
                }
                
                @media (max-width: 768px) {
                    .premium-showcase-container {
                        padding: 20px 15px;
                    }
                    
                    .premium-showcase-header h1 {
                        font-size: 28px;
                    }
                    
                    .premium-showcase-header p {
                        font-size: 16px;
                    }
                    
                    .premium-card {
                        padding: 20px;
                    }
                    
                    .components-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Layout>
    );
} 