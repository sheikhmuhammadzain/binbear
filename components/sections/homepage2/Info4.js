import Link from "next/link";

export default function Info4() {
    return (
        <>
            <section className="section mt-85 pt-110 bg-info-4">
                <div className="container">
                    <div className="text-center">
                        <h2 className="color-brand-2 mb-20 wow animate__animated animate__fadeIn">Global Shipping Partner To
                            World’s<br className="d-none d-lg-block" />Famous Companies</h2>
                    </div>
                    <div className="box-why-choose-us-2 mt-50">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-7 mb-30">
                                <div className="box-info-pround"><span className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Our
                                    Features</span>
                                    <h2 className="color-brand-2 mb-15 mt-20 wow animate__animated animate__fadeIn">Why choose
                                        us</h2>
                                    <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Sustainability
                                        is an increasingly important factor for many customers when choosing a shipping
                                        company. Your shipping company can stand out by demonstrating a commitment to
                                        sustainable practices, such as using energy-efficient vehicles, reducing waste, and
                                        offsetting carbon emissions.</p>
                                    <div className="mt-30">
                                        <ul className="list-ticks list-ticks-3">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Reliable and Timely Deliveries</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Advanced Tracking Systems</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Cost-Effective Shipping Options</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Commitment to Sustainability</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Exceptional Customer Service</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">International Shipping Expertise</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Flexibility and Customization</h6>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <h6 className="color-brand-2">Insurance and Liability Coverage</h6>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-30 text-start"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange',color:'black'}}>Contact Us</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn
                                        More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 mb-30">
                                <div className="box-images-info-4">
                                    <div className="box-images-inner"><img className="img-main" src="/assets/imgs/page/homepage2/img-info-4.png" alt="transp" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
