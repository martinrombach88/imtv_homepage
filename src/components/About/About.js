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

  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <HomeSnap component={<AboutIntro />} />
      <HomeSnap component={<AboutPartners />} />
      <HomeSnap component={<AboutTeam staffList={staffList} />} />
    </div>
  );
};

export default About;
