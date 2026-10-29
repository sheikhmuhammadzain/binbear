import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function News2Slider() {
    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        spaceBetween: 30,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-style-2",
            prevEl: ".swiper-button-prev-style-2",
        },
        pagination: {
            el: ".swiper-pagination-style-2",
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
        <section className="section spdt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="color-brand-2 mb-20">From Our Blog</h2>
                        <p className="font-lg color-gray-500">Get the latest news and insights from BinBear.</p>
                    </div>
                </div>
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-3">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="card-news-1">
                                    <div className="card-image"><Link href="/blog"><img src="/assets/imgs/page/homepage2/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">BinBear</Link></div>
                                    <div className="card-info"><Link href="/blog">
                                        <h5 className="color-brand-2">Why BinBear is Your Best Choice for Junk Removal</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Discover why BinBear is the top-rated junk removal service in Texas. We offer reliable, affordable, and eco-friendly solutions for all your junk removal needs.</p>
                                        <div className="line-7" />
                                        <div className="box-author">
                                            <div className="author-info">
                                                <div className="author-name">BinBear</div>
                                                <div className="date-post font-sm color-grey-700">29 May 2024</div>
                                            </div>
                                            <div className="author-actions"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-news-1">
                                    <div className="card-image"><Link href="/blog"><img src="/assets/imgs/page/homepage2/news2.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">BinBear</Link></div>
                                    <div className="card-info"><Link href="/blog">
                                        <h5 className="color-brand-2">Declutter Your Life with BinBear's Help</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Learn how our professional junk removal services can help you declutter your home and create a more organized living space. It's time to reclaim your space!</p>
                                        <div className="line-7" />
                                        <div className="box-author">
                                            <div className="author-info">
                                                <div className="author-name">BinBear</div>
                                                <div className="date-post font-sm color-grey-700">28 May 2024</div>
                                            </div>
                                            <div className="author-actions"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-news-1">
                                    <div className="card-image"><Link href="/blog"><img src="/assets/imgs/page/homepage2/news3.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">BinBear</Link></div>
                                    <div className="card-info"><Link href="/blog">
                                        <h5 className="color-brand-2">The Environmental Benefits of Choosing BinBear</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">At BinBear, we are committed to sustainability. Discover how our eco-friendly practices make a positive impact on the environment, one junk removal at a time.</p>
                                        <div className="line-7" />
                                        <div className="box-author">
                                            <div className="author-info">
                                                <div className="author-name">BinBear</div>
                                                <div className="date-post font-sm color-grey-700">27 May 2024</div>
                                            </div>
                                            <div className="author-actions"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-news-1">
                                    <div className="card-image"><Link href="/blog"><img src="/assets/imgs/page/homepage2/news1.png" alt="transp" /></Link><Link className="btn btn-border-brand-1 mr-15" href="/blog">BinBear</Link></div>
                                    <div className="card-info"><Link href="/blog">
                                        <h5 className="color-brand-2">BinBear's Guide to a Stress-Free Move</h5></Link>
                                        <p className="font-sm color-grey-500 mt-20">Moving can be stressful, but it doesn't have to be. Learn how BinBear can help you simplify the moving process with our efficient junk removal services.</p>
                                        <div className="line-7" />
                                        <div className="box-author">
                                            <div className="author-info">
                                                <div className="author-name">BinBear</div>
                                                <div className="date-post font-sm color-grey-700">26 May 2024</div>
                                            </div>
                                            <div className="author-actions"><Link className="btn btn-link font-sm color-brand-2" href="#">View Details</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
