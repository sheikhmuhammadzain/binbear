import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                effect="fade"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                className="swiper-wrapper hero-swiper"
            >
                <SwiperSlide>
                    <div className="banner-premium" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)' }}>
                        <div className="container site-container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="banner-premium-content" data-aos="fade-up">
                                        <span className="banner-premium-badge">Junk Removal Solutions</span>
                                        <h1 className="banner-premium-title">Click Schedule Pickup<br className="d-none d-lg-block" />Junk Removal Made Effortless In 3 Steps!</h1>
                                        <p className="banner-premium-text">
                                            At BinBear, we make junk removal effortless. Whether it's a single item or a full property cleanout, binbear is here to handle every step!
                                        </p>
                                        <div className="banner-premium-buttons">
                                            <Link className="btn-premium btn-premium-primary" href="/Booking">
                                                <span>Book Online</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                            <Link className="btn-premium btn-premium-secondary" href="/choose-service">
                                                <span>Our Services</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-premium" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner-2.png)' }}>
                        <div className="container site-container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="banner-premium-content" data-aos="fade-up">
                                        <span className="banner-premium-badge">Junk Removal Solutions</span>
                                        <h1 className="banner-premium-title">Click Schedule Pickup<br className="d-none d-lg-block" />Junk Removal Made Effortless In 3 Steps!</h1>
                                        <p className="banner-premium-text">
                                            At BinBear, we make junk removal effortless. Whether it's a single item or a full property cleanout, binbear is here to handle every step!
                                        </p>
                                        <div className="banner-premium-buttons">
                                            <Link className="btn-premium btn-premium-primary" href="/Booking">
                                                <span>Book Online</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                            <Link className="btn-premium btn-premium-secondary" href="/choose-service">
                                                <span>Our Services</span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
            
            <style jsx global>{`
                .site-container {
                    max-width: 1320px;
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 15px;
                    padding-right: 15px;
                }
                
                .hero-swiper {
                    width: 100%;
                    margin: 0;
                    position: relative;
                    overflow: hidden;
                }
                
                .swiper-wrapper {
                    width: 100%;
                }
                
                .swiper-slide {
                    width: 100%;
                }
            `}</style>
            
            <style jsx>{`
                .banner-premium {
                    position: relative;
                    background-size: cover;
                    background-position: center;
                    min-height: 430px;
                    display: flex;
                    align-items: center;
                    padding: 30px 0 60px;
                    width: 100%;
                }
                
                .banner-premium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%);
                }
                
                .banner-premium-content {
                    position: relative;
                    z-index: 2;
                    max-width: 650px;
                    animation: fadeInUp 1.2s ease-out;
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .banner-premium-badge {
                    display: inline-block;
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #fff;
                    font-weight: 700;
                    padding: 5px 14px;
                    border-radius: 30px;
                    margin-bottom: 10px;
                    font-size: 13px;
                    box-shadow: 0 5px 12px rgba(255, 127, 0, 0.3);
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 127, 0, 0.4);
                    }
                    70% {
                        box-shadow: 0 0 0 10px rgba(255, 127, 0, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 127, 0, 0);
                    }
                }
                
                .banner-premium-title {
                    font-size: 30px;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 10px;
                    color: white;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }
                
                .banner-premium-text {
                    font-size: 15px;
                    line-height: 1.4;
                    margin-bottom: 15px;
                    color: rgba(255, 255, 255, 0.95);
                    max-width: 580px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                }
                
                .banner-premium-buttons {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-weight: 700;
                    font-size: 14px;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                }
                
                .btn-premium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateX(-100%);
                    transition: transform 0.4s ease;
                    z-index: -1;
                }
                
                .btn-premium:hover::before {
                    transform: translateX(0);
                }
                
                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: white;
                    box-shadow: 0 5px 15px rgba(255, 127, 0, 0.4);
                }
                
                .btn-premium-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.5);
                    color: white !important;
                }
                
                .btn-premium-secondary {
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(8px);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                }
                
                .btn-premium-secondary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                    color: white !important;
                    background: rgba(255, 255, 255, 0.25);
                }
                
                .swiper-pagination-banner {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    z-index: 10;
                }
                
                .swiper-pagination-banner .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    margin: 0 5px;
                    transition: all 0.3s ease;
                }
                
                .swiper-pagination-banner .swiper-pagination-bullet-active {
                    background: #FF7F00;
                    width: 25px;
                    border-radius: 10px;
                }
                
                @media (max-width: 1200px) {
                    .banner-premium {
                        min-height: 550px;
                    }
                    
                    .banner-premium-title {
                        font-size: 40px;
                    }
                }
                
                @media (max-width: 992px) {
                    .banner-premium {
                        min-height: 500px;
                        padding: 70px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 36px;
                    }
                    
                    .banner-premium-text {
                        font-size: 16px;
                    }
                    
                    .btn-premium {
                        padding: 14px 25px;
                        font-size: 15px;
                    }
                }
                
                @media (max-width: 768px) {
                    .banner-premium {
                        min-height: 450px;
                        padding: 60px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 32px;
                    }
                    
                    .banner-premium-badge {
                        font-size: 14px;
                        padding: 7px 16px;
                        margin-bottom: 15px;
                    }
                    
                    .banner-premium-text {
                        margin-bottom: 25px;
                    }
                }
                
                @media (max-width: 576px) {
                    .banner-premium {
                        min-height: 400px;
                        padding: 50px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 28px;
                        margin-bottom: 15px;
                    }
                    
                    .banner-premium-text {
                        font-size: 15px;
                        margin-bottom: 20px;
                    }
                    
                    .btn-premium {
                        padding: 12px 22px;
                        font-size: 14px;
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .banner-premium-buttons {
                        flex-direction: column;
                        width: 100%;
                    }
                }
            `}</style>
        </>
    )
}
