import Header from "../Header/Header";
import "./Media.css";
import MediaItem from "./MediaItem";

const Media = ({ mediaList }) => {
  return (
    <>
      <Header style={"header initialPos"} />
      {mediaList.map((media, index) => {
        return <MediaItem media={media} key={index} />;
      })}
    </>
  );
};

export default Media;
