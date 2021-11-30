
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react/cjs/react.development";
import "./contact.css"
const Contact = ({ contactRef }) =>
{

  const [state, handleSubmit] = useForm("mvolpzoq");

  //@FIXME  :  the state changes multiple times 
//   useEffect(() =>
//   {
//       if (state.succeeded) {
//         alert("send");
//       }
//  },[state])

  return (
    <div className="contact-container" ref={contactRef}>
      <div className="contact-details-container">
        <div className="contact-heading">Contact us</div>

        <div className="contact-details">
          <div className="contact-detail">
            <div className="contact-detailsName">Sreejaya N</div>
            <div className="contact-detailsNumber">+91 80865 61123</div>
          </div>

          <div className="contact-detail">
            <div className="contact-detailsName">Unnikrishnan G </div>
            <div className="contact-detailsNumber"> +91 73064 74789</div>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <div className="contact-form-header">
          <div className="contact-form-enquiryHead">Enquiry</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-formEntity">
            <div className="contact-form-entityHead">Email</div>
            <input
              type={"email"}
              name={"email"}
              className="contact-form-inputText"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact-form-formEntity">
            <div className="contact-form-entityHead">Query</div>
            <textarea className="contact-form-inputTextArea" name="message" required/>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className="contact-form-submitButton"
            type="submit"
            disabled={state.submitting}
          >
            Enquire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
