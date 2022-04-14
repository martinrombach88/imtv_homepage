import { Link, useNavigate } from "react-router-dom";
import HeaderBtn from "./HeaderBtn";
import "./Header.css";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header" onClick={() => navigate("/")}>
        <img className="header__logo" src="/assets/images/logo.png"></img>

        <nav className="header__nav">
          <Link to="/portfolio" className="header__blueBtn header__Btn">
            Portfolio
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
