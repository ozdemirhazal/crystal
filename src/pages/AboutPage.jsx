import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

function AboutPage() {
  return (
    <div className="AboutPage">
      <div className="Header">
        <Header />
      </div>

      <div className="About">
        <About />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
