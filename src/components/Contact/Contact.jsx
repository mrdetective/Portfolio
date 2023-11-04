import React from "react";
import "./Contact.css";
import {RxTwitterLogo} from "react-icons/rx";
import {SlCalender} from "react-icons/sl";
import {HiOutlineMail} from "react-icons/hi";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillSendFill} from "react-icons/bs";

function Contact({contactref}) {
  return (
    <section className="contact-section" ref={contactref}>
      <div className="contact-contents">
        <h3 className="contact-heading">CONTACT</h3>
        <h1 className="contact-start">Dont't be shy! Hit me up 👇 </h1>
        <div className="contact-body">
          <div className="contact-modes">
            <li className="modes">
              <ul className="mode">
                <HiOutlineMail className="social-icons" size={30} />
                <div className="mode-text">
                  <h1 className="mode-type">Email</h1>
                  <h3 className="mode-name">guptaharsha.harsha1@gmail.com</h3>
                </div>
              </ul>
              <ul className="mode">
                <RxTwitterLogo className="social-icons" size={30} />
                <div className="mode-text">
                  <h1 className="mode-type">Twitter</h1>
                  <h3 className="mode-name">@LLawlie71551244</h3>
                </div>
              </ul>
              <ul className="mode">
                <SlCalender className="social-icons" size={25} />
                <div className="mode-text">
                  <h1 className="mode-type">Online Meet</h1>
                  <h3 className="mode-name">Schedule a meet</h3>
                </div>
              </ul>
              <ul className="mode">
                <FaLocationDot className="social-icons" size={30} />
                <div className="mode-text">
                  <h1 className="mode-type">Location</h1>
                  <h3 className="mode-name">Schedule a meet</h3>
                </div>
              </ul>
            </li>
          </div>
          <div className="input-details">
            <div className="name-email">
              <textarea
                type="text"
                className="name-input"
                placeholder="Enter Name"
              />
              <textarea
                type="email"
                className="email-input"
                placeholder="Enter email"
              />
            </div>
            <textarea
              type="text"
              className="subject"
              placeholder="Enter subject"
            />
            <textarea
              type="text"
              className="message"
              placeholder="Enter message"
            />
            <button className="send-email-btn">
              Send message{" "}
              <BsFillSendFill size={18} className="send-btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
