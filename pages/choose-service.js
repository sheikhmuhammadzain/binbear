import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";

function ServiceCards() {
  const router = useRouter();

  const handleJunkHaulingClick = () => {
    router.push("/junk-hauling"); // Create this page for junk hauling options
  };

  const handleConstructionClick = () => {
    router.push("/construction-cleanup"); // Create this page for construction cleanup
  };

  const handleApartmentClick = () => {
    router.push("/contact"); // Redirect to contact page for apartment valet service
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
        <div className="service-card" onClick={handleJunkHaulingClick}>
          <img
            src="/assets/imgs/page/blog-single/bagi.png"
            alt="Junk Hauling"
            className="service-image"
          />
          <h3>Junk Hauling</h3>
          <ul>
            <li>
              Choose from our list of items for removal. We'll handle all your junk removal needs with professional service.
            </li>
          </ul>
          <button style={buttonStyle}>Choose Items</button>
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
          <button style={buttonStyle}>Get Estimate</button>
        </div>

        {/* Apartment Valet Card */}
        <div className="service-card" onClick={handleApartmentClick}>
          <img
            src="/assets/imgs/page/blog-single/bagi.png"
            alt="Apartment Valet"
            className="service-image"
          />
          <h3>Apartment Trash Valet</h3>
          <ul>
            <li>
              Professional valet trash service for apartments.
            </li>
            <li>
              Contact us: {contactInfo.phone}<br />
              Email: {contactInfo.email}<br />
              Text: {contactInfo.text}
            </li>
          </ul>
          <button style={buttonStyle}>Contact Us</button>
        </div>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={() => router.back()}>
        ← Back
      </button>

      <style jsx>{`
        .cards-container {
          display: flex;
          gap: 20px;
          justify-content: center;
          padding: 20px;
          margin-bottom: 20px;
          margin-top: 80px;
          flex-wrap: wrap;
        }

        .service-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          width: 300px;
          padding: 20px;
          text-align: center;
          background-color: #fff;
          cursor: pointer;
          margin-bottom: 20px;
          transition: transform 0.2s ease-in-out;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .service-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 15px;
        }

        h3 {
          font-size: 20px;
          color: black;
          margin-bottom: 20px;
        }

        ul {
          text-align: left;
          font-size: 14px;
          margin-bottom: 20px;
        }

        li {
          margin-bottom: 10px;
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
      `}</style>
    </Layout>
  );
}

const buttonStyle = {
  marginBottom: "30px",
  marginTop: "40px",
  padding: "10px 20px",
  backgroundColor: "#FF7F00",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.2s ease-in-out",
};

export default ServiceCards;
