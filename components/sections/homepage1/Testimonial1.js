import Testimonial1Slider from "@/components/slider/Testimonial1Slider";

export default function Testimonial1() {
    return (
        <>
          <section className="section mt-50 bg-"style={{backgroundColor:'black'}}>
                <div className="container">
                    <h2 className="title-favicon color-white mb-20 title-padding-left wow animate__animated animate__fadeIn"style={{marginTop:'50px'}}>
                        What our customers are saying</h2>
                    <p className="font-lg color-white pl-55 wow animate__animated animate__fadeIn">Hear from our users who have
                        saved thousands on their<br className="d-none d-lg-block" />Startup and SaaS solution spend.</p>
                </div>
                <div className="container">
                    <div className="box-slide-customers mt-50">
                        <div className="box-swiper">
                            <div className="swiper-container swiper-group-3-customers pb-50">
                                <Testimonial1Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    )
}
