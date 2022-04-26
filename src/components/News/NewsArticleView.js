import Header from "../Header/Header";
import "./News.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsArticleView = () => {
  const state = useLocation();
  const navigate = useNavigate();
  const article = state.state.article;
  const lang = useLang();
  let articleImage2 = article.image2 ? (
    <img src={article.image2} alt={article.titleKR} />
  ) : (
    ""
  );

  const body = lang
    ? article.bodyKR.map((newsParagraph, index) => {
        return <p key={index}>{newsParagraph}</p>;
      })
    : article.bodyENG.map((newsParagraph, index) => {
        return <p key={index}>{newsParagraph}</p>;
      });
  return (
    <>
      <Header headerStyle={"header initialPos"} />
      <div className="news news__Article">
        <h3>{lang ? article.titleKR : article.titleENG}</h3>
        <img src={article.image} alt={article.titleKR} />
        {articleImage2}

        <div className="news__ArticleBody">
          {body}
          <div>
            {lang ? article.dateKR + " 썼습니다" : "Written " + article.dateENG}
            .
          </div>
        </div>

        <p className="news__ArticleReturn" onClick={() => navigate(-1)}>
          {lang ? "뉴스 돌아가" : "Back to News"}
        </p>
      </div>
    </>
  );
};

export default NewsArticleView;
