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
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="banner-premium" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)' }}>
                        <div className="container">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-premium" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner-2.png)' }}>
                        <div className="container">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
            
            <style jsx>{`
                .banner-premium {
                    position: relative;
                    background-size: cover;
                    background-position: center;
                    min-height: 650px;
                    display: flex;
                    align-items: center;
                    padding: 100px 0;
                }
                
                .banner-premium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
                }
                
                .banner-premium-content {
                    position: relative;
                    z-index: 2;
                    max-width: 650px;
                }
                
                .banner-premium-badge {
                    display: inline-block;
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 30px;
                    margin-bottom: 20px;
                    font-size: 16px;
                    box-shadow: 0 4px 10px rgba(255, 127, 0, 0.3);
                }
                
                .banner-premium-title {
                    font-size: 48px;
                    font-weight: 800;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    color: white;
                }
                
                .banner-premium-text {
                    font-size: 18px;
                    line-height: 1.6;
                    margin-bottom: 30px;
                    color: rgba(255, 255, 255, 0.9);
                    max-width: 550px;
                }
                
                .banner-premium-buttons {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                }
                
                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    box-shadow: 0 4px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-premium-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.4);
                }
                
                .swiper-pagination-banner {
                    position: absolute;
                    bottom: 30px;
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
                }
                
                .swiper-pagination-banner .swiper-pagination-bullet-active {
                    background: #FF7F00;
                }
                
                @media (max-width: 992px) {
                    .banner-premium {
                        min-height: 550px;
                        padding: 80px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 36px;
                    }
                    
                    .banner-premium-text {
                        font-size: 16px;
                    }
                }
                
                @media (max-width: 768px) {
                    .banner-premium {
                        min-height: 500px;
                        padding: 60px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 30px;
                    }
                    
                    .banner-premium-badge {
                        font-size: 14px;
                        padding: 6px 14px;
                    }
                }
                
                @media (max-width: 576px) {
                    .banner-premium {
                        min-height: 450px;
                        padding: 50px 0;
                    }
                    
                    .banner-premium-title {
                        font-size: 26px;
                    }
                    
                    .banner-premium-text {
                        font-size: 15px;
                    }
                    
                    .btn-premium {
                        padding: 12px 24px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    )
}
