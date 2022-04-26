import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { useLang } from "../Header/LangContext";

const AboutProfile = () => {
  const lang = useLang();
  const { state } = useLocation();
  const navigate = useNavigate();
  const src = state.image
    ? state.image
    : "/assets/images/staff/placeholder.jpg";
  console.log(state.titleKR);
  const list = lang
    ? state.infoKR.map((info, index) => {
        return <li key={index}>{info}</li>;
      })
    : state.infoENG.map((info, index) => {
        return <li key={index}>{info}</li>;
      });
  return (
    <>
      <Header headerStyle={"header initialPos"} />
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
                {lang
                  ? state.titleKR + " " + state.nameKR
                  : state.titleENG + " " + state.nameENG}
              </h3>
              <h3></h3>
            </div>
            <ul>{list}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutProfile;
