import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [langDefault, setLangDefault] = useState(true);
  const changeLang = () => {
    langDefault ? setLangDefault(false) : setLangDefault(true);
  };
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

  let currLang = langDefault ? flags.usflag.name : flags.krflag.name;
  let enFlag = langDefault ? flags.usflag.color_url : flags.usflag.grey_url;
  let krFlag = langDefault ? flags.krflag.grey_url : flags.krflag.color_url;

  return (
    <>
      <div className="header">
        <div className="header__Left">
          <img
            className="header__logo"
            src="/assets/images/logo.png"
            onClick={() => navigate("/")}
          ></img>
          <div className="header__Lang">
            <p>{currLang}</p>
            <div className="header__LangImages">
              <img
                src={enFlag}
                alt="eng"
                onClick={() => (langDefault ? "" : changeLang())}
              />
              <img
                src={krFlag}
                alt="한국어"
                onClick={() => (langDefault ? changeLang() : "")}
              />
            </div>
          </div>
        </div>

        <nav className="header__nav">
          <Link to="/portfolio" className="header__Btn header__blueBtn">
            portfolio
          </Link>
          <Link to="/news" className="header__Btn header__orangeBtn">
            news
          </Link>
          <Link to="/about" className=" header__Btn header__greenBtn">
            about imtv
          </Link>
          <Link to="/contact" className=" header__Btn header__pinkBtn">
            contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
