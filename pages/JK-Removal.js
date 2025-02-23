import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import Brand1Slider from "@/components/slider/Brand1Slider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function TrackParcel() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                <section className="section d-block">
                    <div className="container position-relative">
                        <div className="banner-trackyourparcel" style={{ backgroundImage: "url('/assets/imgs/page/blog-single/rental.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%", opacity:'.6'}}/>

<div className="box-info-trackyourparcel">
                            <h2 className="color- mb-25 wow animate__animated animate__fadeIn"style={{Color:'black'}}>JK Junk Removal Services<br className="d-none d-lg-block" /></h2>
                            <p className="color-grey-900 font-md wow animate__animated animate__fadeIn">Track packages from China, US Post, Canada Post, Royal Mail, Deutsche Post,<br className="d-none d-lg-block" />Aliexpress, UPS, Shein, FedEx, Pitney Bowes, eBay, Amazon</p>
                            <div className="form-trackparcel wow animate__animated animate__fadeIn">
                               
                                      </div>
                                      <div className="mt-20"style={{marginLeft:'90px'}}><div className="btn btn-brand-1-big mr-20 wow animate__animated animate__fadeIn" href="/contact"style={{backgroundColor:'orange'}}>Free Estimate</div><div className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">
                                  
                                  </div>
                                  </div> 
 </div>
                            
                    






                        </div>

                </section>
                <section className="section pt-85">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h6 className="color- mb-15 wow animate__animated animate__fadeIn"style={{color:'black'}}>International tracking for</h6>
                                <h2 className="color- mb-25 wow animate__animated animate__fadeIn"style={{color:'black'}}>Learn More About Our Junk Removal?</h2>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Terms apply. Not valid below minimum charge or combined with other offers the most up-to-date information on your parcel's progress. We also offer notifications via email or SMS, so you can receive updates on your parcel's status right to your phone.</p>
                                    </div>
                                </div>
                                <div className="row mt-50">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">What is Junk Removal?</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The helping conserve resources and reduce emissions. Instead of throwing away junk.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">How To Make Junk Useble?</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Recycling has changed significantly, especially since China’s 2018 ban on most plastic and recyclable imports.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature3-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage3/dump.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                
                                        <div className="info-play wow animate__animated animate__fadeIn">
                                            <h4 className="color-white mb-15">JK junk services</h4>
                                            <p className="font-sm color-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-90" />
                <div className="section bg-2 pt-65 pb-35">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 mb-30 text-center text-lg-start wow animate__animated animate__fadeIn">
                                <p className="font-2xl-bold color-brand-2">We are<span className="color-brand-1"> trusted</span> by major global brands</p>
                            </div>
                            <div className="col-lg-9 mb-30">
                                <div className="box-swiper">
                                    <div className="swiper-container swiper-group-6 pb-0">
                                        <Brand1Slider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section pt-100"style={{backgroundColor:'black'}}>
                    <div className="container">
                        <div className="text-center"><span className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn"style={{backgroundColor:'orange'}}>Our Features</span>
                            <h2 className="color-mb-15 mt-20 wow animate__animated animate__fadeIn"style={{color:'white'}}>Why choose us</h2>
                        </div>
                        <div className="row mt-60">
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-mb-15"style={{color:'black'}}>#1 Junk Removal Company</h5>
                                            <p className="font-sm color-grey-900">Our team arrives on time, ready to work with a smile.
                                            .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color- mb-15"style={{color:'black'}}>Low Price Guarantee</h5>
                                            <p className="font-sm color-grey-900"> We promise to beat any written estimate from a comparable service..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage1/forklift.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color-mb-15"style={{color:'black'}}>Recycling More Than 60%</h5>
                                            <p className="font-sm color-grey-900">We recycle up to 60% of what we haul,  protect the environment..</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="item-reason">
                                    <div className="card-offer cardServiceStyle3 hover-up">
                                        <div className="card-image"><img src="/assets/imgs/page/homepage4/pallet.png" alt="transp" /></div>
                                        <div className="card-info">
                                            <h5 className="color- mb-15"style={{color:'black'}}>Eco-Friendly Solutions</h5>
                                            <p className="font-sm color-grey-900">what we haul, helping to reduce landfill waste and protect the environment.
                                            .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-50" />
                <section className="section pt-80 mb-70 bg-faqs">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="box-faqs-left">
                                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">FAQs</h2>
                                    <p className="font-md color-grey-700 mb-50 wow animate__animated animate__fadeIn">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                    <div className="box-gallery-faqs">
                                        <div className="image-top wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/blog-single/rental.png" alt="transp" /></div>
                                        <div className="image-bottom wow animate__animated animate__fadeIn">
                                            <div className="image-faq-1"><img src="/assets/imgs/page/trackyourparcel/img-faqs2.png" alt="transp" /></div>
                                            <div className="image-faq-2"><img src="/assets/imgs/page/service-detail/img4.png" alt="transp" /></div>
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
                <section className="section mt-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-50">
                                <div className="box-info-6 box-info-8"><span className="btn btn-tag wow animate__animated animate__fadeIn">Who We Are?</span>
                                    <h2 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">We are the world's leading Junk Removing service provider</h2>
                                    <p className="font-md color-grey-900 mb-35 wow animate__animated animate__fadeIn">Over the years, we have worked together to expand our network of partners to deliver reliability and consistency. We’ve also made significant strides to tightly integrate technology with our processes, giving our clients greater visibility into every engagement.</p>
                                    <div className="row">
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Fast & Friendly Service</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Our team arrives on time, ready to work with a smile.</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Eco-Friendly Solutions</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> what we haul, helping to reduce landfill waste and protect the environment..</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Free, Upfront Estimates</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Know the cost before we start, with no hidden fees..</p>
                                        </div>
                                        <div className="col-lg-6 mb-30">
                                            <h6 className="feature3-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Free, Upfront Estimates</h6>
                                            <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Know the cost before we start, with no hidden fees</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-50">
                                
                                
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mt-90" />
                <div className="section bg- d-block">
                    <div className="container">
                        <div className="box-newsletter"style={{backgroundColor:'black',marginBottom:'70px'}}>
                            <h3 className="color-white mb-20 wow animate__animated animate__fadeIn">Get in Touch</h3>
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