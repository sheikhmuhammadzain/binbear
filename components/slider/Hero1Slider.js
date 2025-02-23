import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide>

                <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner.png)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">Junk Removal Solutions</p>
                                   <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Click Schedule Pickup<br className="d-none d-lg-block" />Junk Removal Made Effortless In 3 Steps!</h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                            At BinBear, we make junk removal effortless. Whether it’s a single item or a full property cleanout, binbear is here to handle every step!</p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30">
                                        <Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="/Booking"style={{backgroundColor:' #ff7f00',color:'black'}}>Book Online</Link>
                                      </div>

                                </div>
                                  </div>
                           </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-1" style={{ backgroundImage: 'url(assets/imgs/page/homepage1/banner-2.png)' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <p className="font-md color-white mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Junk Removal Solutions</p>
                                    <h1 className="color-white mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">Click Schedule Pickup<br className="d-none d-lg-block" />Junk Removal Made Effortless In 3 Steps!</h1>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <p className="font-md color-white mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                            At BinBear, we make junk removal effortless. Whether it’s a single item or a full property cleanout, binbear is here to handle every step!</p>
                                        </div>
                                    </div>
                                    <div className="box-button mt-30"><Link className="btn btn-brand-1-big hover-up mr-40 wow animate__animated animate__fadeInUp" href="/Booking"style={{backgroundColor:' #ff7f00',color:'black'}}>Book Online</Link>          </div>
                                </div>
                                   </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>






                       
    )
}
