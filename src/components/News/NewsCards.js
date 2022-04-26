import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsCards = ({ currentPosts }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const renderedCards = lang
    ? currentPosts.map((card, index) => {
        return (
          <div
            className="news__Card"
            key={index}
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            <img className="news__Image" src={card.image} alt={card.titleKR} />
            <div>
              <h6>
                {card.titleKR}
                <br />
                {card.dateKR}
              </h6>
            </div>
          </div>
        );
      })
    : currentPosts.map((card, index) => {
        return (
          <div
            className="news__Card"
            key={index}
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            <img className="news__Image" src={card.image} alt={card.titleENG} />
            <div>
              <h6>
                {card.titleENG}
                <br />
                {card.dateENG}
              </h6>
            </div>
          </div>
        );
      });
  return <div className="news__Cards">{renderedCards}</div>;
};

export default NewsCards;
