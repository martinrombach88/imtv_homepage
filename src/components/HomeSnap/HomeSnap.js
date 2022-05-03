import "./HomeSnap.css";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const HomeSnap = ({ object, component, article, styleObject }) => {
  const lang = useLang();
  const navigate = useNavigate();
  let content = null;
  let section = null;
  if (object && article) {
    content = (
      <img
        src={object.image}
        alt=""
        className="homesnap__Image"
        onClick={() => navigate("/news_article", { state: { article } })}
      />
    );
  }
  if (component) {
    content = component;
  } else {
    section = (
      <div
        className="homesnap__Content"
        style={{ backgroundColor: object.backgroundColor, color: object.color }}
      >
        {lang ? (
          <h5>{object.smallTitleKR}</h5>
        ) : (
          <h5>{object.smallTitleENG}</h5>
        )}

        <div>
          {lang ? (
            <h1>{object.mainTitleKR}</h1>
          ) : (
            <h3>{object.mainTitleENG}</h3>
          )}

          {lang ? <h4>{object.subTitleKR}</h4> : <h5>{object.subTitleENG}</h5>}
        </div>

        {lang ? (
          <p
            style={{ fontSize: "1.2em" }}
            className="homesnap__Btn"
            to="news_article"
            onClick={() => navigate("/news_article", { state: { article } })}
            state={{ lang }}
          >
            프로젝트 보기
          </p>
        ) : (
          <p
            style={{ fontSize: "1em" }}
            className="homesnap__Btn"
            to="news_article"
            onClick={() => navigate("/news_article", { state: { article } })}
          >
            View Project
          </p>
        )}
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
        style={styleObject}
      >
        {content}
      </div>
      {section}
    </div>
  );
};

export default HomeSnap;
