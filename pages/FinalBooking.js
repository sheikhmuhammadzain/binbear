
import React, { useState } from "react";
import { useRouter } from "next/router"; // For navigation
import Layout from "@/components/layout/Layout";

const CreditCardForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    nameOnCard: "",
    billingZip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Layout>
      <div className="form-container">
        <h2>Enter your credit card info to reserve your dumpster rental</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="---- ---- ---- ----"
            />
          </div>
          <div className="form-group">
            <label>Expiry Date (MM/YY)</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                placeholder="Enter Month"
                style={{ flex: 1 }}
              />
              <input
                type="text"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                placeholder="Enter Year"
                style={{ flex: 1 }}
              />
            </div>
          </div>
          <div className="form-group half">
            <label htmlFor="name-on-card">Name on Card</label>
            <input
              type="text"
              id="name-on-card"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group half">
            <label htmlFor="billing-zip">Billing ZIP/Postal Code</label>
            <input
              type="text"
              id="billing-zip"
              name="billingZip"
              value={formData.billingZip}
              onChange={handleChange}
              placeholder="-----"
            />
          </div>
          <div className="form-actions">
            <button type="submit" style={{ width: "230px", color: "black" }}>
              Book It
            </button>
          </div>
        </form>
        
      </div>
      <button
          className="back-button"
          onClick={() => router.back()}
        >
          ← Back
        </button>
      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 400px;
          margin: 20px auto;
          margin-bottom: 30px;
          padding: 20px;
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          position: relative;
        }

        .back-button {
        margin-left:700px;
        margin-bottom:30px;
          margin-top: 20px;
          background: none;
          border: none;
          color:rgb(25, 27, 28);
          font-size: 1rem;
          cursor: pointer;
          text-align: center;
        }

        .back-button:hover {
          color: #0056b3;
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .form-group {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 15px;
        }

        .form-group label {
          width: 100%;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .form-group input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        .form-group.half {
          flex: 1;
          padding-right: 10px;
        }

        .form-group.half:last-child {
          padding-right: 0;
        }

        .form-actions {
          text-align: center;
        }

        .form-actions button {
          background-color: #FF7F00 ;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
        }

        .form-actions button:hover {
          background-color: darkorange;
        }
      `}</style>
    </Layout>
  );
};

export default CreditCardForm;
