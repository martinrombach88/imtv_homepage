const MediaItem = (media) => {
  return (
    <div className="media__Container">
      <img className="media__Img" src={media.media.mediaImg}></img>
    </div>
  );
};

export default MediaItem;
