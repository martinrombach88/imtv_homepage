import Header from "../Header/Header";
import "./News.css";
import hangugoNewsList from "./newsList.js";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  let list = hangugoNewsList;
  const renderedCards = list.map((card, index) => {
    return (
      <div
        className="news__Card"
        key={index}
        onClick={() => navigate("/news_article", { state: { article: card } })}
      >
        <img className="news__Image" src={card.image} alt={card.title} />
        <div>
          <h6>
            {card.title}
            <br />
            {card.date}
          </h6>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header style={"header initialPos"} />
      <div className="news">
        <h1>최신 뉴스</h1>
        <div className="news__Cards">{renderedCards}</div>
      </div>
    </>
  );
};

export default News;
