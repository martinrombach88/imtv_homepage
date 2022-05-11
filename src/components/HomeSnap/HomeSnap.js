import "./HomeSnap.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import Arrow from "../Arrow/Arrow";

const HomeSnap = ({
  article,
  component,
  leftImage,
  textSection,
  object,
  styleObject,
  changeClass,
  noImage,
}) => {
  const lang = useLang();
  const navigate = useNavigate();

  let content = null;
  let section = null;
  if (object && article && !noImage) {
    content = (
      <>
        <img
          src={object.image}
          className="homesnap__Image"
          alt={object.mainTitleKR}
          onClick={() => navigate("/news_article", { state: { article } })}
        />
        <img
          src={object.imageWide}
          className="homesnap__ImageMobile"
          alt={object.mainTitleKR}
          onClick={() => navigate("/news_article", { state: { article } })}
        />
      </>
    );
  } else if (object && !article && !noImage) {
    content = (
      <>
        <img
          src={object.image}
          alt={object.mainTitleKR}
          className="homesnap__Image"
        />
        <img
          src={object.imageWide}
          alt={object.mainTitleKR}
          className="homesnap__ImageMobile"
        />
      </>
    );
  } else if (noImage) {
    content = null;
  }

  if (component) {
    content = component;
  } else if (textSection) {
    section = (
      <div className="homesnap__Content" style={styleObject}>
        <div className="homesnap__TextSection">
          {lang ? (
            <h1>{object.mainTitleKR}</h1>
          ) : (
            <h1>{object.mainTitleENG}</h1>
          )}

          {lang ? <h4>{object.subTitleKR}</h4> : <h4>{object.subTitleENG}</h4>}
        </div>
        <Arrow />
      </div>
    );
  } else {
    section = (
      <>
        <div className="homesnap__Content" style={styleObject}>
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

            {lang ? (
              <h4>{object.subTitleKR}</h4>
            ) : (
              <h5>{object.subTitleENG}</h5>
            )}
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

          <Arrow />
        </div>
      </>
    );
  }
  if (leftImage) {
    return (
      <div className={changeClass ? changeClass : "homesnap"}>
        {section}
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
      </div>
    );
  } else {
    return (
      <div className={changeClass ? changeClass : "homesnap"}>
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
  }
};

export default HomeSnap;
