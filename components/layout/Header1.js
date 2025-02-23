import Link from "next/link";
import { useEffect, useState } from 'react';
import Menu from "./Menu";
import Image from 'next/image';


export default function Header({ topBarStyle, handleMobileMenuOpen }) {
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
                <div className="box-bar bg-grey-900 "style={{backgroundColor:'black'}}>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8 col-sm-5 col-4"> <Link className="phone-icon mr-45" href="tel:+01-246-357">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z">
                                    </path>
                                </svg>Phone: 214 901 4769  (Any time 24/7)</Link><Link className="email-icon" href="mailto:contact@transp.eu.com">
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                        </path>
                                    </svg>contact@binbears.com</Link></div>

                                    <div className="col-lg-5 col-md-4 col-sm-7 col-8 text-end">
  <Link href="/Booking" className="responsive-link"style={{color:'white'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={19} viewBox="0 0 24 24">
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
    </svg>
    <span>Apply Locally</span>
  </Link>
</div>
<style jsx>{
    `
    .responsive-link {
    
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align to the right */
  text-decoration: none;
  cursor: pointer;
}

.responsive-link span {
  margin-left: auto; /* Push text to the right of the icon */
  color: white;
  font-size: 16px;
}

@media (max-width: 768px) {
  .responsive-link {
    justify-content: center; /* Center align on smaller screens */
  }
  .responsive-link span {
    margin-left: 10px; /* Adjust spacing for smaller screens */
    font-size: 14px; /* Adjust text size for smaller screens */
  }
}

@media (max-width: 576px) {
  .responsive-link {
    flex-direction: column; /* Stack icon and text */
    align-items: center; 
  }
  .responsive-link span {
    margin-left: 0;
    margin-top: 5px; /* Add space between icon and text */
    font-size: 12px; /* Further reduce text size */
  }
}

    
    `}

</style>



                        </div>
                    </div>
                </div>
            </div>
            <header className={scroll ? "header sticky-bar stick" : "header sticky-bar"}style={{backgroundColor:'black'}}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo"><Link className="d-flex" href="/"><img alt="Ecom" src="/img/bear.png.png" /></Link></div>
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
                                <div className="d-inline-block box-dropdown-cart"><span className="font-lg icon-list icon-account"><span className="font-sm color-grey-900 arrow-down">
                                   </span></span>
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

                           

                                <div className="d-none d-sm-inline-block"><Link className="btn btn-brand-1 d-none d-xl-inline-block hover-up" href="/Booking"style={{backgroundColor:'#FF7701'}}>
                                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path  strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                        </path>
                                    </svg>Book Online</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    
        </>
    )
}
 