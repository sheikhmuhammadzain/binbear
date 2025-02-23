import Project1Slider from "@/components/slider/Project1Slider";
import Link from "next/link";

export default function Projects3() {
    return (
        <>
            <section className="section pb-5 pt-110">
                <div className="container">
                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Have Done</h2>
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Check out some of the
                                projects we've completed with our amazing partners</p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="#"style={{backgroundColor:'orange'}}>
                            <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                </path>
                            </svg>View All Projects</Link></div>
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
