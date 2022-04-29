import "./HomeSnap.css";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const HomeSnap = ({ object, component }) => {
  const lang = useLang();
  const navigate = useNavigate();
  let content = null;
  let section = null;
  if (object) {
    content = <img src={object.image} alt="" className="homesnap__Image" />;
  }
  if (component) {
    content = component;
  } else {
    section = (
      <div
        className="homesnap__Content"
        style={{ backgroundColor: object.backgroundColor, color: object.color }}
      >
        <h6 className="homesnap__SmallTitle">
          {lang ? object.smallTitleKR : object.smallTitleENG}
        </h6>
        <div className="homesnap__Title">
          <h3 className="homesnap__MainTitle">
            {lang ? object.mainTitleKR : object.mainTitleENG}
          </h3>
          <h5 className="homesnap__SubTitle">
            {lang ? object.subTitleKR : object.subTitleENG}
          </h5>
        </div>

        <Link className="homesnap__Btn" to="/contact" state={{ lang }}>
          View Project
        </Link>
      </div>
    );
  }

  return (
    <div className="homesnap">
      <div
        className={
          component
            ? "homesnap__ComponentContainer"
            : "homesnap__ContentContainer"
        }
      >
        {content}
      </div>
      {section}
    </div>
  );
};

export default HomeSnap;
