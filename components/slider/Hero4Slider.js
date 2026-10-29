// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Hero4Slider() {
    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        spaceBetween: 30,
        slidesPerView: 4,
        spaceBetween: 30,
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
                slidesPerView: 4,
                spaceBetween: 30,
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 2,
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
                <Swiper {...swiperOptions} className="swiper-container swiper-group-4">
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15" style={{ color: 'black' }}>#1 Junk Removal Service in Texas</h5>
                                <p className="font-sm color-grey-900 mb-35">BinBear is the #1 choice for junk removal in Texas. We offer fast, reliable, and affordable services to help you get rid of your junk.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15" style={{ color: 'black' }}>Unbeatable Junk Removal Solutions</h5>
                                <p className="font-sm color-grey-900 mb-35">We offer a wide range of junk removal solutions to meet your needs. No job is too big or too small for our team of experts.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15" style={{ color: 'black' }}>Eco-Friendly and Sustainable</h5>
                                <p className="font-sm color-grey-900 mb-35">We are committed to sustainability. We recycle, donate, and responsibly dispose of your junk to minimize our environmental impact.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15" style={{ color: 'black' }}>Fast and Easy Booking</h5>
                                <p className="font-sm color-grey-900 mb-35">Our booking process is simple and straightforward. Get a free estimate and schedule your junk removal in just a few clicks.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination swiper-pagination-banner swiper-pagination-style-2 swiper-pagination-group-4">
                </div>
            </div>
        </>
    );
}
