import React, { useState } from "react";

const HoverButton = ({ text = "View Details" }) => {
  const [isHovered, setIsHovered] = useState(false); // ✅ Ensure useState is properly initialized

  return (
    <button
      className="gradient-button"
      style={{
        background: isHovered
          ? "linear-gradient(45deg, orange, black)"
          : "linear-gradient(45deg, black, orange)",
        width: "150px",
        height: "40px",
        color: isHovered ? "black" : "white",
        boxShadow: "0 4px 10px rgba(251, 193, 86, 0.5)",
        transition: "all 0.3s ease-in-out",
        borderRadius: "5px",
        fontSize: "16px",
        fontWeight: "bold",
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
};

export default HoverButton;
