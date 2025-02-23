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
            "When office furniture becomes obsolete, removing it can be more than most people want to handle alone. BinBear offers efficient, eco-friendly office furniture removal to keep your workspace clear and organized. We’ll even ensure that usable items are donated, and the rest is recycled responsibly.",
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
            "Rental properties often require cleanouts between tenants. BinBear’s property management junk removal service helps property managers quickly clear out abandoned junk, minimizing downtime and getting your property ready for the next occupant..",
          image: "/assets/imgs/page/contact/branch4.png",
         
        },
       
        {
            title: "Foreclosure Clean-Out",
            description:
              "Foreclosed properties are often left with junk that needs to be cleared before they can be sold. BinBear’s team can handle all the heavy lifting and disposal, making the property market-ready in no time.",

            image: "/assets/imgs/page/contact/branch4.png",
            
          },
         
          {
            title: "Storage Facility Clean-Out",
            description:
              "When storage units are abandoned or left filled with junk, BinBear helps facility managers clear out these units quickly and efficiently, ensuring they’re ready for new tenants.",
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











            <style  jsx>{
    `
      .gradient-button {
            font-size: 13px;
          
            color: white;
            padding: 12px 24px;
            border: none;
            
            background: linear-gradient(45deg, #FF7F00, black);
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 4px 10px rgba(255, 165, 0, 0.5);
           
        }

        .gradient-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 15px rgba(255, 165, 0, 0.7);
        }
    /* Common style for heading, paragraph, and buttons */
.responsive-margin {
  margin-left: 12px; /* Default margin for larger screens */
}

@media (max-width: 576px) {
  /* Adjust margins for smaller screens */
  .responsive-margin {
    margin-left: 5px; /* Reduced margin for small screens */
  }
}

/* Additional button-specific styles */
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
    width: 100%; /* Full width for small screens */
  }
}

    `}

</style>


               
                        









<section
  className="section"
  style={{
    background: "linear-gradient(to bottom, black, #FF7F00)",
    color: "white",
  }}
>
  <div
    className="container"
    style={{
      background: "linear-gradient(to right, #FF7F00, black)",
      padding: "20px",
      borderRadius: "10px",
    }}
  >
    <div
      className="banner text-center"
      style={{
        background: "none", // Remove the inner background for transparency
      }}
    >
      <h2 className="color-white mt-15 mb-10 wow animate__animated animate__fadeIn">
      Commercial Junk Removal Services by BinBear
      </h2>
      <p className="font-md color-white wow animate__animated animate__fadeIn">
        <br className="d-none d-lg-block" />
      </p>
      <form action="#">
        <div className="form-group">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              marginTop: "20px",
              width: "100%",
            }}
          >
            <a
              href="Booking"
              style={{
                backgroundColor: "#FF7F00",
                color: "black",
                border: "none",
                padding: "15px 20px",
                textDecoration: "none",
                textAlign: "center",
                width: "90%",
                maxWidth: "250px",
                borderRadius: "5px",
              }}
            >
              Book Online
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>







                <section className="section pt-85">
                    <div className="container">
                        <div className="row mt-50 align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h6 className="color- mb-15 wow animate__animated animate__fadeIn"></h6>
                                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Commercial Junk Removal Process
</h3>   
                               
                                 <div className="row">
                                    <div className="col-lg-9">
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Every business, no matter the industry, generates junk. Over time, old office furniture, equipment, and various forms of debris tend to pile up. If your business is ready to clear out the clutter, BinBear is here to help with affordable, tailored commercial junk removal solutions.</p>
                                    </div>

                                    <div className="col-lg-9"style={{marginTop:'20px'}}>
                                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">Whether you’re dealing with outdated office furniture, discarded electronics, or leftover construction materials, we have the expertise and equipment to handle it all. Trust BinBear, North America’s top choice for commercial junk removal.</p>
                                    </div>

                                </div>
                                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Why Choose BinBear for Commercial Junk Removal?
