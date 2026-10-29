import Link from "next/link";

export default function Services3() {
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Offer</h2>
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Welcome to our
                                tranporation services agency. We are the best at our trans-portation service ever.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="request-a-quote">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Get a quote</Link></div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardService">
                                <div className="cardImage"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage3/service1.png" alt="transp" /></Link></div>
                                <div className="cardInfo"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                    <h6 className="color-brand-2">Sea Forwarding</h6>
                                    <p className="font-xs color-grey-900">We offer specialized departments for continental
                                        transports.</p>
                                </Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardService">
                                <div className="cardImage"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage3/service2.png" alt="transp" /></Link></div>
                                <div className="cardInfo"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage3/plane.png" alt="transp" />
                                    <h6 className="color-brand-2">Air Freight Forwarding</h6>
                                    <p className="font-xs color-grey-900">We offer specialized departments for continental
                                        transports.</p>
                                </Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardService">
                                <div className="cardImage"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage3/service3.png" alt="transp" /></Link></div>
                                <div className="cardInfo"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" />
                                    <h6 className="color-brand-2">Land Transportation</h6>
                                    <p className="font-xs color-grey-900">We offer specialized departments for continental
                                        transports.</p>
                                </Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-50 wow animate__animated animate__fadeIn">
                            <div className="cardService">
                                <div className="cardImage"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage3/service4.png" alt="transp" /></Link></div>
                                <div className="cardInfo"> <Link href="/service-detail"><img src="/assets/imgs/page/homepage1/train.png" alt="transp" />
                                    <h6 className="color-brand-2">Railway Logistics</h6>
                                    <p className="font-xs color-grey-900">We offer specialized departments for continental
                                        transports.</p>
                                </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
