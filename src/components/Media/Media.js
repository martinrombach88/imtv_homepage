import Header from "../Header/Header";
import "./Media.css";
import MediaItem from "./MediaItem";
import MediaItemMobile from "./MediaItemMobile";
import Footer from "../Header/Footer";

const Media = ({ mediaList }) => {
  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      {mediaList.map((media, index) => {
        return <MediaItem media={media} key={index} />;
      })}
      {mediaList.map((media, index) => {
        return <MediaItemMobile media={media} key={index} />;
      })}
      <Footer />
    </div>
  );
};

export default Media;
