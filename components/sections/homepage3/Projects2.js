import Project1Slider from "@/components/slider/Project1Slider";

export default function Projects2() {
    return (
        <>
            <section className="section pb-5 pt-110">
                <div className="container">
                    <div className="text-center"><img className="mb-15" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Delivering Results for
                            Industry Leaders</p>
                        <h2 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn">Our latest completed
                            and<br className="d-none d-lg-block" />running projects</h2>
                    </div>
                    <div className="mt-35">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-4 pb-50">
                                <Project1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
