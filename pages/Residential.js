import Layout from "@/components/layout/Layout"

import Link from "next/link"
export default function WorkProcess() {

    return (
        <>
            <Layout>
                <style jsx>{`
                    .section-spacing {
                        padding: 80px 0;
                    }
                    
                    .section-spacing-small {
                        padding: 60px 0;
                    }
                    
                    .content-container {
                        max-width: 1200px;
                        margin: 0 auto;
                    }
                    
                    .card-offer {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        border-radius: 15px;
                        overflow: hidden;
                        margin-bottom: 30px;
                    }
                    
                    .card-offer:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    }
                    
                    .list-how-works li {
                        margin-bottom: 25px;
                        padding: 20px;
                        background-color: white;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                        transition: transform 0.3s ease;
                    }
                    
                    .list-how-works li:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
                    }
                    
                    .feature-card {
                        background: white;
                        border-radius: 15px;
                        padding: 30px;
                        margin-bottom: 30px;
                        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
                        transition: transform 0.3s ease;
                    }
                    
                    .feature-card:hover {
                        transform: translateY(-5px);
                    }
                    
                    .card-offer:hover h5 {
                        color: #FF7701;
                    }
                    
                    @media (max-width: 768px) {
                        .section-spacing {
                            padding: 60px 0;
                        }
                        
                        .section-spacing-small {
                            padding: 40px 0;
                        }
                        
                        .responsive-heading {
                            font-size: 20px !important;
                            padding: 15px 20px !important;
                        }
                        
                        .box-get-quote {
                            flex-direction: column !important;
                            text-align: center !important;
                        }
                    }
                `}</style>













                <section className="section d-block position-relative">
                    <div className="   banner-howitwork   ">
                        <div className="container">
                            <div className="box-info-trackyourparcel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><img className="mb-1 wow animate__animated animate__fadeIn" src="/img/bear.png.png" style={{ height: '60px' }} alt="transp" />
                                
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
                                    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center", marginTop: '20px' }}
                                >BinBear Full-Service Junk Removal: Texas' #1 Junk Company
</h3>
                 
                                           
   <p className="color-grey-700 font-md wow animate__animated animate__fadeIn"
                                    style={{ marginTop: '20px', textAlign: 'center' }}>
      At BinBear Junk Removal, we pride ourselves on being the top-rated junk removal service in the state. We offer:
   </p>


                            
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-0">
                            <div className="col-lg-6 mb-30">
                                <div className="box-image-how"><img className="w-100 wow animate__animated animate__fadeIn" src="/assets/imgs/page/homepage1/how-it-work.png" alt="transp" />
                                    <div className="box-info-bottom-img"style={{backgroundColor:'black'}}>
                                        <div className="image-play wow animate__animated animate__fadeIn"></div>
                                        <div className="info-play wow animate__animated animate__fadeIn">
                                            <h4 className="color-white mb-15"></h4>
                                            
                                            <p className="font-sm color-white">Our team provides a professional level of service that's unmatched in the industry. We're so confident in our service that we guarantee to meet or beat any written estimate</p>
                                           

                                            <p className="font-sm color-white"> From garage cleanouts to major construction debris removal, BinBear handles jobs of every size. When you choose us, you can expect friendly, professional service aimed at making your life easier with fast, reliable junk removal.</p>
                                           
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-20">
                                <ul className="list-how-works" >
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/plane.png" alt="transp" style={{height:'40px'}}/></span></div>
                                        <div className="info-how"style={{marginTop:'0px'}}>
                                            <h5 className="color-black">Fast Friendly Service</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how"style={{marginTop:'0px'}}>
                                            <h5 className="color-black">Free, upfront Estimates</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>

                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp"style={{height:'35px'}} /></span></div>
                                        <div className="info-how"style={{marginTop:'0px'}}>
                                            <h5 className="color-black">Pay Only for the Space You Use</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>


                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'45px'}} /></span></div>
                                        <div className="info-how"style={{marginTop:'0px'}}>
                                            <h5 className="color-black">Low Price Guarantee</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>



                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/delivery.png" alt="transp" style={{height:'35px'}}/></span></div>
                                        <div className="info-how"style={{marginTop:'0px'}}>
                                            <h5 className="color-black">We Handle All the Heavy Lifting</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section" style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
                    <div className="container">
                        <div className="text-center" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '50px'
                        }}>
                            <img className="mb-30 wow animate__animated animate__fadeIn"
                                src="/img/bear.png.png"
                                alt="BinBear Logo"
                                style={{ height: '70px' }} />
                            <h2 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                                backgroundColor: "#FF7701",
                                color: "white",
                                padding: "18px 30px",
                                borderRadius: "10px",
                                width: "fit-content",
                                textAlign: "center",
                                marginBottom: '30px',
                                fontSize: "28px"
                            }}>
                                Our Process
                            </h2>
                            <p className="font-lg color-grey-700 wow animate__animated animate__fadeIn" style={{
                                textAlign: 'center',
                                maxWidth: '600px',
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                We have simplified our process to make your junk removal experience seamless and hassle-free.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section" style={{ padding: "80px 0" }}>
                    <div className="container">
                        <div className="row align-items-center" style={{ marginBottom: "60px" }}>
                            <div className="col-lg-6 mb-40">
                                <img className="mb-30 wow animate__animated animate__fadeIn"
                                    src="/assets/imgs/page/workprocess/parachute.png"
                                    alt="Junk Removal Process"
                                    style={{ height: "60px" }} />
                                
                                         
                                <h3 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                                    backgroundColor: "#FF7701",
                                    color: "white",
                                    padding: "18px 25px",
                                    borderRadius: "10px",
                                    width: "fit-content",
                                    textAlign: "center",
                                    marginBottom: '30px',
                                    fontSize: "24px"
                                }}>
                                    What is Junk Removal?
                                </h3>    
                                
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginBottom: '20px' }}>Junk removal is an on-demand service for disposing of nearly any type of waste from your home or business. BinBear hauls away large items like furniture and appliances, handles full home cleanouts, provides light demolition in many areas, and clears construction debris from real estate cleanouts. Whether it's an old couch or piles of post-renovation debris, BinBear can take it (just no hazardous waste)..</p>
                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>Simply make an appointment, and our team will show up on time in our recognizable trucks, ready to clear your space!</p>
                               
                                
                            </div>
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        </div>
                       

                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-20"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="transp" />
                                
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center", marginBlock:'30px' }}
                                >BinBear's Approach to Junk Removal
