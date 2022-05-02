import { useLang } from "../Header/LangContext";

const AboutStaffName = ({ name, setProfile }) => {
  const lang = useLang();
  const infoListKR = name.infoKR.map((info, index) => {
    return <li key={index}>{info}</li>;
  });
  const infoListENG = name.infoENG.map((info, index) => {
    return <li key={index}>{info}</li>;
  });

  const fullProfile = lang ? (
    <div>
      <h2 className="about__StaffContentHeader">{name.nameKR}</h2>
      <h2>{name.titleKR}</h2>
      <ul>{infoListKR}</ul>
    </div>
  ) : (
    <div>
      <h2 className="about__StaffContentHeader">{name.nameENG}</h2>
      <h2>{name.titleENG}</h2>
      <ul>{infoListENG}</ul>
    </div>
  );

  return (
    <div className="about__StaffName" onClick={() => setProfile(fullProfile)}>
      <h5>{lang ? name.nameKR : name.nameENG}</h5>
      <h6>{lang ? name.titleKR : name.titleENG}</h6>
    </div>
  );
};

export default AboutStaffName;
