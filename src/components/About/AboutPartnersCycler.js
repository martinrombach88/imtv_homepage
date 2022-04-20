const AboutPartners = () => {
  const randomNumber = function (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
  };
  const cycler = () => {
    let krUrl = "/assets/images/partners/kr" + randomNumber(1, 22) + ".png";
    let wUrl = "/assets/images/partners/w" + randomNumber(1, 19) + ".png";
    let korWorldNum = randomNumber(1, 2);
    return korWorldNum === 1 ? krUrl : wUrl;
  };

  return (
    <section className="about__Partners">
      <h2 className="about__Title">partners</h2>
      <div className="about__PartnersCycler">
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
        <img src={cycler()} alt="" />
      </div>
    </section>
  );
};

export default AboutPartners;
