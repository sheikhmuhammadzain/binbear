import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from 'next/head'

export default function EstimatePrice() {
    return (
            <Layout>
            <Head>
                <title>BinBear Pricing Estimator</title>
                <meta name="description" content="Get a fast and simple estimate for your junk removal job with BinBear's online pricing estimator." />
            </Head>

            <section className="section d-block">
                    <div className="container position-relative">
                    <div className="banner-trackyourparcel" style={{
                        backgroundImage: "url('/assets/imgs/page/blog-single/rental.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
                        height: "100%",
                        opacity: '.6'
                    }} />
                    <div className="box-info-trackyourparcel">
                        <h2 className="color-black mb-25 wow animate__animated animate__fadeIn">Pricing Estimator</h2>
                        <p className="color-grey-900 font-md wow animate__animated animate__fadeIn">Get a transparent and fair estimate for your junk removal needs.</p>
                            <div className="form-trackparcel mb-0">
                            <form action="#">
    <div className="form-group">
                                    <div style={{
                display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "15px",
                marginTop: "20px",
                                        width: "100%",
                                    }}>
                                        <Link href="/Booking" legacyBehavior>
                                            <a style={{
                    backgroundColor: "#FF7F00",
                    color: "black",
                    border: "none",
                    padding: "15px 20px",
                                                textDecoration: "none",
                    textAlign: "center",
                                                width: "90%",
                                                maxWidth: "250px",
                                            }}>
                Book Now
            </a>
                                        </Link>
        </div>
    </div>
</form>
                        </div>
                    </div>
</div>
       </section>    

       <section className="section mt-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-60">
                            <h3 className="color-black mb-15 wow animate__animated animate__fadeIn" style={{ marginBottom: '30px' }}>Get an Estimate Now With Our Online Pricing Estimator!</h3>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginBottom: '20px' }}>Our convenient and easy-to-use online pricing estimator makes getting an estimate for your junk removal job fast and simple.</p>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginTop: '20px' }}>No one likes to hire a vendor without an accurate understanding of the cost. That's why our goal with the pricing estimator is to give you a solid idea of what your job is likely to cost.</p>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginTop: '20px' }}>Our estimated pricing is based on the average size of typical household items and current pricing in your local market. Keep in mind that the actual size of items may vary, which can affect your final price. The final price will be determined on-site by our trained and courteous staff.</p>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginTop: '20px' }}>Our pricing estimator also allows you to get an estimate based on how much space you think your junk will take up in our large junk removal truck.</p>
                            <p className="font-md color-grey-700 wow animate__animated animate__fadeIn" style={{ marginTop: '20px' }}>Either way, you can get an accurate and affordable estimate in minutes.</p>
                                        </div>
                                        <div className="col-lg-6 mb-0">
                            <div className="wow animate__animated animate__fadeIn">
                                <img className="mb-15 wow animate__animated animate__fadeIn" style={{ width: '1000px' }} src="/assets/imgs/page/blog-single/rental.png" alt="transp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
    )
}