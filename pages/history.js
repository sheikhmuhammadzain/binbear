// /pages/history.js or /pages/history/index.js
import Layout from "@/components/layout/Layout";
import Brand1Slider from "@/components/slider/Brand1Slider";
import News2Slider from "@/components/slider/News2Slider";
import Testimonial2Slider from "@/components/slider/Testimonial2Slider";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video';
import React from 'react';
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const HistoryPage = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
             <Layout>
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
        Quick Junk Removal History
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


                <section className="section mt-100 mb-50">
                    <div className="container">
         
                        <div className="row align-items-center">
      

                            <div className="col-lg-6 mb-30">
                           

                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" , marginBlock:'50px'}}
>Why Is Junk Removal?
</h3>


                            <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" >Junk removal is a specialized service focused on helping people declutter and remove items they can’t dispose of through standard trash pickup. Unlike regular trash services that provide bins for weekly garbage collection, junk removal services cater to larger, bulkier disposal needs.  </p>
                              

                               
                               <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" style={{marginTop:'20px'}} >Imagine you’re cleaning out your basement and end up with far more waste than your typical bin can handle. Or maybe you have large items like old furniture or broken appliances that you want to get rid of. This is where junk removal companies, like BinBear, come in. We handle those oversized items and extensive cleanup projects, providing you with an efficient, hassle-free way to clear out your space.</p>
                               <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn" style={{marginTop:'20px'}}>Junk removal can also benefit contractors and renovators who often generate substantial debris, such as drywall pieces and old flooring. These professionals often rely on junk removal companies to keep their workspaces clean and organized.</p>
                                 </div>
                            <div className="col-lg-6 position-relative mb-30">
                                <div className="row align-items-end">
                                    <div className="col-lg-5 col-md-5 col-sm-5"><img className="mb-20 wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-1.png" alt="transp" /><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/blog-single/bagi.png" alt="transp" /></div>
                                    <div className="col-lg-7 col-md-7 col-sm-7"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-1.png"style={{height:"370px"}} alt="transp" /></div>
                                </div>
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section mt-0 mb-50">
                    <div className="container">
                      
                        <div className="row align-items-center item-about-2 item-about-2-revert">
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'#FF7F00'}}>History</span>
                                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center",marginBlock:'40px' ,}}
>
The History of Junk Removal
</h3>

                                     <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                  Junk removal has its roots in early waste management practices, where people disposed of unwanted items by simply burning, burying, or throwing them away.
As urbanization grew, particularly in the 20th century, waste disposal became more regulated, leading to the creation of organized systems for trash collection.
   In the 1970s, junk removal services began emerging as businesses offering specialized removal of large, bulky items like furnitures and appliances   
      Over time, these services expanded to include residential, commercial and construction debris removal,with a focus on sustainability through recycling and donation
                          of usable items.        
                                  </p>
                                    <div className="box-button mt-40"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'#FF7F00',color:'black',}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-6"><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" /></div>
                        </div>
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6"style={{marginTop:'0px'}}><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" /></div>
                            <div className="col-lg-6">
                                <div className="box-info-about-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'#FF7F00',marginTop:'40px'}}>Our Partners</span>
                                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center",marginBlock:'40px' }}
>
Landfill Stress in the United States
</h3>

                                      <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">Landfill stress in the U.S. has grown as urban populations and waste generation increased. Over Time, landfills have become overwhelmed, leading to concerns about environmental impacts, such as soil and water contamination.
                                    
          The Rising volumn of waste,limited landfills space, and stricter regulation have pushed for more sustainable waste management solutions,including recycling, composting                         
           and waste reduction efforts.
           </p>
                               </div>
                            </div>
                        </div>




                        <div className="row align-items-center item-about-2 item-about-2-revert">
                            <div className="col-lg-6">
                            <div className="box-info-aabout-2">
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" ,marginBlock:'40px' }}
>
Recycling and Junk
</h3>
   

                                       <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">Recycling has become a critical part of waste management, with the U.S. recycling over 30% of its waste. Recycling not only reduces landfill strain but also conserves resources. BinBear supports these efforts by sorting through collected items to recycle or donate usable materials whenever possible.

                                         We recycle a wide range of materials, including paper, cardboard, glass, metal, and certain plastics. To make a meaningful impact, we encourage clients to partner with us for eco-friendly disposal, ensuring that items don’t end up in landfills unnecessarily.


