import Header from "../Header/Header";
import Footer from "../Header/Footer";
import { useForm } from "react-hook-form";

const ContactProposal = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const formInfo = `Your Submission: \nName: ${data.name}\nDate of Birth: ${
      data.birthday
    }\nGender: ${data.gender} ${
      data.plan[0].name ? "\nPlan: " + data.plan[0].name : null
    } ${data.scenario[0].name ? "\nScenario: " + data.scenario[0].name : null}${
      data.extra[0].name ? "\nAdditional: " + data.extra[0].name : null
    }\nSummary: ${data.summary}\nPersonal Info Consent: ${data.consent}`;
    alert(formInfo);
  };

  return (
    <>
      <Header style={"header initialPos"} />
      <div className="contact">
        <div className="contact__FormHeader">
          <h2>project proposal / scenario</h2>
        </div>

        <div className="contact__FormInfo">
          <p className="contact__InfoHeader">Submission of documents: </p>
          <p>Synopsis and script of a proposal or scenario (required) ※</p>
          <p>Max file size is 10MB. Please compress multiple attachments. ※</p>
          <p>
            Documents received will be reviewed and responded to individually. ※
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__formDiv">
            <div className="contact__FormField">
              <p>
                <label htmlFor="formType">Proposal or Scenario</label>
              </p>
              <select
                name="formType"
                {...register("formType", { required: true })}
                className="form-select"
              >
                <option selected value="select">
                  Please select an option
                </option>
                <option value="proposal">Proposal</option>
                <option value="scenario">Scenario</option>
              </select>
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="name">Name</label>
              </p>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
              />
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="birthday">Birthday</label>
              </p>

              <input
                type="date"
                name="birthday"
                {...register("birthday", { required: true })}
              />
            </div>

            <div className="contact__FormField form-check">
              <label for="gender">Gender</label>
              <div className="form-check">
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                />
              </div>
              <div className="form-check">
                <label for="female">Female</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                />
              </div>
              <div className="form-check">
                <label for="neutral">Neutral</label>
                <input
                  type="radio"
                  id="neutral"
                  name="gender"
                  value="Neutral"
                  className="form-check-input"
                  {...register("gender", { required: true })}
                />
              </div>
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="email">Email</label>
              </p>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="name@example.com"
                {...register("email", { required: true })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label for="plan" class="form-label">
                Plan
              </label>
              <input
                class="form-control"
                type="file"
                id="plan"
                {...register("plan", { required: false })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label for="scenario" class="form-label">
                Scenario
              </label>
              <input
                class="form-control"
                type="file"
                id="scenario"
                {...register("scenario", { required: false })}
              />
            </div>

            <div className="contact__FormField mb-3">
              <label for="extra" class="form-label">
                Additional
              </label>
              <input
                class="form-control"
                type="file"
                id="extra"
                {...register("extra", { required: false })}
              />
            </div>

            <div className="mb-3 contact__FormField">
              <label for="exampleFormControlTextarea1" class="form-label">
                Summary and Extra Information
              </label>
              <textarea
                class="form-control"
                rows="3"
                {...register("summary", { required: true })}
              ></textarea>
            </div>
          </div>
          <div className="contact__Data">
            <div className="overflow-auto contact__DataPolicy">
              <p>
                Consent to allow collection and use of personal information:
              </p>
              <p>
                In accordance with Articles 15 and 17 of the Personal
                Information Protection Act, I submit a proposal/scenario to IMTV
                and I agree to the collection and use of provided personal
                information with the contents below.
              </p>
              <p>Personal information items that we collect: </p>
              <p>
                IMTV Co., Ltd. is collecting the following personal information
                to receive planning proposals/scenarios. - Collection items:
                name, date of birth, gender, contact information, e-mail,
                service usage history, access log, cookie, access IP information
                - Personal information collection method: homepage
              </p>
              <p>
                ■ Purpose of collecting and using personal information IMTV Co.,
                Ltd. utilizes the collected personal information for the
                following purposes. - There is no use of information other than
                consultation for planning/scenario review.
              </p>
              <p>
                ■ Period of storage and use of personal information - Your
                personal information will be kept as follows, and if the purpose
                of collection, use, and provision is achieved, it will be
                processed in accordance with Article 21 of the Personal
                Information Protection Act.
              </p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="consent"
                value=""
                id="flexCheckDefault"
                {...register("consent", { required: true })}
              />

              <label className="form-check-label" for="flexCheckDefault">
                I agree to the collection and use of personal information.
              </label>
            </div>
          </div>
          <div>
            <div className="contact__FormSubmit">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactProposal;
