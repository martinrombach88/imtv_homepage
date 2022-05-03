import "./About.css";
import Header from "../Header/Header";
import AboutIntro from "./AboutIntro.js";
import AboutPartners from "./AboutPartners.js";
import AboutStaff from "./AboutStaff.js";
import HomeSnap from "../HomeSnap/HomeSnap.js";
import { useLang } from "../Header/LangContext";
import homeSnapList from "../homeSnapList";

const About = ({ staffList }) => {
  const lang = useLang();

  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <HomeSnap styleObject={homeSnapList[1]} component={<AboutIntro />} />
      <HomeSnap component={<AboutPartners />} />
      <HomeSnap
        styleObject={homeSnapList[2]}
        component={<AboutStaff staffList={staffList} />}
      />
    </div>
  );
};

export default About;
