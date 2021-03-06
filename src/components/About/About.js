import "./About.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import AboutPartners from "./AboutPartners.js";
import AboutPartnersMobile from "./AboutPartnersMobile";
import AboutPartnersMobile2 from "./AboutPartnersMobile2";
import AboutStaff from "./AboutStaff.js";
import HomeSnap from "../HomeSnap/HomeSnap.js";
import aboutList from "./aboutList";

const About = ({ staffList }) => {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <HomeSnap
        object={aboutList[0]}
        styleObject={aboutList[0]}
        leftImage={true}
        textSection={true}
        changeClass={"homesnap homesnap__Change"}
      />

      <HomeSnap
        object={aboutList[0]}
        styleObject={aboutList[0]}
        textSection={true}
        leftImage={true}
        noImage={true}
        changeClass={"homesnap homesnap__ChangeMobile"}
      />

      <HomeSnap
        component={<AboutPartners />}
        changeClass={"homesnap homesnap__Change"}
      />
      <HomeSnap
        component={<AboutPartnersMobile />}
        changeClass={"homesnap homesnap__ChangeMobile"}
      />
      <HomeSnap
        component={<AboutPartnersMobile2 />}
        changeClass={"homesnap homesnap__ChangeMobile"}
      />
      <HomeSnap
        styleObject={aboutList[1]}
        component={<AboutStaff staffList={staffList} />}
      />
      <Footer />
    </div>
  );
};

export default About;
