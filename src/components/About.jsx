import { useTranslation } from "react-i18next";
import "../styles/About.css";
import visionImage from "../images/about.jpeg";
import WhatWeDid from "./WhatWeDid";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="about-us">
        <div className="about-us-text">
          <h1>{t("about-us")}</h1>
          <p>{t("about-us-p")}</p>
          <hr />
        </div>
      </div>
      <div className="about-container">
        <div className="vision-image">
          <img src={visionImage} alt="" />
        </div>
        <div className="vision-text">
          <p>{t("vision-p")}</p>
          <p>{t("mision-p")}</p>
        </div>
      </div>
      <div className="what-we-did">
        <WhatWeDid />
      </div>
    </>
  );
};

export default About;
