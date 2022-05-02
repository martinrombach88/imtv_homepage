import { useLang } from "../Header/LangContext";
import { useState } from "react";
import AboutStaffName from "./AboutStaffName";
import Arrow from "./Arrow";

const AboutStaff = ({ staffList }) => {
  const lang = useLang();
  const [profile, setProfile] = useState("Key Team");
  const staffNames = staffList.map((staffName, index) => {
    return (
      <AboutStaffName
        key={index}
        name={staffName}
        onClick={() => console.log("click")}
      />
    );
  });

  return (
    <>
      <div className="about__Container">
        <div className="about__StaffContainer">
          <h1>{lang ? "핵심 팀" : "Key Team"}</h1>
          <div className="about__Staff">
            <div className="about__StaffColumn">{staffNames}</div>
            <div className="about__StaffProfile">{profile}</div>
          </div>
        </div>
        <Arrow direction={true} />
      </div>
    </>
  );
};

export default AboutStaff;
