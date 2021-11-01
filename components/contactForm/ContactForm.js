import { React, useState } from "react";
import Style from "./ContactForm.module.css";
import { Row, Col, Button } from "antd";
import axios from "axios";
import { message } from "antd";
const ContactForm = () => {
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [userMessageValid, setUserMessageValid] = useState(null);
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [name, setName] = useState("");

  const validationName = (e) => {
    const usernameRegex = /^[a-zA-Z]{2,50}$/;
    if (usernameRegex.test(e.target.value)) {
      setNameValid(true);
      setName(e.target.value);
    } else {
      setNameValid(false);
    }
  };

  const validationEmail = (e) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(e.target.value)) {
      setEmailValid(true);
      setEmail(e.target.value);
    } else {
      setEmailValid(false);
    }
  };

  const validationUserMessage = (e) => {
    if (e.target.value.length > 20) {
      setUserMessageValid(true);
      setUserMessage(e.target.value);
    } else {
      setUserMessageValid(false);
    }
  };

  const submitForm = () => {
    if (nameValid && emailValid && userMessageValid) {
      axios
        // Dummy Axios config
        .post("/user", {
          email: email,
          name: name,
          message: userMessage,
        })
        .then(() => {
          message.success(
            "Thanks for your message. We will get back to you as soon as possible"
          );
        })
        .catch(() => {
          message.error("Something was wrong, please try again");
        });
    } else {
      if (!fullNameValid) {
        message.error("invalid Name");
        setFullNameValid(false);
      }
      if (!emailValid) {
        message.error("invalid Email");
        setEmailValid(false);
      }
      if (!userMessageValid) {
        message.error("Your message must be at least 50 charachter");
        setUserMessageValid(false);
      }
    }
  };

  return (
    <div className={Style.ContactFormWrap}>
      <div className={Style.ContactFormTitleWrap}>
        <h1 className={Style.ContactFormTitle}>CONTACT US</h1>
        <h4 className={Style.ContactFormTitleText}>
          We’ll help you combine the flexibility of the modern web with the
          control and compliance your business needs.
        </h4>
      </div>
      <div className={Style.ContactFormFormWrap}>
        <Row>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <input
                name="name"
                onKeyUp={validationName}
                placeholder="Your Full Name"
                type="text"
                className="input"
              />
              {nameValid === false ? (
                <span className={Style.ContactFormError}>
                  Enter your first name
                </span>
              ) : null}
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <input
                name="name"
                onKeyUp={validationEmail}
                placeholder="Your Email address"
                type="email"
                className="input"
              />
              {emailValid === false ? (
                <span className={Style.ContactFormError}>
                  Enter your first name
                </span>
              ) : null}
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <textarea
                rows="6"
                name="name"
                onKeyUp={validationUserMessage}
                placeholder="Your message"
                type="email"
                className={`${Style.ContactFormTextArea} input`}
              />
              {userMessageValid === false ? (
                <span className={Style.ContactFormError}>
                  Enter your first name
                </span>
              ) : null}
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <Button
                disabled={
                  nameValid && emailValid && userMessageValid ? false : true
                }
                className={`${Style.ContactFormButton} custom-ant-btn`}
                size={"large"}
                type="primary"
                onClick={submitForm}
              >
                Send
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactForm;
