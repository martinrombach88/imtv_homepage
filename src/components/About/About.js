import "./About.css";
import Header from "../Header/Header";
import Footer from "../Header/Footer";
import AboutHistory from "./AboutHistory.js";
import AboutPartners from "./AboutPartners.js";
import AboutStaff from "./AboutStaff.js";
import { useLang } from "../Header/LangContext";

const About = ({ staffList }) => {
  const lang = useLang();
  const aboutText = lang
    ? "2001년 설립된 (주)아이엠티비는 국내외 방송사와 플랫폼의 신뢰를 바탕으로 지속적으로 성장해 왔습니다. 20년 동안 재능 있는 작가, 제작자 및 감독은 60개 이상의 TV 프로그램, 영화 및 드라마와 100개 이상의 다큐멘터리를 제작했습니다."
    : "Founded in 2001, IMTV Ltd. has been continuously growing based on the trust of Korean and foreign broadcasters and platforms. For 20 years our talented writers, creators, and directors have produced over 60 television programs, films and dramas and over 100 documentaries.";

  return (
    <>
      <Header headerStyle={"header initialPos"} />
      <div className="about">
        <div className="about__Container">
          <div className="about__Intro">
            <h1>{lang ? "imtv에 대해" : "about imtv"}</h1>
            <h5>{aboutText}</h5>
          </div>
          <div className="about__Partners">
            <h1>{lang ? "파트너" : "partners"}</h1>
            <AboutPartners />
          </div>
        </div>
        {/* <div className="about__CompanyContainer">
          <h1>{lang ? "20년의 생산" : "twenty years of production"}</h1>
          <AboutHistory />
        </div> */}
        <div className="about__StaffContainer">
          <h1>{lang ? "핵심 팀" : "key team"}</h1>
          <AboutStaff staffList={staffList} />
          <p className="about__StaffWebDev">
            {lang
              ? "롬박 마틴은 개발한 웹사이트가 개발되었습니다."
              : "Website developed by Martin Rombach"}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
