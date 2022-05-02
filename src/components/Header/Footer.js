import { useLang } from "./LangContext";
import Arrow from "../About/Arrow.js";

const Footer = ({ arrow }) => {
  const lang = useLang();
  const footerText = lang
    ? "(주)아이엠티브이 ‌ 서울시 마포구 월드컵북로 434, 1202호 | (상암동,상암IT타워) 대표번호 : 02-780-0350"
    : "1202 ho, 434, Sangam IT Tower, Sangam-Dong, Mapo-Gu, Seoul, 03922 | TEL. 02-780-0350";

  return arrow ? (
    <div className="footer__ArrowDiv">
      <Arrow className="footer__Arrow" home={true} />
    </div>
  ) : (
    <div className="footer">
      <p>Copyright IMTV All Rights Reserved</p>
      <p className="about__StaffWebDev">
        {lang
          ? "롬박 마틴은 개발한 웹사이트가 개발되었습니다."
          : "Website developed by Martin Rombach"}
      </p>
    </div>
  );
};

export default Footer;
