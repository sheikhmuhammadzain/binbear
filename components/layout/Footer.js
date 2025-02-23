

   

import Link from "next/link";

export default function Footer1({ }) {
    return (
        <>
            <footer className="footer" style={{ marginTop: '0px' }}>
                <div
                    className="footer-1"
                    style={{
                        height: 'auto',
                        padding: '20px 0',
                        backgroundColor: 'black',
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 width-23 mb-30">
                                <Link className="mb-20" href="/">
                                    <img
                                    
                                        src="/img/bear.png.png"
                                        width={150}
                                        height={60}
                                        alt="transp"
                                    />
                                </Link>
                                <p className="font-xs mb-20 color-white">
                                    
                                </p>

                                {/* Buttons with 20px gap below the paragraph */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px', // 20px gap between paragraph and buttons
                                        alignItems: 'center',
                                    }}
                                >
                                    <a href="/Booking" style={{ textDecoration: 'none', width: '100%' }}>
                                        <button
                                            style={{
                                                backgroundColor: '#FF7F00',
                                                color: 'black',
                                                border: 'none',
                                                padding: '10px 20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '200px',
                                            }}
                                        >
                                            Book Online
                                        </button>
                                    </a>
                                    <a href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                                        <button
                                            style={{
                                                backgroundColor: '#FF7F00',
                                                color: 'black',
                                                border: 'none',
                                                padding: '10px 20px',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                maxWidth: '200px',
                                            }}
                                        >
                                            Our Location
                                        </button>
                                    </a>
                                   
                                </div>
                            </div>

                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-brand-"style={{color:'orange'}}>Services</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="/Item-we-take">Item we take</Link>
                                    </li>
                                    <li>
                                        <Link href="/JK-Removal">Junk removal</Link>
                                    </li>
                                    <li>
                                        <Link href="/Dumpster-Rental">Dumpster Rental</Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="/Estimate">National Accounts</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-brand-"style={{color:'orange'}}>Company</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="/about"> About us</Link>
                                    </li>
                                    <li>
                                        <Link href="Event">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Apply Locally</Link>
                                    </li>
                                   
                                    <li>
                                        <Link href="/register">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 width-16 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-brand-"style={{color:'orange'}}>Other Links</h5>
                                <ul className="menu-footer">
                                    <li>
                                        <Link href="#">Terms of use</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Accesibility</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/Recycle">We Recycle</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-lg-3 width-20 mb-30" style={{ backgroundColor: 'black' }}>
                                <h5 className="mb-10 color-brand-"style={{color:'orange'}}>Gallery</h5>
                                <div className="galleries-footer">
                                    <ul className="list-imgs">
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal1.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal2.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal3.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal4.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal5.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal6.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal2.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal3.png"
                                                alt="transp"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/page/homepage1/gal2.png"
                                                alt="transp"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="footer-2"
                    style={{
                        paddingTop: '0px',
                        backgroundColor: 'black',
                        paddingBottom: '50px',
                    }}
                >
                    <div className="footer-bottom"style={{marginLeft:'60px',marginRight:'60px'}}>
                        <div className="row align-items-center">
                            <div className="col-sm-5 text-center text-sm-start">
                                <span className="color-grey-300 font-xs">
                                    @binbear Official {new Date().getFullYear()}. All rights reserved.
                                </span>
                            </div>
                            <div className="col-sm-7 text-center text-sm-end">
                                <ul className="menu-bottom">
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions"></Link></li>
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions">Cookies</Link></li>
                                    <li><Link className="font-xs color-grey-300" href="/term-conditions">Terms of service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
