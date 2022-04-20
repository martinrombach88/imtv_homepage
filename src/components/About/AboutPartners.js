const AboutPartners = () => {
  const generateImages = (kNum, wNum) => {
    let url = "/assets/images/partners/";
    let urlArray = [];
    for (let i = 1; i <= kNum; i++) {
      urlArray.push(url + "kr" + i + ".png");
      console.log(url + "kr" + i + ".png");
    }
    for (let i = 1; i <= wNum; i++) {
      urlArray.push(url + "w" + i + ".png");
      console.log(url + "w" + i + ".png");
    }
    const renderedImages = urlArray.map((url, index) => {
      return <img src={url} key={index} alt="partner" />;
    });
    return renderedImages;
  };

  const renderedImages = generateImages(22, 19);

  return (
    <div className="about__Partners">
      <h1>partners</h1>
      <div className="about__PartnersCycler">
        <div>{renderedImages}</div>
      </div>
    </div>
  );
};

export default AboutPartners;
