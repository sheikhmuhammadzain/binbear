import Link from "next/link";
import { useState } from "react";

export default function Pricing2() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
            <section className="section pt-110 pb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-8">
                            <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">Four Ways to Get Your Estimate</h2>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">We make it easy to get a free estimate with four convenient options:
                              </p>
                        </div>
                        <div className="col-lg-4 col-md-4 text-end">
                            <div className="text-center mt-10 wow animate__animated animate__fadeIn"><span className="text-md color-grey-900 text-billed-month">Online Pricing Estimator</span>
                                <label className="switch ml-20 mr-20">
                                    <input id="cb_billed_type" type="checkbox" name="billed_type" />
                                    <span className="slider round" onClick={toggleTrueFalse} />
                                </label><span className="text-md color-grey-900 text-billed-year">Bill Annually</span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-50 align-items-end pricing-style-2">
                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn">
                            <div className="card-plan hover-up">
                                <h3 className="color-brand-2 title-plan">On-Site Pricing</h3>
                                <p className="font-md color-grey-500 desc-plan">Advanced features for pros who need more
                                    customization.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>{!isToggled ? "125" : "1500"}</span></h3><span className="color-grey-500 font-sm">/{!isToggled ? "month" : "year"}</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>1500</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>15-Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>1 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Bubble Warp
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn">
                            <div className="card-plan popular hover-up">
                                <h3 className="color-brand-2 title-plan">Online Pricing Estimator</h3>
                                <p className="font-md color-grey-500 desc-plan">All the basics for businesses that are just
                                    getting started.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>{!isToggled ? "89" : "1068"}</span></h3><span className="color-grey-500 font-sm">/{!isToggled ? "month" : "year"}</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>1068</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>7-Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>3 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Wood Crate
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Get in touch to discuss
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Use Personal And Commercial
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn">
                            <div className="card-plan hover-up">
                                <h3 className="color-brand-2 title-plan">Enterprise</h3>
                                <p className="font-md color-grey-500 desc-plan">Advanced features for pros who need more
                                    customization.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>{!isToggled ? "199" : "2388"}</span></h3><span className="color-grey-500 font-sm">/{!isToggled ? "month" : "year"}</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>2388</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>4 -Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>1 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Bubble Warp
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow animate__animated animate__fadeIn">
                            <div className="card-plan hover-up">
                                <h3 className="color-brand-2 title-plan">UnLimited</h3>
                                <p className="font-md color-grey-500 desc-plan">Advanced features for pros who need more
                                    customization.</p>
                                <div className="item-price-plan">
                                    <div className="for-month display-month">
                                        <h3 className="color-brand-2 d-inline-block">$<span>{!isToggled ? "399" : "4788"}</span></h3><span className="color-grey-500 font-sm">/{!isToggled ? "month" : "year"}</span>
                                    </div>
                                    <div className="for-year">
                                        <h3 className="color-brand-2 d-inline-block">$<span>4788</span></h3><span className="color-grey-500 font-sm">/year</span>
                                    </div>
                                </div>
                                <div className="line-border" />
                                <div className="mt-30 mb-30">
                                    <ul className="list-ticks list-ticks-2">
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>4 -Days Shipping World Wide
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>1 Kg Weight Max /Package
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>Free Bubble Warp
                                        </li>
                                        <li>
                                            <svg className="icon-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z">
                                                </path>
                                            </svg>24/7 Support
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-20"><Link className="btn btn-brand-2-full hover-up" href="#">Get Started
                                    <svg className="w-6 h-6 icon-16 ml-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
