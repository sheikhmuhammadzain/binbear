import Layout from "@/components/layout/Layout"
import Brand1Slider from "@/components/slider/Brand1Slider"
import Link from "next/link"
export default function Login() {

    return (
        <>
            <Layout>
                <section className="section box-login">
                    <div className="row align-items-center m-0">
                        <div className="col-lg-6"style={{marginBottom:'500px'}}>
                            <div className="box-login-left">
                                <h2 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">Welcome back</h2>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">Access to all features. No credit card required.</p>
                                  <div className="box-form-login wow animate__animated animate__fadeIn">
                                    <form action="#">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Email Address *" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="password" placeholder="Enter Your Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="d-flex justify-content-between">
                                                <div className="box-remember">
                                                    <label className="font-xs color-grey-900" htmlFor="rememberme">
                                                        <input id="rememberme" type="checkbox" />Remember me
                                                    </label>
                                                </div>
                                                <div className="box-forgotpass"><Link className="font-xs color-brand-2" href="#">Forgot your password?</Link></div>
                                            </div>
                                        </div>
                                        <div className="form-group mt-30">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="box-button-form-login">
                                                    <input className="btn btn-brand-1-big mr-20" type="submit" defaultValue="Sign In" />
                                                </div>
                                                <div className="box-text-form-login"><span className="font-xs color-grey-500">Don't Have an Account?</span><Link className="font-xs color-brand-2" href="/register">Sign up</Link></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-login-right">
                                <div className="quote-shape shape-1" />
                                <div className="box-info-bottom-img box-info-bottom-img-3"style={{backgroundColor:'black'}}>
                                    <div className="image-play wow animate__animated animate__fadeIn"><img className="mb-15" src="/assets/imgs/template/icons/play.svg" alt="transp" /></div>
                                    <div className="info-play wow animate__animated animate__fadeIn">
                                        <h4 className="color-white mb-15">We have 25 years experience in this passion</h4>
                                        <p className="font-sm color-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
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