</p>
                                    <div className="box-button mt-40"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'#FF7F00',color:'black',}}>Free Estimate</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <div className="col-lg-6"style={{marginTop:'0px'}}><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-2.png" alt="transp" /></div>
                        </div>
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6"style={{marginTop:'10px'}}><img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-3.png" alt="transp" /></div>
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2"><span className="btn btn-tag wow animate__animated animate__fadeIn"style={{backgroundColor:'#FF7F00'}}>Our Partners</span>
                                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center",marginBlock:'40px' }}
>
Hazardous Waste and Junk Removal
</h3>

                                     <p className="font-md color-grey-900 mb-0 wow animate__animated animate__fadeIn"> While BinBear can handle almost any type of junk, we can’t accept hazardous waste. Hazardous items include anything  corrosive, explosive, flammable, or poisonous, like certain chemicals, paints, automotive fluids, and batteries. These materials require special handling and disposal through dedicated facilities to ensure safety and environmental protection.
                                    </p>
                               </div>
                            </div>
                        </div>















                    </div>
                </section>
               <div>
              

                <section >
                

                    <div className="container">
                        <div  className="row">
                            <div className="col-lg-6" ><span className="btn btn-tag wow animate__animated animate__fadeIn" style={{backgroundColor:'#FF7F00'}}>History</span>
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center",marginBlock:'40px' }}
>
The Junk Removal Process
</h3>

                                  <p className="font-md color-grey-900 mb-0 wow animate__animated animate__fadeIn" style={{marginTop:'0px'}}>At BinBear, we simplify the junk removal process for you:</p>
                                



                               <div className="font-md color-grey-900 mb-0 wow animate__animated animate__fadeIn"style={{marginRight:'0px'}} >

                                <ul className="list-how-works">
                                    <li >
                                        <div className="image-how"style={{marginTop:'0px'}}><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how"style={{marginRight:'30px',}}>
                                            <h5 className="color-black">Schedule Your Appointment</h5>
                                           
                                            <p  className="font-md color-black-700 wow animate__animated animate__fadeIn"> Book a time that works for you, either online or over the phone.  </p>
                                  
                                     </div>
                                    </li>
                                    <li >
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how"style={{marginRight:'30px'}}>
                                            <h5 className="color-black">Get a Free Estimate</h5>
                                            <p className="font-md color-grey-700">Our team will  be assess your junk ,and provide an  upfront, no-obligation quote.</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">We Do the Heavy Lifting</h5>
                                            <p className="font-md color-grey-700"> Once you approve  quote our team load everything for you.</p>
                                        </div>
                                    </li>


                                    <li >
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Eco-Friendly Disposal</h5>
                                            <p className="font-md color-grey-700"style={{alignContent:'flex-start'}}>We sort items to recycle or donate as much as possible, for reducing waste in  landfills.</p>
                                        </div>
                                    </li>



                                   
                                    <li >
                                        <div className="image-how"style={{marginBottom:'40px'}}><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" style={{height:'30px'}}/></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Enjoy a Clutter-Free Space</h5>
                                            <p className="font-md color-grey-700">Relax in your newly cleared space, knowing that your junk was handled responsibly.
                                            </p>
                                        </div>
                                    </li>
                                </ul>



</div>






                               
                            </div>
                            
                            <div  style={{marginTop:'0px'}} className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        
                        
                          </div>
                        </div>   
                        
                        
                        
                   
                </section>
              </div>

                






              <section className="section mt-20">
                <div className="container">
                <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" , marginBlock:'50px' }}
>
Choose your Junk Pickup Options
</h3>

                    
                  
                    
                    <div className="row align-items-end">
                   
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">There are two Options for choosing Junk Pickups.please pickup one option from these two options for reliable experience.</p>
                           
                        </div>
                        
                       
               </div>
               

                       <div className="d-flex justify-content-between align-items-center mb-30">
                       <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>
Option1
</h3>



    
    <div>
        <Link 
            className="btn btn-brand-1 hover-up wow animate__animated animate__fadeIn" 
            href="Booking" 
            style={{ backgroundColor: '#FF7F00', display: 'flex', alignItems: 'center', gap: '8px' ,marginRight:'0'}}
        >
            <svg 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg" 
                aria-hidden="true"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                ></path>
            </svg>
            Get a quote
        </Link>
    </div>
