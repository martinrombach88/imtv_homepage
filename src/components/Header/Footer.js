import { useLang } from "./LangContext";

const Footer = () => {
  const lang = useLang();
  const footerText = lang
    ? "(주)아이엠티브이 ‌ 서울시 마포구 월드컵북로 434, 1202호 | (상암동,상암IT타워) 대표번호 : 02-780-0350"
    : "1202 ho, 434, Sangam IT Tower, Sangam-Dong, Mapo-Gu, Seoul, 03922 | TEL. 02-780-0350";

  return (
    <div className="footer">
      <p>{footerText}</p>
      <p>Copyright IMTV All Rights Reserved</p>
    </div>
  );
};

export default Footer;
