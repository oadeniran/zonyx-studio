import Nav from "../components/landingPage.tsx/nav";
import Hero from "../components/landingPage.tsx/hero";
import Services from "../components/landingPage.tsx/services";
import Portfolio from "../components/landingPage.tsx/portfolio";
import Choose from "../components/landingPage.tsx/choose";
import Faq from "../components/landingPage.tsx/faq";
import Contact from "../components/landingPage.tsx/contact";
import Footer from "../components/landingPage.tsx/footer";

const Home = () => {
  return (
    <div>
      <div className="bg-[#0A0A1C]">
        <Nav />
        <Hero />
      </div>
      <Services />
      <Portfolio />
      <Choose />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
