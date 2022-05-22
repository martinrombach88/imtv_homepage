import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import Footer from "../Header/Footer";

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
                url={sliderVid.clipVid}
                playing={true}
                controls={false}
                loop={true}
                muted={true}
                height="125vh"
                width="100%"
                config={{
                  youtube: {
                    controls: 0,
                  },
                }}
              />
              <Carousel.Caption
                bsPrefix="carousel__Details"
                onClick={() => navigate("/video", { state: sliderVid })}
              >
                <h1>{lang ? sliderVid.titleKR : sliderVid.titleENG}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Footer arrow={true} />
    </div>
  );
};

export default VideoSlider;
