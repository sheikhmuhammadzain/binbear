import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import {
  faCouch,
  faTree,
  faPlug,
  faTrash,
  faTools,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const ItemSelectionForm = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const router = useRouter(); // Initialize router

  const items = [
    { name: "Household Items", icon: faHome },
    { name: "Furniture", icon: faCouch },
    { name: "Yard Design", icon: faTree },
  ];

  const otherItems = [
    { name: "Appliance", icon: faPlug },
    { name: "Garbage Attic Cleanout", icon: faTrash },
    { name: "Concrete Dirt Gravel etc", icon: faTools },
  ];

  const handleSelect = (itemName) => {
    setSelectedItem(itemName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedItem) {
      alert("Please select an item before proceeding.");
      return;
    }
    router.push("/ScheduleDumpster"); // Redirect to ScheduleDumpster page
  };

  return (
    <Layout>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "50px",
          textAlign: "center",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <h4 style={{ marginBottom: "20px" }}>
          Click and Tap to Select Category Type(s)
        </h4>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* First Row: Household Items */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
              {items.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleSelect(item.name)}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "10px",
                    border: `2px solid ${
                      selectedItem === item.name ? "green" : "transparent"
                    }`,
                    borderRadius: "10px",
                    backgroundColor:
                      selectedItem === item.name ? "lightgreen" : "#f0f0f0",
                    transition: "0.3s",
                    width: "100px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ fontSize: "30px", marginBottom: "10px" }}
                  />
                  <p style={{ fontSize: "14px", margin: 0 }}>{item.name}</p>
                </div>
              ))}
            </div>

            {/* Second Row: Appliances and Others */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
              {otherItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => handleSelect(item.name)}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "10px",
                    border: `2px solid ${
                      selectedItem === item.name ? "green" : "transparent"
                    }`,
                    borderRadius: "10px",
                    backgroundColor:
                      selectedItem === item.name ? "lightgreen" : "#f0f0f0",
                    transition: "0.3s",
                    width: "100px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    style={{ fontSize: "30px", marginBottom: "10px" }}
                  />
                  <p style={{ fontSize: "14px", margin: 0 }}>{item.name}</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: "30px", marginBottom: "20px" }}>
              Don't See the Service you're looking for? We take just about
              anything.
            </p>

            {/* Comment Box */}
            <div style={{ marginBottom: "20px" }}>
              <textarea
                placeholder="Leave a comment..."
                rows="4"
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              ></textarea>
            </div>

            {/* Book It Button */}
            <button
              type="submit"
              style={{
                width: "250px",
                padding: "13px 20px",
                backgroundColor: " #FF7F00",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Book It
            </button>
          </form>

          
        </div>
{/* Back Button */}
<button
            className="back-button"
            onClick={() => router.back()}
            style={{
              marginTop: "80px",
             
             
           border:'none',
              color: "black",
             
              
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            ← Back
          </button>

      </div>
    </Layout>
  );
};

// Page structure
export default function ItemSelectionPage() {
  return (
    <div>
      <ItemSelectionForm />
    </div>
  );
}
