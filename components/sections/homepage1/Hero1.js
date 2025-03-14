import Hero1Slider from "@/components/slider/Hero1Slider";

export default function Hero1() {
    return (
        <>
            <section className="hero-premium">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-1 swiper-banner-1">
                        <Hero1Slider/>
                    </div>
                </div>
                
                {/* Premium floating features */}
                <div className="container">
                    <div className="hero-premium-features">
                        <div className="row">
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="feature-premium">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/plane.png" alt="Fast Service" />
                                    </div>
                                    <h4 className="feature-premium-title">Fast Service</h4>
                                    <p className="feature-premium-text">Book in as little as 30 seconds and get same-day service</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="feature-premium">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/payment.png" alt="Transparent Pricing" />
                                    </div>
                                    <h4 className="feature-premium-title">Transparent Pricing</h4>
                                    <p className="feature-premium-text">Know the cost before you book, with no hidden fees</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="feature-premium">
                                    <div className="feature-premium-icon">
                                        <img src="/assets/imgs/page/homepage1/worldwide.png" alt="Eco-Friendly" />
                                    </div>
                                    <h4 className="feature-premium-title">Eco-Friendly</h4>
                                    <p className="feature-premium-text">We recycle up to 100% of all recyclable waste we pick up</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .hero-premium {
                    position: relative;
                    padding-bottom: 120px;
                }
                
                .hero-premium-features {
                    position: relative;
                    margin-top: -80px;
                    z-index: 10;
                }
                
                .feature-premium {
                    background-color: white;
                    border-radius: 12px;
                    padding: 30px;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    border-bottom: 4px solid transparent;
                    height: 100%;
                }
                
                .feature-premium:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
                    border-bottom: 4px solid #FF7F00;
                }
                
                .feature-premium-icon {
                    width: 70px;
                    height: 70px;
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .feature-premium-icon img {
                    width: 35px;
                    height: 35px;
                    object-fit: contain;
                }
                
                .feature-premium-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: #212121;
                }
                
                .feature-premium-text {
                    font-size: 15px;
                    line-height: 1.6;
                    color: #757575;
                }
                
                @media (max-width: 992px) {
                    .hero-premium {
                        padding-bottom: 60px;
                    }
                    
                    .hero-premium-features {
                        margin-top: 30px;
                    }
                    
                    .feature-premium {
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </>
    )
}
