import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function News1Slider() {
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
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                className="swiper-wrapper"
            >

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">How to find reliable logistics company in
                                China and Asia</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id
                                dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu
                                facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec
                                risus.</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/news2.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">How to find reliable logistics company in
                                China and Asia</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id
                                dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu
                                facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec
                                risus.</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-blog-grid hover-up">
                        <div className="card-image"><Link href="/blog-sing"><img src="/assets/imgs/page/homepage1/news3.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">Shipping</Link></div>
                        <div className="card-info"><Link href="/blog-sing">
                            <h5 className="color-brand-2">How to find reliable logistics company in
                                China and Asia</h5>
                        </Link>
                            <p className="font-sm color-grey-500 mt-20">Fusce dictum ullamcorper dui, id
                                dignissim arcu volutpat vitae. Aenean mattis vestibulum odio eu
                                facilisis. Aenean quam arcu, blandit at aliquet sit amet, convallis nec
                                risus.</p>
                            <div className="line-border" />
                            <div className="mt-5 d-flex align-items-center justify-content-between pt-0"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                Details<span>
                                    <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></span></Link><span className="date-post font-sm color-grey-700">29 May 2022</span></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-banner" />
        </>
    )
}
