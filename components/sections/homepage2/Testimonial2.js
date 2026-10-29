import Testimonial2Slider from "@/components/slider/Testimonial2Slider";

export default function Testimonial2() {
    return (
        <>
            <section className="section mt-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="title-favicon color-brand-2 mb-20 title-padding-left wow animate__animated animate__fadeIn">
                                Testimonials</h2>
                            <p className="font-lg color-brand-2 pl-55 wow animate__animated animate__fadeIn">Hear from our users
                                who have saved thousands on their<br className="d-none d-lg-block" />Startup and SaaS solution
                                spend.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                            <div className="box-button-sliders">
                                <div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </div>
                                <div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-customers wow animate__animated animate__fadeIn">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-slide-customers overflow-hidden mt-50">
                    <div className="box-slide-customers-2 container">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4-customers pb-50">
                                <Testimonial2Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