</div>





                    <div className="container">
    <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
            el: '.swiper-pagination-banner',
        }}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }}
        className="swiper-wrapper"
    >
        <SwiperSlide className="wow animate__animated animate__fadeIn">
            <div className="cardGrid">
                <div className="cardImage">
                    <img src="/assets/imgs/page/blog-single/historypic1.webp" alt="transp"  style={{height:'200px'}}/>
                </div>
                <div className="cardInfo">
                    <h5 className="color-brand-2 mb-10">1. Junk Cost Calculator</h5>
                    <p className="font-xs color-grey-500">Use our proprietary junk cost calculator to determine your service charge.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="wow animate__animated animate__fadeIn">
            <div className="cardGrid">
                <div className="cardImage">
                    <img src="/assets/imgs/page/blog-single/historypic2.webp" alt="transp" style={{height:'200px'}} />
                </div>
                <div className="cardInfo">
                    <h5 className="color-brand-2 mb-10">2. Choose a Date and Time</h5>
                    <p className="font-xs color-grey-500">Choose a date and time that best suits your availability for junk pickup.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="wow animate__animated animate__fadeIn">
            <div className="cardGrid">
                <div className="cardImage">
                    <img src="/assets/imgs/page/blog-single/historypic3.png" alt="transp" style={{height:'200px'}}/>
                </div>
                <div className="cardInfo">
                    <h5 className="color-brand-2 mb-10">3. Confirm Your Booking</h5>
                    <p className="font-xs color-grey-500">Click confirm and that's it! Easy as 1, 2, 3!</p>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</div>






<div className="row align-items-center item-about-2 item-about-2-revert">
                            <div className="col-lg-6">
                            <div className="box-info-aabout-2" >
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7F00", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" }}
>
Option2
</h3>

                                 
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                    You can give us a call ,send  us a text or email us to request a quote to schedule a junk pickup! please use this options if you  are:
                                   
</p>
<h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">
    <span style={{
        display: 'inline-block',
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '50%',
        backgroundColor: '#FF7F00',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '5px', 

    }}>
        1
    </span>
    Commercial customer
</h6>

<h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">
    <span style={{
        display: 'inline-block',
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '50%',
        backgroundColor: '#FF7F00',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '5px', 

    }}>
        2
    </span>
    Post construction
   </h6>

<h6 className="color-brand-2 mb-10 wow animate__animated animate__fadeIn">
    <span style={{
        display: 'inline-block',
        width: '30px',
        height: '30px',
        lineHeight: '30px',
        borderRadius: '50%',
        backgroundColor: '#FF7F00',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '5px', 
        marginBottom:'50px',

    }}>
        3
    </span>
    Tenant cleanout(Vacant/Residential)
</h6>

<h6>*only customer that choose options 2 please  read*</h6>
<p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn"style={{marginTop:"20px"}} >

Once we arrive at  your location.if the items chosen do not correctly describe your input then you may incur a 15% suchanrge.Or a new price will be calculated then sent your for confirmation.
</p>
                                    <div className="box-button mt-40"><Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="Booking"style={{backgroundColor:'#FF7F00',color:'black',}}>Book Online</Link><Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg></Link></div>
                                </div>
                            </div>
                            <img src="/assets/imgs/page/blog-single/historypic4.png" alt="Step 3" style={{height:"300px",width:"700px",marginLeft:"0px"}} className="img-fluid" />
                           
                               </div>



   


                              











                    
                </div>
            </section>




           
  



                <section className="section mt-0">
    <div className="container">
        <div className="row align-items-center">







</div>
           
          
        
    </div>


    </section>








   


                              








<div>



                <section
                       className="section pt-100"
                                  style={{
                                        backgroundColor: 'black',
                                          marginTop: '10px',
                                        marginBottom: '100px',
                                           }}
                                                 >
                                               <div className="container">
                                                 <div className="text-center">
                                                       <span
        className="btn btn-tag color-grey-900 wow animate__animated animate__fadeIn"
        style={{ backgroundColor: '#FF7F00' }}
      >
        Our Features
      </span>
      <h2 className="color-mb-20 mt-10 wow animate__animated animate__fadeIn" style={{ color: 'white',marginRight:'0px' }}>
        Why Choose BinBear?
      </h2>
    </div>
    <div className="row mt-60 "     >
    <p className="font-md color-white-900 mb-20 wow animate__animated animate__fadeIn">
    Customer should choose BinBear for junk removal Services because we offers reliable efficient and eco-friendly solutions. We prioritize customers
      
