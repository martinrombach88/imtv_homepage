import AboutStaffMember from "./AboutStaffMember.js";

const AboutStaff = ({ staffList }) => {
  const aboutStaffMembers = staffList.map((member, index) => {
    if (member.titleENG !== "CEO") {
      return <AboutStaffMember key={index} staffMember={member} />;
    } else {
      return null;
    }
  });

  return (
    <>
      <div className="about__Staff">
        <AboutStaffMember staffMember={staffList[0]} />
      </div>
      <div className="about__Staff">{aboutStaffMembers}</div>
    </>
  );
};

export default AboutStaff;
