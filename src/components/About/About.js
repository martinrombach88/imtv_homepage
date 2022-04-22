import "./About.css";
import Header from "../Header/Header";
import AboutHistory from "./AboutHistory.js";
import AboutPartners from "./AboutPartners.js";
import AboutStaff from "./AboutStaff.js";

const About = ({ staffList }) => {
  return (
    <>
      <Header style={"header initialPos"} />
      <div className="about">
        <div className="about__Container">
          <div className="about__Intro">
            <h1>about imtv</h1>
            <h5>
              Founded in 2001, IMTV Ltd. has been continuously growing based on
              the trust of Korean and foreign broadcasters and platforms. For 20
              years our talented writers, creators, and directors have produced
              over 60 television programs, films and dramas and over 100
              documentaries.
            </h5>
          </div>
          <AboutPartners />
        </div>
        <div className="about__CompanyContainer">
          <h1>twenty years of production</h1>
          <AboutHistory />
        </div>
        <div className="about__StaffContainer">
          <h1>key team</h1>
          <AboutStaff staffList={staffList} />
        </div>
      </div>
    </>
  );
};

export default About;
