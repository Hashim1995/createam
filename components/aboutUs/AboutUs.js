import React from "react";
import { Row, Col } from "antd";
import Style from "./AboutUs.module.css";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ExtensionIcon from "@mui/icons-material/Extension";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const AboutUs = () => {
  return (
    <div className={Style.AboutUsWrap}>
      <div className={Style.AboutUsTitleWrap}>
        <h1 className={Style.AboutUsTitle}>BAKU CREATEAM</h1>
        <h4 className={Style.AboutUsTitleText}>
          "We love what we do and we love helping others succeed at what they
          love to do."
        </h4>
      </div>
      <Row>
        <Col xs={12} md={8} xs={24}>
          <div className={Style.AboutUsItemWrap}>
            <SupervisedUserCircleIcon className={Style.AboutUsItemIcon} />
            <h2 className={Style.AboutUsItemtitle}>Who we are?</h2>
            <p className={Style.AboutUsItemText}>
              We are a team of Baku web design and development professionals who
              love partnering with good people and businesses to help them
              achieve online success.
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} xs={24}>
          <div
            className={`${Style.AboutUsItemWrap} ${Style.AboutUsItemWrapSecond}`}
          >
            <ExtensionIcon className={Style.AboutUsItemIcon} />
            <h2 className={Style.AboutUsItemtitle}>What We Do?</h2>
            <p className={Style.AboutUsItemText}>
              We’re focused on honing our crafts and bringing everything we have
              to the table for our clients. We create custom, functional
              websites focused on converting your users into customers.
            </p>
          </div>
        </Col>
        <Col xs={12} md={8} xs={24}>
          <div className={Style.AboutUsItemWrap}>
            <FavoriteIcon className={Style.AboutUsItemIcon} />
            <h2 className={Style.AboutUsItemtitle}>Why We Do It?</h2>
            <p className={Style.AboutUsItemText}>
              Each of us loves what we do and we feel that spirit helps
              translate into the quality of our work. Working with clients who
              love their work combwines into a fun, wonderful partnership for
              everyone involved.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};
