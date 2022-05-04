import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useLang, useLangUpdate } from "./LangContext";

const Header = ({ headerStyle }) => {
  const lang = useLang();
  const toggleLang = useLangUpdate();
  const navigate = useNavigate();

  let koText = lang ? "header__Active" : "header__Inactive";
  let enText = lang ? "header__Inactive" : "header__Active";

  return (
    <nav className={headerStyle}>
      <div className="header__Left">
        <img
          className="header__logo"
          alt="logo"
          src="/assets/images/logo.png"
          onClick={() => navigate("/")}
        ></img>
      </div>

      <div className="header__Nav">
        <Link to="/media" className="header__Btn" state={{ lang: lang }}>
          WORK
          {/* {lang ? "우리 매체" : "WORK"} */}
        </Link>
        <Link to="/news" className="header__Btn">
          NEWS
          {/* {lang ? "최신 뉴스" : "NEWS"} */}
        </Link>
        <Link to="/about" className=" header__Btn">
          ABOUT
          {/* {lang ? "imtv 회사 개요" : "ABOUT"} */}
        </Link>
        <Link to="/history" className=" header__Btn">
          HISTORY
          {/* {lang ? "imtv 회사 개요" : "HISTORY"} */}
        </Link>
        <Link className="header__Btn" to="/contact" state={{ lang }}>
          CONTACT
          {/* {lang ? "연락" : "CONTACT"} */}
        </Link>
      </div>

      <div className="header__Lang ">
        <div className={koText} onClick={lang ? null : toggleLang}>
          KO
        </div>
        <div className="header__LangDivider">|</div>

        <div className={enText} onClick={lang ? toggleLang : null}>
          EN
        </div>
      </div>
    </nav>
  );
};

export default Header;