</h3>    
                                
                                
                                     <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">At BinBear, we emphasize friendly service and a commitment to eco-friendly practices. Our goal is to recycle or donate as much as possible, reducing waste and helping our community. We operate with local sorting facilities, aiming to recycle 60% or more of every job!</p>
                               
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>Expect a smooth, straightforward process with the lowest rates and the highest level of service. BinBear is the #1 junk removal service in the United States and Canada.</p>      
                                
                            </div>
                        </div>
                    
                        </div>
                        </section>


                    


                               


                              












                       




                    



                     <section className="section mt-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-0"><img className="mb-1 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                               
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center",marginBlock:'30px' }}
>How It Works: Just 3 Easy Steps
</h3>    
                               
                                   <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginBottom:'20px'}}></p>
                                <ul className="list-how-works">
                                <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/payment.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">Pick a Date and Two-Hour Window</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>

                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/warehouse.png" alt="transp" style={{height:'35px'}}/></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">We Call You 15 Minutes Before Arrival</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>


                                    <li className="wow animate__animated animate__fadeIn">
                                        <div className="image-how"><span className="img"><img src="/assets/imgs/page/homepage1/cargo-ship.png" alt="transp"style={{height:'40px'}} /></span></div>
                                        <div className="info-how">
                                            <h5 className="color-black">If You Agree to Our Price, we Take Your Junk</h5>
                                            <p className="font-md color-grey-700"></p>
                                        </div>
                                    </li>
</ul>






                               <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'0px',height:'40px'}}></p>
                               
                               </div>
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                        </div>
                        



                    
                        </div>
                        </section>







                        <section className="section mt-0">
                    <div className="container">

                    <div className="row align-items-center">
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img2.png" alt="transp" /></Link></div>
                            <div className="col-lg-6 mb-20"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/pallet.png" alt="transp" />
                                
                                    
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center", marginBlock:'30px' }}
>What is Junk Removal?
</h3>    
                       
                                
                                
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Junk removal is an on-demand service for disposing of nearly any type of waste from your home or business. BinBear hauls away large items like furniture and appliances, handles full home cleanouts, provides light demolition in many areas, and clears construction debris from real estate cleanouts. Whether it's an old couch or piles of post-renovation debris, BinBear can take it (just no hazardous waste)..</p>
                               
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}>Simply make an appointment, and our team will show up on time in our recognizable trucks, ready to clear your space!</p>      
                                
                            </div>
                        </div>





