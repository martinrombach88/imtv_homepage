import { useLang } from "../Header/LangContext";
import Arrow from "./Arrow";

const AboutIntro = ({ imageObject }) => {
  const lang = useLang();
  const aboutTextArray = lang
    ? [
        "2001년 설립된 (주)아이엠티비는 국내외 방송사와 플랫폼의 신뢰를 바탕으로 지속적으로 성장해 왔습니다.",
        "20년 동안 재능 있는 작가, 제작자 및 감독은 60개 이상의 TV 프로그램, 영화 및 드라마와 100개 이상의 다큐멘터리를 제작했습니다.",
      ]
    : [
        "Founded in 2001, IMTV Ltd. has been continuously growing based on the trust of Korean and foreign broadcasters and platforms.",
        "For 20 years our talented writers, creators, and directors have produced over 60 television programs, films and dramas and over 100 documentaries.",
      ];
  return (
    <div className="about__Container">
      <div className="about__Intro">
        <h1>{lang ? "IMTV에 대해" : "ABOUT IMTV"}</h1>
        {aboutTextArray.map((text, index) => {
          return <h5 key={index}>{text}</h5>;
        })}
      </div>
      <Arrow />
    </div>
  );
};

export default AboutIntro;
