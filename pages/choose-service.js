import { useRouter } from "next/router";
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

function ServiceCards() {
  const router = useRouter();

  const handleJunkHaulingClick = () => {
    router.push("/junk-hauling"); // Create this page for junk hauling options
  };
  
  const handleDumpsterRentalClick = () => {
    router.push("/Dumpster-Rental"); // New dumpster rental page
  };

  const handleConstructionClick = () => {
    router.push("/construction-cleanup"); // Create this page for construction cleanup
  };

  const contactInfo = {
    phone: "612-444-JUNK",
    email: "info@binbear.com",
    text: "612-444-JUNK"
  };

  return (
    <Layout>
      <div className="service-selection-container">
        <h1 className="page-title">Choose a Service</h1>
        <p className="page-description">Select the service you need from BinBear</p>
        
        <div className="cards-container">
          <div className="service-card" onClick={handleJunkHaulingClick}>
            <img src="/assets/imgs/page/service-detail/img1.png" alt="Junk Hauling" className="service-image" />
            <h3>Junk Hauling</h3>
            <ul>
              <li>Full-service junk removal</li>
              <li>We do all the loading for you</li>
              <li>Eco-friendly disposal</li>
              <li>Same-day service available</li>
            </ul>
            <button className="contact-btn">Select Service</button>
          </div>

          <div className="service-card" onClick={handleDumpsterRentalClick}>
            <img src="/assets/imgs/page/service-detail/img2.png" alt="Dumpster Rental" className="service-image" />
            <h3>Dumpster Rental</h3>
            <ul>
              <li>Multiple dumpster sizes available</li>
              <li>Flexible rental periods</li>
              <li>Convenient delivery and pickup</li>
              <li>Perfect for DIY projects</li>
            </ul>
            <button className="contact-btn">Select Service</button>
          </div>

          <div className="service-card" onClick={handleConstructionClick}>
            <img
              src="/assets/imgs/page/blog-single/bagi.png"
              alt="Construction Cleanup"
              className="service-image"
            />
            <h3>Post Construction Cleanup & Hauling</h3>
            <ul>
              <li>
                Get an estimate by truck load for your construction cleanup needs.
              </li>
              <li>
                Contact us: {contactInfo.phone}<br />
                Email: {contactInfo.email}<br />
                Text: {contactInfo.text}
              </li>
            </ul>
            <button>Get Estimate</button>
          </div>

          <div className="service-card">
            <img src="/assets/imgs/page/blog-single/bagi.png" alt="Apartment Valet" className="service-image" />
            <h3>Apartment Trash Valet</h3>
            <ul>
              <li>Contact us:<br />Phone: (815) 246-2327 (BINBEAR)<br />Email: quote@Binbearjunk.com<br />Website: BinBearJunk.com</li>
            </ul>
            <Link href="/ScheduleDumpster">
              <button className="contact-btn">Contact us</button>
            </Link>
          </div>
        </div>

        {/* Back Button */}
        <button className="back-button" onClick={() => router.back()}>
          ← Back
        </button>

        <style jsx>{`
          .service-selection-container {
            padding: 40px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .page-title {
            text-align: center;
            color: #333;
            margin-bottom: 16px;
            font-size: 32px;
          }
          
          .page-description {
            text-align: center;
            color: #666;
            margin-bottom: 40px;
            font-size: 18px;
          }
          
          .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
          }

          .service-card {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            cursor: pointer;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          }

          .service-card > *:not(:last-child) {
            margin-bottom: 12px;
          }

          .service-card ul {
            text-align: left;
            font-size: 14px;
            padding-left: 20px;
            flex-grow: 1;
            margin-bottom: 0;
          }

          .service-card button {
            background-color: #FF7701;
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 6px;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            width: 100%;
            transition: all 0.2s ease;
            margin-top: auto;
          }

          .service-card button:hover {
            background-color: #e66901;
            transform: translateY(-1px);
          }

          .service-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 4px;
            margin-bottom: 12px;
          }

          h3 {
            font-size: 20px;
            color: #333;
            margin-bottom: 12px;
            font-weight: 600;
          }

          li {
            margin-bottom: 8px;
            color: #666;
            line-height: 1.5;
          }

          .back-button {
            display: block;
            margin: 0 auto;
            padding: 12px 24px;
            color: #333;
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s ease;
          }

          .back-button:hover {
            background-color: #e9e9e9;
          }

          .contact-btn {
            background-color: #FF7701;
            color: white;
            font-size: 16px;
            transition: background-color 0.3s ease;
            width: 100%;
            margin-top: 10px;
          }

          .contact-btn:hover {
            background-color: #e66901;
          }
          
          @media (max-width: 768px) {
            .cards-container {
              grid-template-columns: 1fr;
            }
            
            .page-title {
              font-size: 28px;
            }
            
            .service-card {
              padding: 16px;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}

export default ServiceCards;
