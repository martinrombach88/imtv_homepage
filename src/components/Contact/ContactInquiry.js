import Header from "../Header/Header";
import Footer from "../Header/Footer";
import { useForm } from "react-hook-form";
import "./Contact.css";

const ContactInquiry = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formInfo = `Your Submission: \nCompany: ${data.company}\nName: ${
      data.name
    }\nTitle: ${data.title}\nPhone: ${data.phone}\nEmail: ${
      data.email
    }\nPartnership Field: ${data.field}${
      data.attachment[0].name
        ? "\nAdditional: " + data.attachment[0].name
        : null
    }\nData Policy Consent: ${data.consent}`;
    alert(formInfo);
  };
  return (
    <>
      <Header headerStyle={"header initialPos"} />
      <div className="contact">
        <div className="contact__FormHeader">
          <h2>partnership inquiry</h2>
        </div>

        <div className="contact__FormInfo">
          <p>
            Interested in becoming a partner in the video production business?
          </p>
          <p>Please fill out the form below and tell us about your company.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__formDiv">
            <div className="contact__FormField">
              <p>
                <label htmlFor="company">Company Name</label>
              </p>
              <input
                type="text"
                name="company"
                className="form-control"
                {...register("company", { required: true })}
              />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="name">Your Name</label>
              </p>
              <input
                type="text"
                name="name"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="title">Title</label>
              </p>
              <p className="contact__Label">
                Please enter your title in the company
              </p>
              <input
                type="title"
                name="name"
                className="form-control"
                {...register("title", { required: true })}
              />
            </div>

            <div className="contact__FormField">
              <p>
                <label htmlFor="phone">Contact Number</label>
              </p>
              <input
                type="phone"
                name="phone"
                className="form-control"
                {...register("phone", { required: true })}
              />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="email">Email</label>
              </p>
              <input
                type="email"
                name="email"
                className="form-control"
                {...register("email", { required: true })}
              />
            </div>
            <div className="contact__FormField">
              <p>
                <label htmlFor="field">Partnership</label>
              </p>
              <p className="contact__Label">
                Please choose the field you would like to partner with
              </p>
              <select
                name="field"
                {...register("field", { required: true })}
                className="form-select"
              >
                <option selected value="select">
                  Please select an option
                </option>
                <option value="drama">drama</option>
                <option value="documentary">documentary</option>
                <option value="television">television</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="contact__FormField mb-3">
              <label for="attachment" class="form-label">
                Attachments
              </label>
              <input
                class="form-control"
                type="file"
                name="attachment"
                {...register("attachment", { required: false })}
              />
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

export default ContactInquiry;
