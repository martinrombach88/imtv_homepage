import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsCards = ({ currentPosts, home, pagination }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const renderedCards = currentPosts.map((card, index) => {
    if (home) {
      return (
        <div className="newsHome" key={index}>
          <div
            className="newsHome__ImageContainer"
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            <img
              className={home ? "news__ImageHome" : "news__Image"}
              src={card.image}
              alt={card.titleKR}
            />
          </div>

          <div className="news__ContentHomeContainer">
            <h4>
              {card.titleKR}
              {card.dateKR}
            </h4>
            {pagination}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="news__Card"
          key={index}
          onClick={() =>
            navigate("/news_article", { state: { article: card } })
          }
        >
          <img
            className="news__Image"
            src={card.image}
            alt={lang ? card.titleKR : card.titleENG}
          />
          <div>
            <h6>
              {lang ? card.titleKR : card.titleENG}
              <br />
              {lang ? card.dateKR : card.dateENG}
            </h6>
          </div>
        </div>
      );
    }
  });
  return (
    <div className={home ? "news__Home" : "news__Cards"}>{renderedCards}</div>
  );
};

export default NewsCards;
