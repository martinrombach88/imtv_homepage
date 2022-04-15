import Header from "../Header/Header";
import "./Media.css";
import MediaItem from "./MediaItem";

const Media = () => {
  const mediaList = [
    {
      id: 1,
      title: "Mr Zoo",
      mediaImg: "./assets/images/mrZooWide.jpg",
      src: "./assets/videos/mrZooClip.mp4",
      prop_src: "./assets/videos/mrZooFull.mp4",
    },
    {
      id: 2,
      title: "Stranger",
      mediaImg: "./assets/images/strangerWide.jpg",
      src: "./assets/videos/strangerClip.mp4",
      prop_src: "./assets/videos/strangerFull.mp4",
    },
  ];

  return (
    <>
      <Header style={"header transHeader"} />
      {mediaList.map((media, index) => {
        return <MediaItem media={media} key={index} />;
      })}
    </>
  );
};

export default Media;
