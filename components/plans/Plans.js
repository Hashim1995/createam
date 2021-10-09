import React from "react";
import { useEffect } from "react";
import Style from "./Plans.module.css";
import { Button, Row, Col } from "antd";

const Plans = () => {
  useEffect(() => {}, []);

  return (
    <div className={Style.PlansWrap}>
      <h2 className={"wow fadeInUp"}>I am animated!</h2>
      <Row gutter={30}>
        <Col span={8}>
          <div className={Style.PlansItemWrap}>
            <div className={Style.PlansItemHeader}>
              <h1 className={Style.PlansItemHeaderTitle}>BASIC PLAN</h1>
              <h4 className={Style.PlansItemHeaderPrice}>299 ₼</h4>
            </div>
            <div className={Style.PlansItemBody}>
              <p className={Style.PlansItemBodyTexts}>Consulting</p>
              <p className={Style.PlansItemBodyTexts}>Advising</p>
              <p className={Style.PlansItemBodyTexts}>Business Planning</p>
              <p className={Style.PlansItemBodyTexts}>-</p>
              <p className={Style.PlansItemBodyTexts}>-</p>
            </div>
            <div className={Style.PlansItemFooter}>
              <Button
                className={`${Style.PlansItemFooterButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Get more
              </Button>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className={Style.PlansItemWrap}>
            <div className={Style.PlansItemHeader}>
              <h1 className={Style.PlansItemHeaderTitle}>ADVANCED PLAN</h1>
              <h4 className={Style.PlansItemHeaderPrice}>499 ₼</h4>
            </div>
            <div className={Style.PlansItemBody}>
              <p className={Style.PlansItemBodyTexts}>Consulting</p>
              <p className={Style.PlansItemBodyTexts}>Advising</p>
              <p className={Style.PlansItemBodyTexts}>Business Planning</p>
              <p className={Style.PlansItemBodyTexts}>Investments</p>
              <p className={Style.PlansItemBodyTexts}>-</p>
            </div>
            <div className={Style.PlansItemFooter}>
              <Button
                className={`${Style.PlansItemFooterButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Get more
              </Button>
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className={Style.PlansItemWrap}>
            <div className={Style.PlansItemHeader}>
              <h1 className={Style.PlansItemHeaderTitle}>PREMIUM PLAN</h1>
              <h4 className={Style.PlansItemHeaderPrice}>999 ₼</h4>
            </div>
            <div className={Style.PlansItemBody}>
              <p className={Style.PlansItemBodyTexts}>Consulting</p>
              <p className={Style.PlansItemBodyTexts}>Advising</p>
              <p className={Style.PlansItemBodyTexts}>Business Planning</p>
              <p className={Style.PlansItemBodyTexts}>Investments</p>
              <p className={Style.PlansItemBodyTexts}>24/7 Support</p>
            </div>
            <div className={Style.PlansItemFooter}>
              <Button
                className={`${Style.PlansItemFooterButton} custom-ant-btn`}
                size={"large"}
                type="primary"
              >
                Get more
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Plans;
