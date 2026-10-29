import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

const Project1Slider = () => {
    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination-banner",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            250: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
    };
    return (
        <>
            <div className="box-swiper">
                <Swiper {...swiperOptions} className="swiper-container swiper-group-3">
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage"> <img src="/assets/imgs/page/homepage1/touch.png" alt="transp" /></div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">BinBear Junk Removal Bags</h5>
                                <p className="font-sm color-grey-900 mb-35">Our durable and convenient junk removal bags are perfect for your smaller projects. Fill them up and we'll haul them away.</p>
                                <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage"> <img src="/assets/imgs/page/homepage1/touch.png" alt="transp" /></div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">Residential Junk Removal</h5>
                                <p className="font-sm color-grey-900 mb-35">From single items to full house cleanouts, BinBear is here to help you reclaim your space. We handle everything from furniture to appliances.</p>
                                <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="cardGrid">
                            <div className="cardImage"> <img src="/assets/imgs/page/homepage1/touch.png" alt="transp" /></div>
                            <div className="cardInfo">
                                <h5 className="color-brand-2 mb-10">Commercial Junk Removal</h5>
                                <p className="font-sm color-grey-900 mb-35">We provide efficient and reliable junk removal services for businesses of all sizes. Let us help you keep your workspace clean and clutter-free.</p>
                                <div className="box-button mt-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="box-pagination-customers text-center wow animate__animated animate__fadeIn">
                <div className="swiper-pagination-banner swiper-pagination-style-2 swiper-pagination-group-3" />
            </div>
        </>
    );
};

export default Project1Slider;
