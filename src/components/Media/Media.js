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
      channels: "Netflix, Cinematic Release",
      date: "January 22nd, 2020",
      director: "Tae Yun Kim",
      writer: "Tae Yun Kim",
      starring: "Lee Sung-Min, Kim Seo-Hyeong, Shin Ha-Kyun",
      description:
        "During a botched operation, a secret agent is unwittingly given the power to talk to animals.",
    },
    {
      id: 2,
      title: "Stranger",
      mediaImg: "./assets/images/strangerWide.jpg",
      src: "./assets/videos/strangerClip.mp4",
      prop_src: "./assets/videos/strangerFull.mp4",
      channels: "Netflix",
      date: "2017",
      director: "Gil Ho Ahn",
      writer: "Soo Yun Lee",
      starring: "Cho Seung-Woo, Bae Doona, Yoo Jae-Myung",
      description:
        "With the help of a gutsy female detective, a prosecutor who has almost lost the ability to feel emotions tackles a strange murder case amid political corruption.",
    },
  ];

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
