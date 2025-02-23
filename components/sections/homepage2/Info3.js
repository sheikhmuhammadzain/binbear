import Link from "next/link";

export default function Info3() {
    return (
        <>
            <section className="section mt-85 mb-50">
                <div className="container">
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-7 col-lg-6 mb-30">
                            <div className="box-images-info-3"><img className="img-main wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage2/img-info-3.png" alt="transp" />
                                <div className="box-info-3-bottom">
                                    <h3 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Warehousing</h3>
                                    <p className="font-sm color-grey-900 wow animate__animated animate__fadeIn">We are
                                        professional in ocean freight with more than 12 years of experience and have shipped
                                        more than 100k shipments.</p>
                                    <div className="mt-30"><Link className="btn btn-link font-sm color-brand-2" href="#">View
                                        Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h6 className="color-grey-700 mb-25 wow animate__animated animate__fadeIn">GET IN TOUCH WITH US
                                </h6>
                                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">We take care about
                                    transportation for your business</h3>
                                <div className="row mt-30 mb-30">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            Great support 24/7</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest
                                            design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature3-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">
                                            Safe Packing</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest
                                            design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="box-info-bottom-img box-info-bottom-img-2"style={{backgroundColor:'black'}}>
                                    <div className="image-play"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                    <div className="info-play">
                                        <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">We have 25 years
                                            experience in this passion</h4>
                                        <p className="font-sm color-white wow animate__animated animate__fadeIn">There are many
                                            variations of passages of Lorem Ipsum available, but the majority have suffered
                                            alteration in some form, by injected humour</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
