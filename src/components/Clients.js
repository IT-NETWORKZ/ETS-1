import React, { useState, useEffect } from "react";
import "./Clients.css";

// Ensure that the file names exactly match the import case
import john from "./John.jpeg"; // Ensure 'J' is uppercase if the file name is 'John.jpeg'
import sarah from "./Sarah.jpeg"; // Ensure 'S' is uppercase if the file name is 'Sarah.jpeg'
import michael from "./Michael.jpeg"; // Ensure 'M' is uppercase if the file name is 'Michael.jpeg'

const clientsData = [
  {
    image: john,
    name: "John Doe",
    review: "Excellent service! Highly recommend.",
  },
  {
    image: sarah,
    name: "Sarah Smith",
    review: "Great support and quality work!",
  },
  {
    image: michael,
    name: "Michael Johnson",
    review: "Very professional and timely delivery.",
  },
];

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clientsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clients-container">
      <div className="tab">Our Clients</div>

      <div className="clients-content">
        <img
          src={clientsData[currentIndex].image}
          alt={clientsData[currentIndex].name}
          className="client-image"
        />
        <p className="client-review">{clientsData[currentIndex].review}</p>
        <h4 className="client-name">- {clientsData[currentIndex].name}</h4>
      </div>
    </div>
  );
};

export default Clients;
