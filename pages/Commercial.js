import Layout from "@/components/layout/Layout";

import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
export default function Quote() {




    const [clickedCardIndex, setClickedCardIndex] = useState(null);

    const handleCardClick = (index) => {
      // Set the clicked card index or reset if clicked again
      setClickedCardIndex(clickedCardIndex === index ? null : index);
    };
  
   
      
    const cards = [
        {
          title: "Office Junk Removal",
          backgroundColor:'red',
          description:
          "When office furniture becomes obsolete, removing it can be more than most people want to handle alone. BinBear offers efficient, eco-friendly office furniture removal to keep your workspace clear and organized. We'll even ensure that usable items are donated, and the rest is recycled responsibly.",
          image: "/assets/imgs/page/contact/branch1.png",
     
        },
        {
          title: "Commercial Equipment Removal",
          description:
            "Old equipment can be difficult to dispose of, especially when dealing with large, heavy, or unwieldy items. Outsourcing equipment removal to BinBear is often the most cost-effective choice, freeing up your team to focus on their work while we handle the disposal..",
          image: "/assets/imgs/page/contact/branch2.png",
          
        },
        {
          title: "Commercial Scrap Pick-Up",
          description:
            "Disposing of scrap metal like iron, copper, aluminum, or construction metal can be challenging. BinBear will safely pick up and recycle your scrap metal, keeping your workplace clutter-free and environmentally friendly.",
          image: "/assets/imgs/page/contact/branch3.png",
         
        },
        {
          title: "Property Management Clean-Out",
          description:
            "Rental properties often require cleanouts between tenants. BinBear's property management junk removal service helps property managers quickly clear out abandoned junk, minimizing downtime and getting your property ready for the next occupant..",
          image: "/assets/imgs/page/contact/branch4.png",
         
        },
       
        {
            title: "Foreclosure Clean-Out",
            description:
            "Foreclosed properties are often left with junk that needs to be cleared before they can be sold. BinBear's team can handle all the heavy lifting and disposal, making the property market-ready in no time.",

            image: "/assets/imgs/page/contact/branch4.png",
            
          },
         
          {
            title: "Storage Facility Clean-Out",
            description:
              "When storage units are abandoned or left filled with junk, BinBear helps facility managers clear out these units quickly and efficiently, ensuring they're ready for new tenants.",
            image: "/assets/imgs/page/contact/branch4.png",
           
          },
          {
            title: "Construction Debris Removal",
            description:
              "Managing construction debris can be a time-consuming task. BinBear offers hassle-free construction debris removal, giving contractors and project managers peace of mind that their waste is being handled responsibly.",

            image: "/assets/imgs/page/contact/branch4.png",
            
          },
         

       
      ]
      
    
     



   
    return (
        <>
            <Layout>

          <style jsx>{`
      .gradient-button {
            font-size: 13px;
            color: white;
            padding: 12px 24px;
            border: none;
            background: linear-gradient(45deg, #FF7F00, black);
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(255, 165, 0, 0.5);
                    border-radius: 5px;
        }

        .gradient-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(255, 165, 0, 0.7);
        }

.responsive-margin {
                    margin-left: 12px;
}

@media (max-width: 576px) {
  .responsive-margin {
                        margin-left: 5px;
  }
}

.responsive-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: orange;
}

@media (max-width: 576px) {
  .responsive-btn {
                        width: 100%;
                    }
                }

                .section-spacing {
                    padding: 80px 0;
                }

                .section-spacing-small {
                    padding: 60px 0;
                }

                .heading-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 40px;
                }

                .content-spacing {
                    margin-bottom: 30px;
                }

                .card-grid {
                    gap: 30px;
                }

                @media (max-width: 768px) {
                    .section-spacing {
                        padding: 60px 0;
                    }
                    
                    .section-spacing-small {
                        padding: 40px 0;
                    }
                    
                    .heading-container {
                        margin-bottom: 30px;
                    }
                }

                .cardService {
                    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
                    background-color: white;
                    color: inherit;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }

                .cardService .cardInfo {
                    height: 280px;
                    color: white;
                    padding: 25px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .cardService:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .cardInfo:hover {
                    background-color: black;
                }

                .cardService:hover .cardInfo h6,
                .cardService:hover .cardInfo p {
                    color: orange;
                }

                .process-section {
                    background-color: #f8f9fa;
                }

                .benefits-list {
                    margin-top: 40px;
                }

                .benefit-item {
                    margin-bottom: 30px;
                    padding: 20px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                    transition: transform 0.3s ease;
                }

                .benefit-item:hover {
                    transform: translateY(-3px);
                }

                .service-cards-container {
                    margin-top: 40px;
                }

                .service-card {
                    margin-bottom: 30px;
                    border-radius: 15px;
                    overflow: hidden;
                    transition: transform 0.3s ease;
                }

                .service-card:hover {
                    transform: translateY(-5px);
                }

                .cta-section {
                    margin-top: 80px;
                }
            `}</style>

          {/* Hero Section */}
          <section className="section" style={{
            background: "linear-gradient(to bottom, black, #FF7F00)",
            color: "white",
            padding: "100px 0"
          }}>
            <div className="container" style={{
              background: "linear-gradient(to right, #FF7F00, black)",
              padding: "60px 40px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}>
              <div className="banner text-center">
                <h1 className="color-white mt-15 mb-30 wow animate__animated animate__fadeIn" style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  lineHeight: "1.2"
                }}>
                  Commercial Junk Removal Services by BinBear
                </h1>
                <p className="font-lg color-white wow animate__animated animate__fadeIn mb-40" style={{
                  fontSize: "18px",
                  maxWidth: "600px",
                  margin: "0 auto 40px"
                }}>
                  Professional, reliable, and eco-friendly commercial junk removal solutions for businesses of all sizes.
                </p>
                <div className="cta-button-container">
                  <a href="Booking" style={{
                    backgroundColor: "#FF7F00",
                    color: "black",
                    border: "none",
                    padding: "18px 40px",
                    textDecoration: "none",
                    textAlign: "center",
                    borderRadius: "10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(255, 127, 0, 0.3)"
                  }}>
                    Book Online
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="section-spacing process-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-40">
                  <div className="heading-container" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                    <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                      backgroundColor: "#FF7F00",
                      color: "white",
                      padding: "15px 25px",
                      borderRadius: "10px",
                      width: "fit-content",
                      marginBottom: "30px"
                    }}>
                      Commercial Junk Removal Process
                    </h3>
                  </div>

                  <div className="content-spacing">
                    <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-25">
                      Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.
                    </p>
                    <p className="font-md color-grey-900 wow animate__animated animate__fadeIn mb-30">
                      Whether you're dealing with outdated office furniture, discarded electronics, or leftover construction materials, we have the expertise and equipment to handle it all. Trust BinBear, North America's top choice for commercial junk removal.
                    </p>
                  </div>

                  <div className="heading-container" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                    <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                      backgroundColor: "#FF7F00",
                      color: "white",
                      padding: "15px 25px",
                      borderRadius: "10px",
                      width: "fit-content",
                      marginBottom: "30px"
                    }}>
                      Why Choose BinBear for Commercial Junk Removal?
                    </h3>
                  </div>

                  <div className="row benefits-list">
                                <div className="col-lg-6 mb-30">
                      <div className="benefit-item">
                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn mb-15">Top-Rated Service</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Our commitment to reliability and professionalism ensures exceptional value for your business.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-30">
                      <div className="benefit-item">
                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn mb-15">Flexible Payment Plans</h6>
                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">BinBear offers business accounts with convenient payment options.</p>
                      </div>
                                </div>
                    <div className="col-lg-12 mb-30">
                      <div className="benefit-item">
                        <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn mb-15">Fully Insured</h6>
                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">You're protected, and so are we, as our team performs junk removal on your property.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-30">
                  <div className="box-image-how">
                    <img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/trackyourparcel/img-info-7.png" alt="Commercial Junk Removal" style={{ borderRadius: "15px" }} />
                    <div className="box-info-bottom-img" style={{
                      backgroundColor: 'black',
                      borderRadius: "0 0 15px 15px",
                      padding: "30px"
                    }}>
                      <div className="info-play wow animate__animated animate__fadeIn">
                        <h4 className="color-white mb-20">We have 8 years passion and reputation</h4>
                        <p className="font-sm color-white">What started as small, locally owned junk hauling business has quickly grown into a trusted name in our community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section-spacing">
            <div className="container">
              <div className="heading-container">
                <h2 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                  backgroundColor: "#FF7F00",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "10px",
                  width: "fit-content",
                  fontSize: "28px"
                }}>
                  Types of Commercial Junk Removal Services
                </h2>   
              </div>

              <div className="row card-grid">
                {cards.map((card, index) => (
                          <div className="col-xl-4 col-md-6 mb-40" key={index}>
                            <div className={`cardService ${clickedCardIndex === index ? "clicked" : ""}`}
                              onClick={() => handleCardClick(index)}>
                              <div className="cardImage wow animate__animated animate__fadeIn">
                                <img src={card.image} alt={card.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                </div>
                <div className="cardInfo wow animate__animated animate__fadeIn">
                                <h6 className="color-black mb-15">{card.title}</h6>
                  <p className="font-xs color-grey-900">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="section-spacing bg-worldmap" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
              <div className="heading-container">
                <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                  backgroundColor: "#FF7F00",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "10px",
                  width: "fit-content",
                  fontSize: "24px"
                }}>
                  Benefits of Outsourcing Your Commercial Junk Removal to BinBear
                </h3>   
              </div>

              <div className="row mt-50 align-items-center">
                <div className="col-lg-6 mb-40">
                  <div className="box-image-how">
                    <img src="/assets/imgs/page/workprocess/img2.png" alt="Commercial Benefits" style={{ borderRadius: "15px" }} />
                    <div className="box-info-bottom-img" style={{
                      backgroundColor: 'black',
                      borderRadius: "0 0 15px 15px",
                      padding: "30px"
                    }}>
                      <div className="info-play">
                        <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">8 Years of Passion and Reputation</h4>
                        <p className="font-sm color-white wow animate__animated animate__fadeIn">What started as small, locally owned junk hauling business has quickly grown into a trusted name in our community</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-30">
                  <ul className="list-how-works">
                    <li className="mb-30">
                      <div className="image-how">
                        <span className="img wow animate__animated animate__fadeIn">
                          <img src="/assets/imgs/page/homepage1/plane.png" alt="Peace of Mind" style={{ height: '45px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black wow animate__animated animate__fadeIn mb-15">Peace of Mind</h5>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                      </div>
                    </li>

                    <li className="mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/payment.png" alt="Professional Environment" style={{ height: '45px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black wow animate__animated animate__fadeIn mb-15">Professional Environment</h5>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Clear out excess equipment and furniture, improving the safety and appearance of your workspace.</p>
                      </div>
                    </li>

                    <li className="mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/warehouse.png" alt="Convenience" style={{ height: '40px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black wow animate__animated animate__fadeIn mb-15">Convenience</h5>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Free up time by letting BinBear handle all your junk removal needs.</p>
                      </div>
                    </li>

                    <li className="mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="Cost Savings" style={{ height: '45px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black wow animate__animated animate__fadeIn mb-15">Cost Savings</h5>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                      </div>
                    </li>

                    <li className="mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/delivery.png" alt="Health and Safety" style={{ height: '40px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black wow animate__animated animate__fadeIn mb-15">Health and Safety</h5>
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our team is equipped to handle heavy and bulky items safely, minimizing risks for your staff.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Green Approach Section */}
          <section className="section-spacing">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-40">
                  <Link className="wow animate__animated animate__fadeIn" href="#">
                    <img src="/assets/imgs/page/workprocess/img2.png" alt="Green Approach" style={{ borderRadius: "15px", width: "100%" }} />
                  </Link>
                </div>

                <div className="col-lg-6 mb-40">
                  <img className="mb-30 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="BinBear" />
                  <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                    backgroundColor: "#FF7F00",
                    color: "white",
                    padding: "15px 25px",
                    borderRadius: "10px",
                    width: "fit-content",
                    marginBottom: "30px"
                  }}>
                    BinBear: A Green Approach to Commercial Junk Removal
                  </h3>   
                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">
                    BinBear is committed to eco-friendly practices, leading the way with recycling-based junk removal. We sort each load to separate metals, electronics, paper, and more, aiming to recycle or repurpose as much as possible. Usable items are donated to local charities, helping reduce landfill waste while benefiting the community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ready Section */}
          <section className="section-spacing-small" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-40">
                  <img className="mb-30 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="Ready" />
                  <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                    backgroundColor: "#FF7F00",
                    color: "white",
                    padding: "15px 25px",
                    borderRadius: "10px",
                    width: "fit-content",
                    marginBottom: "30px"
                  }}>
                    Ready for Commercial Junk Removal?
                  </h3>   
                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn mb-30">
                    Getting started with BinBear is easy. Just follow these steps:
                  </p>

                  <ul className="list-how-works">
                    <li className="wow animate__animated animate__fadeIn mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/payment.png" alt="Schedule" style={{ height: '45px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black mb-10">Schedule Your Appointment</h5>
                        <p className="font-md color-grey-700">Book online or call us to set up a time that works for you.</p>
                      </div>
                    </li>

                    <li className="wow animate__animated animate__fadeIn mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/warehouse.png" alt="Estimate" style={{ height: '40px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black mb-10">Get a Free Estimate</h5>
                        <p className="font-md color-grey-700">Our team will arrive on time, assess the volume of junk, and provide an upfront estimate.</p>
                      </div>
                    </li>

                    <li className="wow animate__animated animate__fadeIn mb-30">
                      <div className="image-how">
                        <span className="img">
                          <img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="Relax" style={{ height: '45px' }} />
                        </span>
                      </div>
                      <div className="info-how" style={{ marginLeft: "20px" }}>
                        <h5 className="color-black mb-10">Sit Back and Relax</h5>
                        <p className="font-md color-grey-700">We handle all the heavy lifting, loading, and hauling, so you can focus on what you do best</p>
                      </div>
                    </li>
                  </ul>

                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn mt-30">
                    Our professional team is insured and dedicated to providing top-notch service with no hidden fees. Whether it's old office furniture, construction debris, or unwanted electronics, BinBear has you covered.
                  </p>
                </div>

                <div className="col-lg-6 mb-40">
                  <Link className="wow animate__animated animate__fadeIn" href="#">
                    <img src="/assets/imgs/page/workprocess/img1.png" alt="Process" style={{ borderRadius: "15px", width: "100%" }} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid Section */}
          <section className="section-spacing">
                <div className="container">
              <div className="heading-container">
                <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                  backgroundColor: "#FF7F00",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "10px",
                  width: "fit-content",
                  marginBottom: "20px",
                  fontSize: "24px"
                }}>
                  Our Comprehensive Junk Removal Services
                </h3>   
                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn mb-40">
                  In addition to commercial junk removal, BinBear specializes in:
                </p>
              </div>

              <div className="row align-items-center mb-40">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                    Professional removal services for all types of commercial and residential needs.
                  </p>
                </div>
                <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start">
                  <Link className="btn btn-brand-1 hover-up" href="/Booking" style={{
                    backgroundColor: '#FF7F00',
                    padding: '15px 30px',
                    borderRadius: '10px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
                    </svg>
                    Online Booking
                  </Link>
                </div>
              </div>

              <div className="service-cards-container">
                <div className="row">
                  {[
                    { title: "Furniture Removal", description: "Professional furniture removal and disposal services" },
                    { title: "Yard Waste Removal", description: "Eco-friendly yard waste collection and disposal" },
                    { title: "Hot Tub Removal", description: "Safe and efficient hot tub removal services" },
                    { title: "Trash Removal", description: "Comprehensive trash and waste removal" },
                    { title: "Mattress Disposal", description: "Responsible mattress disposal and recycling" },
                    { title: "Refrigerator Disposal & Recycling", description: "Environmentally safe appliance disposal" },
                    { title: "E-Waste Disposal", description: "Secure electronic waste disposal and recycling" },
                    { title: "General Garbage Removal", description: "All-purpose garbage collection services" }
                  ].map((service, index) => (
                    <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" key={index}>
                      <div className="card-offer hover-up service-card" style={{
                        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white", 
                                  padding: "30px",
                                  borderRadius: "15px",
                                  height: "200px",
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between"
                                }}>
                        <div className="card-info">
                                    <h5 className="color-white mb-15" style={{ fontSize: "18px", fontWeight: "bold" }}>
                                      {service.title}
                                    </h5>
                                    <p className="font-sm color-white mb-25" style={{ fontSize: "14px" }}>
                                      {service.description}
                                    </p>
                                    <div className="box-button-offer">
                            <button className="gradient-button">View Details</button>
                          </div>
                        </div>
                                </div>
                    </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

          {/* CTA Section */}
          <section className="cta-section" style={{
            backgroundColor: 'black',
            padding: '80px 0'
          }}>
            <div className="container">
              <div className="box-get-quote" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '30px'
              }}>
                <div className="get-quote-left">
                  <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn" style={{ fontSize: "32px", marginBottom: "15px" }}>
                    When you think Junk, think BinBear!
                  </p>
                  <h3 className="color-brand-wow animate__animated animate__fadeIn" style={{
                    color: '#FF7F00',
                    fontSize: "24px",
                    fontWeight: "bold"
                  }}>
                    With a few quick clicks, your waste is our command!
                  </h3>
                </div>
                <div className="get-quote-right">
                  <Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/register" style={{
                    backgroundColor: '#FF7F00',
                    color: 'black',
                    padding: '18px 35px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                    <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '20px', height: '20px' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
                    </svg>
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </section>

            </Layout>
        </>
    )
}