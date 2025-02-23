import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function JunkHauling() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'items') {
      router.push('/Item-we-take'); // Redirect to items selection page
    } else if (option === 'truckload') {
      router.push('/estimate'); // Create this page for truck load estimates
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2 className="title">Choose Your Junk Hauling Option</h2>
        
        <div className="options-container">
          {/* Items Selection Option */}
          <div 
            className="option-card"
            onClick={() => handleOptionSelect('items')}
          >
            <img
              src="/assets/imgs/page/blog-single/bagi.png"
              alt="Items Selection"
              className="option-image"
            />
            <h3>Select Items</h3>
            <p>Choose specific items you need removed and get an instant price estimate.</p>
            <button className="select-button">Choose Items</button>
          </div>

          {/* Truck Load Option */}
          <div 
            className="option-card"
            onClick={() => handleOptionSelect('truckload')}
          >
            <img
              src="/assets/imgs/page/blog-single/bagi.png"
              alt="Truck Load"
              className="option-image"
            />
            <h3>By Truck Load</h3>
            <p>Get pricing based on how much of our truck you'll fill.</p>
            <button className="select-button">Get Estimate</button>
          </div>
        </div>

        <button className="back-button" onClick={() => router.back()}>
          ← Back
        </button>
      </div>

      <style jsx>{`
        .container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          text-align: center;
          margin-bottom: 40px;
          color: #333;
        }

        .options-container {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .option-card {
          width: 350px;
          padding: 25px;
          border-radius: 10px;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }

        .option-card:hover {
          transform: translateY(-5px);
        }

        .option-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        h3 {
          color: #333;
          margin-bottom: 15px;
        }

        p {
          color: #666;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .select-button {
          background-color: #FF7F00;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s ease-in-out;
        }

        .select-button:hover {
          background-color: #e67300;
        }

        .back-button {
          display: block;
          margin: 40px auto 0;
          padding: 10px 20px;
          color: black;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          background: transparent;
        }

        .back-button:hover {
          background-color: #e69500;
        }
      `}</style>
    </Layout>
  );
} 