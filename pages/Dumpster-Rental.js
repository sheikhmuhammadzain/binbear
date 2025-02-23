import { useEffect, useState } from 'react'
import CountUp from '@/components/elements/CounterUp'
import Accordion from "@/components/elements/Accordion"
import Layout from "@/components/layout/Layout"

import Link from "next/link"

export default function Service() {
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
            <Layout>





            <section className="section">
                    <div className="container">
                        <div className="content-detail">
                            <div className="box-pageheader-1 box-pageheader-services text-start pb-30"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange', color:'black'}}>Our Services</span>
                               
                                <h2 className="color- mt-15 mb-25 wow animate__animated animate__fadeIn"style={{color:'black'}}>Dumpster Rentals Services</h2>
                                <p style={{fontSize:'large'}}>Take Dumpster at Rentals for your project for clean as need! Waiting for what?what IS your time WORTH? Book Now SAVE 50%!</p>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-30">
                                       
                                    </div>
                                    <div className="col-lg-6 mb-30">
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-1" />
                            <div className="col-xl-10"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/blog-single/rental.png" alt="transp" /></div>
                        </div>
                    </div>
                </div>









                <div className="mt-50" />
                <section className="section pt-20 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Get in touch</span>
                                <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">Proud to Deliver<br className="d-none d-lg-block" />Excellence Every Time</h3>
                                <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Trash Removal</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">for yard waste, construction debris, and more.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Property Cleanouts</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">for landlords, real estate agents, and more</p>
                                    </div>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange',color:'black'}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                    <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                            <div className="col-lg-6 position-relative">
                                <div className="certified-icon wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/certified.png" alt="transp" /></div>
                                <div className="row">
                                    <div className="col-md-6 wow animate__animated animate__fadeIn"><img className="mt-90" src="/assets/imgs/page/homepage3/dump.png" height={400} alt="transp" /></div>
                                    <div className="col-md-6 wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage3/service3.png" alt="transp" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-60 pb-65 "style={{backgroundColor:'black'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-1" />
                            <div className="col-lg-5 mb-30"><img className="mb-20" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                                <h2 className="color-white mb-50 wow animate__animated animate__fadeIn">We take care about<span className="color-brand-1">transportation</span>for your business</h2><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="#"style={{backgroundColor:'orange'}}>
                                    <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>View All Projects</Link>
                            </div>
                            <div className="col-lg-5 mb-30">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="box-item-number box-item-number-white mb-30">
                                            <div className="item-number">
                                                <h2 className="color-brand-1"><span className="counterUp count">{inViewport && <CountUp end={165} duration={10} />}</span></h2>
                                                <h6 className="color-brand-1">Delivered packages.</h6>
                                            </div>
                                        </div>
                                        <div className="box-item-number box-item-number-2 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white"><span className="count">{inViewport && <CountUp end={345} duration={10} />}</span></h2>
                                                <h6 className="color-white">Countries covered</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="box-item-number box-item-number-3 mt-30 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white"><span className="count">{inViewport && <CountUp end={245} duration={10} />}</span></h2>
                                                <h6 className="color-white">Satisfied Clients</h6>
                                            </div>
                                        </div>
                                        <div className="box-item-number box-item-number-4 mb-30">
                                            <div className="item-number">
                                                <h2 className="color-white"><span className="count">{inViewport && <CountUp end={546} duration={10} />}</span></h2>
                                                <h6 className="color-white">Tons of goods</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            
                <div className="line-border" />
                <section className="section pt-80 mb-70 bg-faqs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-faqs-left">
                                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
                                    <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                    <div className="box-gallery-faqs">
                                        <div className="image-top"><img src="/assets/imgs/page/homepage3/dump.png" alt="transp" /></div>
                                        <div className="image-bottom">
                                            <div className="image-faq-1"><img src="/assets/imgs/page/homepage1/img-faq2.png" alt="transp" /></div>
                                            <div className="image-faq-2"><img src="/assets/imgs/page/homepage1/img-faq3.png" alt="transp" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-accordion">
                                    <Accordion />
                                    <div className="line-border mt-50 mb-50" />
                                    <h3 className="color-brand-2 wow animate__animated animate__fadeIn">Nead more help?</h3>
                                    <div className="mt-20"><Link className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange'}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section bg- d-block">
                    <div className="container">
                        <div className="box-newsletter"style={{backgroundColor:'black',marginBottom:'70px'}}>
                            <h3 className="color- mb-20 wow animate__animated animate__fadeIn"style={{color:'white'}}>Get in Touch</h3>
                            <div className="row">
                                <div className="col-lg-5 mb-30">
                                    <div className="form-newsletter wow animate__animated animate__fadeIn">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Weight" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Height" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5} defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input className="btn btn-brand-1-big" type="submit" defaultValue="Submit Now" style={{backgroundColor:'orange'}}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-7 mb-30">
                                    <div className="d-flex box-newsletter-right">
                                        <div className="box-map-2 wow animate__animated animate__fadeIn">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.960389549842!2d-83.76408938441998!3d37.15364135542302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884352a00e70879f%3A0x1ad06ed33b7003c!2sIangar!5e0!3m2!1svi!2s!4v1678013229780!5m2!1svi!2s" height={242} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                        </div>
                                        <ul className="list-info-footer">
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/address.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Address</h6>
                                                    <p className="font-sm color-white">65 Allerton Street 901 N Pitt Str, USA</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/email.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Email</h6>
                                                    <p className="font-sm color-white">contact@transp.com</p>
                                                </div>
                                            </li>
                                            <li className="wow animate__animated animate__fadeIn">
                                                <div className="cardImage"><span className="icon-brand-1"><img src="/assets/imgs/page/homepage2/phone.svg" alt="transp" /></span></div>
                                                <div className="cardInfo">
                                                    <h6 className="font-sm-bold color-white">Telephone</h6>
                                                    <p className="font-sm color-white">(+380) 50 318 47 07 - (+182) 50 318 47 07</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}