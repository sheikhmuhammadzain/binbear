import { useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function NewsletterSlider() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
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
                className="swiper-wrapper"
            >
                <SwiperSlide>
                    <div className="banner-1-newsletter" style={{ backgroundImage: 'url(assets/imgs/page/newsletter/bg-banner.png)' }}>
                        <div className="container-sub">
                            <div className="row align-items-center">
                                <div className="col-sm-8">
                                    <p className="font-xs color-white mb-15">Junk removal Solutions</p>
                                    <h4 className="color-white mb-25">Say Goodbye to junk! Convenient Dumpster Near you! </h4>
                                    <div className="box-button mt-30"><a className="btn btn-play popup-youtube hover-up" onClick={() => setOpen(true)}><img src="/assets/imgs/template/icons/play.svg" alt=""  style={{ backgroundColor: 'orange', borderRadius: '50%', padding: '2px' }}/>How it work ?</a></div>

                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner-1-newsletter" style={{ backgroundImage: 'url(assets/imgs/page/newsletter/bg-banner.png)' }}>
                        <div className="container-sub">
                            <div className="row align-items-center">
                                <div className="col-sm-8">
                                    <p className="font-xs color-white mb-15">Junk removal solutions</p>
                                    <h4 className="color-white mb-25">Say Goodbye to Junk!Convenient Dumpster Near You! </h4>
                                    <div className="box-button mt-30"><a className="btn btn-play popup-youtube hover-up" onClick={() => setOpen(true)}><img src="/assets/imgs/template/icons/play.svg" alt="" style={{ backgroundColor: 'orange', borderRadius: '50%', padding: '2px' }} />How it work ?</a></div>

                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
