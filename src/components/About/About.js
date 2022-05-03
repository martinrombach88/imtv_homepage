import "./About.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import AboutIntro from "./AboutIntro.js";
import AboutPartners from "./AboutPartners.js";
import AboutTeam from "./AboutStaff.js";
import HomeSnap from "../HomeSnap/HomeSnap.js";
import { useLang } from "../Header/LangContext";

const About = ({ staffList }) => {
  const lang = useLang();
  const styleObject = {
    color: "black",
    backgroundColor: "rgb(251,251,240)",
  };
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <HomeSnap component={<AboutIntro />} />
      <HomeSnap component={<AboutPartners />} />
      <HomeSnap
        styleObject={styleObject}
        component={<AboutTeam staffList={staffList} />}
      />
    </div>
  );
};

export default About;
