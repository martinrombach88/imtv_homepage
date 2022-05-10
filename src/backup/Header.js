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
        <Link to="/media" className="header__Btn">
          WORK
        </Link>
        <Link to="/news" className="header__Btn">
          NEWS
        </Link>
        <Link to="/about" className=" header__Btn">
          ABOUT
        </Link>
        <Link to="/history" className=" header__Btn">
          HISTORY
        </Link>
        <Link className="header__Btn" to="/contact">
          CONTACT
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
