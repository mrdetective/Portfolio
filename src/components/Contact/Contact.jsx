import React, {useEffect, useState} from "react";
import "./Contact.css";
import {RxTwitterLogo} from "react-icons/rx";
import {SlCalender} from "react-icons/sl";
import {HiOutlineMail} from "react-icons/hi";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillSendFill} from "react-icons/bs";
import {useForm, ValidationError} from "@formspree/react";
import {toast} from "react-toastify";
import {PopupModal} from "react-calendly";

function Contact({contactref}) {
  const [state, handleSubmit] = useForm("xzblwvew");
  const [emailVal, setemailVal] = useState("");
  const [nameVal, setnameVal] = useState("");
  const [subjectVal, setsubjectVal] = useState("");
  const [messageVal, setmessageVal] = useState("");
  const [loading, setloading] = useState(false);
  const [openCalender, setopenCalender] = useState(false);

  const handleformSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setloading(false);
        toast("Message sent successfully!", {
          icon: "✅",
          autoClose: 1000,
          position: "top-center",
          style: {
            borderRadius: "5px",
            background: "#333131",
            color: "whitesmoke",
          },
        });
        setemailVal("");
        setmessageVal("");
        setnameVal("");
        setsubjectVal("");
      }
    } catch (error) {
      toast("Sorry, an error occured!", {
        icon: "⚠️",
        autoClose: 1000,
        position: "top-center",
        style: {
          borderRadius: "5px",
          background: "#333131",
          color: "whitesmoke",
        },
      });
    }
  };

  return (
    <section className="contact-section" ref={contactref}>
      <PopupModal
        url="https://calendly.com/guptaharsha"
        onModalClose={() => {
          setopenCalender(false);
        }}
        className="calendly"
        open={openCalender}
        rootElement={document.getElementById("root")}
      />
      <div className="contact-contents">
        <h3 className="contact-heading">CONTACT</h3>
        <h1 className="contact-start">Dont't be shy! Hit me up 👇 </h1>
        <div className="contact-body">
          <div className="contact-modes">
            <li className="modes">
              <a href="mailto:guptaharsha.harsha1@gmail.com">
                <ul className="mode">
                  <HiOutlineMail className="social-icons" size={30} />
                  <div className="mode-text">
                    <h1 className="mode-type">Email</h1>
                    <h3 className="mode-name">guptaharsha.harsha1@gmail.com</h3>
                  </div>
                </ul>
              </a>
              <a href="https://twitter.com/LLawlie71551244" target="_blank">
                <ul className="mode">
                  <RxTwitterLogo className="social-icons" size={30} />
                  <div className="mode-text">
                    <h1 className="mode-type">Twitter</h1>
                    <h3 className="mode-name">@LLawlie71551244</h3>
                  </div>
                </ul>
              </a>
              <ul className="mode">
                <SlCalender className="social-icons" size={25} />
                <div
                  className="mode-text"
                  onClick={() => {
                    setopenCalender(true);
                  }}>
                  <h1 className="mode-type">Online Meet</h1>
                  <h3 className="mode-name">Schedule a meet</h3>
                </div>
              </ul>
              <a
                href="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5353434,88.1825411,11z/data=!3m1!4b1!4m6!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895!16zL20vMGN2dzk?entry=ttu"
                target="_blank">
                <ul className="mode">
                  <FaLocationDot className="social-icons" size={30} />
                  <div className="mode-text">
                    <h1 className="mode-type">Location</h1>
                    <h3 className="mode-name">Kolkata, West Bengal</h3>
                  </div>
                </ul>
              </a>
            </li>
          </div>
          <form onSubmit={handleformSubmit}>
            <div className="input-details">
              <div className="name-email">
                <textarea
                  type="text"
                  className="name-input"
                  placeholder="Enter Name"
                  name="name"
                  id="id"
                  value={nameVal}
                  onChange={(e) => {
                    setnameVal(e.target.value);
                  }}
                />
                <textarea
                  type="email"
                  className="email-input"
                  placeholder="Enter email"
                  name="email"
                  id="email"
                  value={emailVal}
                  onChange={(e) => {
                    setemailVal(e.target.value);
                  }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <textarea
                type="text"
                className="subject"
                placeholder="Enter subject"
                id="subject"
                name="subject"
                value={subjectVal}
                onChange={(e) => {
                  setsubjectVal(e.target.value);
                }}
              />
              <textarea
                type="text"
                className="message"
                placeholder="Enter message"
                id="message"
                name="message"
                value={messageVal}
                onChange={(e) => {
                  setmessageVal(e.target.value);
                }}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button
                className="send-email-btn"
                type="submit"
                disabled={state.submitting}>
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send message{" "}
                    <BsFillSendFill size={18} className="send-btn-icon" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
