import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Info6() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-50">
                            <div className="box-image-why wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/img-info-6.png" alt="transp" />
                            <div className="box-button-play wow animate__animated animate__fadeIn"style={{backgroundColor:'black'}}><a className="btn btn-play popup-youtube hover-up" onClick={() => setOpen(true)}><span className="color-white">How it work ?<br />Watch video tour</span></a></div>
                         
                                 </div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                        </div>
                        <div className="col-lg-6 mb-50">
                            <div className="box-info-6"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Who We
                                Are?</span>
                                <h2 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">We are the
                                    world's leading Junk Removal service provider</h2>
                                <p className="font-md color-grey-900 mb-35 wow animate__animated animate__fadeIn">Over the
                                    years, we have worked together to expand our network of partners to deliver reliability
                                    and consistency. We’ve also made significant strides to tightly integrate technology
                                    with our processes, giving our clients greater visibility into every engagement.</p>
                                <div className="row">
                                    <div className="col-lg-6 mb-30 wow animate__animated animate__fadeIn">
                                        <h6 className="chart-title font-md-bold color-grey-900">Eco-Friendly Solutions</h6>
                                        <p className="font-xs color-grey-900">The latest design trends meet hand-crafted
                                            templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30 wow animate__animated animate__fadeIn">
                                        <h6 className="chart-title font-md-bold color-grey-900">Eco-Friendly Solutions</h6>
                                        <p className="font-xs color-grey-900">The latest design trends meet hand-crafted
                                            templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30 wow animate__animated animate__fadeIn">
                                        <h6 className="feature2-title font-md-bold color-grey-900">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900">The latest design trends meet hand-crafted
                                            templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30 wow animate__animated animate__fadeIn">
                                        <h6 className="feature3-title font-md-bold color-grey-900">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900">The latest design trends meet hand-crafted
                                            templates.</p>
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
