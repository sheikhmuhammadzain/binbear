import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero2Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-offer hover-up">
                        <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                        <div className="card-info">
                            <h5 className="color-brand-2 mb-15">Sea Forwarding</h5>
                            <p className="font-sm color-grey-900 mb-35">We are professional in ocean
                                freight with more than 12 years of experience and have shipped more
                                than 100k shipments.</p>
                            <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-offer hover-up">
                        <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                        <div className="card-info">
                            <h5 className="color-brand-2 mb-15">Air Freight Forwarding</h5>
                            <p className="font-sm color-grey-900 mb-35">We are professional in ocean
                                freight with more than 12 years of experience and have shipped more
                                than 100k shipments.</p>
                            <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-offer hover-up">
                        <div className="card-image"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></div>
                        <div className="card-info">
                            <h5 className="color-brand-2 mb-15">Land Transportation</h5>
                            <p className="font-sm color-grey-900 mb-35">We are professional in ocean
                                freight with more than 12 years of experience and have shipped more
                                than 100k shipments.</p>
                            <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-offer hover-up">
                        <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                        <div className="card-info">
                            <h5 className="color-brand-2 mb-15">Air Freight Forwarding</h5>
                            <p className="font-sm color-grey-900 mb-35">We are professional in ocean
                                freight with more than 12 years of experience and have shipped more
                                than 100k shipments.</p>
                            <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg></span></a></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner swiper-pagination-style-2" />
        </>
    )
}
