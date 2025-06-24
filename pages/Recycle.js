import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faLeaf, faTruck, faBoxOpen, faTrash, faHome, faBuilding, faLaptop, faCog, faCouch, faDollarSign, faChartLine, faGlobe, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function RecyclePage() {
    const [activeTab, setActiveTab] = useState('what');
    
    const recyclingStats = [
        { number: "60%", label: "Recycled Materials", icon: faRecycle },
        { number: "200B", label: "Industry Value ($)", icon: faDollarSign },
        { number: "100K+", label: "Items Recycled", icon: faChartLine },
        { number: "10M+", label: "Tons Saved From Landfills", icon: faGlobe }
    ];
    
    const recyclingServices = [
        {
            title: "Bulk Junk Hauling",
            description: "Professional removal of oversized items that are difficult to transport",
            icon: faTruck
        },
        {
            title: "Home Cleanouts",
            description: "Complete solutions for moving, seasonal cleaning, and downsizing needs",
            icon: faHome
        },
        {
            title: "Trash Removal",
            description: "Efficient disposal of yard waste, construction debris, and more",
            icon: faRecycle
        },
        {
            title: "Property Cleanouts",
            description: "Specialized services for landlords, real estate agents, and property managers",
            icon: faBuilding
        }
    ];
    
    const recyclingTopics = [
        { 
            id: 'what',
            title: "What is Recycling?",
            icon: faRecycle,
            content: "Recycling involves converting waste materials into new products, helping conserve resources and reduce emissions. Instead of throwing away junk, recycling breaks down items to reuse their raw materials. Most communities support recycling efforts by providing bins and curbside services for homes and businesses. At BinBear, we make recycling easy: just point to the items, and we'll haul them away, ensuring they're responsibly processed."
        },
        { 
            id: 'state',
            title: "The State of Recycling",
            icon: faLeaf,
            content: "Recycling has changed significantly, especially since China's 2018 ban on most plastic and recyclable imports. Despite these shifts, recycling remains essential to the U.S. economy, creating jobs and conserving resources. Recycling is a $200 billion industry in the U.S. and generates more jobs than landfills or waste-to-energy plants. It saves natural resources and water, prevents waste from reaching oceans, and reduces greenhouse gas emissions."
        },
        { 
            id: 'ewaste',
            title: "Recycling E-Waste",
            icon: faLaptop,
            content: "Electronic waste (e-waste) includes items like computers, TVs, and phones, which contain valuable and potentially harmful materials. Disposing of these items in landfills releases toxic metals into the environment. BinBear offers safe, eco-friendly e-waste removal, ensuring that your electronics are recycled responsibly. We accept a wide range of e-waste, including computers, monitors, printers, copy machines, shredders, and televisions."
        },
        { 
            id: 'appliances',
            title: "Recycling Appliances",
            icon: faCog,
            content: "Old appliances often contain chemicals like Freon, which can be harmful to the environment. BinBear provides an eco-friendly appliance removal service, handling items like refrigerators, dishwashers, stoves, washers and dryers, and heating and cooling units. We ensure that appliances are disposed of safely and responsibly, with careful handling of hazardous components."
        },
        { 
            id: 'furniture',
            title: "Recycling Furniture",
            icon: faCouch,
            content: "Disposing of large items like furniture and mattresses can be difficult, especially as they're often not accepted at landfills. However, most furniture and up to 90% of mattress materials are recyclable. BinBear offers hassle-free furniture and mattress removal, recycling these items whenever possible to keep them out of landfills."
        }
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="recycle-hero">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <span className="hero-badge">ENVIRONMENTAL RESPONSIBILITY</span>
                                <h1 className="hero-title">Recycling Services</h1>
                                <p className="hero-description">With our planet facing increasing waste challenges, responsible junk recycling has never been more important. Our team is dedicated to recycling as much as possible, currently achieving a 60% recycling rate for all collected materials.</p>
                                <div className="hero-buttons">
                                    <Link href="/contact" className="btn btn-primary">
                                        Free Estimate
                                    </Link>
                                    <Link href="/Booking" className="btn btn-outline">
                                        Schedule Pickup
                                    </Link>
                            </div>
                                    </div>
                                </div>
                        <div className="col-lg-6">
                            <div className="hero-image">
                                <img 
                                    src="/assets/imgs/page/homepage4/img-testimonial-4.png" 
                                    alt="BinBear Recycling" 
                                    className="img-fluid rounded shadow"
                                />
                                <div className="stats-card">
                                    <div className="stats-icon">
                                        <FontAwesomeIcon icon={faRecycle} style={{ fontSize: '16px' }} />
                                    </div>
                                    <div className="stats-content">
                                        <h3>60%+</h3>
                                        <p>Items Recycled</p>
                        </div>
                    </div>
                        </div>
                    </div>
</div>
                                           </div>
            </section>



            {/* Services Section */}
            <section className="recycle-services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">How We Help You Recycle</h2>
                        <p className="section-subtitle">Not all junk needs to go to waste. Usable items can be repurposed, sold, or donated. Once you've handled what you can, BinBear is here to help with the rest.</p>
</div>
                          
                    <div className="services-grid">
                        {recyclingServices.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon" style={{ width: '40px', height: '40px' }}>
                                    <FontAwesomeIcon icon={service.icon} style={{ fontSize: '16px' }} />
                                </div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                </div>
                        ))}
                            </div>
