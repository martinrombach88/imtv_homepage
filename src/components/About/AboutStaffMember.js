import { useNavigate } from "react-router-dom";

const AboutStaffMember = ({ staffMember }) => {
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
          alt={staffMember.titleENG}
        />
        <div className="about__StaffTitle">
          <h5>{staffMember.titleENG}</h5>
          <h5>{staffMember.nameENG}</h5>
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
