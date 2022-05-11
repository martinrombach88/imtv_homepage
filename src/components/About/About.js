import "./About.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import AboutPartners from "./AboutPartners.js";
import AboutStaff from "./AboutStaff.js";
import HomeSnap from "../HomeSnap/HomeSnap.js";
import homeSnapList from "../homeSnapList";

const About = ({ staffList }) => {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <HomeSnap
        object={homeSnapList[3]}
        styleObject={homeSnapList[3]}
        leftImage={true}
        textSection={true}
        changeClass={"homesnap homesnap__Change"}
      />
      <HomeSnap
        object={homeSnapList[3]}
        styleObject={homeSnapList[3]}
        textSection={true}
        leftImage={true}
        noImage={true}
        changeClass={"homesnap homesnap__ChangeMobile"}
      />

      <HomeSnap component={<AboutPartners />} />
      <HomeSnap
        styleObject={homeSnapList[2]}
        component={<AboutStaff staffList={staffList} />}
      />
      <Footer fixed={true} />
    </div>
  );
};

export default About;
