import { React, useState, useLayoutEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Menu, Button, Row, Col, Dropdown, Switch } from "antd";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Style from "./nav.module.css";
import Link from "next/link";
import { GeneralData } from "../../Context/Context";
const Nav = () => {
  const generalData = useContext(GeneralData);
  const screenIsXS = generalData.screenIsXS;
  const { asPath } = useRouter();

  const menuOnMobile = (
    <Menu className={(Style.nav, Style.navBottom)} mode="horizontal">
      <Row style={{ width: "100%" }} align={"middle"} justify={"center"}>
        <Col offset={0} xs={24} md={14} sm={20} xl={10}>
          <Row gutter={[12, 24]}>
            <Col span={24}>
              <Link href="/" passHref>
                <a className={Style.navBottomLinks}>ANA SƏHİFƏ</a>
              </Link>
            </Col>
            <Col span={24}>
              <Link href="/services" passHref>
                <a className={Style.navBottomLinks}>XİDMƏTLƏR</a>
              </Link>
            </Col>
            <Col span={24}>
              <Link href="/works" passHref>
                <a className={Style.navBottomLinks}>İŞLƏRİMİZ</a>
              </Link>
            </Col>
            <Col span={24}>
              <Link href="/blog" passHref>
                <a className={Style.navBottomLinks}>BLOQ</a>
              </Link>
            </Col>
            <Col span={24}>
              <Link href="/about" passHref>
                <a className={Style.navBottomLinks}>HAQQIMIZDA</a>
              </Link>
            </Col>
            <Col span={24}>
              <Link href="/contact" passHref>
                <a className={Style.navBottomLinks}>ƏLAQƏ</a>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Menu>
  );

  return (
    <div>
      <Menu className={Style.nav} mode="horizontal">
        <Row
          style={{ width: "100%" }}
          align={"middle"}
          justify={"space-between"}
        >
          <Col className={Style.menuItem} xs={{ span: 10 }} sm={{ span: 8 }}>
            <Image alt="logo" height="40" width="147" src="/images/logo.png" />
          </Col>
          {!screenIsXS && (
            <Col
              className={`${Style.menuItem} ${Style.menuItemColNumber}`}
              sm={8}
            >
              <a className={Style.menuItemNumber} href="tel:+994559261695">
                <b className={Style.menuItemNumberB}>+994 55</b>{" "}
                <b>926 16 95</b>
              </a>
            </Col>
          )}

          <Col className={Style.menuItem} xs={8} sm={8}>
            {!screenIsXS && asPath !== "/contact" && (
              <Link href="/contact" passHref>
                <Button
                  className={"custom-ant-btn"}
                  size={"large"}
                  type="primary"
                >
                  Sorğu göndər
                </Button>
              </Link>
            )}
          </Col>
          {screenIsXS && (
            <Col xs={2}>
              <div className={Style.MenuHamburgerWrap}>
                <Dropdown overlay={menuOnMobile} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <MenuIcon className={Style.MenuHamburgerIcon} />
                  </a>
                </Dropdown>
              </div>
            </Col>
          )}
        </Row>
      </Menu>
      {!screenIsXS && (
        <Menu className={(Style.nav, Style.navBottom)} mode="horizontal">
          <Row style={{ width: "100%" }} align={"middle"} justify={"center"}>
            <Col offset={0} md={14} sm={20} xs={24} xl={12}>
              <Row>
                <Col span={4}>
                  <Link href="/">
                    <a className={Style.navBottomLinks}>ANA SƏHİFƏ</a>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link href="/services">
                    <a className={Style.navBottomLinks}>XİDMƏTLƏR</a>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link href="/works">
                    <a className={Style.navBottomLinks}>İŞLƏRİMİZ</a>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link href="/blog">
                    <a className={Style.navBottomLinks}>BLOQ</a>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link href="/about">
                    <a className={Style.navBottomLinks}>HAQQIMIZDA</a>
                  </Link>
                </Col>
                <Col span={4}>
                  <Link href="/contact">
                    <a className={Style.navBottomLinks}>ƏLAQƏ</a>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Menu>
      )}
    </div>
  );
};

export default Nav;
