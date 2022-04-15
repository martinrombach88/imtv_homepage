import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MediaItem = (media) => {
  let mediaItem = media.media;
  const navigate = useNavigate();
  const [itemHover, setItemHover] = useState(false);

  const imageEnter = () => {
    setItemHover(true);
  };

  const imageLeave = () => {
    setItemHover(false);
  };

  function changeClass() {
    return `${itemHover ? "media__Details" : "media__Hide"}`;
  }

  function changeClassImage() {
    return `${itemHover ? "media__Img media__ImgDark" : "media__Img"}`;
  }

  return (
    <div
      className="media__Container"
      onMouseEnter={imageEnter}
      onMouseLeave={imageLeave}
    >
      <img className={changeClassImage()} src={mediaItem.mediaImg}></img>
      <div className={changeClass()}>
        <h2>{mediaItem.title}</h2>
        <h5>{mediaItem.description}</h5>
        <ul>
          <li>Available on: {mediaItem.channels}</li>
          <li>Release Date: {mediaItem.date}</li>
          <li>Starring: {mediaItem.starring}</li>
          <li>
            Directed by: {mediaItem.director}, Written by: {mediaItem.writer}
          </li>
        </ul>
        <button
          className="btn btn-outline-light"
          onClick={() => navigate("/video", { state: mediaItem })}
        >
          <h5>Watch Trailer</h5>
        </button>
      </div>
    </div>
  );
};

export default MediaItem;
