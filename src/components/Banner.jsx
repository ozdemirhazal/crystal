import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import CaravanBannerImage from "../images/CaravanBanner.jpg";
import CarBannerImage from "../images/CarBanner.jpg";
import YachtBannerImage from "../images/YacthBanner.jpg";
import BigAutoBannerImage from "../images/BigAutoBanner.jpg";
import "../styles/Banner.css";

function Banner() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        id: 1,
        image: CaravanBannerImage,
        title: t("title1"),
        firstcontent: t("firstcontent1"),
        secondcontent: t("secondcontent"),
      },
      {
        id: 2,
        image: CarBannerImage,
        title: t("title2"),
        firstcontent: t("firstcontent2"),
        secondcontent: t("secondcontent"),
      },
      {
        id: 3,
        image: YachtBannerImage,
        title: t("title3"),
        firstcontent: t("firstcontent3"),
        secondcontent: t("secondcontent"),
      },
      {
        id: 4,
        image: BigAutoBannerImage,
        title: t("title4"),
        firstcontent: t("firstcontent4"),
        secondcontent: t("secondcontent"),
      },
    ],
    [t]
  );

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides]);

  const previousSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, nextSlide]);

  return (
    <div className="slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <h2>{slides[currentSlide].title}</h2>
        <p className="firstcontent">{slides[currentSlide].firstcontent}</p>
        <p className="secondcontent">{slides[currentSlide].secondcontent}</p>
      </div>

      <button className="arrow-button left-arrow" onClick={previousSlide}>
        {"<"}
      </button>

      <button className="arrow-button right-arrow" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
}

export default Banner;
