import Link from "next/link";

export default function Requestquote3() {
    return (
        <>
            <section className="section mt-200 bg-2 bg-request-quote-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-form-request-quote-2 box-form-request-quote-3">
                                <div className="box-form-contact-leading">
                                    <h2 className="title-favicon color-brand-2 mb-15 wow animate__animated animate__fadeIn">
                                        Request a Quote</h2>
                                    <p className="font-md color-grey-700 mb-25 wow animate__animated animate__fadeIn">Please
                                        fill="none" All Inquiry To Get Your Total Price.</p>
                                    <div className="row align-items-center wow animate__animated animate__fadeIn">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Your name *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Your email *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Number *" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option value>Freight type</option>
                                                    <option value="Service 1">Type 1</option>
                                                    <option value="Service 2">Type 2</option>
                                                    <option value="Service 3">Type 3</option>
                                                    <option value="Service 4">Type 4</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Departure City" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Delivery City" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Weight" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Height" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" rows={5} placeholder="Message / Note" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group"><strong className="font-sm-bold color-grey-900">Extra
                                                Services</strong>
                                                <div className="row mt-10 box-cb-form">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input className="cd-form" type="checkbox" />Express Delivery (+$40)
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input className="cd-form" type="checkbox" />Add Insurance (+$20)
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input className="cd-form" type="checkbox" />Packaging (+$15)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12"><Link className="btn btn-brand-1-big mr-25" href="#"style={{backgroundColor:'orange'}}>
                                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z">
                                                </path>
                                            </svg>Cost Calculation</Link><Link className="btn btn-link-medium" href="/contact">Free Estimate
                                                <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-how-works">
                                <li className="wow animate__animated animate__fadeIn">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/order.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2">Customer places order</h5>
                                        <p className="font-md color-grey-700">Inspection and quality check of goods</p>
                                    </div>
                                </li>
                                <li className="wow animate__animated animate__fadeIn">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2">Payment successful</h5>
                                        <p className="font-md color-grey-700">Payoneer, Paypal, or Visa master card</p>
                                    </div>
                                </li>
                                <li className="wow animate__animated animate__fadeIn">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2">Warehouse receives order</h5>
                                        <p className="font-md color-grey-700">Check the accuracy of the goods.</p>
                                    </div>
                                </li>
                                <li className="wow animate__animated animate__fadeIn">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/picked.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2">Item picked, packed &amp; shipped</h5>
                                        <p className="font-md color-grey-700">Ship the goods to a local carrier</p>
                                    </div>
                                </li>
                                <li className="wow animate__animated animate__fadeIn">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-brand-2">Delivered &amp; Measure success</h5>
                                        <p className="font-md color-grey-700">Update order status on the system</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
