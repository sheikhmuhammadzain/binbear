import CountUp from '@/components/elements/CounterUp'
import Link from "next/link"
import { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Hero3() {
    const [isOpen, setOpen] = useState(false)
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp')
        if (elements.length > 0) {
        const element = elements[0]
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
        if (isInViewport && !inViewport) {
            setInViewport(true);
        }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>







            <section className="section d-block"style={{backgroundColor:''}}>
                <div className="box-banner-homepage3">
                    <div className="container position-relative">
                        <div className="banner-under" />
                        <div className="row align-items-end">
                            <div className="col-lg-5">
                                <div className="banner-left">
                                    <h2 className="color-brand-1 mb-25 wow animate__animated animate__fadeIn">Moving Your
                                        Products Across All Borders</h2>
                                    <p className="color-white font-md wow animate__animated animate__fadeIn">Over the years, we
                                        have worked together to expand our network of partners to deliver reliability and
                                        consistency. We’ve also made significant strides to tightly integrate technology
                                        with our processes, giving our clients greater visibility into every engagement.</p>
                                    <div className="box-button mt-50"><Link className="btn btn-brand-1-big hover-up mr-40 mb-30 wow animate__animated animate__fadeIn" href="#"style={{backgroundColor:'orange'}}>Calculate Package</Link><a className="btn btn-play popup-youtube hover-up mb-30 wow animate__animated animate__fadeIn" onClick={() => setOpen(true)}><img src="/assets/imgs/template/icons/play.svg" alt="" />How it work ?</a></div>
                                </div>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
                            </div>
                            <div className="col-lg-7">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-45">
                                        <div className="item-feature">
                                            <div className="icon-feature wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/delivery-2.png" alt="transp" /></div>
                                            <div className="info-feature wow animate__animated animate__fadeIn">
                                                <h4 className="color-brand-2"><span>+</span><span className="counterUp count">{inViewport && <CountUp end={546} duration={10} />}</span></h4>
                                                <p className="font-sm color-grey-700">Parcels Shipped</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-45">
                                        <div className="item-feature">
                                            <div className="icon-feature"><img src="/assets/imgs/page/homepage3/delivery-2.png" alt="transp" /></div>
                                            <div className="info-feature">
                                                <h4 className="color-brand-2"><span>+</span><span className="count">{inViewport && <CountUp end={345} duration={10} />}</span></h4>
                                                <p className="font-sm color-grey-700">Cities Worldwide</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-45">
                                        <div className="item-feature">
                                            <div className="icon-feature"><img src="/assets/imgs/page/homepage3/delivery-2.png" alt="transp" /></div>
                                            <div className="info-feature">
                                                <h4 className="color-brand-2"><span>+</span><span className="count">{inViewport && <CountUp end={254} duration={10} />}</span></h4>
                                                <p className="font-sm color-grey-700">Satisfied Clients</p>
                                            </div>
                                        </div>
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
