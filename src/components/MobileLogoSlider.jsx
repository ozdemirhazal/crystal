import { useState, useEffect } from "react";
import "../styles/MobileLogoSlider.css";
import GetLogos from "./Logos";

const logos = GetLogos();
const MobileLogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === (isMobile ? 3 : 7) ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);

  return (
    <div className={`mobile-logo-slider ${isMobile ? "mobile" : "web"}`}>
      {logos
        .slice(currentIndex, currentIndex + (isMobile ? 4 : 8))
        .map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={`Logo ${logo.id}`}
            className="active"
          />
        ))}
    </div>
  );
};

export default MobileLogoSlider;