</div>
                   
                        </section>


















                           
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        <div className="row align-items-center">



                        









                        <section className="section mt-70">
                        <div className="container">



                        <div className="row align-items-center">
                      
                            <div className="col-lg-6 mb-0"><img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                            <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" , marginBlock:'30px'}}
>What Makes BinBear Different 
</h3>   
                                    <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">BinBear has earned its #1 rating by offering exceptional customer service. Our team of friendly professionals is trained, uniformed, licensed, and insured, equipped with vehicles built for efficient junk removal. You'll notice the BinBear difference as our crew handles everything with care and courtesy.</p>
                               
                         <p className="font-md color-grey-700 wow animate__animated animate__fadeIn"style={{marginTop:'20px'}}></p>      
                                
                            </div>
                            <div className="col-lg-6 mb-0"><Link className="wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/page/workprocess/img1.png" alt="transp" /></Link></div>
                   
                        </div>
















                                    <div className="line-border mt-0" />



     





                          
                           </div>
                           </section>     

</div>

            
                          
               



                <section className="section" style={{ padding: "80px 0" }}>
               <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                                backgroundColor: "#FF7701",
                                color: "white",
                                padding: "18px 30px",
                                borderRadius: "10px",
                                width: "fit-content",
                                textAlign: "center",
                                margin: "0 auto 30px",
                                fontSize: "28px"
                            }}>
                                Residential Junk Removal with BinBear
                            </h2>
                        </div>   
                   
             
                   <div className="row align-items-end">
                       <div className="col-lg-8 col-md-8 mb-30">
                      
                                <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Our residential junk removal service is the ideal solution for homeowners and tenants looking to clear clutter and reclaim space. With BinBear, you'll get prompt, dependable service—no need to wait around all day.

                                    Customers love BinBear because we're fast, professional, and eco-friendly. We recycle more than our competitors, providing a green junk removal option you can feel good about.

                              </p>
                       </div>
                       
                    
                       <p style={{marginTop:'30px'}}>
                                Junk doesn't have to end up in a landfill. BinBear believes in recycling every possible material, and we donate usable items to local charities. Your unwanted furniture or electronics could make 
                       </p>
                       <p style={{marginTop:'10px'}}>a difference for someone else!</p>
                   </div>

                   <h3
    className="wow animate__animated animate__fadeIn responsive-heading"
    style={{ backgroundColor: "#FF7701", color: "white", padding: "15px", borderRadius: "5px", width: "fit-content", textAlign: "center" , marginBlock:'30px'}}
