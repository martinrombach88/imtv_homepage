import Header from "../Header/Header";
import "./About.css";
import AboutHistory from "./AboutHistory.js";

/*  */

const About = () => {
  return (
    <>
      <Header style={"header initialPos"} />
      <div className="about__Container">
        <header className="about__IntroSection">
          <img
            alt="imtvHeader"
            src="/assets/images/aboutHeader.png"
            className="about__Header"
          ></img>
          <div className="about__IntroTitle">
            <h1>about imtv</h1>
          </div>
        </header>
        <section>
          <AboutHistory />
        </section>
      </div>
    </>
  );
};

export default About;
