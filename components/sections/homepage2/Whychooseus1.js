import { useEffect, useState } from 'react'
import CountUp from '@/components/elements/CounterUp'
import Link from "next/link"

export default function Whychooseus1() {
    const [inViewport, setInViewport] = useState(false);

    const handleScroll = () => {
        const elements = document.getElementsByClassName('counterUp');
        if (elements.length > 0) {
        const element = elements[0];
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport && !inViewport) {
            setInViewport(true);
        }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Why Choose Us</h2>
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeInLet">the numbers speak for
                                themselves.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="#"style={{backgroundColor:'orange'}}>
                            <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                </path>
                            </svg>View All Projects</Link></div>
                    </div>
                    <div className="row mt-30 align-items-center">
                        <div className="col-lg-6 mb-30">
                            <div className="box-image-why"><img src="/assets/imgs/page/homepage2/img-why.png" alt="transp" />
                                <div className="quote shape-2" />
                            </div>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <div className="box-why-choose-us">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="cardWhyChooseUs mb-60">
                                            <h2 className="color-brand-2"><span>+</span><span className="count counterUp">
                                                {inViewport && <CountUp end={346} duration={10} />}
                                                </span></h2>
                                            <h5 className="color-brand-2 mb-20">Delivered packages.</h5>
                                            <p className="font-md color-grey-700">We strongly support best practice sharing
                                                across our operations around the world and across various industrial
                                                sectors.</p>
                                        </div>
                                        <div className="cardWhyChooseUs mb-30">
                                            <h2 className="color-brand-2"><span>+</span><span className="count">{inViewport && <CountUp end={564} duration={10} />}</span></h2>
                                            <h5 className="color-brand-2 mb-20">Satisfied Clients</h5>
                                            <p className="font-md color-grey-700">We strongly support best practice sharing
                                                across our operations around the world and across various industrial
                                                sectors.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mb-60 mt-50">
                                        <div className="cardWhyChooseUs mb-60">
                                            <h2 className="color-brand-2"><span>+</span><span className="count">{inViewport && <CountUp end={179} duration={10} />}</span></h2>
                                            <h5 className="color-brand-2 mb-20">Countries covered</h5>
                                            <p className="font-md color-grey-700">We strongly support best practice sharing
                                                across our operations around the world and across various industrial
                                                sectors.</p>
                                        </div>
                                        <div className="cardWhyChooseUs mb-30">
                                            <h2 className="color-brand-2"><span>+</span><span className="count">{inViewport && <CountUp end={355} duration={10} />}</span></h2>
                                            <h5 className="color-brand-2 mb-20">Tons of goods</h5>
                                            <p className="font-md color-grey-700">We strongly support best practice sharing
                                                across our operations around the world and across various industrial
                                                sectors.</p>
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
