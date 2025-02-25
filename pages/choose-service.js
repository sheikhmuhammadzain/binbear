import { useRouter } from "next/router";
import { useState } from 'react';
import Layout from "@/components/layout/Layout";
import Link from 'next/link';

function ServiceCards() {
  const router = useRouter();

  const handleJunkHaulingClick = () => {
    router.push("/junk-hauling"); // Create this page for junk hauling options
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
      <div className="cards-container">
        {/* Junk Hauling Card */}
        <div className="service-card" onClick={() => window.location.href='/item-selection'}>
          <img
            src="/assets/imgs/page/blog-single/bagi.png"
            alt="Junk Hauling"
            className="service-image"
          />
          <h3>Junk Hauling</h3>
          <ul>
            <li>
              Choose from our list of items for junk removal. We'll handle all your junk removal needs with professional service.
            </li>
          </ul>
          <button>Get Started</button>
        </div>

        {/* Construction Cleanup Card */}
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

        {/* Apartment Valet Card */}
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
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          padding: 16px;
          margin: 60px auto;
          max-width: 1200px;
          justify-items: center;
        }

        .service-card {
          border: 1px solid #eee;
          border-radius: 6px;
          width: 250px;
          padding: 16px;
          text-align: center;
          background-color: #fff;
          cursor: pointer;
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card > *:not(:last-child) {
          margin-bottom: 12px;
        }

        .service-card ul {
          text-align: left;
          font-size: 13px;
          padding-left: 16px;
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
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 12px;
        }

        h3 {
          font-size: 18px;
          color: #333;
          margin-bottom: 12px;
          font-weight: 500;
        }

        li {
          margin-bottom: 8px;
          color: #666;
          line-height: 1.4;
        }

        .back-button {
          display: block;
          margin: 0 auto;
          margin-top: 30px;
          padding: 10px 20px;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }

        .back-button:hover {
          background-color: #e69500;
        }

        .contact-btn {
          background-color: #FF7701;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          width: 100%;
          margin-top: 10px;
        }

        .contact-btn:hover {
          background-color: #e66901;
        }
      `}</style>
    </Layout>
  );
}

export default ServiceCards;
