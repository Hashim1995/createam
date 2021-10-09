import React from "react";
import Style from "./Difference.module.css";
import { Button, Row, Col } from "antd";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import SendToMobileOutlinedIcon from "@mui/icons-material/SendToMobileOutlined";
const Difference = () => {
  return (
    <div className={Style.DifferenceWrap}>
      <div className={Style.DifferenceTitleWrap}>
        <h1 className={Style.DifferenceTitle}>Our Difference</h1>
        <h4 className={Style.DifferenceTitleText}>
          You will love all of the features in our template. 100% guaranteed
          satisfaction.
        </h4>
      </div>
      <div className={Style.DifferenceItemWrap}>
        <Row>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <ImportantDevicesOutlinedIcon
                className={Style.DifferenceItemIcon}
              />
              <h3 className={Style.DifferenceItemTitle}>Responsive Layout</h3>
              <p className={Style.DifferenceItemText}>
                All the pages of this template are responsive. We used Bootstrap
                framework to build the website. It’s the best in class.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <PostAddOutlinedIcon className={Style.DifferenceItemIcon} />
              <h3 className={Style.DifferenceItemTitle}>Multipile Pages</h3>
              <p className={Style.DifferenceItemText}>
                All the pages are created based on real content that you will
                need to run your business. Change image and text and you’re good
                to go!
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <DashboardCustomizeOutlinedIcon
                className={Style.DifferenceItemIcon}
              />
              <h3 className={Style.DifferenceItemTitle}>Fully Customizable</h3>
              <p className={Style.DifferenceItemText}>
                Our template is fully customizable. You can change color
                combination, fonts, icons, contents, images etc. You can also
                add custom css.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <FontDownloadOutlinedIcon className={Style.DifferenceItemIcon} />
              <h3 className={Style.DifferenceItemTitle}>Google Fonts</h3>
              <p className={Style.DifferenceItemText}>
                A vast collection of Google fonts are integrated with the
                template. You can use any of them that goes with your branding.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <BuildOutlinedIcon className={Style.DifferenceItemIcon} />
              <h3 className={Style.DifferenceItemTitle}>Lifetime Update</h3>
              <p className={Style.DifferenceItemText}>
                Purchase our template only once and get lifetime updates. We
                keep updating our products to stay up to date with latest trends
                and technology.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <div className={Style.DifferenceItem}>
              <SendToMobileOutlinedIcon className={Style.DifferenceItemIcon} />
              <h3 className={Style.DifferenceItemTitle}>Mobile Optimized</h3>
              <p className={Style.DifferenceItemText}>
                All the pages of this template are optimized. We used Bootstrap
                framework to build the website. It’s the best in class.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Difference;
