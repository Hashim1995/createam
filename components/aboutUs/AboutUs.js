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
        <h1 className={Style.AboutUsTitle}>Indesign Group</h1>
        <h4 className={Style.AboutUsTitleText}>
          We love what we do and we love helping others succeed at what they
          love to do.
        </h4>
      </div>
      <Row>
        <Col md={8} xs={24}>
          <div className={Style.AboutUsItemWrap}>
            <SupervisedUserCircleIcon className={Style.AboutUsItemIcon} />
            <h2 className={Style.AboutUsItemtitle}>Who we are?</h2>
            <p className={Style.AboutUsItemText}>
              We are a team of Indesign Group, professionals who love partnering
              with good people and businesses to help them achieve success.
            </p>
          </div>
        </Col>
        <Col md={8} xs={24}>
          <div
            className={`${Style.AboutUsItemWrap} ${Style.AboutUsItemWrapSecond}`}
          >
            <ExtensionIcon className={Style.AboutUsItemIcon} />
            <h2 className={Style.AboutUsItemtitle}>What We Do?</h2>
            <p className={Style.AboutUsItemText}>
              Our goal is to meet the specific needs of each client with
              creative and appropriate design solutions and it is our belief
              that the integration of all the complementary design disciplines
              results into exceptional memories. We strongly emphasize the
              creative process and project management.
            </p>
          </div>
        </Col>
        <Col md={8} xs={24}>
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
