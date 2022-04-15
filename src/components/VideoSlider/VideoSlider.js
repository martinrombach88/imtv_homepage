import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VideoSlider = () => {
  const navigate = useNavigate();
  const sliderVids = [
    {
      id: 1,
      title: "Mr Zoo",
      src: "./assets/videos/mrZooClip.mp4",
      prop_src: "./assets/videos/mrZooFull.mp4",
    },
    {
      id: 2,
      title: "Stranger",
      src: "./assets/videos/strangerClip.mp4",
      prop_src: "./assets/videos/strangerFull.mp4",
    },
  ];
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
                interval="50"
              />
              <Carousel.Caption bsPrefix="carousel__h3">
                <h3>{sliderVid.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoSlider;
