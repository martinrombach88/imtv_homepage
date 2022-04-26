import Header from "../Header/Header";
import Footer from "../Header/Footer";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
const Contact = () => {
  const lang = useLang();
  const navigate = useNavigate();
  const contactDetailsENG = (
    <div className="contact__Details">
      <div className="contact__Address">
        <h5>
          1202 ho, 434, Sangam IT Tower, Sangam-Dong, Mapo-Gu, Seoul, 03922
        </h5>
        <h5>TEL. 02-780-0350</h5>
      </div>
      <div className="contact__Directions">
        <h5>
          Public Transportation Information Line 6 / Airport Line Digital Media
          City Station Exit 9 Approximately 1.2km walk from the exit
          (approximately 20 minutes walk)
        </h5>
      </div>
    </div>
  );

  const contactDetailsKR = (
    <div className="contact__Details">
      <div className="contact__Address">
        <h5>
          오시는 길 안내 서울시 마포구 월드컵북로 434, 1202호 (상암동,
          상암IT타워) 지번 : 상암동 1590 | (우) 03922
        </h5>
        <h5>TEL. 02-780-0350</h5>
      </div>
      <div className="contact__Directions">
        <h4>
          대중교통 이용안내 6호선 / 공항선 디지털미디어시티역 9번 출구 9번
          출구에서 도보로 약 1.2km (도보로 약 20분 소요)
        </h4>
      </div>
    </div>
  );
  let contactDetails = lang ? contactDetailsKR : contactDetailsENG;
  return (
    <>
      <Header headerStyle={"header initialPos"} />
      <div className="contact">
        <h1>contact</h1>
        <div className="contact__Buttons">
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => navigate("/proposal")}
          >
            {lang ? "프로젝트를 제안해" : "Propose a Project"}
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => navigate("/inquiry")}
          >
            {lang ? "사업 협력 관계 시작" : "Start a Partnership"}
          </button>
        </div>
        <div className="contact__General">
          <div className="contact__Map">
            <iframe
              width="600"
              height="280"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqZzYim2ZfDURj9rUZJUavWo&key=AIzaSyBdomiOKlDqVL_pXimPVEzEZ3JUZ2Vj3zU"
              title="imtv-map"
            ></iframe>
          </div>

          {contactDetails}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
