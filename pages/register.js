import Layout from "@/components/layout/Layout"
import Brand1Slider from "@/components/slider/Brand1Slider"
import Link from "next/link"
export default function Register() {

    return (
        <>
            <Layout>
                <section className="section box-login">
                    <div className="row align-items-center m-0">
                        <div className="col-lg-6"style={{marginBottom:'500px'}}>
                            <div className="box-login-left">
                                <h2 className="color-black mb-10 wow animate__animated animate__fadeIn">Create an account</h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Describe yourself as clearly so that there are no mistakes</p>
                                <div className="box-form-login wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Full name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Phone Number *" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="text" placeholder="Email Address *" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control" type="password" placeholder="Enter Your Password" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="box-remember">
                                                        <label className="font-xs color-grey-900" htmlFor="rememberme">
                                                            <input id="rememberme" type="checkbox" />By clicking Register button, you agree our terms and policy,
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="box-button-form-login">
                                                    <input className="btn btn-brand-1-big mr-20" type="submit" defaultValue="Create Account"style={{backgroundColor:'orange'}} />
                                                </div>
                                                <div className="box-text-form-login"><span className="font-xs color-grey-500">Already have an account?</span><Link className="font-xs color-brand-2" href="/login">Sign In</Link></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-login-right box-register-right">
                                <div className="quote-shape shape-1" />
                                <div className="box-info-bottom-img-3">
                                    <div className="box-info-3-bottom"style={{backgroundColor:'black'}}>
                                        <h3 className="color-white mb-10 wow animate__animated animate__fadeIn">Warehousing</h3>
                                        <p className="font-sm color- wow animate__animated animate__fadeIn"style={{color:'white'}}>We are professional in ocean freight with more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="mt-30 wow animate__animated animate__fadeIn"><Link className="btn btn-link font-sm color-white" href="#">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
            </Layout>
        </>
    )
}