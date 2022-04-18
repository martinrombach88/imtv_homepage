import { useNavigate } from "react-router-dom";
const NewsCards = ({ currentPosts }) => {
  const navigate = useNavigate();
  const renderedCards = currentPosts.map((card, index) => {
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
  return <div className="news__Cards">{renderedCards}</div>;
};

export default NewsCards;
