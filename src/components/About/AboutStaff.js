import { useLang } from "../Header/LangContext";
import { useState } from "react";
import AboutStaffName from "./AboutStaffName";
import Arrow from "./Arrow";

const AboutStaff = ({ staffList }) => {
  const lang = useLang();
  const [profile, setProfile] = useState(null);

  const staffNames = staffList.map((staffName, index) => {
    return (
      <AboutStaffName
        key={index}
        name={staffName}
        profile={profile}
        setProfile={setProfile}
      />
    );
  });

  return (
    <>
      <div className="about__Container">
        <Arrow direction={true} />
        <div className="about__StaffContainer">
          <div className="about__Staff">
            <h2>KEY TEAM</h2>
            <div className="about__StaffColumn">{staffNames}</div>
            <div className="about__StaffProfile">{profile}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStaff;
