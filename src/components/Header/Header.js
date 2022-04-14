import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="/assets/images/logo.png"
          onClick={() => navigate("/")}
        ></img>

        <nav className="header__nav">
          <div className="header__BtnDiv">
            <Link to="/portfolio" className="header__Btn header__blueBtn">
              portfolio
            </Link>
          </div>
          <Link to="/news" className="header__Btn header__orangeBtn">
            news
          </Link>
          <Link to="/about" className=" header__Btn header__greenBtn">
            about imtv
          </Link>
          <Link to="/contact" className=" header__Btn header__pinkBtn">
            contact
          </Link>
          <div className="header__Btn header__Lang">언어 바꾸다</div>
        </nav>
      </div>
    </>
  );
};

export default Header;
