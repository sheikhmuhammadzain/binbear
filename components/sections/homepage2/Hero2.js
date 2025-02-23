import Hero2Slider from "@/components/slider/Hero2Slider";
import Link from "next/link";

export default function Hero2() {
    return (
        <>
            <section className="section d-block">
                <div className="box-banner-homepage2">
                    <div className="container"style={{height:'400px'}}>
                    <div className="row">
                            <div className="col-lg-7"><span className="font-md-bold color- wow animate__animated animate__fadeIn">Full
                                Sustainable Cargo Solutions</span>
                                <h1 className="color- mb-25 mt-15 wow animate__animated animate__fadeIn"style={{color:'black'}}>Item We Take 
                                    </h1>
                                <p className="font-md color- mb-20 wow animate__animated animate__fadeIn"style={{color:'black'}}>Representative
                                    logistics operator providing full range of service in the sphere of<br className="d-none d-lg-block" />customs clearance and transportation worldwide.</p>
                                <div className="mt-45 text-start"><Link className="hover-up mr-10 wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/playbutton.png"style={{height:'50px',}} alt="" /></Link><Link className="hover-up wow animate__animated animate__fadeIn" href="#"><img src="/assets/imgs/template/google.png" style={{height:'50px'}}alt="transp" /></Link></div>
                            </div>
                        </div>
                    



                       


















                    </div>
                    <div className="bg-image-home2" />
                
                        </div>
            </section>
        </>

    )
}
