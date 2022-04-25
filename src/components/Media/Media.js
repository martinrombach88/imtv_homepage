import Header from "../Header/Header";
import "./Media.css";
import MediaItem from "./MediaItem";
import { LangProvider } from "../Header/LangContext";

const Media = ({ mediaList }) => {
  return (
    <LangProvider>
      <Header headerStyle={"header initialPos"} />
      {mediaList.map((media, index) => {
        return <MediaItem media={media} key={index} />;
      })}
    </LangProvider>
  );
};

export default Media;
