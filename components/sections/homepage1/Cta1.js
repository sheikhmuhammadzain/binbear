import Link from "next/link";

export default function Cta1() {
    return (
        <>
            <section className="cta-premium-section">
                <div className="container">
                    <div className="cta-premium" data-aos="fade-up">
                        <div className="cta-premium-content">
                            <div className="cta-premium-left">
                                <p className="cta-premium-subtitle" data-aos="fade-up" data-aos-delay="100">When you think Junk, think BinBear!</p>
                                <h3 className="cta-premium-title" data-aos="fade-up" data-aos-delay="200">With a few quick clicks, your waste is our command!</h3>
                            </div>
                            <div className="cta-premium-right" data-aos="fade-up" data-aos-delay="300">
                                <Link className="btn-premium btn-premium-secondary" href="/contact">
                                    <svg className="cta-premium-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                        </path>
                                    </svg>
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .cta-premium-section {
                    padding: 50px 0;
                    background-color: #f9f9f9;
                    position: relative;
                    overflow: hidden;
                }
                
                .cta-premium {
                    background: linear-gradient(45deg, #000000, #333333);
                    border-radius: 12px;
                    padding: 45px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
                }
                
                .cta-premium::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 250px;
                    height: 250px;
                    background: rgba(255, 127, 0, 0.1);
                    border-radius: 50%;
                    transform: translate(125px, -125px);
                }
                
                .cta-premium::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 160px;
                    height: 160px;
                    background: rgba(255, 127, 0, 0.1);
                    border-radius: 50%;
                    transform: translate(-80px, 80px);
                }
                
                .cta-premium-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 25px;
                }
                
                .cta-premium-left {
                    flex: 1;
                    min-width: 280px;
                }
                
                .cta-premium-subtitle {
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 12px;
                    color: rgba(255, 255, 255, 0.9);
                }
                
                .cta-premium-title {
                    font-size: 28px;
                    font-weight: 700;
                    color: #FF7F00;
                    margin-bottom: 0;
                }
                
                .cta-premium-right {
                    display: flex;
                    align-items: center;
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 28px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 15px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-premium-secondary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    box-shadow: 0 6px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-premium-secondary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255, 127, 0, 0.4);
                    color: #212121;
                }
                
                .cta-premium-icon {
                    width: 22px;
                    height: 22px;
                }
                
                @media (max-width: 992px) {
                    .cta-premium {
                        padding: 35px;
                    }
                    
                    .cta-premium-title {
                        font-size: 26px;
                    }
                    
                    .cta-premium-subtitle {
                        font-size: 17px;
                    }
                }
                
                @media (max-width: 768px) {
                    .cta-premium {
                        padding: 25px;
                    }
                    
                    .cta-premium-content {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                    }
                    
                    .cta-premium-title {
                        font-size: 22px;
                    }
                    
                    .cta-premium-subtitle {
                        font-size: 15px;
                    }
                    
                    .btn-premium {
                        padding: 12px 24px;
                    }
                }
                
                @media (max-width: 576px) {
                    .cta-premium-section {
                        padding: 40px 0;
                    }
                    
                    .cta-premium {
                        padding: 20px;
                    }
                    
                    .cta-premium-title {
                        font-size: 20px;
                    }
                    
                    .btn-premium {
                        width: 100%;
                        justify-content: center;
                        padding: 10px 20px;
                    }
                }
            `}</style>
        </>
    )
}
