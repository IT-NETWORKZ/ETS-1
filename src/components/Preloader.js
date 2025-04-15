import React from "react";
import { GiOpenBook } from "react-icons/gi"; // Import a cuter book icon
import "./Preloader.css"; // Import CSS for animation

const Preloader = () => {
  return (
    <div className="preloader-container">
      <GiOpenBook className="preloader-icon" />
    </div>
  );
};

export default Preloader;