>Residential Junk Removal Services
</h3>   
                  
                   <p style={{marginTop:'20px',marginBottom:'40px'}}>BinBear handles just about any type of household junk removal, including:</p>
                   <div className="mt-20 box-background-black" >
                       <div className="bg-under"/>
                       <div className="row">
                           <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                               <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                  
                                   
                                   <div className="card-info">
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Large Item Hauling</h5>
                                       <p className="font-sm color-white-900 mb-60">Need help with big, bulky junk? BinBear has you covered.</p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>House Cleanouts</h5>
                                            <p className="font-sm color-white-900 mb-35">Moving, spring cleaning, or clearing out a space? We're here to help.

                                       </p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Property Cleanouts</h5>
                                       <p className="font-sm color-white-900 mb-35"> Ideal for landlords, real estate agents, or inherited properties. </p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Yard and Construction Debris Removal</h5>
                                       <p className="font-sm color-white-900 mb-35">From yard waste to project cleanup, we take care of it all.
                                       </p>
                                      
                                   </div>
                               </div>
                           </div>
                         
                        
                       </div>
                   </div>
               </div>
           </section>







                <section className="section" style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
               <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                            <h2 className="wow animate__animated animate__fadeIn responsive-heading" style={{
                                backgroundColor: "#FF7701",
                                color: "white",
                                padding: "18px 30px",
                                borderRadius: "10px",
                                width: "fit-content",
                                textAlign: "center",
                                margin: "0 auto",
                                fontSize: "28px"
                            }}>
                                Specialty Services
                            </h2>
                        </div>   
                   <div className="mt-20 box-background-black" >
                       <div className="bg-under"/>
                       <div className="row">
                           <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn" >
                               <div className="card-offer hover-up"style={{ 
        backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", 
        padding: "20px",
        borderRadius: "10px"
    }}>
                                  
                                   
                                   <div className="card-info">
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Air Conditioner Disposal</h5>
                                       <p className="font-sm color-white-900 mb-35">Old and heavy air conditioners? We handle removal and eco-friendly disposal.</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Appliance Removal</h5>
                                       <p className="font-sm color-white-900 mb-35">From dishwashers to trash compactors, BinBear recycles large appliances.

                                       </p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>DIY Construction Debris</h5>
                                            <p className="font-sm color-white-900 mb-35">Don't let leftover debris from your home projects clutter up your space. We'll recycle it for you.</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Yard Waste Removal</h5>
                                       <p className="font-sm color-white-900 mb-35"> Let us handle branches, clippings, and other yard waste from landscaping projects.</p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>E-Waste Recycling</h5>
                                       <p className="font-sm color-white-900 mb-35">We ensure your electronics, like computers and TVs, are responsibly recycled or donated.</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Estate Cleanouts</h5>
                                       <p className="font-sm color-white-900 mb-35"> Our team respectfully clears estates, making a difficult process easier..</p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Refrigerator and Freezer Disposal</h5>
                                       <p className="font-sm color-white-900 mb-35">Save space and recycle responsibly with our appliance disposal service..</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Foreclosure Cleanouts</h5>
                                       <p className="font-sm color-white-900 mb-60">Property professionals rely on BinBear for fast, efficient cleanouts of foreclosed homes.</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Furniture Removal</h5>
                                       <p className="font-sm color-white-900 mb-60"> Whether broken or unwanted, we handle the removal of all types of furniture..</p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Hot Tub Removal</h5>
                                       <p className="font-sm color-white-900 mb-60">Dismantling and removing old hot tubs is no problem for our trained team.</p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Scrap Metal Recycling</h5>
                                            <p className="font-sm color-white-900 mb-60">Don't send metal to the landfill. BinBear ensures scrap metals are recycled properly.
                                       </p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Stove, Oven, and Microwave Disposal</h5>
                                       <p className="font-sm color-white-900 mb-35">We handle all your old kitchen appliances, recycling them responsibly.
                                       </p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>TV Disposal</h5>
                                       <p className="font-sm color-white-900 mb-60"> Televisions contain harmful materials, but we ensure safe disposal.
                                       </p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Washing Machine and Dryer Disposal</h5>
                                       <p className="font-sm color-white-900 mb-60"> Out with the old, and in with the new! Let us handle your appliance disposal.
                                       </p>
                                       
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Water Heater Disposal</h5>
                                       <p className="font-sm color-white-900 mb-60"> Got an old water heater? BinBear handles removal and recycling.
                                       </p>
                                      
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
                                       <h5 className="color- mb-15"style={{color:'#FF7701'}}>Yard Waste Disposal</h5>
                                            <p className="font-sm color-white-900 mb-60">Created a pile of yard debris? We'll haul it away so you don't have to.
                                       </p>
                                       
                                   </div>
                               </div>
                           </div>

                       </div>
                   </div>
               </div>
           </section>













               
                <section className="section" style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-50">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                                        <div className="feature-card text-center wow animate__animated animate__fadeIn">
                                            <div className="card-image mb-20">
                                                <svg style={{ height: '80px', width: '80px', margin: '0 auto' }} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
                                                    <path d="m45.312 71.969-6.5859 11.41c-0.42969 0.74609-1.3867 1.0039-2.1328 0.57031l-3.9805-2.3008c5.7344-3.4062 9.5781-9.6602 9.5781-16.805 0-10.781-8.75-19.531-19.531-19.531-2.875 0-5.6055 0.62109-8.0625 1.7383l18.82-32.598c0.24609-0.42969 0.68359-0.71484 1.1758-0.76953l12.285-1.3945v7.4414c-1.418 0.98828-2.3438 2.6289-2.3438 4.4883 0 3.0195 2.4492 5.4688 5.4688 5.4688 3.0195 0 5.4688-2.4492 5.4688-5.4688 0-1.8555-0.92578-3.5-2.3438-4.4883v-8.1484l3.668-0.41406c0.68359-0.078125 1.3359 0.30078 1.6094 0.92969l8.9219 20.488c0.19922 0.45312 0.16797 0.97656-0.078125 1.4062l-8.5664 14.84c-7.9805 4.5859-13.363 13.195-13.363 23.051v0.09375zm-12.773-36.594 17.023 9.8281c0.74609 0.42969 1.7031 0.17578 2.1328-0.57031 0.42969-0.74609 0.17578-1.7031-0.57031-2.1328l-17.023-9.8281c-0.74609-0.42969-1.7031-0.17578-2.1328 0.57031-0.42969 0.74609-0.17578 1.7031 0.57031 2.1328zm-3.125 5.4141 17.023 9.8281c0.74609 0.42969 1.7031 0.17578 2.1328-0.57031 0.42969-0.74609 0.17578-1.7031-0.57031-2.1328l-17.023-9.8281c-0.74609-0.42969-1.7031-0.17578-2.1328 0.57031-0.42969 0.74609-0.17578 1.7031 0.57031 2.1328zm32.992 6.2656 6.8672-11.898c0.10156-0.17578 0.1875-0.35547 0.26172-0.54297v10.801c-2.4883 0.21875-4.8828 0.78125-7.1289 1.6406zm-14.738 35.758h-5.9062l3.8867-6.7305c0.375 2.3633 1.0625 4.6211 2.0195 6.7305zm3.8984-59.375c0 0.86328-0.69922 1.5625-1.5625 1.5625-0.86328 0-1.5625-0.69922-1.5625-1.5625v-17.188c0-0.86328 0.69922-1.5625 1.5625-1.5625 0.86328 0 1.5625 0.69922 1.5625 1.5625zm12.605-3.9727 4.7305 3.4961c0.39844 0.29297 0.63281 0.76172 0.63281 1.2578v7.5742c-0.019531-0.050781-0.039062-0.10156-0.0625-0.14844l-5.3047-12.18zm-41.512 27.41c9.918 0 17.969 8.0508 17.969 17.969s-8.0508 17.969-17.969 17.969c-9.918 0-17.969-8.0508-17.969-17.969s8.0508-17.969 17.969-17.969zm0 4.6875c-7.332 0-13.281 5.9492-13.281 13.281s5.9492 13.281 13.281 13.281c7.332 0 13.281-5.9492 13.281-13.281s-5.9492-13.281-13.281-13.281zm0 3.125c5.6055 0 10.156 4.5508 10.156 10.156s-4.5508 10.156-10.156 10.156c-5.6055 0-10.156-4.5508-10.156-10.156s4.5508-10.156 10.156-10.156zm-1.5625 11.719v2.3438h-2.3438c-0.86328 0-1.5625 0.69922-1.5625 1.5625s0.69922 1.5625 1.5625 1.5625h2.3438v0.78125c0 0.86328 0.69922 1.5625 1.5625 1.5625 0.86328 0 1.5625-0.69922 1.5625-1.5625v-0.78125h0.78125c0.82812 0 1.625-0.32812 2.2109-0.91406 0.58594-0.58594 0.91406-1.3789 0.91406-2.2109v-2.3438c0-0.82812-0.32812-1.625-0.91406-2.2109-0.58594-0.58594-1.3789-0.91406-2.2109-0.91406h-0.78125v-2.3438h2.3438c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625h-2.3438v-0.78125c0-0.86328-0.69922-1.5625-1.5625-1.5625-0.86328 0-1.5625 0.69922-1.5625 1.5625v0.78125h-0.78125c-0.82812 0-1.625 0.32812-2.2109 0.91406-0.58594 0.58594-0.91406 1.3789-0.91406 2.2109v2.3438c0 0.82812 0.32812 1.625 0.91406 2.2109 0.58594 0.58594 1.3789 0.91406 2.2109 0.91406zm3.125 2.3438v-2.3438h0.78125v2.3438zm-3.125-7.8125v2.3438h-0.78125v-2.3438z" fill="#FF7701" />
                                                </svg>
                                            </div>
                                            <div className="card-info">
                                                <h5 className="color-black mb-15" style={{ fontSize: '20px', fontWeight: 'bold' }}>Fair and Transparent Pricing</h5>
                                                <p className="font-sm color-grey-700" style={{ lineHeight: '1.6' }}>BinBear offers clear pricing with no hidden fees, ensuring you know exactly what to expect.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-12 col-md-6 mb-30">
                                        <div className="feature-card text-center wow animate__animated animate__fadeIn">
                                            <div className="card-image mb-20">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" style={{ height: '80px', width: '80px', margin: '0 auto' }}>
                                                    <path d="m56.828 13.879c-2.7617-2.7617-6.9141-3.5898-10.527-2.0938-3.6094 1.4961-5.9609 5.0156-5.9609 8.9258 0 3.9062 2.3516 7.4297 5.9609 8.9258 3.6133 1.4922 7.7656 0.66797 10.527-2.0977 3.7734-3.7695 3.7734-9.8867 0-13.66zm26.941-4.3008c-1.7773-1.7773-4.4531-2.3086-6.7773-1.3438-2.3242 0.96094-3.8398 3.2305-3.8398 5.7461s1.5156 4.7812 3.8398 5.7461c2.3242 0.96094 5 0.42969 6.7773-1.3477 1.168-1.1641 1.8242-2.75 1.8242-4.3984 0-1.6523-0.65625-3.2344-1.8242-4.4023zm0.32031 31v-5.2773c0-1.1055 0.89453-2 2-2 1.1055 0 2 0.89453 2 2v5.2891c6-0.28125 7.1094-7 5.4102-11.648-1.1016-3-3.4414-5.5391-6.8594-5.8906-4.3828 3.1328-10.27 3.1328-14.652 0-1.707 0.16797-3.3008 0.92188-4.5195 2.1289-1.168 1.2266-2.0156 2.7266-2.4688 4.3594 4.8906 1.8984 8.2383 6.1797 9.8594 11.051zm-59-31c-1.7773-1.7773-4.4531-2.3086-6.7773-1.3438-2.3242 0.96094-3.8398 3.2305-3.8398 5.7461s1.5156 4.7812 3.8398 5.7461c2.3242 0.96094 5 0.42969 6.7773-1.3477 1.168-1.1641 1.8242-2.75 1.8242-4.3984 0-1.6523-0.65625-3.2344-1.8242-4.4023zm-13.211 25.723c0-1.1055 0.89844-2 2-2 1.1055 0 2 0.89453 2 2v5.2891h9.2188c1.6211-4.8711 5-9.1602 9.8711-11.051-0.47656-1.6367-1.3477-3.1367-2.5391-4.3594-1.1914-1.1914-2.7539-1.9453-4.4297-2.1289-2.1367 1.5273-4.6953 2.3477-7.3203 2.3477-2.6289-0.003907-5.1914-0.82031-7.3398-2.3398-3.4102 0.33984-5.75 2.8398-6.8398 5.8594-1.6992 4.6914-0.55859 11.391 5.4219 11.672v-5.2891zm59 18.059c-1.3945 3.4648-4.7539 5.7383-8.4883 5.7422v-8.7227c0-1.1016-0.89453-2-2-2s-2 0.89844-2 2v8.7227h-16.672v-8.7227c0-1.1016-0.89453-2-2-2-1.1016 0-2 0.89844-2 2v8.7227c-3.9922-0.011718-7.5234-2.5859-8.7578-6.3828-1.2266-3.6719-1.1562-7.6523 0.19922-11.277 1.6914-4.6602 5.3516-8.5 10.73-8.8906 2.9297 2.1797 6.4883 3.3555 10.141 3.3555s7.207-1.1758 10.141-3.3555c0.67188 0.046875 1.3438 0.15234 2 0.32031 4.3398 1.1211 7.2812 4.4805 8.7695 8.6016v-0.003906c0.66016 1.8594 1.0195 3.8086 1.0586 5.7812 0.050781 1.8672-0.24219 3.7305-0.87109 5.4883zm-4.8789 9.25c-0.46875 5.3867-3.6133 10.18-8.375 12.746-4.7578 2.5703-10.492 2.5703-15.25 0-4.7617-2.5664-7.9062-7.3594-8.375-12.746-3.4727-0.94531-6.3828-3.3242-8-6.5391h-5.3711c-0.21875 0.058594-1.7383 0.87891-1.7383 0.87891v8.3008s1.5195 0.82812 1.7383 0.87891h3.8828c0.90234-0.003906 1.6992 0.59766 1.9375 1.4727 0.27734 0.96094 0.61328 1.9062 1 2.8281 0.35156 0.88281 0.75391 1.7383 1.2109 2.5703 0.54297 0.79688 0.4375 1.8711-0.25 2.5508l-2.7305 2.7617c-0.12891 0.21875-0.62109 1.8516-0.62109 1.8516 2 1.9414 3.9414 3.9102 5.8789 5.8789 0 0 1.6289-0.48828 1.8516-0.62109 0.21875-0.12891 2.4102-2.3789 2.7617-2.7305 0.65234-0.64844 1.6641-0.76953 2.4492-0.29297 0.86719 0.49219 1.7617 0.92969 2.6797 1.3125 0.875 0.35937 1.7695 0.67187 2.6797 0.92969 0.95703 0.17969 1.6484 1.0234 1.6289 2v3.8789c0.058594 0.21875 0.87891 1.7383 0.87891 1.7383h8.3008c0.21875 0.058594 0.87891-0.16406 0.87891-0.87891v-3.8789c0-1.1055-0.89453-2-2-2z" fill="#FF7701" />
                                                </svg>
                                            </div>
                                            <div className="card-info">
                                                <h5 className="color-black mb-15" style={{ fontSize: '20px', fontWeight: 'bold' }}>Eco-Friendly Practices</h5>
                                                <p className="font-sm color-grey-700" style={{ lineHeight: '1.6' }}>We're committed to green practices, recycling materials whenever possible to minimize landfill waste.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="content-container" style={{ padding: '40px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                                    <span className="btn btn-tag wow animate__animated animate__fadeIn" style={{
                                        backgroundColor: '#FF7701',
                                        color: 'white',
                                        padding: '8px 20px',
                                        borderRadius: '25px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        marginBottom: '20px',
                                        display: 'inline-block'
                                    }}>Our Features</span>

                                    <h2 className="wow animate__animated animate__fadeIn" style={{
                                        fontSize: '36px',
                                        fontWeight: 'bold',
                                        color: '#333',
                                        marginBottom: '25px',
                                        lineHeight: '1.2'
                                    }}>Why Choose BinBear?</h2>

                                    <p className="font-md color-grey-700" style={{
                                        fontSize: '18px',
                                        lineHeight: '1.8',
                                        marginBottom: '35px',
                                        color: '#666'
                                    }}>
                                        With BinBear, you get more than just junk removal—you get a reliable, green-focused service that cares about your community and the environment. Whether it's a one-time cleanout or an ongoing partnership, BinBear is here to make junk removal easy, affordable, and eco-friendly.
                                    </p>

                                    <div className="benefits-list" style={{ marginBottom: '35px' }}>
                                        <div className="benefit-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: '#FF7701', borderRadius: '50%', marginRight: '15px' }}></div>
                                            <span style={{ fontSize: '16px', color: '#666' }}>Same-day service available</span>
                                        </div>
                                        <div className="benefit-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: '#FF7701', borderRadius: '50%', marginRight: '15px' }}></div>
                                            <span style={{ fontSize: '16px', color: '#666' }}>Licensed and insured professionals</span>
                                        </div>
                                        <div className="benefit-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                            <div style={{ width: '8px', height: '8px', backgroundColor: '#FF7701', borderRadius: '50%', marginRight: '15px' }}></div>
                                            <span style={{ fontSize: '16px', color: '#666' }}>Eco-friendly disposal methods</span>
                                        </div>
                                    </div>

                                    <div className="action-buttons" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                        <Link className="btn btn-brand-2 wow animate__animated animate__fadeIn"
                                            href="Booking"
                                            style={{
                                                backgroundColor: '#FF7701',
                                                color: 'white',
                                                padding: '15px 30px',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                transition: 'all 0.3s ease',
                                                border: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center'
                                            }}>
                                            Get Free Estimate
                                        </Link>
                                        <Link className="btn btn-link-medium wow animate__animated animate__fadeIn"
                                            href="#"
                                            style={{
                                                color: 'white',
                                                padding: '15px 20px',
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px'
                                            }}>
                                            Learn More
                                            <svg className="icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px' }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                





                <section className="section" style={{
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
                                <p className="font-3xl color-white mb-15 wow animate__animated animate__fadeIn" style={{
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    lineHeight: "1.2"
                                }}>
                                    When you think Junk, think BinBear!
                                </p>
                                <h3 className="color-brand wow animate__animated animate__fadeIn" style={{
                                    color: '#FF7701',
                                    fontSize: "24px",
                                    fontWeight: "bold"
                                }}>
                                    With a few quick clicks, your waste is our command!
                                </h3>
                            </div>
                            <div className="get-quote-right">
                                <Link className="btn btn-get-quote wow animate__animated animate__fadeIn"
                                    href="/register"
                                    style={{
                                        backgroundColor: '#FF7701',
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
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
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




                    
    