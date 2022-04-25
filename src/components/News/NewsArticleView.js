import Header from "../Header/Header";
import "./News.css";
import { useLocation, useNavigate } from "react-router-dom";

const NewsArticleView = () => {
  const state = useLocation();
  const navigate = useNavigate();
  const article = state.state.article;
  let articleImage2 = article.image2 ? (
    <img src={article.image2} alt={article.title} />
  ) : (
    ""
  );
  return (
    <div className="news news__Article">
      <Header headerStyle={"header initialPos"} />
      <h3>{article.title}</h3>
      <img src={article.image} alt={article.title} />
      {articleImage2}

      <div className="news__ArticleBody">
        {article.body.map((newsParagraph, index) => {
          return <p key={index}>{newsParagraph}</p>;
        })}
        <div>{article.date} 썼습니다.</div>
      </div>

      <p className="news__ArticleReturn" onClick={() => navigate(-1)}>
        뉴스 돌아가
      </p>
    </div>
  );
};

export default NewsArticleView;
