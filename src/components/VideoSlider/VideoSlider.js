import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const VideoSlider = () => {
  const sliderVids = [
    {
      id: 1,
      title: "Mr Zoo",
      src: "./assets/videos/mrZooClip.mp4",
    },
    {
      id: 2,
      title: "Stranger",
      src: "./assets/videos/strangerClip.mp4",
    },
  ];
  return (
    <div className="carousel__Container">
      <Carousel>
        {sliderVids.map((sliderVid) => {
          return (
            <Carousel.Item key={sliderVid.id}>
              <ReactPlayer
                url={sliderVid.src}
                playing={true}
                controls={false}
                loop={true}
                muted={true}
                width="100%"
                height="100%"
                indicators={false}
                interval="50"
              />
              <Carousel.Caption>
                <Link to="/portfolio">
                  <h3>{sliderVid.title}</h3>
                </Link>
                <p>{sliderVid.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default VideoSlider;
