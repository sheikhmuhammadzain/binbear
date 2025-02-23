import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";

export default function Header2({ handleMobileMenuOpen }) {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
   


    return (
        <>
            <div className={topBarStyle ? topBarStyle : ""}>
                <div className="box-bar bg-grey-900 "style={{backgroundColor:'black',}}>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8 col-sm-5 col-4"> <Link className="phone-icon mr-45" href="tel:+01-246-357">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                                    </path>
                                </svg>      </Link><Link className="email-icon" href="mailto:contact@transp.eu.com">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                        </path>
                                    </svg>contact@junking.eu.com</Link></div>
    
                                    <div className="col-lg-5 col-md-4 col-sm-7 col-8 text-end">
                                   {/* "Own a Frenchise" link */}
  
                                   <Link
                                     className="hover-pointer"
                                       href="//register"
                                             style={{
                                              color: 'white',
                                             textDecoration: 'none',
                                              cursor: 'pointer', // Pointer cursor on hover
                                         display: 'inline-flex',
                                              alignItems: 'center',
                                           gap: '5px', // Space between text and icon
      
                                              }}
                                                   >
                                               <svg
                                               xmlns="http://www.w3.org/2000/svg"
                                                  width={14}
                                                  height={14}
                                                  viewBox="0 0 24 24"
                                                   style={{
                                                      fill: 'currentColor', // Matches text color
                                                 transition: 'fill 0.3s ease',
                                                   }}
                                                   >
                                                    <path d="M10 10h4v4h-4z" />
                                                          </svg>
                                                            </Link>
                                                            <Link
                                                            className="hover-pointer"
                                                             href="/contact"                                                      style={{
                                                                color: 'white',
                                                              textDecoration: 'none',
                                                              cursor: 'pointer', // Pointer cursor on hover
                                                              display: 'inline-flex',
                                                              alignItems: 'center',
                                                              gap: '8px', // Space between text and icon
                                                            }}
                                                                           
                                                            >
                                                            Apply Locally
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              width={14}
                                                              height={14}
                                                              viewBox="0 0 24 24"
                                                              style={{
                                                                fill: 'currentColor', // Matches text color
                                                                transition: 'fill 0.3s ease',
                                                              }}
                                                            >
                                                             
                                                                <path d="M10 10h4v4h-4z" />
                                                              </svg>
                                                            </Link>
                                                          
                                                          
                                                          </div>
                                                          
                                                          
                                                      </div>
                                              </div>
                         </div> 
                                            
                                              
                                              
                                              </div> 

            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}>
                <div className="container"style={{ backgroundColor:'black', color: 'white', width: '100%',
    maxWidth: '3000px', }}>
   
                    <div className="main-header"style={{backgroundColor:'black',marginLeft:'39px',marginInlineEnd:'50px'}}>
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/"> <Image src="/img/bear.png.png" alt="Ecom" width={150} height={60} /></Link></div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <Menu />
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleMobileMenuOpen}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="d-inline-block box-dropdown-cart"><span className="font-lg " ><span className="font-sm color--900 arrow-down"style={{ color: 'white',}}>
                                    <svg 
                                    fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" >
                                        </path>
                                    </svg> </span></span>
                                    <div className="dropdown-account">
                                        <ul>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/en.png" alt="transp" />
                                                English</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/fr.png" alt="transp" />
                                                French</Link></li>
                                            <li><Link className="font-md" href="#"><img src="/assets/imgs/template/icons/cn.png" alt="transp" />
                                                Chiness</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-none d-sm-inline-block">
                                <div className="col-  mb-30 text-md-end text-start"style={{marginTop:'40px'}}><Link className="btn btn-brand-1 hover-up" href="/Booking" style={{backgroundColor: ' #FF7F00', }}>
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Book Now</Link></div>
              
   
</div>
</div>


                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
