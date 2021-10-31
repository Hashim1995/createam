import React from "react";
import Style from "./We.module.css";
import Image from "next/image";
import WeBackgroundImg from "./we.jpg";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";
const We = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
      axios
        // Dummy Axios config
        .post("/user", {
          email: email,
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
      errorValid();
      setEmailError(true);
    }
  };

  const errorValid = () => {
    message.error("Invalid Email address");
  };

  return (
    <div className={Style.WeWrap}>
      <div className={Style.WeLeftWrap}>
        <Image
          className={Style.WeBackgroundImg}
          src={WeBackgroundImg}
          alt="Baku Createam Who we are?"
          layout="fill"
        />
      </div>

      <div className={Style.WeRightWrap}>
        <h1 className={Style.WeRightTitle}>Who we are?</h1>
        <h3 className={Style.WeRightTopText}>
          We’re an international financial company engaged in investment
          activities related to trading on financial markets
        </h3>
        <h4 className={Style.WeRightBottomText}>
          Our goal is to provide our investors with a reliable source of high
          income, while minimizing any possible risks and offering a
          high-quality service, allowing us to automate and simplify the
          relations.
        </h4>
        <h3 className={Style.WeContactTitle}>
          CALL US NOW <span>OR</span> SUBSCRIBE US
        </h3>
        <a className={Style.WeNumber} href="tel:+994559261695">
          +994 55 926-16-95
        </a>
        <div className={Style.WeFormWrap}>
          <input
            style={{ borderColor: emailError ? "red" : null }}
            name="name"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email address"
            type="email"
            className="input"
          />
          <button className={Style.WeFormButton}>
            <SendIcon onClick={handleSubmit} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default We;
