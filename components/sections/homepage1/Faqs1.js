import Accordion from "@/components/elements/Accordion";
import Link from "next/link";

export default function Faqs1() {
    return (
        <>
            <section className="section-premium bg-faqs">
                <div className="container">
                    <div className="section-premium-header" data-aos="fade-up">
                        <h2 className="section-premium-title">Frequently Asked Questions</h2>
                        <p className="section-premium-subtitle">
                            Find answers to common questions about our junk removal services
                        </p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-10 mx-auto" data-aos="fade-up" data-aos-delay="100">
                            <div className="faqs-premium">
                                <div className="faq-premium">
                                    <div className="faq-premium-question">
                                        <h3>How much does junk removal cost?</h3>
                                        <span className="faq-premium-icon">+</span>
                                    </div>
                                    <div className="faq-premium-answer">
                                        <p>Our pricing is based on the volume of junk removed. We offer transparent pricing with no hidden fees. You can get an instant quote using our online calculator or by contacting our team.</p>
                                    </div>
                                </div>
                                
                                <div className="faq-premium">
                                    <div className="faq-premium-question">
                                        <h3>What items do you take?</h3>
                                        <span className="faq-premium-icon">+</span>
                                    </div>
                                    <div className="faq-premium-answer">
                                        <p>We accept most household and commercial items including furniture, appliances, electronics, yard waste, construction debris, and more. There are some restrictions on hazardous materials.</p>
                                    </div>
                                </div>
                                
                                <div className="faq-premium">
                                    <div className="faq-premium-question">
                                        <h3>How quickly can you come for pickup?</h3>
                                        <span className="faq-premium-icon">+</span>
                                    </div>
                                    <div className="faq-premium-answer">
                                        <p>We offer same-day and next-day service in most areas. You can book online in as little as 30 seconds and select your preferred date and time slot.</p>
                                    </div>
                                </div>
                                
                                <div className="faq-premium">
                                    <div className="faq-premium-question">
                                        <h3>Are you environmentally friendly?</h3>
                                        <span className="faq-premium-icon">+</span>
                                    </div>
                                    <div className="faq-premium-answer">
                                        <p>Absolutely! We're committed to eco-friendly disposal. We recycle up to 100% of recyclable materials and donate usable items to local charities whenever possible.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center mt-50" data-aos="fade-up" data-aos-delay="300">
                                <Link href="/contact" className="btn-premium btn-premium-primary">
                                    View All FAQs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .section-premium {
                    padding: 100px 0;
                    background-color: #f9f9f9;
                    position: relative;
                }
                
                .faqs-premium {
                    margin-top: 50px;
                }
                
                .faq-premium {
                    background-color: white;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .faq-premium:hover {
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                    transform: translateY(-3px);
                }
                
                .faq-premium-question {
                    padding: 25px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    border-left: 4px solid #FF7F00;
                }
                
                .faq-premium-question h3 {
                    font-size: 18px;
                    font-weight: 600;
                    margin: 0;
                    color: #212121;
                }
                
                .faq-premium-icon {
                    font-size: 24px;
                    font-weight: 700;
                    color: #FF7F00;
                    transition: all 0.3s ease;
                }
                
                .faq-premium.active .faq-premium-icon {
                    transform: rotate(45deg);
                }
                
                .faq-premium-answer {
                    padding: 0 30px 25px;
                    display: none;
                }
                
                .faq-premium.active .faq-premium-answer {
                    display: block;
                }
                
                .faq-premium-answer p {
                    font-size: 16px;
                    line-height: 1.6;
                    color: #757575;
                    margin: 0;
                }
                
                .btn-premium {
                    display: inline-flex;
                    align-items: center;
                    padding: 14px 30px;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    text-decoration: none;
                }
                
                .btn-premium-primary {
                    background: linear-gradient(45deg, #FF7F00, #FFA64D);
                    color: #212121;
                    box-shadow: 0 4px 15px rgba(255, 127, 0, 0.3);
                }
                
                .btn-premium-primary:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 20px rgba(255, 127, 0, 0.4);
                    color: #212121;
                }
                
                @media (max-width: 768px) {
                    .section-premium {
                        padding: 60px 0;
                    }
                    
                    .faq-premium-question {
                        padding: 20px 25px;
                    }
                    
                    .faq-premium-question h3 {
                        font-size: 16px;
                    }
                    
                    .faq-premium-answer {
                        padding: 0 25px 20px;
                    }
                    
                    .faq-premium-answer p {
                        font-size: 15px;
                    }
                }
                
                @media (max-width: 576px) {
                    .section-premium {
                        padding: 50px 0;
                    }
                    
                    .faq-premium-question {
                        padding: 15px 20px;
                    }
                    
                    .faq-premium-question h3 {
                        font-size: 15px;
                    }
                    
                    .faq-premium-answer {
                        padding: 0 20px 15px;
                    }
                    
                    .faq-premium-answer p {
                        font-size: 14px;
                    }
                }
            `}</style>
            
            <script jsx>{`
                document.addEventListener('DOMContentLoaded', function() {
                    const faqItems = document.querySelectorAll('.faq-premium');
                    
                    faqItems.forEach(item => {
                        const question = item.querySelector('.faq-premium-question');
                        
                        question.addEventListener('click', () => {
                            const isActive = item.classList.contains('active');
                            
                            // Close all FAQs
                            faqItems.forEach(faq => {
                                faq.classList.remove('active');
                            });
                            
                            // If the clicked FAQ wasn't active, open it
                            if (!isActive) {
                                item.classList.add('active');
                            }
                        });
                    });
                });
            `}</script>
        </>
    )
}
