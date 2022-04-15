import ReactPlayer from "react-player";
import Header from "../Header/Header.js";
import "./VideoPlayer.css";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="video__Bg">
      <ReactPlayer
        style={{ backgroundColor: "black", margin: 0, padding: 0 }}
        url={state.prop_src}
        playing={true}
        controls={true}
        loop={false}
        muted={false}
        width="100%"
        height="99vh"
      />
      <p className="video__Exit" onClick={() => navigate(-1)}>
        X
      </p>
    </div>
  );
};

export default VideoPlayer;
