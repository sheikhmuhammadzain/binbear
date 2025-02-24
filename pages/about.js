import React from 'react';
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

function AboutUs() {
  const router = useRouter();

  return (
    <Layout>
      <div className="about-container">
        <div className="content">
          <h1 className="main-title">About BinBear</h1>
          
          <div className="about-section">
            <h2>Your Trusted Junk Removal Partner</h2>
            <p>At BinBear, we specialize in providing efficient and reliable junk removal services for residential and commercial clients. Our team is dedicated to making the process of junk removal as seamless as possible.</p>
          </div>

          <div className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-item">
                <h3>Junk Hauling</h3>
                <p>Professional removal of unwanted items from your property with our efficient hauling service.</p>
              </div>
              
              <div className="service-item">
                <h3>Construction Cleanup</h3>
                <p>Comprehensive cleanup solutions for construction sites and renovation projects.</p>
              </div>
              
              <div className="service-item">
                <h3>Apartment Valet Service</h3>
                <p>Specialized valet trash service for apartment communities.</p>
              </div>
            </div>
          </div>

          <div className="contact-section">
            <h2>Contact Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Phone:</strong>
                <p>(815) 246-2327 (BINBEAR)</p>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <p>quote@Binbearjunk.com</p>
              </div>
              <div className="contact-item">
                <strong>Website:</strong>
                <p>BinBearJunk.com</p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .about-container {
            min-height: 100vh;
            background-color: #ffffff;
          }

          .content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .main-title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #333;
            text-align: center;
            margin-bottom: 2rem;
          }

          .about-section {
            margin-bottom: 3rem;
          }

          h2 {
            font-size: 1.75rem;
            color: #333;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 1.5rem;
          }

          .service-item {
            background: #fff;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            border: 1px solid #eee;
          }

          .service-item h3 {
            color: #FF7701;
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            font-weight: 600;
          }

          .contact-section {
            margin-top: 3rem;
            padding: 2rem;
            background: #f8f9fa;
            border-radius: 8px;
          }

          .contact-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
          }

          .contact-item {
            padding: 1rem;
            background: #fff;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          }

          .contact-item strong {
            color: #FF7701;
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
          }

          .contact-item p {
            color: #333;
            margin: 0;
          }

          @media (max-width: 768px) {
            .main-title {
              font-size: 2rem;
            }

            h2 {
              font-size: 1.5rem;
            }

            .content {
              padding: 1.5rem 1rem;
            }

            .contact-section {
              padding: 1.5rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default AboutUs;
