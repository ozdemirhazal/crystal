import { useState, useEffect } from "react";
import "../styles/DesktopLogoSlider.css";
import GetLogos from "./Logos";

const logos = GetLogos();
const DesktopLogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="logo-slider">
      {logos.map((logo, index) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={`Logo ${logo.id}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default DesktopLogoSlider;
