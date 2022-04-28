import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const VideoSlider = ({ mediaList }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const sliderVids = mediaList;

  return (
    <div className="carousel__Container">
      <Carousel>
        {sliderVids.map((sliderVid) => {
          return (
            <Carousel.Item key={sliderVid.id}>
              <ReactPlayer
                onClick={() => navigate("/video", { state: sliderVid })}
                url={sliderVid.src}
                playing={true}
                controls={false}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
              />
              <Carousel.Caption bsPrefix="carousel__Details">
                <h1>{lang ? sliderVid.titleKR : sliderVid.titleENG}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoSlider;
