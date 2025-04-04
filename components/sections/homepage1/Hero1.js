import Hero1Slider from "@/components/slider/Hero1Slider";

export default function Hero1() {
    return (
        <>
            <section className="hero-premium full-width-section">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-1 swiper-banner-1">
                        <Hero1Slider/>
                    </div>
                </div>
                
                {/* Premium floating features */}
                <div className="container site-container">
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
                /* Global container styles */
                .site-container {
                    max-width: 1320px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                }
            
                .hero-premium {
                    position: relative;
                    padding-bottom: 90px;
                    overflow: hidden;
                    width: 100%;
                    background: #ffffff;
                }
                
                .box-swiper {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                }
                
                .swiper-container.swiper-banner-1 {
                    width: 100%;
                    padding: 0;
                    margin: 0;
                }
                
                .hero-premium-features {
                    position: relative;
                    margin-top: -70px;
                    z-index: 10;
                    width: 100%;
                }
                
                .feature-premium {
                    background-color: white;
                    border-radius: 10px;
                    padding: 25px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                    transition: all 0.3s ease;
                    border-bottom: 3px solid transparent;
                    height: 100%;
                    transform: translateY(0);
                }
                
                .feature-premium:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
                    border-bottom: 3px solid #FF7F00;
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
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.2);
                }
                
                .feature-premium-icon img {
                    width: 35px;
                    height: 35px;
                    object-fit: contain;
                }
                
                .feature-premium-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: #212121;
                }
                
                .feature-premium-text {
                    font-size: 15px;
                    line-height: 1.6;
                    color: #757575;
                    margin-bottom: 0;
                }
                
                @media (max-width: 992px) {
                    .hero-premium {
                        padding-bottom: 60px;
                    }
                    
                    .hero-premium-features {
                        margin-top: 20px;
                    }
                    
                    .feature-premium {
                        margin-bottom: 20px;
                        padding: 20px;
                    }
                    
                    .feature-premium-icon {
                        width: 60px;
                        height: 60px;
                        margin-bottom: 15px;
                    }
                    
                    .feature-premium-icon img {
                        width: 30px;
                        height: 30px;
                    }
                    
                    .feature-premium-title {
                        font-size: 18px;
                    }
                }
                
                @media (max-width: 767px) {
                    .hero-premium {
                        padding-bottom: 40px;
                    }
                    
                    .hero-premium-features {
                        margin-top: 15px;
                    }
                    
                    .feature-premium {
                        padding: 18px;
                        margin-bottom: 15px;
                    }
                    
                    .feature-premium-icon {
                        width: 55px;
                        height: 55px;
                        margin-bottom: 12px;
                    }
                    
                    .feature-premium-icon img {
                        width: 28px;
                        height: 28px;
                    }
                    
                    .feature-premium-title {
                        font-size: 17px;
                        margin-bottom: 10px;
                    }
                }
                
                @media (max-width: 576px) {
                    .hero-premium {
                        padding-bottom: 30px;
                    }
                    
                    .hero-premium-features {
                        margin-top: 10px;
                    }
                    
                    .feature-premium {
                        padding: 15px;
                        margin-bottom: 15px;
                    }
                    
                    .feature-premium-icon {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 10px;
                    }
                    
                    .feature-premium-icon img {
                        width: 25px;
                        height: 25px;
                    }
                    
                    .feature-premium-title {
                        font-size: 16px;
                        margin-bottom: 8px;
                    }
                }
            `}</style>
        </>
    )
}

