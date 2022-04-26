import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const AboutStaffMember = ({ staffMember }) => {
  const lang = useLang();

  const src = staffMember.image
    ? staffMember.image
    : "/assets/images/staff/placeholder.jpg";
  const navigate = useNavigate();
  return (
    <div className="about__StaffMember">
      <div>
        <img
          className="about__StaffIcon"
          src={src}
          alt={lang ? staffMember.titleKR : staffMember.titleENG}
        />
        <div className="about__StaffTitle">
          <h5>{lang ? staffMember.titleKR : staffMember.titleENG}</h5>
          <h5>{lang ? staffMember.nameKR : staffMember.nameENG}</h5>
        </div>

        <div className="about__Info">
          <button
            type="button"
            className="btn btn-secondary "
            onClick={() => navigate("/profile", { state: staffMember })}
          >
            Profile Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutStaffMember;
