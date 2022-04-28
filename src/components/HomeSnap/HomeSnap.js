import "./HomeSnap.css";

const HomeSnap = ({ title, text, img }) => {
  return (
    <div className="homesnap">
      <div className="homesnap__ImageContainer">
        <img src={img} alt={title} className="homesnap__Image" />
      </div>
      <div className="homesnap__Content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HomeSnap;
