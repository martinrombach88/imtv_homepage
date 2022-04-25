import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { useLang, useLangUpdate } from "./LangContext";

const Header = ({ style }) => {
  const headerStyle = style;
  const lang = useLang();
  const toggleLang = useLangUpdate();
  const navigate = useNavigate();

  let flags = {
    usflag: {
      name: "Eng",
      color_url: "/assets/images/us_flag.png",
      grey_url: "/assets/images/us_flag_grey.png",
    },
    krflag: {
      name: "한국어",
      color_url: "/assets/images/kr_flag.png",
      grey_url: "/assets/images/kr_flag_grey.png",
    },
  };

  let koText = lang ? "" : ".header__GreyText";
  let enText = lang ? ".header__GreyText" : "";
  let currLang = lang ? flags.krflag.name : flags.usflag.name;
  let krFlag = lang ? flags.krflag.color_url : flags.krflag.grey_url;
  let enFlag = lang ? flags.usflag.grey_url : flags.usflag.color_url;

  return (
    <>
      <div className={headerStyle}>
        <div className="header__Left">
          <img
            className="header__logo"
            src="/assets/images/logo.png"
            onClick={() => navigate("/")}
          ></img>
          <div className="header__Lang">
            <div className="header__LangImages">
              <div
                className="header__Toggle"
                onClick={lang ? null : toggleLang}
              >
                <p className={koText}>KO</p>
                <img src={krFlag} alt="한국어" />
              </div>
              <div
                className="header__Toggle"
                onClick={lang ? toggleLang : null}
              >
                <p className={enText}>EN</p>
                <img src={enFlag} alt="eng" />
              </div>
            </div>
          </div>
        </div>

        <nav className="header__nav">
          <Link
            to="/media"
            className="header__Btn header__blueBtn"
            state={{ lang: lang }}
          >
            {lang ? "우리 매체" : "our media"}
          </Link>
          <Link to="/news" className="header__Btn header__orangeBtn">
            {lang ? "최신 뉴스" : "latest news"}
          </Link>
          <Link to="/about" className=" header__Btn header__greenBtn">
            {lang ? "imtv 회사 개요" : "about imtv"}
          </Link>
          <Link
            to="/contact"
            state={{ lang }}
            className=" header__Btn header__pinkBtn"
          >
            {lang ? "연락" : "contact us"}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
