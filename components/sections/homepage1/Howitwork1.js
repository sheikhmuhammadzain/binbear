import Services1 from "./Services1"

export default function Howitwork1() {
    return (
        <>
            <Services1/>
            
            <section className="section-premium bg-worldmap">
                <div className="container">
                    <div className="section-premium-header" data-aos="fade-up">
                        <img className="mb-10" src="/img/bear.png.png" width={120} height={48} alt="BinBear Logo" />
                        <h2 className="section-premium-title">You just book, and we take care of rest!</h2>
                        <h4 className="section-premium-subtitle">We make Junk Removal Easy</h4>
                        <p className="section-premium-description">
                            At BinBear, we make junk removal effortless. Whether it's a single item or a full property cleanout, our team is here to handle every step. With BinBear, you get:
                        </p>
                    </div>
                    
                    <div className="row mt-40">
                        <div className="col-lg-6 mb-25" data-aos="fade-right">
                            <div className="image-premium-container">
                                <img className="image-premium" src="/assets/imgs/page/homepage1/how-it-work.png" alt="BinBear Service" />
                                <div className="image-premium-overlay">
                                    <div className="image-premium-content">
                                        <h4 className="image-premium-title">We have 8 years passion and reputation</h4>
                                        <p className="image-premium-text">What Started as small, locally owned junk hauling business has quickly grown into a trusted name in our community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 mb-0" data-aos="fade-left">
                            <div className="features-premium">
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="100">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/plane.png" alt="Price" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Price-You know before we go!</h5>
                                        <p className="feature-premium-text">Know the cost before you Book a service, with no hidden fees No HASSLE.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="200">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="Low Price" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Low Price Guarantee</h5>
                                        <p className="feature-premium-text">We promise to beat any written estimate from a comparable service.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="300">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/payment.png" alt="Quick Booking" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Book a service in as little as 30 seconds</h5>
                                        <p className="feature-premium-text">Start by clicking the booking online at top right of the page</p>
                                    </div>
                                </div>
                                
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="400">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/payment.png" alt="Multiple Options" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Call, text or use our proprietary trash dash!</h5>
                                        <p className="feature-premium-text">Carefully choose the items you would like to have picked up. If this is a construction pickup, property cleanout, or commercial customer, then please call/text us so we can provide you with the most accurate quotes.</p>
                                    </div>
                                </div>
                                
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="500">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/delivery.png" alt="Fast Service" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Fast, Friendly and clean service</h5>
                                        <p className="feature-premium-text">BinBears arrive well-dressed with a smile, ready to tackle your needs!</p>
                                    </div>
                                </div>
                                
                                <div className="feature-premium" data-aos="fade-up" data-aos-delay="600">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/worldwide.png" alt="Eco-Friendly" />
                                    </div>
                                    <div className="feature-premium-content">
                                        <h5 className="feature-premium-title">Our Planet, Our responsibility</h5>
                                        <p className="feature-premium-text">We try our best to recycle 100% of all recyclable waste we pick up. Although our efforts may not impact the world greatly, if we all do our part, then our impact will be felt by future generations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .section-premium {
                    padding: 70px 0;
                    position: relative;
                    background-color: #f9f9f9;
                    overflow: hidden;
                }
                
                .section-premium-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                
                .section-premium-title {
                    font-size: 32px;
                    font-weight: 800;
                    margin-bottom: 15px;
                    color: #FF7F00;
                    position: relative;
                    display: inline-block;
                }
                
                .section-premium-subtitle {
                    font-size: 22px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    color: #212121;
                }
                
                .section-premium-description {
                    font-size: 16px;
                    color: #757575;
                    max-width: 750px;
                    margin: 0 auto;
                    line-height: 1.5;
                }
                
                .image-premium-container {
                    position: relative;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
                }
                
                .image-premium {
                    width: 100%;
                    display: block;
                    transition: transform 0.5s ease;
                }
                
                .image-premium-container:hover .image-premium {
                    transform: scale(1.05);
                }
                
                .image-premium-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.8);
                    padding: 25px;
                    transition: all 0.3s ease;
                }
                
                .image-premium-container:hover .image-premium-overlay {
                    background-color: rgba(0, 0, 0, 0.9);
                }
                
                .image-premium-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: white;
                }
                
                .image-premium-text {
                    font-size: 15px;
                    line-height: 1.5;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 0;
                }
                
                .features-premium {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                
                .feature-premium {
                    display: flex;
                    align-items: flex-start;
                    background-color: white;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    border-left: 3px solid #FF7F00;
                }
                
                .feature-premium:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
                }
                
                .feature-premium-icon {
                    width: 50px;
                    height: 50px;
                    min-width: 50px;
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    box-shadow: 0 5px 12px rgba(255, 127, 0, 0.2);
                }
                
                .feature-premium-icon img {
                    width: 25px;
                    height: 25px;
                    object-fit: contain;
                }
                
                .feature-premium-content {
                    flex: 1;
                }
                
                .feature-premium-title {
                    font-size: 17px;
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #212121;
                }
                
                .feature-premium-text {
                    font-size: 14px;
                    line-height: 1.5;
                    color: #757575;
                    margin-bottom: 0;
                }
                
                @media (max-width: 992px) {
                    .section-premium {
                        padding: 60px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 28px;
                    }
                    
                    .section-premium-subtitle {
                        font-size: 20px;
                    }
                    
                    .section-premium-description {
                        font-size: 15px;
                    }
                    
                    .image-premium-overlay {
                        padding: 20px;
                    }
                    
                    .image-premium-title {
                        font-size: 18px;
                    }
                }
                
                @media (max-width: 768px) {
                    .section-premium {
                        padding: 50px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 26px;
                    }
                    
                    .section-premium-subtitle {
                        font-size: 18px;
                    }
                    
                    .image-premium-overlay {
                        padding: 15px;
                    }
                    
                    .image-premium-title {
                        font-size: 17px;
                        margin-bottom: 8px;
                    }
                    
                    .image-premium-text {
                        font-size: 13px;
                    }
                    
                    .feature-premium {
                        padding: 15px;
                    }
                    
                    .feature-premium-icon {
                        width: 45px;
                        height: 45px;
                        min-width: 45px;
                        margin-right: 12px;
                    }
                    
                    .feature-premium-icon img {
                        width: 22px;
                        height: 22px;
                    }
                    
                    .feature-premium-title {
                        font-size: 16px;
                    }
                    
                    .feature-premium-text {
                        font-size: 13px;
                    }
                }
                
                @media (max-width: 576px) {
                    .section-premium {
                        padding: 40px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 22px;
                    }
                    
                    .section-premium-subtitle {
                        font-size: 16px;
                    }
                    
                    .section-premium-description {
                        font-size: 14px;
                    }
                    
                    .feature-premium {
                        padding: 12px;
                    }
                    
                    .feature-premium-icon {
                        width: 40px;
                        height: 40px;
                        min-width: 40px;
                        margin-right: 10px;
                    }
                    
                    .feature-premium-icon img {
                        width: 20px;
                        height: 20px;
                    }
                    
                    .feature-premium-title {
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    )
}
