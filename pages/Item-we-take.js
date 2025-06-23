import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function ServiceDetail() {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        { title: "Furniture", items: ["Couches", "Sofas", "Beds", "Chairs", "Tables", "Desks"] },
        { title: "Electronics", items: ["TVs", "Computers", "Printers", "E-Waste"] },
        { title: "Yard Waste", items: ["Branches", "Clippings", "Stumps", "Fencing", "Lumber"] },
        { title: "Appliances", items: ["Refrigerators", "Air Conditioners", "Dishwashers", "Washing Machines"] },
        { title: "Other Items", items: ["Hot Tubs", "Mattresses", "Trash", "Construction Waste"] }
    ];

    return (
        <Layout>
            <div className="page-wrapper">
                <section className="section-hero">
                    <div className="container">
                        <div className="text-center hero-content">
                            <span className="service-tag wow animate__animated animate__fadeIn">
                                Our Services
                            </span>
                            <h1 className="wow animate__animated animate__fadeIn main-heading">
                                Items We Take
                            </h1>
                            <p className="subtitle color-grey-900 wow animate__animated animate__fadeIn">
                                At BinBear, we can handle just about ANYTHING and EVERYTHING—except hazardous waste.
                                <br className="d-none d-lg-block" />
                                Here are examples of the types of junk we haul away:
                            </p>
                            
                            <div className="category-navigation">
                                <div className="category-tabs">
                                    {categories.map((category, index) => (
                                        <button 
                                            key={index}
                                            className={`category-tab ${activeCategory === index ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(index)}
                                        >
                                            {category.title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="image-grid mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="image-container wow animate__animated animate__fadeIn">
                                            <img src="/assets/imgs/page/service-detail/img4.png" 
                                                 alt="transp" 
                                                 className="img-fluid rounded-lg shadow" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="image-container wow animate__animated animate__fadeIn">
                                            <img src="/assets/imgs/page/service-detail/img4.png" 
                                                 alt="transp" 
                                                 className="img-fluid rounded-lg shadow" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-items py-5">
                    <div className="container">
                        <h2 className="section-title text-center wow animate__animated animate__fadeIn">
                            What We Can Take
                        </h2>
                        
                        <div className="items-category">
                            <h3 className="category-title">{categories[activeCategory].title}</h3>
                            <div className="items-grid">
                                {categories[activeCategory].items.map((item, index) => (
                                    <div key={index} className="item-card wow animate__animated animate__fadeIn">
                                        <div className="item-icon">
                                            <i className="icon-check"></i>
                                        </div>
                                        <div className="item-content">
                                            <h4 className="item-title">{item}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="service-cards-grid mt-5">
                            {[
                                { title: "1. Furniture Removal", icon: "icon-furniture" },
                                { title: "2. TV Disposal & Recycling", icon: "icon-tv" },
                                { title: "3. Yard Waste Removal", icon: "icon-yard" },
                                { title: "4. Foreclosure Cleanouts", icon: "icon-house" },
                                { title: "5. Tire Disposal", icon: "icon-tire" },
                                { title: "6. Appliance Removal", icon: "icon-appliance" },
                                { title: "7. Hot Tub Disposal", icon: "icon-hottub" },
                                { title: "8. E-Waste Disposal", icon: "icon-ewaste" },
                                { title: "9. Trash Removal", icon: "icon-trash" },
                                { title: "10. Mattress Disposal", icon: "icon-mattress" },
                                { title: "11. Refrigerator Disposal", icon: "icon-fridge" },
                                { title: "12. Construction Waste", icon: "icon-construction" },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="service-card wow animate__animated animate__fadeIn"
                                >
                                    <div className="service-card-inner">
                                        <div className="service-icon">
                                            <i className={service.icon}></i>
                                            </div>
                                        <div className="service-content">
                                            <h4 className="service-title">{service.title}</h4>
                                            <Link href="#" className="service-link">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-value mt-50">
                    <div className="container">
                        <h2 className="section-title text-center wow animate__animated animate__fadeIn">
                            Enjoy a Clutter-Free Life with BinBear Junk Removal!
                        </h2>
                        <p className="section-subtitle text-center wow animate__animated animate__fadeIn">
                            Is clutter piling up in your home? Want to reclaim your space? Searching for a reliable junk removal service you can trust? You're not alone! Many homeowners struggle with these same challenges, and BinBear is here to help.
                        </p>
                        <div className="text-center wow animate__animated animate__fadeIn">
                            <img 
                                src="/assets/imgs/page/service-detail/img3.png" 
                                alt="BinBear Junk Removal" 
                                className="feature-image rounded-lg shadow"
                            />
                        </div>
                        
                        <div className="service-details">
                            <div className="service-detail-item wow animate__animated animate__fadeIn">
                                <h3 className="detail-title">We Haul It All</h3>
                                <div className="detail-content">
                                    <h4>Furniture Removal, Disposal, Recycling, or Donation</h4>
                                    <p>Examples: Couches, sofas, beds, chairs, tables, desks, and more.</p>
                                    <p>Need to get rid of old furniture that's too bulky to handle on your own? BinBear can take care of it, ensuring items are disposed of responsibly, whether through recycling or donation to local charities.</p>
                                </div>
                            </div>

                            <div className="service-detail-item wow animate__animated animate__fadeIn">
                                <div className="detail-content">
                                    <h4>TV Disposal & Recycling</h4>
                                    <p>Old televisions and monitors piling up? We'll handle it all, from CRTs to flat screens, recycling or disposing of them responsibly.</p>
                                </div>
                            </div>

                            <div className="service-detail-item wow animate__animated animate__fadeIn">
                                <div className="detail-content">
                                    <h4>Yard Waste Removal</h4>
                                    <p>Got yard debris like branches, clippings, or stumps? We take care of waste from landscaping projects, including old fencing, firewood, and lumber.</p>
                                </div>
                            </div>

                            <div className="service-detail-item wow animate__animated animate__fadeIn">
                                <div className="detail-content">
                                    <h4>Clean Out Services</h4>
                                    <p>Moving out, managing an estate, or dealing with property cleanouts? We handle it all efficiently and courteously.</p>
                                </div>
                            </div>

                            <div className="service-detail-item wow animate__animated animate__fadeIn">
                                <div className="detail-content">
                                    <h4>Appliance Removal</h4>
                                    <p>Examples: Air conditioners, dishwashers, fridges, washing machines, stoves, water heaters, and more. Don't worry about the heavy lifting—BinBear has it covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-restrictions mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60">
                                <img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="section-title wow animate__animated animate__fadeIn">
                                    What BinBear Can't Take
                                </h3>
                                <p className="section-subtitle wow animate__animated animate__fadeIn">
                                    While we handle almost anything, we do not collect hazardous waste, including:
                                </p>
                                <div className="restrictions-grid">
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Paints and solvents</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Pesticides and fertilizers</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Chemical cleaners</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Lead-acid and lithium-ion batteries</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Flammable liquids</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Ammunition and explosives</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Medical waste</span>
                                    </div>
                                    <div className="restriction-item wow animate__animated animate__fadeIn">
                                        <i className="icon-warning"></i>
                                        <span>Materials containing asbestos or mercury</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-60">
                                <div className="image-container wow animate__animated animate__fadeIn">
                                    <img src="/assets/imgs/page/service-detail/img4.png" alt="Hazardous materials" className="img-fluid rounded-lg shadow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="divider" />
                
                <section className="section-howto pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center">
                            <div className="icon-container wow animate__animated animate__fadeIn">
                                <img className="mb-15" src="/img/bear.png.png" alt="BinBear icon" />
                            </div>
                            <h3 className="section-title wow animate__animated animate__fadeIn">
                                How Our Service Works
                            </h3>
                            <p className="section-subtitle wow animate__animated animate__fadeIn">
                                Quick, easy, and convenient junk removal in just a few simple steps
                            </p>
                        </div>
                        
                        <div className="process-steps">
                            <div className="process-step wow animate__animated animate__fadeIn">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Book Your Appointment</h4>
                                    <p>Schedule online or call us - we offer flexible time slots to fit your schedule.</p>
                                                </div>
                                            </div>
                            
                            <div className="process-step wow animate__animated animate__fadeIn">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>We Arrive On Time</h4>
                                    <p>Our uniformed professionals will arrive in our branded trucks ready to work.</p>
                                                </div>
                                            </div>
                            
                            <div className="process-step wow animate__animated animate__fadeIn">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>We Do All The Work</h4>
                                    <p>Point to what needs to go, and we'll handle the heavy lifting and loading.</p>
                                                </div>
                                            </div>
                            
                            <div className="process-step wow animate__animated animate__fadeIn">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Enjoy Your Space</h4>
                                    <p>We'll clean up after ourselves, so you can immediately enjoy your cleared space.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="cta-container text-center mt-5 wow animate__animated animate__fadeIn">
                            <Link href="/contact" style={{
                                display: 'inline-block',
                                background: '#FF7701',
                                color: 'white',
                                fontSize: '18px',
                                fontWeight: '700',
                                padding: '16px 35px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                border: 'none',
                                boxShadow: '0 4px 15px rgba(255, 119, 1, 0.3)',
                                transition: 'all 0.3s ease',
                                marginRight: '20px'
                            }}>
                                Get Your Free Estimate
                            </Link>
                            <Link href="/pricing" style={{
                                display: 'inline-block',
                                background: 'transparent',
                                color: '#FF7701',
                                fontSize: '18px',
                                fontWeight: '700',
                                padding: '14px 33px',
                                borderRadius: '8px',
                                border: '2px solid #FF7701',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}>
                                View Our Pricing
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

                <style jsx>{`
                    .page-wrapper {
                    padding-top: 30px;
                    }

                .service-tag {
                    display: inline-block;
                    background-color: #FF7701;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 30px;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 20px;
                    }

                .main-heading {
                    font-size: 42px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #333;
                }
                
                .subtitle {
                    font-size: 18px;
                    line-height: 1.6;
                        max-width: 800px;
                    margin: 0 auto 30px;
                    }

                .category-navigation {
                    margin: 30px 0;
                }
                
                .category-tabs {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-bottom: 30px;
                }
                
                .category-tab {
                    background: #f5f5f5;
                    border: 1px solid #e0e0e0;
                    border-radius: 30px;
                    padding: 8px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    }

                .category-tab:hover {
                    background: #eee;
                }
                
                .category-tab.active {
                    background: #FF7701;
                    color: white;
                    border-color: #FF7701;
                }
                
                .image-container {
                    border-radius: 12px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                
                .section-title {
                    font-size: 36px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: #333;
                }
                
                .section-subtitle {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #666;
                    margin-bottom: 30px;
                }
                
                .items-category {
                    background: #fff;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    margin-bottom: 40px;
                    }

                .category-title {
                    font-size: 24px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    color: #FF7701;
                    border-bottom: 2px solid #FF7701;
                    padding-bottom: 10px;
                }
                
                .items-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                }
                
                .item-card {
                    display: flex;
                    align-items: center;
                    background: #f9f9f9;
                    border-radius: 8px;
                    padding: 15px;
                    transition: all 0.3s ease;
                }
                
                .item-card:hover {
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                    transform: translateY(-3px);
                }
                
                .item-icon {
                    background: #FF7701;
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                }
                
                .item-title {
                    font-size: 16px;
                    font-weight: 600;
                    margin: 0;
                }
                
                .service-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                        }

                .service-card {
                    height: 100%;
                }
                
                .service-card-inner {
                    background: linear-gradient(135deg, #FF7701, #FF5500);
                    border-radius: 12px;
                    padding: 25px;
                    height: 100%;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(255, 119, 1, 0.2);
                    transition: all 0.3s ease;
                    }

                .service-card-inner:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(255, 119, 1, 0.3);
                }
                
                .service-icon {
                    margin-bottom: 15px;
                    font-size: 24px;
                }
                
                .service-title {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 15px;
                }
                
                .service-link {
                    display: inline-block;
                    background: rgba(255, 255, 255, 0.2);
                    padding: 6px 12px;
                    border-radius: 30px;
                        color: white;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }
                
                .service-link:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                
                .feature-image {
                    max-width: 90%;
                        margin: 40px auto;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                
                .service-details {
                    max-width: 900px;
                    margin: 0 auto;
                }
                
                .service-detail-item {
                    border-bottom: 1px solid #eee;
                    padding: 30px 0;
                }
                
                .service-detail-item:last-child {
                    border-bottom: none;
                }
                
                .detail-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #FF7701;
                    margin-bottom: 20px;
                    }

                .detail-content h4 {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #444;
                }
                
                .detail-content p {
                    font-size: 16px;
                    line-height: 1.7;
                    color: #666;
                    margin-bottom: 15px;
                }
                
                .restrictions-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 15px;
                    margin-top: 20px;
                }
                
                .restriction-item {
                    display: flex;
                    align-items: center;
                    background: #f9f9f9;
                    border-radius: 8px;
                    padding: 12px;
                }
                
                .restriction-item i {
                    color: #FF7701;
                    margin-right: 10px;
                    font-size: 18px;
                }
                
                .divider {
                    height: 1px;
                    background: #e0e0e0;
                    margin: 60px 0;
                }
                
                .icon-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .icon-container img {
                    height: 60px;
                }
                
                .process-steps {
                    max-width: 800px;
                    margin: 40px auto;
                    }

                .process-step {
                    display: flex;
                    margin-bottom: 30px;
                    position: relative;
                }
                
                .process-step:not(:last-child):after {
                    content: '';
                    position: absolute;
                    left: 24px;
                    top: 60px;
                    bottom: -30px;
                    width: 2px;
                    background: #FF7701;
                }
                
                .step-number {
                    background: #FF7701;
                    color: white;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: 700;
                    margin-right: 20px;
                    flex-shrink: 0;
                }
                
                .step-content {
                    background: #f9f9f9;
                    border-radius: 12px;
                    padding: 20px 25px;
                    flex-grow: 1;
                }
                
                .step-content h4 {
                    font-size: 20px;
                    font-weight: 600;
                    margin-bottom: 10px;
                    color: #333;
                }
                
                .step-content p {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #666;
                    margin: 0;
                }
                
                .cta-container {
                    margin-top: 50px;
                }
                
                .btn-primary {
                    display: inline-block;
                    background: #FF7701;
                    color: white;
                    font-size: 18px;
                    font-weight: 700;
                    padding: 16px 35px;
                    border-radius: 8px;
                    text-decoration: none;
                    border: none;
                    box-shadow: 0 4px 15px rgba(255, 119, 1, 0.3);
                    transition: all 0.3s ease;
                }
                
                .btn-primary:hover {
                    background: #FF5500;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(255, 119, 1, 0.4);
                    color: white;
                    text-decoration: none;
                }

                .btn-secondary {
                    display: inline-block;
                    background: transparent;
                    color: #FF7701;
                    font-size: 18px;
                    font-weight: 700;
                    padding: 14px 33px;
                    border-radius: 8px;
                    border: 2px solid #FF7701;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                
                .btn-secondary:hover {
                    background: #FF7701;
                    color: white;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 15px rgba(255, 119, 1, 0.3);
                    text-decoration: none;
                }
                
                .ml-3 {
                    margin-left: 15px;
                }
                
                @media (max-width: 768px) {
                    .main-heading {
                        font-size: 32px;
                    }
                    
                    .section-title {
                        font-size: 28px;
                    }
                    
                    .service-cards-grid {
                        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    }
                    
                    .process-step:not(:last-child):after {
                        left: 20px;
                    }
                    
                    .btn-primary {
                        padding: 14px 28px;
                        font-size: 16px;
                    }
                    
                    .btn-secondary {
                        padding: 12px 26px;
                        font-size: 16px;
                    }
                    
                    .ml-3 {
                        margin-left: 0;
                        margin-top: 15px;
                    }
                }
                
                @media (max-width: 576px) {
                    .category-tabs {
                        flex-direction: column;
                    }
                    
                    .category-tab {
                        width: 100%;
                    }
                    
                    .service-cards-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .restrictions-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .process-step {
                        flex-direction: column;
                    }
                    
                    .step-number {
                        margin-bottom: 15px;
                    }
                    
                    .process-step:not(:last-child):after {
                        display: none;
                    }
                    }
                `}</style>
        </Layout>
    );
}