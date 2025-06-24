import Layout from "@/components/layout/Layout"
import Newsletter1 from "@/components/sections/homepage2/Newsletter1"

export default function pricing() {
    return (
        <>
<Layout>
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1 className="hero-title">Transparent Pricing Estimator</h1>
                                <p className="hero-subtitle">Get instant, accurate estimates for your junk removal needs with our advanced pricing calculator</p>
                                <div className="hero-cta">
                                    <a href="/booking" className="btn-primary-large">
                                        <span>Get Free Estimate</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
        </div>
    </div>
                            <div className="hero-image">
                                <img src="/assets/imgs/page/blog-single/rental.png" alt="BinBear Pricing" />
                            </div>
                        </div>
                    </div>
       </section>    
              
                {/* Main Content */}
                <section className="main-content">
                    <div className="container">
                        {/* Pricing Estimator Section */}
                        <div className="section-card pricing-estimator">
                        <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <div className="section-badge">Online Estimator</div>
                                        <h2 className="section-title">Get an Estimate Now With our Online Pricing Estimator!</h2>
                                        <p className="section-text">At BinBear, we know that transparency is essential. Our easy-to-use online pricing estimator gives you a fast, reliable estimate for your junk removal needs, so you can make informed decisions without any surprises.</p>
                                        <div className="feature-list">
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span>Instant accurate estimates</span>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span>No hidden fees or surprises</span>
                                            </div>
                                            <div className="feature-item">
                                                <div className="feature-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <span>Fast and reliable pricing</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src="/assets/imgs/page/blog-single/bagi.png" alt="Pricing Estimator" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* How to Use Section */}
                        <div className="section-card how-to-use">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src="/assets/imgs/page/workprocess/img2.png" alt="How to Use" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <div className="section-badge">Simple Process</div>
                                        <h2 className="section-title">How to Use BinBear's Pricing Estimator</h2>
                                        <div className="steps-list">
                                            <div className="step-item">
                                                <div className="step-number">1</div>
                                                <div className="step-content">
                                                    <h4>Launch Estimator</h4>
                                                    <p>Click the "Get Free Estimate" button to start</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">2</div>
                                                <div className="step-content">
                                                    <h4>Enter Location</h4>
                                                    <p>Enter your zip code and follow the prompts</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">3</div>
                                                <div className="step-content">
                                                    <h4>Choose Method</h4>
                                                    <p>Select items individually or estimate by truck load</p>
                                                </div>
                                            </div>
                                            <div className="step-item">
                                                <div className="step-number">4</div>
                                                <div className="step-content">
                                                    <h4>Get Estimate</h4>
                                                    <p>Receive instant pricing and book your service</p>
                                                </div>
                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fair Pricing Section */}
                        <div className="section-card fair-pricing">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="content-block">
                                        <div className="section-badge">Our Promise</div>
                                        <h2 className="section-title">BinBear Believes in Fair and Transparent Pricing</h2>
                                        <p className="section-text">At BinBear, we promise to beat any written estimate from a comparable junk removal service. With free estimates and no hidden fees, we're committed to offering the best value in the industry.</p>

                                        <div className="benefits-grid">
                                            <div className="benefit-item">
                                                <div className="benefit-icon">
                                                    <img src="/assets/imgs/page/homepage1/payment.png" alt="Upfront Pricing" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Upfront Pricing</h4>
                                                    <p>No surprises—just a fair, competitive rate</p>
                                                </div>
                                            </div>
                                            <div className="benefit-item">
                                                <div className="benefit-icon">
                                                    <img src="/assets/imgs/page/homepage1/payment.png" alt="On-Time Service" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>On-Time Service</h4>
                                                    <p>Our team arrives on schedule with big, green trucks ready to handle your junk removal</p>
                                                </div>
                                            </div>
                                            <div className="benefit-item">
                                                <div className="benefit-icon">
                                                    <img src="/assets/imgs/page/homepage1/warehouse.png" alt="Eco-Friendly" />
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>Eco-Friendly Disposal</h4>
                                                    <p>BinBear sorts and recycles up to 60% of the items we collect, reducing landfill waste</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <img src="/assets/imgs/page/workprocess/parachute.png" alt="Fair Pricing" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Estimate Options Section */}
                        <div className="section-card estimate-options">
                            <div className="text-center mb-5">
                                <div className="section-badge mx-auto">Multiple Options</div>
                                <h2 className="section-title">Four Ways to Get Your Estimate</h2>
                                <p className="section-text">We make it easy to get a free estimate with four convenient options</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6">
                                    <div className="option-card">
                                        <div className="option-number">1</div>
                                        <h4>Online Pricing Estimator</h4>
                                        <p>Estimate your cost quickly with our online tool</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="option-card">
                                        <div className="option-number">2</div>
                                        <h4>On-Site Pricing</h4>
                                        <p>For the most accurate estimate, we offer free on-site evaluations</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="option-card">
                                        <div className="option-number">3</div>
                                        <h4>Text Us a Photo</h4>
                                        <p>Send photos of your junk to 214-901-4769, and we'll reply with an estimate</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="option-card">
                                        <div className="option-number">4</div>
                                        <h4>Call or Live Chat</h4>
                                        <p>Talk to our trained staff for a price estimate—perfect for smaller jobs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <p className="highlight-text">No matter which option you choose, our final, no-obligation price is always confirmed on site by our technicians.</p>
                            </div>
                        </div>

                        {/* Why Choose BinBear Section */}
                        <div className="section-card why-choose">
                            <div className="text-center mb-5">
                                <img src="/img/bear.png.png" alt="BinBear" className="brand-logo" />
                                <div className="section-badge mx-auto">Premium Service</div>
                                <h2 className="section-title">Why Choose BinBear?</h2>
                                <p className="section-text">When you book with BinBear, you're choosing convenience, professionalism, and eco-conscious service</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-card">
                                        <div className="service-content">
                                            <h4>Customer Care</h4>
                                            <p>We call 15-30 minutes before arrival to respect your time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-card">
                                        <div className="service-content">
                                            <h4>Experienced Staff</h4>
                                            <p>Our team is highly trained, insured, and paid fair rates</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-card">
                                        <div className="service-content">
                                            <h4>Green Initiatives</h4>
                                            <p>BinBear recycles up to 60% of the items we collect, sorting and donating wherever possible</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <p className="closing-text">At BinBear, we're not just removing junk; we're building a more sustainable community. Choose us for a reliable, environmentally friendly service you can feel good about.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Newsletter1 />

                <style jsx>{`
                    /* Hero Section */
                    .hero-section {
                        background: linear-gradient(135deg, #FF7701 0%, #FF9A33 100%);
                        padding: 120px 0 80px;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .hero-section::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><polygon points="36,34 6,34 6,6 36,6"/></g></g></svg>');
                        opacity: 0.3;
                    }
                    
                    .hero-content {
                        display: flex;
                        align-items: center;
                        min-height: 500px;
                        position: relative;
                        z-index: 2;
                    }
                    
                    .hero-text {
                        flex: 1;
                        padding-right: 40px;
                    }
                    
                    .hero-title {
                        font-size: 3.5rem;
                        font-weight: 800;
                        color: white;
                        margin-bottom: 24px;
                        line-height: 1.2;
                        letter-spacing: -0.02em;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.25rem;
                        color: rgba(255, 255, 255, 0.9);
                        margin-bottom: 40px;
                        line-height: 1.6;
                        max-width: 500px;
                    }
                    
                    .hero-cta {
                        margin-top: 40px;
                    }
                    
                    .btn-primary-large {
                        display: inline-flex;
                        align-items: center;
                        gap: 12px;
                        background: white;
                        color: #FF7701;
                        padding: 18px 32px;
                        border-radius: 50px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 1.1rem;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                        transition: all 0.3s ease;
                        border: 3px solid transparent;
                    }
                    
                    .btn-primary-large:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
                        background: #FF7701;
                        color: white;
                        border-color: white;
                    }
                    
                    .hero-image {
                        flex: 1;
                        text-align: center;
                    }
                    
                    .hero-image img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                    }
                    
                    /* Main Content */
                    .main-content {
                        padding: 100px 0;
                        background: #f8fafc;
                    }
                    
                    .section-card {
                        background: white;
                        border-radius: 24px;
                        padding: 80px 60px;
                        margin-bottom: 60px;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                        border: 1px solid rgba(0, 0, 0, 0.05);
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .section-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, #FF7701, #FF9A33);
                    }
                    
                    .section-badge {
                        display: inline-block;
                        background: linear-gradient(135deg, #FF7701, #FF9A33);
                        color: white;
                        padding: 8px 20px;
                        border-radius: 50px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        margin-bottom: 20px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    
                    .section-title {
                        font-size: 2.5rem;
                        font-weight: 700;
                        color: #1a202c;
                        margin-bottom: 24px;
                        line-height: 1.3;
                        letter-spacing: -0.01em;
                    }
                    
                    .section-text {
                        font-size: 1.125rem;
                        color: #4a5568;
                        line-height: 1.7;
                        margin-bottom: 40px;
                    }
                    
                    .content-block {
                        padding-right: 40px;
                    }
                    
                    .image-block {
                        text-align: center;
                    }
                    
                    .image-block img {
                        max-width: 100%;
                        height: auto;
                        border-radius: 16px;
                        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Feature List */
                    .feature-list {
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                    }
                    
                    .feature-item {
                        display: flex;
                        align-items: center;
                        gap: 16px;
                        padding: 16px 0;
                    }
                    
                    .feature-icon {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 48px;
                        height: 48px;
                        background: linear-gradient(135deg, #FF7701, #FF9A33);
                        border-radius: 12px;
                        color: white;
                        flex-shrink: 0;
                    }
                    
                    .feature-item span {
                        font-size: 1.1rem;
                        font-weight: 500;
                        color: #2d3748;
                    }
                    
                    /* Steps List */
                    .steps-list {
                        display: flex;
                        flex-direction: column;
                        gap: 32px;
                    }
                    
                    .step-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 24px;
                    }
                    
                    .step-number {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 60px;
                        height: 60px;
                        background: linear-gradient(135deg, #FF7701, #FF9A33);
                        color: white;
                        border-radius: 50%;
                        font-size: 1.5rem;
                        font-weight: 700;
                        flex-shrink: 0;
                    }
                    
                    .step-content h4 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #2d3748;
                        margin-bottom: 8px;
                    }
                    
                    .step-content p {
                        color: #4a5568;
                        line-height: 1.6;
                        margin: 0;
                    }
                    
                    /* Benefits Grid */
                    .benefits-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 32px;
                    }
                    
                    .benefit-item {
                        display: flex;
                        align-items: flex-start;
                        gap: 20px;
                        padding: 24px;
                        background: #f7fafc;
                        border-radius: 16px;
                        border-left: 4px solid #FF7701;
                    }
                    
                    .benefit-icon {
                        width: 48px;
                        height: 48px;
                        flex-shrink: 0;
                    }
                    
                    .benefit-icon img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                    
                    .benefit-content h4 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #2d3748;
                        margin-bottom: 8px;
                    }
                    
                    .benefit-content p {
                        color: #4a5568;
                        line-height: 1.6;
                        margin: 0;
                    }
                    
                    /* Option Cards */
                    .option-card {
                        background: white;
                        border: 2px solid #e2e8f0;
                        border-radius: 20px;
                        padding: 40px 32px;
                        text-align: center;
                        height: 100%;
                        transition: all 0.3s ease;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .option-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, #FF7701, #FF9A33);
                        transform: scaleX(0);
                        transition: transform 0.3s ease;
                    }
                    
                    .option-card:hover {
                        transform: translateY(-8px);
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                        border-color: #FF7701;
                    }
                    
                    .option-card:hover::before {
                        transform: scaleX(1);
                    }
                    
                    .option-number {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 60px;
                        height: 60px;
                        background: linear-gradient(135deg, #FF7701, #FF9A33);
                        color: white;
                        border-radius: 50%;
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin-bottom: 24px;
                    }
                    
                    .option-card h4 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #2d3748;
                        margin-bottom: 16px;
                    }
                    
                    .option-card p {
                        color: #4a5568;
                        line-height: 1.6;
                        margin: 0;
                    }
                    
                    /* Service Cards */
                    .service-card {
                        background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
                        border-radius: 20px;
                        padding: 40px 32px;
                        text-align: center;
                        height: 100%;
                        color: white;
                        position: relative;
                        overflow: hidden;
                    }
                    
                    .service-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: url('/assets/imgs/page/workprocess/background.png');
                        background-size: cover;
                        background-position: center;
                        opacity: 0.3;
                    }
                    
                    .service-content {
                        position: relative;
                        z-index: 2;
                    }
                    
                    .service-card h4 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        margin-bottom: 16px;
                        color: white;
                    }
                    
                    .service-card p {
                        color: rgba(255, 255, 255, 0.9);
                        line-height: 1.6;
                        margin: 0;
                    }
                    
                    /* Utility Classes */
                    .brand-logo {
                        width: 120px;
                        height: auto;
                        margin-bottom: 20px;
                    }
                    
                    .highlight-text {
                        background: linear-gradient(135deg, #FF7701, #FF9A33);
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-weight: 600;
                        font-size: 1.1rem;
                    }
                    
                    .closing-text {
                        font-size: 1.125rem;
                        color: #4a5568;
                        line-height: 1.7;
                        max-width: 600px;
                        margin: 0 auto;
                    }
                    
                    /* Responsive Design */
                    @media (max-width: 992px) {
                        .hero-title {
                            font-size: 2.5rem;
                        }
                        
                        .hero-content {
                            flex-direction: column;
                            text-align: center;
                        }
                        
                        .hero-text {
                            padding-right: 0;
                            margin-bottom: 40px;
                        }
                        
                        .section-card {
                            padding: 60px 40px;
                        }
                        
                        .content-block {
                            padding-right: 0;
                            margin-bottom: 40px;
                        }
                        
                        .section-title {
                            font-size: 2rem;
                        }
                    }
                    
                    @media (max-width: 768px) {
                        .hero-section {
                            padding: 80px 0 60px;
                        }
                        
                        .hero-title {
                            font-size: 2rem;
                        }
                        
                        .hero-subtitle {
                            font-size: 1.1rem;
                        }
                        
                        .main-content {
                            padding: 60px 0;
                        }
                        
                        .section-card {
                            padding: 40px 24px;
                            margin-bottom: 40px;
                        }
                        
                        .section-title {
                            font-size: 1.75rem;
                        }
                        
                        .step-item {
                            flex-direction: column;
                            text-align: center;
                            gap: 16px;
                        }
                        
                        .benefit-item {
                            flex-direction: column;
                            text-align: center;
                            gap: 16px;
                        }
                        
                        .option-card {
                            padding: 32px 24px;
                        }
                        
                        .service-card {
                            padding: 32px 24px;
                        }
                    }
                    
                    @media (max-width: 576px) {
                        .hero-title {
                            font-size: 1.75rem;
                        }
                        
                        .section-title {
                            font-size: 1.5rem;
                        }
                        
                        .btn-primary-large {
                            padding: 16px 24px;
                            font-size: 1rem;
                        }
                    }
                `}</style>
            </Layout>
        </>
    )
}