satisfaction by providing fast, professional services is competitive rates. Our team  handles all types of junks,from residential to commercial,
       with the   focus on recycling  and donation when possible. We're commited to supporting our community and environment, making us the go-to choice for   
         responsible, hassle-free, junk removal in DFW metroplex.
                                                      
</p>


     
      
      <p style={{marginTop:'10px',marginLeft:'290px'}} >   
      
      </p>
      
      <p style={{ marginTop: '10px', marginLeft: '50px', color: 'white' }}>
       
       </p>
      <p style={{ marginTop: '10px', marginLeft: '50px', color: 'white',}}>
        </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '50px', marginBottom:'10px'}}>
       </p>
      <p style={{ marginTop: '2px', color: 'white', marginLeft: '350px' }}>
     

      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '230px' }}>

      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '400px' }}>
      
      </p>
      <p style={{ marginTop: '10px', color: 'white', marginLeft: '400px', marginBottom: '100px' }}>
      
      </p>
    </div>
  </div>
</section>




<style jsx>{
    `
    /* General Section Styling */
.section {
  padding-top: 100px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 100px;
}

/* Centering and Adjusting Heading */
.section .text-center {
  text-align: center;
}

.section h2 {
  color: white;
  margin-top: 10px;
  margin-right: 40px;
}

/* Paragraph Styling */
.section p {
  color: white;
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px; /* Restrict width for readability */
  margin: 10px auto; /* Center paragraphs */
  text-align: center; /* Center text */
}

/* Responsive Design */

/* Large Screens (Desktops & Laptops) */
@media (max-width: 1200px) {
  .section p {
    font-size: 15px;
    max-width: 700px;
  }
}

/* Medium Screens (Tablets) */
@media (max-width: 992px) {
  .section {
    padding-top: 80px;
  }
  .section h2 {
    margin-right: 0; /* Remove right margin */
  }
  .section p {
    font-size: 14px;
    max-width: 90%;
    margin: 10px auto;
  }
}

/* Small Screens (Mobile) */
@media (max-width: 768px) {
  .section {
    padding-top: 60px;
    margin-bottom: 50px;
  }
  .section h2 {
    font-size: 22px;
    text-align: center;
    margin-right: 0;
  }
  .section p {
    font-size: 14px;
    max-width: 95%;
    text-align: center;
    margin: 10px auto;
  }
}

    
    `}

</style>


<style jsx>{
  `
  
 
    .custom-heading {
        background-color: #FF7F00; /* Orange background */
        color: white; /* White text color */
        padding: 15px;
        border-radius: 5px;
        width: fit-content;
        text-align: center;
    }

  
  
  `}

</style>


<style jsx>{`
    .responsive-heading, .responsive-headings {
        background-color: #FF7F00; /* Orange background */
        color: white;
        padding: 15px;
        margin-bottom:20px;
        border-radius: 5px;
        width: 80%; /* Responsive width */
        max-width: 750px; /* Maximum width constraint */
        text-align: center;
        font-size: 40px;
        white-space: normal; /* Allow text wrapping */
    }

    /* Large screens (Laptops) */
    @media (min-width: 1024px) {
        .responsive-heading, .responsive-headings {
            margin-top: 10px; /* 10% margin from top */
            margin-left: 300px; /* 300px from the left */
            width: 750px; /* Fixed width for large screens */
        }
    }

    /* Tablets & Medium Screens */
    @media (max-width: 1024px) {
        .responsive-heading, .responsive-headings {
            margin: 10px auto; /* Centered */
            width: 80%; /* Adjust width */
            font-size: 16px;
            padding: 12px;
        }
    }

    /* Mobile Screens */
    @media (max-width: 480px) {
        .responsive-heading, .responsive-headings {
            width: 95%; /* Full width */
            font-size: 14px;
            padding: 10px;
            margin: 5px auto; /* Reduce top margin */
        }
    }



 .responsive-headingg, .responsive-headings {
        background-color: #FF7F00; /* Orange background */
        color: white;
        padding: 15px;
        margin-bottom:20px;
        border-radius: 5px;
        width: 80%; /* Responsive width */
        max-width: 750px; /* Maximum width constraint */
        text-align: center;
        font-size: 40px;
        white-space: normal; /* Allow text wrapping */
    }

    /* Large screens (Laptops) */
    @media (min-width: 1024px) {
        .responsive-headingg, .responsive-headings {
            margin-top: 10px; /* 10% margin from top */
            margin-left: 300px; /* 300px from the left */
            width: 750px; /* Fixed width for large screens */
        }
    }

    /* Tablets & Medium Screens */
    @media (max-width: 1024px) {
        .responsive-headingg, .responsive-headings {
            margin: 10px auto; /* Centered */
            width: 80%; /* Adjust width */
            font-size: 16px;
            padding: 12px;
        }
    }

    /* Mobile Screens */
    @media (max-width: 480px) {
        .responsive-headingg, .responsive-headings {
            width: 95%; /* Full width */
            font-size: 14px;
            padding: 10px;
            margin: 5px auto; /* Reduce top margin */
        }
    }


    .responsive-headingss, .responsive-headings {
        background-color: #FF7F00; /* Orange background */
        color: white;
        padding: 15px;
        margin-bottom:20px;
        border-radius: 5px;
        width: 80%; /* Responsive width */
        max-width: 750px; /* Maximum width constraint */
        text-align: center;
        font-size: 40px;
        white-space: normal; /* Allow text wrapping */
    }

    /* Large screens (Laptops) */
    @media (min-width: 1024px) {
        .responsive-headingss, .responsive-headings {
            margin-top: 10px; /* 10% margin from top */
            margin-left: 0px; /* 300px from the left */
            width: 620px; /* Fixed width for large screens */
        }
    }

    /* Tablets & Medium Screens */
    @media (max-width: 1024px) {
        .responsive-headingss, .responsive-headings {
            margin: 10px auto; /* Centered */
            width: 80%; /* Adjust width */
            font-size: 16px;
            padding: 12px;
        }
    }

    /* Mobile Screens */
    @media (max-width: 480px) {
        .responsive-headingss, .responsive-headings {
            width: 95%; /* Full width */
            font-size: 14px;
            padding: 10px;
            margin: 5px auto; /* Reduce top margin */
        }
    }







`}</style>





