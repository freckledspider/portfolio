import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Water from "../images/water.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Display success alert
      toggleAlert("Form submission was successful!", "success");
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert("Uh oh. Something went wrong.", "danger");
      console.log(process.env.REACT_APP_SERVICE_ID);
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="contact">
      <div className="formcontainer">
        <div className="contactform">
          <h3>Get in touch.</h3>
          <h1>Contact</h1>
          <p>
            Please feel free to reach out to me if you have any questions or
            would like to collaborate on a project. If you are a recruiter, feel
            free to request my full resume. I am also open to freelance work. I look forward to hearing from you!
          </p>
          <div style={{ textAlign: "center" }}>
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: { value: true, message: "Please enter your name" },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="form-control formInput"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}

              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="form-control formInput"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address.
                </span>
              )}

              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: { value: true, message: "Please enter a subject." },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters.",
                  },
                })}
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}

              <textarea
                rows={6}
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="form-control formInput"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message.</span>
              )}
              <p>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </p>
            </form>

            {alertInfo.display && (
              <div
                className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
                role="alert"
              >
                {alertInfo.message}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() =>
                    setAlertInfo({ display: false, message: "", type: "" })
                  } // Clear the alert when close button is clicked
                ></button>
              </div>
            )}
          </div>
        </div>
        <div className="contactimage" style={{ textAlign: "center" }}>
          <img src={Water} className="imgborder" width="70%" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
