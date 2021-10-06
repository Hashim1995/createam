import React from "react";
import { Menu, Button, Row, Col } from "antd";
import Image from "next/image";
import Style from "./nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <Menu className={Style.nav} mode="horizontal">
        <Row
          style={{ width: "100%" }}
          align={"middle"}
          justify={"space-between"}
        >
          <Col className={Style.menuItem} span={8}>
            <Image alt="logo" height="40" width="147" src="/images/logo.png" />
          </Col>
          <Col className={Style.menuItem} span={8}>
            <a className={Style.menuItemNumber} href="tel:+994559261695">
              <b className={Style.menuItemNumberB}>+994 55</b> <b>926 16 95</b>
            </a>
          </Col>
          <Col className={Style.menuItem} span={8}>
            <Button className={"custom-ant-btn"} size={"large"} type="primary">
              Send Request
            </Button>
          </Col>
        </Row>
      </Menu>

      <Menu className={(Style.nav, Style.navBottom)} mode="horizontal">
        <Row style={{ width: "100%" }} align={"middle"} justify={"center"}>
          <Col offset={0} span={10}>
            <Row>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>HOME</a>
                </Link>
              </Col>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>SERVICES</a>
                </Link>
              </Col>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>WORKS</a>
                </Link>
              </Col>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>BLOG</a>
                </Link>
              </Col>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>ABOUT</a>
                </Link>
              </Col>
              <Col span={4}>
                <Link href="/">
                  <a className={Style.navBottomLinks}>CONTACT</a>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Menu>
    </div>
  );
};

export default Nav;
