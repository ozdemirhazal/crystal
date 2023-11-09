import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <p className="footer-opening-hours-1">
            {t("footer-opening-hours-1")}
          </p>
          <hr />
        </div>

        <div className="footer-middle">
          <div className="column-1">
            <h1 className="footer-about-us-h1">{t("footer-about-us-h1")}</h1>
            <p className="footer-about-us-p">{t("footer-about-us-p")}</p>
          </div>

          <div className="column-2">
            <h1 className="footer-information-h1">
              {t("footer-information-h1")}
            </h1>
            <h2 className="footer-information-turkey-h2">
              {t("footer-information-turkey-h2")}
            </h2>
            <div className="icon-with-text">
              <div className="footer-icons">
                <FontAwesomeIcon icon={faLocationDot} color="white" />
              </div>
              <p className="footer-information-turkey-address-p">
                <a
                  href="https://www.google.com/maps/search/Nam%C4%B1k+Kemal,+%C4%B0n%C3%B6n%C3%BC+Cad.+No:196+D:1,+16270+Osmangazi%2FBursa,+T%C3%BCrkiye/@40.199124,29.0741661,17z/data=!3m1!4b1?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("footer-information-turkey-address-p")}
                </a>
              </p>
            </div>

            <div className="icon-with-text">
              <div className="footer-icons">
                <FontAwesomeIcon icon={faPhone} color="white" />
              </div>
              <p className="footer-information-turkey-phonenumber-p">
                <a href="tel:+90 535 989 65 69">
                  {t("footer-information-turkey-phonenumber-p")}
                </a>
              </p>
            </div>

            <h2 className="footer-information-germany-h2">
              {t("footer-information-germany-h2")}
            </h2>
            <div className="icon-with-text">
              <div className="footer-icons">
                <FontAwesomeIcon icon={faLocationDot} color="white" />
              </div>
              <p className="footer-information-germany-address-p">
                <a
                  href="https://www.google.com/maps/place/Kolonnenstra%C3%9Fe+8,+10827+Berlin,+Almanya/@52.4862693,13.3573606,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8503f70801a27:0xca027ca7389e610!8m2!3d52.4862693!4d13.3599409!16s%2Fg%2F11b8v45w0g?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("footer-information-germany-address-p")}
                </a>
              </p>
            </div>
            <div className="icon-with-text">
              <div className="footer-icons">
                <FontAwesomeIcon icon={faPhone} color="white" />
              </div>
              <p className="footer-information-germany-phonenumber-p">
                <a href="tel:+49 176 20173967">
                  {t("footer-information-germany-phonenumber-p")}
                </a>
              </p>
            </div>
            <div className="icon-with-text">
              <div className="footer-icons">
                <FontAwesomeIcon icon={faEnvelope} color="white" />
              </div>
              <p className="footer-information-mail-p">
                <a href="mailto:info@dogusotocam.com">
                  {t("footer-information-mail-p")}
                </a>
              </p>
            </div>
          </div>

          <div className="column-3">
            <h1 className="footer-follow-us-h1">{t("footer-follow-us-h1")}</h1>
            <div className="footer-social-media-icons">
              <div className="footer-social-media-instagram-icon">
                <a
                  href="https://www.instagram.com/dogusotocam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} color="white" size="xl" />
                </a>
              </div>
              <div className="footer-social-media-facebook-icon">
                <a
                  href="https://www.facebook.com/yucel.guler.90"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} color="white" size="xl" />
                </a>
              </div>
              <div className="footer-social-media-youtube-icon">
                <a
                  href="https://www.youtube.com/channel/UCAAr0xO_-Foud_3zieWp2SQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} color="white" size="xl" />
                </a>
              </div>
            </div>
            <div className="scrollToTop" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowUp} color="white" size="lg" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <hr />
          <p className="footer-copyright">{t("footer-copyright-p")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
