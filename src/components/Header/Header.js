import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const langEng = true;
  const navigate = useNavigate();
  const enFlag = "/assets/images/us_flag.png";
  const krFlag = "/assets/images/kr_flag.png";
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
            lang
            <div>
              <img src={enFlag} alt="eng" /> <img src={krFlag} alt="한국어" />
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
