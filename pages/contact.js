import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Bgmap from "@/components/sections/homepage1/Bgmap"
export default function Contact() {

    return (
        <>
            <Layout>
                <Bgmap />
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
                                        <h5 className="mb-35 wow animate__animated animate__fadeIn" style={{ fontSize: '28px', fontWeight: 'bold', color: '#000' }}>Headquarters</h5>
                                        <div className="map-info">
                                            <div className="company-logo-container" style={{
                                                backgroundColor: 'white',
                                                borderRadius: '10px',
                                                padding: '30px 20px',
                                                marginBottom: '30px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                            }}>
                                                <img className="wow animate__animated animate__fadeIn" src="/img/bear.png.png" width={140} alt="BinBear Logo" />
                                            </div>

                                            <div className="contact-info-item" style={{ marginBottom: '20px' }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>📍</span>
                                                    <div>
                                                        <strong style={{ fontSize: '16px', display: 'block', marginBottom: '5px', color: '#000', fontWeight: 'bold' }}>Address:</strong>
                                                        <span style={{ fontSize: '15px', lineHeight: '1.4', color: '#000' }}>
                                                            4517 Washington Ave.<br />
                                                            Manchester, Kentucky 39495
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact-info-item" style={{ marginBottom: '20px' }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>📞</span>
                                                    <div>
                                                        <strong style={{ fontSize: '16px', display: 'block', marginBottom: '5px', color: '#000', fontWeight: 'bold' }}>Phone:</strong>
                                                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#000' }}>(801) 999-9999</span><br />
                                                        <span style={{ fontSize: '13px', color: '#000' }}>Available 24/7</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact-info-item" style={{ marginBottom: '25px' }}>
                                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>📧</span>
                                                    <div>
                                                        <strong style={{ fontSize: '16px', display: 'block', marginBottom: '5px', color: '#000', fontWeight: 'bold' }}>Email:</strong>
                                                        <span style={{ fontSize: '15px', color: '#000' }}>contact@binbearjunk.com</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="line-border" style={{
                                                borderTop: '2px solid #ccc',
                                                width: '100%',
                                                margin: '25px 0'
                                            }} />

                                            <div className="contact-info-item">
                                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                                    <span style={{ fontSize: '20px', marginRight: '12px', marginTop: '2px' }}>🕒</span>
                                                    <div>
                                                        <strong style={{ fontSize: '16px', display: 'block', marginBottom: '5px', color: '#000', fontWeight: 'bold' }}>Hours:</strong>
                                                        <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#000' }}>8:00 AM - 5:00 PM</span><br />
                                                        <span style={{ fontSize: '13px', color: '#000' }}>Monday - Saturday</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
                                            <Link className="btn btn-brand-1-big hover-up wow animate__animated animate__fadeIn" href="/Booking" style={{
                                                backgroundColor: '#000',
                                                color: '#fff',
                                                width: '100%',
                                                display: 'block',
                                                textAlign: 'center',
                                                padding: '16px',
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                border: '2px solid #fff',
                                                transition: 'all 0.3s ease'
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
                    .btn:hover {
                        background-color: #333 !important;
                        color: #fff !important;
                        border-color: #fff !important;
                        transform: translateY(-2px);
                        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                    }
                    .company-logo-container {
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    }
                    .contact-info-item {
                        padding: 8px 0;
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                    .contact-info-item:hover {
                        transform: translateX(5px);
                        transition: transform 0.3s ease;
                    }
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </Layout>
        </>
    )
}