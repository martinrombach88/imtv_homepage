import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const AboutProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const src = state.image
    ? state.image
    : "/assets/images/staff/placeholder.jpg";

  const list = state.infoENG.map((info) => {
    return <li>{info}</li>;
  });
  return (
    <>
      <Header style={"header initialPos"} />
      <div className="about__ProfileContainer">
        <div className="about__Profile">
          <div className="about__ProfileImage">
            <img src={src} alt={state.title} />
            <button
              type="button"
              className="btn btn-secondary about__ProfileExit"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
          <div className="about__ProfileInfo">
            <div className="about__ProfileTitle">
              <h3>
                {state.titleENG} {state.nameENG}
              </h3>
            </div>
            <ul>{list}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProfile;
