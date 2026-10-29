import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceSlider() {
    return (
        <>
            <div className="swiper-container swiper-group-4 swiper-group-3-style-2">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={4}
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
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
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
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1350: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="swiper-wrapper"
                >
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15"style={{color:'black'}}>#1 Junk Removal Company in Texas</h5>
                                <p className="font-sm color-grey-900 mb-35">We are professional in Junk Removals with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="wow animate__animated animate__fadeIn">
                        <div className="card-offer hover-up">
                            <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                            <div className="card-info">
                                <h5 className="color- mb-15"style={{color:'black'}}>Low Price Guarantee</h5>
                                <p className="font-sm color-grey-900 mb-35">We are professional in junk Removals with more than 12 years of experience and have shipped more than 100k shipments.</p>
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
                                <h5 className="color- mb-15"style={{color:'black'}}>Big Trucks, Big Value</h5>
                                <p className="font-sm color-grey-900 mb-35">We are professional in junk Removals with more than 12 years of experience and have shipped more than 100k shipments.</p>
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
                                <h5 className="color- mb-15"style={{color:'black'}}>Eco-Friendly Solutions</h5>
                                <p className="font-sm color-grey-900 mb-35">We are professional in junk removals with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination swiper-pagination-banner swiper-pagination-style-2 swiper-pagination-group-4" />
            </div>
            <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-style-2 swiper-button-prev-group-4">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </div>
            <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-style-2 swiper-button-next-group-4">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </>
    )
}
