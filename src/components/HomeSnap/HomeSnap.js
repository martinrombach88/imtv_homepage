import "./HomeSnap.css";

const HomeSnap = ({ title, text, img, component }) => {
  let content = null;
  let section = null;
  if (img) {
    content = <img src={img} alt={title} className="homesnap__Image" />;
  }
  if (component) {
    content = component;
  } else {
    section = (
      <div className="homesnap__Content">
        <h2>{title}</h2>
        <p>{text}</p>
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
      >
        {content}
      </div>
      {section}
    </div>
  );
};

export default HomeSnap;
