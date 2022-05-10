import { Link } from "react-router-dom";

const HeaderLinks = () => {
  return (
    <>
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
      <Link to="/contact" className="header__Btn">
        CONTACT
      </Link>
    </>
  );
};

export default HeaderLinks;
