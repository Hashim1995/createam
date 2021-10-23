import { React, useState } from "react";
import Style from "./ContactForm.module.css";
import { Row, Col, Button } from "antd";
import axios from "axios";
import { message } from "antd";
const ContactForm = () => {
  const [fullNameError, setFullNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [userMessageError, setUserMessageError] = useState(true);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const formValid = () => {
    if (!fullNameError && !fullNameError && !fullNameError) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fullName.length < 2) {
      setFullNameError(false);
    } else {
      setFullNameError(true);
    }

    if (emailRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (userMessage.length < 50) {
      setUserMessageError(false);
    } else {
      setUserMessageError(true);
    }
  };

  const submitForm = () => {
    if (formIsValid) {
      axios
        // Dummy Axios config
        .post("/user", {
          email: email,
          name: fullName,
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
      setFullNameError(true);
      setEmailError(true);
      setUserMessageError(true);
    }
  };

  return (
    <div className={Style.ContactFormWrap}>
      <div className={Style.ContactFormTitleWrap}>
        <h1 className={Style.ContactFormTitle}>CONTACT US</h1>
        <h4 className={Style.ContactFormTitleText}>
          "We’ll help you combine the flexibility of the modern web with the
          control and compliance your business needs."
        </h4>
      </div>
      <div className={Style.ContactFormFormWrap}>
        <Row>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <input
                style={{ borderColor: fullNameError ? "red" : null }}
                name="name"
                onChange={(e) => {
                  setFullName(e.target.value);
                  formValid();
                }}
                placeholder="Your Full Name"
                type="text"
                className="input"
              />
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <input
                style={{ borderColor: emailError ? "red" : null }}
                name="name"
                onChange={(e) => {
                  setEmail(e.target.value);
                  formValid();
                }}
                placeholder="Your Email address"
                type="email"
                className="input"
              />
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <textarea
                rows="6"
                style={{ borderColor: userMessageError ? "red" : null }}
                name="name"
                onChange={(e) => {
                  setUserMessage(e.target.value);
                  formValid();
                }}
                placeholder="Your message"
                type="email"
                className={`${Style.ContactFormTextArea} input`}
              />
            </div>
          </Col>
          <Col xs={24} xl={{ span: 16, push: 4 }}>
            <div className={Style.ContactFormFormItem}>
              <Button
                disabled={formIsValid ? false : true}
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
