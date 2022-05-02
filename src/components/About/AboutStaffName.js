import { useLang } from "../Header/LangContext";

const AboutStaffName = ({ name }) => {
  const lang = useLang();
  return (
    <div className="about__StaffName">
      {lang ? name.nameKR : name.nameENG}
      <br />
      {lang ? name.titleKR : name.titleENG}
    </div>
  );
};

export default AboutStaffName;
