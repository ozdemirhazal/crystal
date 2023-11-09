import { useTranslation } from "react-i18next";
import thirdContainerImage from "../images/thirdcontainer.png";
import "../styles/ThirdContainer.css";

const ThirdContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="third_container">
      <div className="thirdcontainer">
        <div className="third_container_images">
          <img src={thirdContainerImage} alt="" />
        </div>

        <div className="third_container_text">
          <h1>{t("third-container-h1")}</h1>
          <p>{t("third-container-slogan")}</p>
          <hr />
          <p>{t("third-container-p")}</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
