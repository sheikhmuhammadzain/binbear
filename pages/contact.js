import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Contact() {

    return (
        <>
            <Layout>
                <div className="section d-block">
                    <div className="box-map-contact wow animate__animated animate__fadeIn">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
                <div className="mt-110" />
                <section className="section">
                    <div className="container position-relative">
                        <div className="box-cover-contactform" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                        }}>
                            <div className="row g-0 align-items-stretch">
                                <div className="col-xl-7 col-lg-7">
                                    <div className="box-contactform-left" style={{
                                        backgroundColor: '#111',
                                        padding: '60px 50px',
                                        height: '100%'
                                    }}>
                                        <h3 className="color-white mb-20 wow animate__animated animate__fadeIn" style={{ fontSize: '36px', fontWeight: '700' }}>Get in Touch</h3>
                                        <p className="font-md color-grey-500 mb-40 wow animate__animated animate__fadeIn" style={{ fontSize: '18px' }}>We're here to help! Fill out the form below and we'll get back to you shortly.</p>
                                        <form action="#">
                                            <div className="row wow animate__animated animate__fadeIn">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="email" placeholder="Your email *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Your phone number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input className="form-control" type="text" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message / Note" rows={5}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-brand-1-big" style={{
                                                        backgroundColor: '#FF6C00',
                                                        color: 'white',
                                                        width: '100%',
                                                        padding: '16px',
                                                        fontSize: '18px',
                                                        fontWeight: 'bold',
                                                        borderRadius: '8px',
                                                        border: 'none',
                                                        cursor: 'pointer'
                                                    }}>
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 position-relative">
                                    <div className="box-contactform-right" style={{
                                        backgroundColor: '#FF6C00',
                                        padding: '60px 50px',
                                        height: '100%',
                                        color: 'white',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <h5 className="mb-35 wow animate__animated animate__fadeIn" style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>Headquarters</h5>
                                        <div className="map-info">
                                            <img className="mb-25 wow animate__animated animate__fadeIn" src="/img/bear.png.png" width={150} alt="transp" />
                                            <p className="mb-25 wow animate__animated animate__fadeIn" style={{ color: 'white', fontSize: '16px' }}>4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            <p className="mb-10 wow animate__animated animate__fadeIn" style={{ color: 'white', fontSize: '16px' }}>
                                                <svg className="icon-16 mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                                                Phone: +01-246-357 (Any time 24/7)
                                            </p>
                                            <p className="mb-30 wow animate__animated animate__fadeIn" style={{ color: 'white', fontSize: '16px' }}>
                                                <svg className="icon-16 mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                                                Email: contact@binbear.com
                                            </p>
                                            <div className="line-border mb-25" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
                                            <p className="font-md-bold wow animate__animated animate__fadeIn" style={{ color: 'white', fontSize: '16px' }}>Hours: 8:00 - 17:00, Mon - Sat</p>
                                        </div>
                                        <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
                                            <Link className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeIn" href="/Booking" style={{
                                                backgroundColor: 'white',
                                                color: '#FF6C00',
                                                width: '100%',
                                                display: 'block',
                                                textAlign: 'center',
                                                padding: '16px',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                borderRadius: '8px',
                                                color: 'black',
                                                textDecoration: 'none'
                                            }}>
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mb-100" />
                <style jsx>{`
                    .form-control {
                        background-color: #2a2a2a;
                        border: 1px solid #444;
                        color: #fff;
                        border-radius: 8px;
                        padding: 15px;
                        font-size: 16px;
                        width: 100%;
                    }
                    .form-group {
                        margin-bottom: 20px;
                    }
                    .form-control::placeholder {
                        color: #888;
                    }
                    .form-control:focus {
                        background-color: #333;
                        border-color: #FF6C00;
                        box-shadow: none;
                        outline: none;
                    }
                    .box-contactform-right .icon-16 {
                        stroke: white;
                    }
                `}</style>
            </Layout>
        </>
    )
}