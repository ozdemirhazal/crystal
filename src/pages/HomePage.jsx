import Header from "../components/Header";
import Banner from "../components/Banner";
import ThirdContainer from "../components/ThirdContainer";
import DesktopLogoSlider from "../components/DesktopLogoSlider";
import WhyUs from "../components/WhyUs";
import MobileLogoSlider from "../components/MobileLogoSlider";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="HomePage">
      <div className="Header">
        <Header />
      </div>

      <div className="Banner">
        <Banner />
      </div>

      <div className="ThirdContainer">
        <ThirdContainer />
      </div>

      <div className="DesktopLogoSlider">
        <DesktopLogoSlider />
      </div>

      <div className="MobileLogoSlider">
        <MobileLogoSlider />
      </div>

      <div className="WhyUs">
        <WhyUs />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
