import { useEffect, useState } from 'react'
import Link from "next/link"

export default function Whychooseus2() {

    return (
        <>
            <section className="section pt-60 pb-65 bg-whychooseus-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-1" />
                        <div className="col-lg-5 mb-30"><img className="mb-20" src="/assets/imgs/template/icons/favicon.svg" alt="transp" />
                            <h2 className="color-white mb-50 wow animate__animated animate__fadeIn">We take care about <span className="color-brand-1"> transportation </span> for your business</h2><Link className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" href="#"style={{backgroundColor:'orange'}}>
                                <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25">
                                    </path>
                                </svg>View All Projects</Link>
                        </div>
                        <div className="col-lg-5 mb-30">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="box-item-number box-item-number-white mb-30">
                                        <div className="item-number">
                                            <h2 className="color-brand-1"><span className="counterUp count">365</span></h2>
                                            <h6 className="color-brand-1">Delivered package.</h6>
                                        </div>
                                    </div>
                                    <div className="box-item-number box-item-number-2 mb-30">
                                        <div className="item-number">
                                            <h2 className="color-white"><span className="counterUp count">
                                                174</span></h2>
                                            <h6 className="color-white">Countries covered</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="box-item-number box-item-number-3 mt-30 mb-30">
                                        <div className="item-number">
                                            <h2 className="color-white"><span className="counterUp count">627</span></h2>
                                            <h6 className="color-white">Satisfied Clients</h6>
                                        </div>
                                    </div>
                                    <div className="box-item-number box-item-number-4 mb-30">
                                        <div className="item-number">
                                            <h2 className="color-white"><span className="counterUp count">354</span></h2>
                                            <h6 className="color-white">Tons of goods</h6>
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