</h3>   
                               
                                
                                <div className="row mt-50">
                                <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Top-Rated Service</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">Our commitment to reliability and professionalism ensures exceptional value for your business.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Flexible Payment Plans</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn"> BinBear offers business accounts with convenient payment options.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature2-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Fully Insured</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">You’re protected, and so are we, as our team performs junk removal on your property.</p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/trackyourparcel/img-info-7.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                          <div className="info-play wow animate__animated animate__fadeIn"style={{backgroundColor:"black"}}>
                                            <h4 className="color-white mb-15">We have 8 years passion and reputation</h4>
                                            <p className="font-sm color-white">What started as small, locally owned junk hauling business has quickly grown into a trusted name in our community </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>












                <section className="section mt-10">
      <div className="container">
      <h2
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Types of Commercial Junk Removal Services
</h2>   

        
        <div className="row mt-50">
          {cards.map((card, index) => (
            <div className="col-xl-3 col-md-6 mb-50" key={index}>
              <div
                className={`cardService ${
                  clickedCardIndex === index ? "clicked" : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className="cardImage wow animate__animated animate__fadeIn ">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="cardInfo wow animate__animated animate__fadeIn">
                  
                  <h6 className="color-black mb-15 ">{card.title}</h6>
                  <p className="font-xs color-grey-900">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>


    <style jsx>{`
    
    .cardService {
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: white; /* Default background */
  color: inherit; /* Default content color */
}

.cardService .cardInfo {
height:300px;
  color:white;
}

.cardService:hover {
   /* Change background on hover */
}
.cardInfo:hover{
background-color:black;}
.cardService:hover .cardInfo h6,
.cardService:hover .cardInfo p,
.cardService:hover .cardInfo img {

  color: orange; /* Change content color on hover */
}

.cardService:hover .cardInfo img {
 
  /* Optional: Adjust icon color */
}

    
    
    `}</style>






                <section className="section pt-10 bg-worldmap">
                    <div className="container">
                        <div className="text-start">
                            
                        <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Benefits of Outsourcing Your Commercial 
</h3>   
      
<h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Junk Removal to BinBear
</h3>   

                                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"></p>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"></div>
                                        <div className="info-play">
                                            <h4 className="color-white mb-15 wow animate__animated animate__fadeIn">We have 8 years passion and reputation</h4>
                                            <p className="font-sm color-white wow animate__animated animate__fadeIn">What started as small,locally owned junk hauling business has quickly grown into a trusted name in our community</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <ul className="list-how-works">
                                    <li>
                                        <div className="image-how"><span className="img wow animate__animated animate__fadeIn"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Peace  of Mind</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Professional Environment</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Clear out excess equipment and furniture, improving the safety and appearance of your workspace.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" style={{height:'35px'}}/></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Convenience</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Free up time by letting BinBear handle all your junk removal needs..</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Cost Savings</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Avoid the productivity loss and expenses associated with DIY junk removal.</p>
                                        </div>
                                    </li>


                                    
                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black wow animate__animated animate__fadeIn">Health and Safety</h5>
                                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Our team is equipped to handle heavy and bulky items safely, minimizing risks for your staff.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

               

                <div className="line-border" />
                <section className="section mt-50"/>
                   
                <div className="container">


                <div className="row align-items-center">
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="transp" />
                                     
<h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>BinBear: A Green Approach to Commercial Junk Removal
</h3>   

                                
                                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"> BinBear is committed to eco-friendly practices, leading the way with recycling-based junk removal. We sort each load to separate metals, electronics, paper, and more, aiming to recycle or repurpose as much as possible. Usable items are donated to local charities, helping reduce landfill waste while benefiting the community.</p>
                              
                           
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}> </p>      
                               
                            </div>
                        </div>





                        <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                                                   
<h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Ready for Commercial Junk Removal?
</h3>   

                                  <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginBottom:'20px'}}>Getting started with BinBear is easy. Just follow these steps:</p>
                                <ul className="list-how-works">
                                <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Schedule Your Appointment</h5>
                                            <p className="font-md color-grey-700">Book online or call us to set up a time that works for you.</p>
                                        </div>
                                    </li>

                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Get a Free Estimate</h5>
                                            <p className="font-md color-grey-700">Our team will arrive on time, assess the volume of junk, and provide an upfront estimate.</p>
                                        </div>
                                    </li>


                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Sit Back and Relax</h5>
                                            <p className="font-md color-grey-700">We handle all the heavy lifting, loading, and hauling, so you can focus on what you do best</p>
                                        </div>
                                    </li>

</ul>


<p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}} >Our professional team is insured and dedicated to providing top-notch service with no hidden fees. Whether it’s old office furniture, construction debris, or unwanted electronics, BinBear has you covered.</p>



                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>
                               
                               </div>
                            <div className="col-lg-6 mb-60"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        </div>
                        



                    
                        </div>
                        </section>





                                   
                       </div>
                   




                <section className="section mt-10">
                <div className="container">
                                                                                     
<h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px",marginTop:'10px', borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>Our Comprehensive Junk Removal Services
</h3>   

                   
                         <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">
                               </p>
                               <p className="font-md color-gray-700 wow animate__animated animate__fadeIn"style={{marginTop:'10px'}}>In addition to commercial junk removal, BinBear specializes in:</p>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="/Booking" style={{backgroundColor: '#FF7F00', }}>
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Online Booking</Link></div>
                    </div>
                    <div className="mt-20 box-background-black" >
                        <div className="bg-under"/>
                        <div className="row">
                           
                            
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                    
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'white'}}>Furniture Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'white'}}>Yard Waste Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35"> </p>
                                       
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                          </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'white'}}>Hot Tub Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35"> </p>
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                      
                                       </div>
                                </div>
                            </div>


 <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'white'}}>Trash Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35"> </p>
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                        
                                            </div>
                                </div>
                            </div>

 <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
       
                                    <div className="card-info" >
                                        <h5 className="color- mb-15"style={{color:'white'}}>Mattress Disposal</h5>
                                        <p className="font-sm color-grey-900 mb-35"> </p>
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                      
                                        </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                   
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'white'}}>Refrigerator Disposal & Recycling</h5>
                                        <p className="font-sm color-grey-900 mb-50"></p>
                                      
                                        <div className="box-button-offer mb-40" style={{ marginTop: "25px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                  
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'white'}}>E-Waste Disposal</h5>
                                        <p className="font-sm color-grey-900 mb-35"></p>
                                       
                                        <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                         </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn"style={{marginBottom:'70px'}}>
                                <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                    
                                    <div className="card-info">
                                        <h5 className="color- mb-15"style={{color:'white'}}>General Garbage Removal</h5>
                                        <p className="font-sm color-grey-900 mb-35">
                                          </p>
                                       
                                          <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
  <a className="btn btn-link font-sm color-brand-2">
    <button className="gradient-button">View Details</button>
  </a>
</div>
                                          </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-70 pb-70 bg-"style={{backgroundColor:'black',marginBottom:'50px'}}>
           
           <div className="container">
               <div className="box-get-quote">
                   <div className="get-quote-left">
                       <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">When you think Junk, think BinBear!
                           </p>
                       <h3 className="color-brand-wow animate__animated animate__fadeIn" style={{color:'#FF7F00'}}> With a few quick clicks, your waste is our commands!
                       </h3>
                   </div>
                   <div className="get-quote-right"><Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/register" style={{ backgroundColor: '#FF7F00', textAlign: 'center',
display: 'block', // Ensures the element behaves like a block for text alignment
padding: '10px', }}>
                       <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                           </path>
                       </svg>Contact us</Link></div>
               </div>
           </div>
       </section>


            </Layout>
        </>
    )
}