</div>
            </section>

            {/* Info Tabs Section */}
            <section className="recycle-tabs">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Recycling Education</h2>
                        <p className="section-subtitle">Learn how BinBear helps make recycling accessible and efficient</p>
                              </div>
                    
                    <div className="tabs-container">
                        <div className="tabs-navigation">
                            {recyclingTopics.map((topic) => (
                                <button 
                                    key={topic.id}
                                    className={`tab-button ${activeTab === topic.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(topic.id)}
                                >
                                    <FontAwesomeIcon icon={topic.icon} className="tab-icon" style={{ fontSize: '14px' }} />
                                    <span>{topic.title}</span>
                                </button>
                            ))}
</div>
                          
                        <div className="tab-content-container">
                            {recyclingTopics.map((topic) => (
                                <div 
                                    key={topic.id} 
                                    className={`tab-content ${activeTab === topic.id ? 'active' : ''}`}
                                >
                                    <div className="tab-content-inner">
                                        <h3>{topic.title}</h3>
                                        <p>{topic.content}</p>
                                   </div>
                                    <div className="tab-image">
                                        <img 
                                            src={`/assets/imgs/page/about/img-${topic.id}.png`} 
                                            alt={topic.title}
                                            onError={(e) => {e.target.src = "/assets/imgs/page/about/img-1.png"}}
                                            className="img-fluid rounded"
                                        />
                                </div>
                            </div>
                            ))}
</div>
                                         </div>
                                </div>
            </section>

            {/* Process Section */}
            <section className="recycle-process">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Recycling Process</h2>
                        <p className="section-subtitle">How we ensure maximum recycling and minimum waste</p>
</div>
                          
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number" style={{ width: '50px', height: '50px', fontSize: '18px', marginRight: '25px' }}>1</div>
                            <div className="step-content">
                                <h3>Collection</h3>
                                <p>Our team arrives at your location and carefully collects all your unwanted items</p>
                                </div>
                            </div>

                        <div className="process-step">
                            <div className="step-number" style={{ width: '50px', height: '50px', fontSize: '18px', marginRight: '25px' }}>2</div>
                            <div className="step-content">
                                <h3>Sorting</h3>
                                <p>Items are transported to our facility where they're sorted into categories</p>
                            </div>
</div>
                          
                        <div className="process-step">
                            <div className="step-number" style={{ width: '50px', height: '50px', fontSize: '18px', marginRight: '25px' }}>3</div>
                            <div className="step-content">
                                <h3>Processing</h3>
                                <p>Materials are processed appropriately based on their composition and recyclability</p>
                                </div>
                            </div>

                        <div className="process-step">
                            <div className="step-number" style={{ width: '50px', height: '50px', fontSize: '18px', marginRight: '25px' }}>4</div>
                            <div className="step-content">
                                <h3>Recycling</h3>
                                <p>Recyclable materials are sent to specialized facilities for conversion into new products</p>
</div>
                                             </div>
                                </div>
                            </div>
            </section>

            {/* CTA Section */}
            <section className="recycle-cta">
                <div className="container">
                    <div className="cta-container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2 className="cta-title">Ready to recycle responsibly?</h2>
                                <p className="cta-subtitle">Get $20 off your next service with promo code <span className="promo-code">WHYWAIT</span></p>
                                <p className="cta-note">Terms apply. Not valid below minimum charge or combined with other offers.</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-center">
                                <Link href="/Booking" className="btn btn-primary btn-lg">
                                    Schedule Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* General Styles */
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #222;
                    margin-bottom: 15px;
                    position: relative;
                    padding-bottom: 15px;
                }

                .section-title:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 3px;
                    background-color: #FF7701;
                }

                .section-subtitle {
                    font-size: 18px;
                    color: #666;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .btn {
                    display: inline-block;
                    padding: 12px 28px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .btn-primary {
                    background-color: #FF7701;
                    color: white;
                    border: 2px solid #FF7701;
                }

                .btn-primary:hover {
                    background-color: #e66900;
                    border-color: #e66900;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(255, 119, 1, 0.3);
                }

                .btn-outline {
                    background-color: transparent;
                    color: #FF7701;
                    border: 2px solid #FF7701;
                }

                .btn-outline:hover {
                    background-color: #FF7701;
                    color: white;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(255, 119, 1, 0.2);
                }

                .btn-lg {
                    padding: 15px 35px;
                    font-size: 18px;
                }

                .rounded {
                    border-radius: 8px;
                }

                .shadow {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }

                /* Hero Section */
                .recycle-hero {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                    overflow: hidden;
                    position: relative;
                }

                .hero-content {
                    padding-right: 30px;
                }

                .hero-badge {
                    display: inline-block;
                    background-color: #FF7701;
                    color: white;
                    padding: 8px 20px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 25px;
                    letter-spacing: 1px;
                }

                .hero-title {
                    font-size: 48px;
                    font-weight: 800;
                    color: #222;
                    margin-bottom: 25px;
                    line-height: 1.2;
                }

                .hero-description {
                    font-size: 18px;
                    color: #666;
                    line-height: 1.7;
                    margin-bottom: 35px;
                }

                .hero-buttons {
                    display: flex;
                    gap: 15px;
                }

                .hero-image {
                    position: relative;
                }

                .hero-image img {
                    width: 100%;
                    height: auto;
                }

                .stats-card {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    background-color: #FF7701;
                    color: white;
                    padding: 20px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    box-shadow: 0 10px 30px rgba(255, 119, 1, 0.3);
                }

                .stats-icon {
                    font-size: 18px;
                }

                .stats-content h3 {
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0;
                    line-height: 1;
                }

                .stats-content p {
                    margin: 5px 0 0;
                    font-size: 16px;
                    opacity: 0.9;
                }

                /* Stats Section */
                .recycle-stats {
                    padding: 80px 0;
                    background-color: #FF7701;
                    color: white;
                }

                .stats-container {
    display: flex;
    justify-content: space-between;
                    flex-wrap: wrap;
                }

                .stat-box {
                    flex: 1;
                    min-width: 200px;
                    text-align: center;
                    padding: 30px 20px;
                    position: relative;
                }

                .stat-box:not(:last-child):after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    height: 50%;
                    width: 1px;
                    background-color: rgba(255, 255, 255, 0.3);
                }

                .stat-icon {
                    font-size: 20px;
                    margin-bottom: 15px;
                }

                .stat-number {
                    font-size: 42px;
                    font-weight: 800;
                    margin-bottom: 10px;
                    line-height: 1;
                }

                .stat-label {
                    font-size: 16px;
                    font-weight: 500;
                    opacity: 0.9;
                }

                /* Services Section */
                .recycle-services {
                    padding: 100px 0;
                    background-color: white;
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 30px;
                }

                .service-card {
                    background-color: #f9f9f9;
                    border-radius: 8px;
                    padding: 30px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }

                .service-icon {
                    font-size: 20px;
                    color: #FF7701;
                    margin-bottom: 20px;
                    background-color: rgba(255, 119, 1, 0.1);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                }

                .service-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                }

                .service-description {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.6;
                }

                /* Tabs Section */
                .recycle-tabs {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                }

                .tabs-container {
                    margin-top: 50px;
                }

                .tabs-navigation {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 10px;
                    margin-bottom: 30px;
                }

                .tab-button {
    padding: 12px 20px;
                    background: none;
                    border: 2px solid #eee;
                    border-radius: 30px;
    font-size: 16px;
                    font-weight: 600;
                    color: #666;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .tab-button:hover {
                    border-color: #FF7701;
                    color: #FF7701;
                }

                .tab-button.active {
                    background-color: #FF7701;
                    border-color: #FF7701;
                    color: white;
                }

                .tab-icon {
                    font-size: 16px;
                }

                .tab-content-container {
                    position: relative;
                    min-height: 300px;
                }

                .tab-content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .tab-content.active {
                    opacity: 1;
                    visibility: visible;
                }

                .tab-content-inner {
                    flex: 1;
                }

                .tab-content-inner h3 {
                    font-size: 28px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 20px;
                }

                .tab-content-inner p {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.7;
                }

                .tab-image {
                    flex: 1;
                    max-width: 450px;
                }

                .tab-image img {
                    width: 100%;
                    height: auto;
                }

                /* Process Section */
                .recycle-process {
                    padding: 100px 0;
                    background-color: white;
                }

                .process-steps {
                    position: relative;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 30px 0;
                }

                .process-steps:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 50px;
                    width: 3px;
                    background-color: #eee;
                }

                .process-step {
                    display: flex;
                    align-items: flex-start;
                    margin-bottom: 60px;
                    position: relative;
                }

                .process-step:last-child {
                    margin-bottom: 0;
                }

                .step-number {
                    width: 60px;
                    height: 60px;
                    background-color: #FF7701;
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    margin-right: 30px;
                    flex-shrink: 0;
                    position: relative;
                    z-index: 1;
                    box-shadow: 0 10px 30px rgba(255, 119, 1, 0.2);
                }

                .step-content {
                    background-color: #f9f9f9;
                    padding: 30px;
                    border-radius: 8px;
                    flex: 1;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }

                .step-content h3 {
                    font-size: 24px;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 15px;
                }

                .step-content p {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.6;
                    margin: 0;
                }

                /* CTA Section */
                .recycle-cta {
                    padding: 80px 0;
                }

                .cta-container {
                    background: linear-gradient(135deg, #FF7701, #FF5500);
                    border-radius: 12px;
                    padding: 60px;
                    color: white;
                    box-shadow: 0 10px 30px rgba(255, 119, 1, 0.2);
                }

                .cta-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }

                .cta-subtitle {
                    font-size: 20px;
                    margin-bottom: 10px;
                    opacity: 0.9;
                }

                .promo-code {
                    background-color: white;
                    color: #FF7701;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-weight: 700;
                    margin: 0 5px;
                }

                .cta-note {
                    font-size: 14px;
                    opacity: 0.8;
                    margin-top: 15px;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    
                    .stats-container {
                        flex-wrap: wrap;
                    }
                    
                    .stat-box {
                        flex: 0 0 50%;
                        margin-bottom: 30px;
                    }
                    
                    .stat-box:nth-child(even):after {
                        display: none;
                    }
                    
                    .tab-content {
                        flex-direction: column;
                    }
                    
                    .tab-content-inner, .tab-image {
                        max-width: 100%;
                    }
                    
                    .cta-container {
                        padding: 40px 30px;
                    }
                }

                @media (max-width: 768px) {
                    .recycle-hero {
                        padding: 80px 0;
                    }
                    
                    .hero-content {
                        padding-right: 0;
                        margin-bottom: 40px;
                    }
                    
                    .hero-title {
                        font-size: 36px;
                    }
                    
                    .section-title {
                        font-size: 28px;
                    }
                    
                    .stats-card {
                        position: relative;
                        bottom: auto;
                        right: auto;
                        margin-top: 20px;
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .process-step {
                        flex-direction: column;
                    }
                    
                    .step-number {
                        margin-right: 0;
                        margin-bottom: 20px;
                    }
                    
                    .process-steps:before {
                        left: 50px;
                    }
                    
                    .cta-title {
                        font-size: 28px;
                    }
                    
                    .cta-subtitle {
                        font-size: 18px;
                    }
}

@media (max-width: 576px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .stat-box {
                        flex: 0 0 100%;
                    }
                    
                    .hero-buttons {
                        flex-direction: column;
                    }
                    
                    .btn {
                        width: 100%;
                        text-align: center;
                    }
                    
                    .tabs-navigation {
                        flex-direction: column;
                    }
                    
                    .tab-button {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
            </Layout>
    );
}

