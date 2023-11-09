import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import "../styles/VideoBanner.css";
import localVideo from "../images/VideoBanner.mp4";

function VideoBanner() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={`video-banner ${isMobile ? "mobile" : "desktop"}`}>
      <video autoPlay loop muted controls={false} width="100%" height="100%">
        <source src={localVideo} type="video/mp4" />
      </video>

      <div className="banner-content">
        <h1>{t("header_h1")}</h1>
        <p>{t("header_p")}</p>
      </div>
    </div>
  );
}

export default VideoBanner;
