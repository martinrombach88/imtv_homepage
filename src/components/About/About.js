import "./About.css";
import Header from "../Header/Header";
import AboutPartners from "./AboutPartners.js";
import AboutStaff from "./AboutStaff.js";
import HomeSnap from "../HomeSnap/HomeSnap.js";
import { useLang } from "../Header/LangContext";
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
      />
      <HomeSnap component={<AboutPartners />} />
      <HomeSnap
        styleObject={homeSnapList[2]}
        component={<AboutStaff staffList={staffList} />}
      />
    </div>
  );
};

export default About;
