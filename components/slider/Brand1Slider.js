import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Brand1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={6}
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
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
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
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper wow animate__animated animate__fadeIn"
            >

                <SwiperSlide><img src="/assets/imgs/slider/logo/alea.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/land.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/logis.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/truck.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/saltos.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/creati.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/logis.png" alt="transp" />
                </SwiperSlide>
                <SwiperSlide><img src="/assets/imgs/slider/logo/truck.png" alt="transp" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
