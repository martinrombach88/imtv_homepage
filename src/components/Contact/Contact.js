import Header from "../Header/Header";
import Footer from "../Header/Footer";
import "./Contact.css";
import { useNavigate, useLocation } from "react-router-dom";
import { LangProvider, useLang, useLangUpdate } from "../Header/LangContext";
const Contact = () => {
  const lang = useLang();
  // const updateLang = useLangUpdate();
  // const state = useLocation();
  // if (state.state.lang != lang) {
  //   updateLang(state.state.lang);
  // }
  const navigate = useNavigate();

  return (
    <LangProvider>
      <Header style={"header initialPos"} />
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
            Start a Partnership
          </button>
        </div>
        <div className="contact__General">
          {/* <div className="contact__Map">
            <iframe
              width="600"
              height="280"
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqZzYim2ZfDURj9rUZJUavWo&key=AIzaSyBdomiOKlDqVL_pXimPVEzEZ3JUZ2Vj3zU"
            ></iframe>
          </div> */}
          <div className="contact__DetailsENG">
            <div className="contact__AddressENG">
              <h5>
                1202 ho, 434, Sangam IT Tower, Sangam-Dong, Mapo-Gu, Seoul,
                03922
              </h5>
              <h5>TEL. 02-780-0350</h5>
            </div>
            <div className="contact__DirectionsENG">
              <h5>
                Public Transportation Information Line 6 / Airport Line Digital
                Media City Station Exit 9 Approximately 1.2km walk from the exit
                (approximately 20 minutes walk)
              </h5>
            </div>
          </div>
          {/* <div className="contact__DetailsKR">
            <h4>
              오시는 길 안내 서울시 마포구 월드컵북로 434, 1202호 (상암동,
              상암IT타워) 지번 : 상암동 1590 | (우) 03922 | TEL. 02-780-0350
            </h4>

            <h4>
              대중교통 이용안내 6호선 / 공항선 디지털미디어시티역 9번 출구 9번
              출구에서 도보로 약 1.2km (도보로 약 20분 소요)
            </h4>
          </div> */}
        </div>
      </div>
      <Footer />
    </LangProvider>
  );
};

export default Contact;
