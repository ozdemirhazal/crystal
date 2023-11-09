import { useTranslation } from "react-i18next";
import "../styles/WhatWeDid.css";

const WhatWeDid = () => {
  const { t } = useTranslation();

  return (
    <div className="what-we-did_container">
      <div className="what-we-did">
        <div className="what-we-did_text">
          <h1>{t("what-we-did_h1")}</h1>
          <p>{t("what-we-did_p")}</p>
        </div>

        <hr />

        <div className="second-content">
          <div className="customer">
            <div className="customer-text">
              <h1>{t("customer-h1")}</h1>
              <p>{t("customer-p")}</p>
            </div>
          </div>

          <div className="productcount">
            <div className="productcount-text">
              <h1>{t("productcount-h1")}</h1>
              <p>{t("productcount-p")}</p>
            </div>
          </div>

          <div className="experience">
            <div className="experience-text">
              <h1>{t("experience-h1")}</h1>
              <p>{t("experience-p")}</p>
            </div>
          </div>

          <div className="project">
            <div className="project-text">
              <h1>{t("project-h1")}</h1>
              <p>{t("project-p")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDid;
