import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Services1() {
    return (
        <>
            <section className="section-premium">
                <div className="container">
                    <div className="section-premium-header">
                        <h2 className="section-premium-title" data-aos="fade-up">3 Quick Steps to Get Started</h2>
                        <p className="section-premium-subtitle" data-aos="fade-up" data-aos-delay="100">
                            That's It! You'll receive a text on service day to confirm.
                        </p>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8 mb-30" data-aos="fade-right">
                            <div className="steps-premium">
                                <div className="step-premium">
                                    <div className="step-premium-content">
                                        <h3 className="step-premium-title">Click Book Online</h3>
                                        <p className="step-premium-text">Click book online & provide us with your information</p>
                                    </div>
                                </div>
                                <div className="step-premium">
                                    <div className="step-premium-content">
                                        <h3 className="step-premium-title">Use Our Calculator</h3>
                                        <p className="step-premium-text">Use our proprietary calculator to choose your items</p>
                                    </div>
                                </div>
                                <div className="step-premium">
                                    <div className="step-premium-content">
                                        <h3 className="step-premium-title">Choose a Date for Pickup</h3>
                                        <p className="step-premium-text">Select a convenient date for your junk removal service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start" data-aos="fade-left">
                            <Link
                                className="btn-premium btn-premium-primary"
                                href="Booking"
                            >
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    width="24"
                                    height="24"
                                    style={{ marginRight: '10px' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                                    ></path>
                                </svg>
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    <div className="service-cards-premium" data-aos="fade-up">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination-services',
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                575: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                767: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                991: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1199: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="swiper-wrapper"
                        >
                            <SwiperSlide>
                                <div className="card-premium">
                                    <div className="card-premium-image">
                                        <img src="/assets/imgs/page/blog-single/step1.png" alt="Click Book Online" />
                                    </div>
                                    <div className="card-premium-content">
                                        <h3 className="card-premium-title">1. Click Book Online</h3>
                                        <p className="card-premium-text">Click book online & provide us with your information</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-premium">
                                    <div className="card-premium-image">
                                        <img src="/assets/imgs/page/blog-single/step2.png" alt="Use Our Calculator" />
                                    </div>
                                    <div className="card-premium-content">
                                        <h3 className="card-premium-title">2. Use Our Calculator</h3>
                                        <p className="card-premium-text">Use our proprietary calculator to choose your items</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-premium">
                                    <div className="card-premium-image">
                                        <img src="/assets/imgs/page/blog-single/step3.png" alt="Choose a Date for Pickup" />
                                    </div>
                                    <div className="card-premium-content">
                                        <h3 className="card-premium-title">3. Choose a Date for Pickup</h3>
                                        <p className="card-premium-text">Choose a Date for Pickup</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination swiper-pagination-services"></div>
                    </div>
                    
                    <div className="row align-items-end mt-4">
                        <div className="col-12">
                            <p className="disclaimer-text" data-aos="fade-up">
                                Disclaimer: If you a input the first differs greatly from new information you have provided, your price of service may
                                increase 10%-20%
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .section-premium {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                    position: relative;
                    overflow: hidden;
                }
                
                .section-premium::before {
                    content: '';
                    position: absolute;
                    top: -100px;
                    right: -100px;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, rgba(255, 127, 0, 0.1), rgba(255, 127, 0, 0.05));
                }
                
                .section-premium::after {
                    content: '';
                    position: absolute;
                    bottom: -100px;
                    left: -100px;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, rgba(255, 127, 0, 0.1), rgba(255, 127, 0, 0.05));
                }
                
                .section-premium-header {
                    text-align: center;
                    margin-bottom: 60px;
                }
                
                .section-premium-title {
                    font-size: 36px;
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: #212121;
                    position: relative;
                    display: inline-block;
                }
                
                .section-premium-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(to right, #FF7F00, #FFA64D);
                    border-radius: 2px;
                }
                
                .section-premium-subtitle {
                    font-size: 18px;
                    color: #757575;
                    max-width: 700px;
                    margin: 0 auto;
                }
                
                .steps-premium {
                    position: relative;
                    counter-reset: step-counter;
                }
                
                .step-premium {
                    position: relative;
                    padding-left: 80px;
                    margin-bottom: 30px;
                    z-index: 2;
                }
                
                .step-premium::before {
                    counter-increment: step-counter;
                    content: counter(step-counter);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: 700;
                    color: #212121;
                    box-shadow: 0 6px 15px rgba(255, 127, 0, 0.3);
                }
                
                .step-premium-content {
                    background-color: white;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    border-left: 4px solid #FF7F00;
                }
                
                .step-premium-content:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }
                
                .step-premium-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #212121;
                }
                
                .step-premium-text {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #757575;
                    margin-bottom: 0;
                }
                
                .service-cards-premium {
                    margin-top: 60px;
                    position: relative;
                    padding-bottom: 50px;
                }
                
                .card-premium {
                    background-color: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                    border: none;
                }
                
                .card-premium:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }
                
                .card-premium-image {
                    height: 220px;
                    overflow: hidden;
                }
                
                .card-premium-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                
                .card-premium:hover .card-premium-image img {
                    transform: scale(1.05);
                }
                
                .card-premium-content {
                    padding: 25px;
                }
                
                .card-premium-title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    color: #212121;
                }
                
                .card-premium-text {
                    font-size: 15px;
                    line-height: 1.6;
                    color: #757575;
                    margin-bottom: 0;
                }
                
                .swiper-pagination-services {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    text-align: center;
                }
                
                .swiper-pagination-services .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #ddd;
                    opacity: 1;
                    margin: 0 5px;
                }
                
                .swiper-pagination-services .swiper-pagination-bullet-active {
                    background: #FF7F00;
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    padding: 14px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    box-shadow: 0 4px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-premium-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.4);
                    color: #212121;
                }
                
                .disclaimer-text {
                    font-size: 13px;
                    color: #ff0000;
                    text-align: center;
                    margin-top: 20px;
                }
                
                @media (max-width: 992px) {
                    .section-premium {
                        padding: 80px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 32px;
                    }
                    
                    .step-premium {
                        padding-left: 70px;
                    }
                    
                    .step-premium::before {
                        width: 50px;
                        height: 50px;
                        font-size: 20px;
                    }
                }
                
                @media (max-width: 768px) {
                    .section-premium {
                        padding: 60px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 28px;
                    }
                    
                    .section-premium-subtitle {
                        font-size: 16px;
                    }
                    
                    .step-premium {
                        padding-left: 60px;
                    }
                    
                    .step-premium::before {
                        width: 45px;
                        height: 45px;
                        font-size: 18px;
                    }
                    
                    .step-premium-content {
                        padding: 20px;
                    }
                    
                    .step-premium-title {
                        font-size: 18px;
                    }
                    
                    .step-premium-text {
                        font-size: 15px;
                    }
                }
                
                @media (max-width: 576px) {
                    .section-premium {
                        padding: 50px 0;
                    }
                    
                    .section-premium-title {
                        font-size: 24px;
                    }
                    
                    .step-premium {
                        padding-left: 55px;
                    }
                    
                    .step-premium::before {
                        width: 40px;
                        height: 40px;
                        font-size: 16px;
                    }
                    
                    .step-premium-content {
                        padding: 15px;
                    }
                    
                    .step-premium-title {
                        font-size: 17px;
                    }
                    
                    .step-premium-text {
                        font-size: 14px;
                    }
                    
                    .btn-premium {
                        padding: 12px 24px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </>
    );
}
