import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const x = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-box-arrow-left"
      viewBox="0 0 16 16"
    >
      <path d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
      <path
        fill-rule="evenodd"
        d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
      />
    </svg>
  );
  return (
    <div className="video__Bg">
      <ReactPlayer
        style={{ backgroundColor: "black", margin: 0, padding: 0 }}
        url={state.fullVid}
        playing={true}
        controls={true}
        loop={false}
        muted={false}
        width="100%"
        height="99vh"
      />
      <p className="video__Exit" onClick={() => navigate(-1)}>
        {x}
      </p>
    </div>
  );
};

export default VideoPlayer;
