import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Howitwork2() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="box-how-it-work-2 bg-brand-2 bg-how-it-work-2">
                        <div className="text-center">
                            <h2 className="color-white wow animate__animated animate__fadeIn">How It Works</h2>
                        </div>
                        <div className="box-list-how-it-work">
                            <ul className="list-how-works">
                                <li>
                                    <div className="image-how"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/order.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-white wow animate__animated animate__fadeIn">Customer places order
                                        </h5>
                                        <p className="font-md color-white wow animate__animated animate__fadeIn">Inspection and
                                            quality check of goods</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-white wow animate__animated animate__fadeIn">Payment successful
                                        </h5>
                                        <p className="font-md color-white wow animate__animated animate__fadeIn">Payoneer,
                                            Paypal, or Visa master card</p>
                                    </div>
                                </li>
                                <li className="dashed-2">
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-white wow animate__animated animate__fadeIn">Warehouse receives
                                            order</h5>
                                        <p className="font-md color-white wow animate__animated animate__fadeIn">Check the
                                            accuracy of the goods.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/picked.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-white wow animate__animated animate__fadeIn">Item picked, packed &amp;
                                            shipped</h5>
                                        <p className="font-md color-white wow animate__animated animate__fadeIn">Ship the goods
                                            to a local carrier</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" /></span></div>
                                    <div className="info-how">
                                        <h5 className="color-white wow animate__animated animate__fadeIn">Delivered &amp; Measure
                                            success</h5>
                                        <p className="font-md color-white wow animate__animated animate__fadeIn">Update order
                                            status on the system</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="box-button-play-2"><a className="btn btn-play popup-youtube hover-up" onClick={() => setOpen(true)}><img src="/assets/imgs/page/homepage4/play-icon.png" alt="transp" /><span className="color-brand-2 wow animate__animated animate__fadeIn">How it work ?<br />Watch video
                            tour</span></a></div>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                    </div>
                </div>
            </section>
        </>
    )
}