<style jsx>{
    `
 /* Default (Desktop) */
.box-info-aabout-2 {
  margin-left: 100px; /* Default margin for larger screens */
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}

/* Mobile Screens (Max width: 768px) */
@media (max-width: 768px) {
  .box-info-aabout-2 {
    margin-left: 100px;  /* Remove left margin */
    /* Ensure no extra spacing */
    padding: 15px;     /* Adjust padding for better fit */
    text-align: center; /* Center the content */
  }
}

    
    `}

</style>














<style jsx>{`
  @media (max-width: 768px) {
    .section {
      padding-top: 20px;
      padding-bottom: 20px;
    }




    .row {
      margin-left: 0 !important;  /* Remove left margin */
    }
    p {
      margin-left: 0 !important; /* Remove the large left margins for text */
      margin-right: 0 !important; /* Remove any right margin */
      text-align: center !important; /* Center-align text */
    }
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`}</style>

<style jsx>
    {`
/* Ensure all cards have the same height */
.cardGrid {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 20px;
    height: 400px; /* Uniform height for all cards */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.cardGrid:hover {
    transform: translateY(-10px);
}

.cardImage {
    width: 100%;
    height: 220px; /* Fixed height for all images */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px;
}

.cardImage img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Ensure images fill their container */
    border-radius: 8px;
}

.cardInfo {
    text-align: center;
    flex-grow: 1; /* Allow content section to grow if necessary */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Text styles */
.cardInfo h5 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

.cardInfo p {
    font-size: 14px;
    color: #666;
    margin: 0;
}

/* Swiper Responsiveness */
@media (max-width: 991px) {
    .cardGrid {
        height: 350px; /* Adjust height for smaller screens */
    }

    .cardImage {
        height: 200px; /* Smaller image height */
    }
}

@media (max-width: 767px) {
    .cardGrid {
        height: 300px;
        padding: 15px;
    }

    .cardImage {
        height: 180px;
    }
}

@media (max-width: 575px) {
    .cardGrid {
        height: 300px;
    }

    .cardImage {
        height: 160px;
    }
}


    `}

</style>




</div>












<section className="section pt-70 pb-70 bg-"style={{backgroundColor:'black',marginBottom:'50px'}}>
           
           <div className="container">
               <div className="box-get-quote">
                   <div className="get-quote-left">
                       <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">When you think Junk, think BinBear!
                           </p>
                       <h3 className="color-brand- wow animate__animated animate__fadeIn"style={{color:"#FF7F00"}}> With a few quick clicks, your waste is our commands!
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
       
    );
};

export default HistoryPage; // Make sure to export it as default
