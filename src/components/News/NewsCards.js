import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsCards = ({ currentPosts, home, pagination }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const renderedCards = currentPosts.map((card, index) => {
    if (home) {
      return (
        <div key={index} className="newsHome">
          <div
            className="newsHome__ImageContainer"
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            <img
              className="newsHome__Image"
              src={card.imageLarge}
              alt={lang ? card.titleKR : card.titleENG}
            />
          </div>

          <div className="newsHome__ContentContainer">
            <h6 className="homesnap__SmallTitle">
              {lang ? "최신 뉴스" : "latest news"}
            </h6>
            <div className="homesnap__Title">
              <h4 className="homesnap__MainTitle">
                {lang ? card.titleKR : card.titleENG}
              </h4>
              <h5 className="homesnap__SubTitle">
                {lang ? card.dateKR : card.dateENG}
              </h5>
            </div>

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

  return home ? (
    renderedCards
  ) : (
    <div className="news__Cards">{renderedCards}</div>
  );
};

export default NewsCards;
