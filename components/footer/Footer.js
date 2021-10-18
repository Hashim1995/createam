import React from "react";
import Style from "./Footer.module.css";
import { Row, Col, Divider } from "antd";
import { FacebookOutlined } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { PhoneRounded } from "@mui/icons-material";
import { MailRounded } from "@mui/icons-material";
import RoomIcon from "@mui/icons-material/Room";
const Footer = () => {
  return (
    <div className={Style.FooterWrap}>
      <Row>
        <Col md={6} sm={12}>
          <h3 className={Style.FooterSectionTitle}>Blog</h3>
          <div className={Style.FooterBlogWrap}>
            <h5 className={Style.FooterBlogTitle}>Sample post with Image</h5>
            <h6 className={Style.FooterBlogDate}>JUNE 17, 2018</h6>
          </div>
          <div className={Style.FooterBlogWrap}>
            <h5 className={Style.FooterBlogTitle}>Sample post with Image</h5>
            <h6 className={Style.FooterBlogDate}>JUNE 17, 2018</h6>
          </div>
          <div className={Style.FooterBlogWrap}>
            <h5 className={Style.FooterBlogTitle}>Sample post with Image</h5>
            <h6 className={Style.FooterBlogDate}>JUNE 17, 2018</h6>
          </div>
          <div className={Style.FooterBlogWrap}>
            <h5 className={Style.FooterBlogTitle}>Sample post with Image</h5>
            <h6 className={Style.FooterBlogDate}>JUNE 17, 2018</h6>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <h3 className={Style.FooterSectionTitle}>About</h3>
          <p className={Style.FooterAboutText}>
            We are an international financial company engaged in investment
            activities
            {""}
            We’re related to trade on financial markets and cryptocurrency
            exchanges performed by qualified professional traders.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <h3 className={Style.FooterSectionTitle}>Social</h3>
          <div className={Style.FooterSocialWrap}>
            <div className={Style.FooterSocial}>
              <FacebookOutlined className={Style.FooterSocialIcon} />
              <a className={Style.FooterSocialText} href="fb.com">
                Facebook
              </a>
            </div>
            <div className={Style.FooterSocial}>
              <WhatsApp className={Style.FooterSocialIcon} />
              <a className={Style.FooterSocialText} href="fb.com">
                WhatsApp
              </a>
            </div>
            <div className={Style.FooterSocial}>
              <Instagram className={Style.FooterSocialIcon} />
              <a className={Style.FooterSocialText} href="fb.com">
                Instagram
              </a>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <h3 className={Style.FooterSectionTitle}>Contact</h3>
          <div className={Style.FooterContactWrap}>
            <div className={Style.FooterContact}>
              <PhoneRounded className={Style.FooterContactIcon} />
              <a className={Style.FooterContactText} href="fb.com">
                +994 55 926 16 95
              </a>
            </div>
            <div className={Style.FooterContact}>
              <MailRounded className={Style.FooterContactIcon} />
              <a className={Style.FooterContactText} href="fb.com">
                hashimli.hshm@gmail.com
              </a>
            </div>
            <div className={Style.FooterContact}>
              <RoomIcon className={Style.FooterContactIcon} />
              <a className={Style.FooterContactText} href="fb.com">
                Baku, Azerbaijan
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Divider className={Style.footerBottomDivider}>
        All rights Reserved 2020 ©{" "}
      </Divider>
    </div>
  );
};

export default Footer;
