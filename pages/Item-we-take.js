import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function ServiceDetail() {
    return (
        <Layout>
            <div className="page-wrapper">
                <section className="section-hero">
                    <div className="container">
                        <div className="text-center hero-content">
                            <span className="btn btn-tag wow animate__animated animate__fadeIn" 
                                  style={{
                                      backgroundColor: '#FF7F00',
                                      color: 'black',
                                      marginBottom: '1rem'
                                  }}>
                                Our Services
                            </span>
                            <h2 className="wow animate__animated animate__fadeIn responsive-heading">
                                Items We Take
                            </h2>
                            <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                                At BinBear, we can handle just about ANYTHING and EVERYTHING—except hazardous waste
                                <br className="d-none d-lg-block" />
                                Here are examples of the types of junk we haul away:
                            </p>

                            <div className="image-grid mt-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="image-container wow animate__animated animate__fadeIn">
                                            <img src="/assets/imgs/page/service-detail/img4.png" 
                                                 alt="transp" 
                                                 className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="image-container wow animate__animated animate__fadeIn">
                                            <img src="/assets/imgs/page/service-detail/img4.png" 
                                                 alt="transp" 
                                                 className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-cards py-5">
                    <div className="container">
                        <div className="card-grid">
                            {[
                                { title: "1. Furniture Removal" },
                                { title: "2. TV Disposal & Recycling" },
                                { title: "3. Yard Waste Removal" },
                                { title: "4. Foreclosure Cleanouts" },
                                { title: "5. Tire Disposal" },
                                { title: "6. Appliance Removal" },
                                { title: "7. Hot Tub Disposal" },
                                { title: "8. E-Waste Disposal" },
                                { title: "9. Trash Removal" },
                                { title: "10. Mattress Disposal" },
                                { title: "11. Refrigerator Disposal & Recycling" },
                                { title: "12. Construction Waste Removal" },
                                { title: "13. Garbage Removal" },
                                { title: "14. Shed Removal" },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="card-item wow animate__animated animate__fadeIn"
                                >
                                    <div
                                        className="card-offer hover-up"
                                        style={{ 
                                            backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            color: "white", 
                                            padding: "20px",
                                            borderRadius: "10px"
                                        }}
                                    >
                                        <div className="card-info">
                                            <h5
                                                className="color- mb-15"
                                                style={{ color: "white" }}
                                            >
                                                {service.title}
                                            </h5>
                                            <p className="font-sm color-grey-900 mb-50"></p>
                                            <div className="box-button-offer mb-40" style={{ marginTop: "53px" }}>
                                                <a className="btn btn-link font-sm color-brand-2">
                                                    <button className="gradient-button">View Details</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section mt-50">
                    <div className="container">
                        <h2 className="wow animate__animated animate__fadeIn responsive-heading">
                            Enjoy a Clutter-Free Life with BinBear Junk Removal!
                        </h2>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn" style={{ marginLeft: "10px" }}>
                            Is clutter piling up in your home? Want to reclaim your space? Searching for a reliable junk removal service you can trust? You're not alone! Many homeowners struggle with these same challenges, and BinBear is here to help.
                        </p>
                        <p className="wow animate__animated animate__fadeIn">
                            <img 
                                src="/assets/imgs/page/service-detail/img3.png" 
                                alt="transp" 
                                style={{
                                    margin: '20px auto', // Center horizontally for all screens
                                    display: 'block',    // Ensures centering works
                                    maxWidth: '100%',    // Image won't exceed the container width
                                    height: 'auto'       // Maintains aspect ratio
                                }}
                            />
                        </p>
                        <h5 className="wow animate__animated animate__fadeIn responsive-headingg">
                            We Haul It All
                        </h5>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Furniture Removal, Disposal, Recycling, or Donation
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Examples: Couches, sofas, beds, chairs, tables, desks, and more.
                            - Need to get rid of old furniture that’s too bulky to handle on your own? BinBear can take care of it, ensuring items are disposed of responsibly, whether through recycling or donation to local charities.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            TV Disposal & Recycling
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Old televisions and monitors piling up? We’ll handle it all, from CRTs to flat screens, recycling or disposing of them responsibly.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Yard Waste Removal
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            - Got yard debris like branches, clippings, or stumps? We take care of waste from landscaping projects, including old fencing, firewood, and lumber.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Clean Out Services (Foreclosure, Estate, Home, Garage Cleanouts)
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Moving out, managing an estate, or dealing with property cleanouts? We handle it all efficiently and courteously.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Appliance Removal
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Examples: Air conditioners, dishwashers, fridges, washing machines, stoves, water heaters, and more. Don’t worry about the heavy lifting—BinBear has it covered.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Hot Tub Disposal
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Dismantling and removing hot tubs is hard work, but we’ll break it down and haul it away for you.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            E-Waste Disposal, Removal, or Recycling
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Computers, printers, shredders, and more. We ensure electronic waste is handled in an eco-friendly manner.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Mattress Disposal, Removal, Donation, or Recycling
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Old mattresses gathering dust? Let BinBear remove and responsibly recycle or donate them.
                        </p>
                        <h5 style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Trash Removal
                        </h5>
                        <p className="font-md color-grey-900 wow animate__animated animate__fadeIn">
                            Whether you need a one-time trash removal or ongoing cleanup, BinBear provides fast, friendly service with a focus on recycling wherever possible.
                        </p>
                    </div>
                </section>

                <section className="section mt-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60">
                                <img className="mb-15 wow animate__animated animate__fadeIn" src="/assets/imgs/page/workprocess/parachute.png" alt="transp" />
                                <h3 className="wow animate__animated animate__fadeIn responsive-headingss">
                                    What BinBear Can’t Take
                                </h3>
                                <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginBottom: '20px' }}>
                                    While we handle almost anything, we do not collect hazardous waste, including:
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Paints and solvents</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Pesticides and fertilizers</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Chemical cleaners</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Lead-acid and lithium-ion batteries</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Flammable liquids</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Ammunition and explosives</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Medical waste</h6>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="font-md-bold color-grey-700 wow animate__animated animate__fadeIn">Materials containing asbestos or mercury</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-60">
                                <Link className="wow animate__animated animate__fadeIn" href="#">
                                    <img src="/assets/imgs/page/service-detail/img4.png" alt="transp" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="line-border" />
                <section className="section pb-5 pt-50 mb-80">
                    <div className="container">
                        <div className="text-center">
                            <img className="mb-15 wow animate__animated animate__fadeIn" src="/img/bear.png.png" style={{ height: '60px' }} alt="transp" />
                            <h3 className="wow animate__animated animate__fadeIn responsive-heading">
                                How Our Service Works
                            </h3>
                            <p className="font-md color-grey-700 mb-30 wow animate__animated animate__fadeIn" style={{ marginTop: '30px' }}>
                                Let me know if there’s anything specific you’d like to add or change!
                                <br className="d-none d-lg-block" />
                                <br className="d-none d-lg-block" />
                            </p>
                        </div>
                        <div className="container">
                            <div className="box-swiper">
                                <div className="mt-20 box-background-black">
                                    <div className="bg-under" />
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Book Your Appointment</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        Get a price, use our proprietary junk cost calculator to determine your services Charge.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Pickup your Schedule</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        Choose a date and time that best suite your availablility and reliability for junk pickup.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Leave the Heavy Lifting to Us</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        Just point out what you want gone, and we’ll handle the rest, from lifting to loading.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Eco-Friendly Disposal</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        BinBear is committed to green practices. We sort through items to recycle or donate wherever possible, ensuring minimal landfill impact.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Enjoy Your Clutter-Free Space</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        With BinBear, reclaim your space without the hassle. You’ll feel good knowing your items were disposed of responsibly.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                            <div className="card-offer hover-up" style={{ 
                                                backgroundImage: "url('/assets/imgs/page/workprocess/background.png')", 
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                color: "white", 
                                                padding: "20px",
                                                borderRadius: "10px"
                                            }}>
                                                <div className="card-info">
                                                    <h5 className="color- mb-15" style={{ color: 'white' }}>Full-Service Junk Removal</h5>
                                                    <p className="font-sm color-900 mb-30">
                                                        Our team will arrive on time in our big Black trucks. We’ll confirm your estimate and take care of your junk on the spot.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section pt-70 pb-70 bg-" style={{ backgroundColor: 'black', marginBottom: '50px' }}>
                    <div className="container">
                        <div className="box-get-quote">
                            <div className="get-quote-left">
                                <p className="font-3xl color-white mb-10 wow animate__animated animate__fadeIn">
                                    When you think Junk, think BinBear!
                                </p>
                                <h3 className="color-brand- wow animate__animated animate__fadeIn" style={{ color: '#FF7F00' }}>
                                    With a few quick clicks, your waste is our commands!
                                </h3>
                            </div>
                            <div className="get-quote-right">
                                <Link className="btn btn-get-quote wow animate__animated animate__fadeIn" href="/register" style={{ backgroundColor: '#FF7F00', textAlign: 'center', display: 'block', padding: '10px' }}>
                                    <svg className="mr-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                        </path>
                                    </svg>
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>{`
                    .page-wrapper {
                        padding-top: 2rem;
                    }

                    .section-hero {
                        padding: 3rem 0;
                    }

                    .hero-content {
                        max-width: 800px;
                        margin: 0 auto 3rem;
                    }

                    .image-grid {
                        margin-bottom: 4rem;
                    }

                    .card-grid {
                        margin-right: 60px;
                        margin-left: 60px;
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                    }

                    @media (max-width: 1024px) {
                        .card-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (max-width: 768px) {
                        .card-grid {
                            width: 330px;
                            margin-left: 20px;
                            grid-template-columns: repeat(1, 1fr);
                        }

                        .section-hero {
                            padding: 2rem 0;
                        }
                    }

                    .responsive-heading {
                        background-color: #FF7F00;
                        color: white;
                        padding: 15px;
                        border-radius: 5px;
                        width: fit-content;
                        margin: 40px auto;
                        text-align: center;
                        font-size: 2rem;
                    }

                    @media (max-width: 576px) {
                        .responsive-heading {
                            font-size: 1.5rem;
                            width: 90%;
                            margin: 1rem auto;
                        }
                    }

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
                `}</style>
            </div>
        </Layout>
    );
}