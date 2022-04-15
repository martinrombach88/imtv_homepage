import ReactPlayer from "react-player";
import Header from "../Header/Header.js";
import "./VideoPlayer.css";
import { useLocation, Link } from "react-router-dom";

const VideoPlayer = () => {
  const { state } = useLocation();
  return (
    <div className="video__Bg">
      <ReactPlayer
        url={state.prop_src}
        playing={true}
        controls={true}
        loop={false}
        muted={false}
        width="100%"
        height="99vh"
      />
      <Link to="/" className="video__Exit">
        X
      </Link>
    </div>
  );
};

export default VideoPlayer;
