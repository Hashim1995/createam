import React from "react";
import Style from "./Services.module.css";
import WebIcon from "@mui/icons-material/Web";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
const Services = () => {
  return (
    <div className={Style.ServicesWrap}>
      <div className={Style.ServicesTitleWrap}>
        <h1 className={Style.ServicesTitle}>What we offer?</h1>
        <h4 className={Style.ServicesTitleText}>
          With the development of the technology world, each company is now
          dying to find a place for itself in the digital world. You too can
          take your first steps into this world with us.
        </h4>
      </div>
      <div className={Style.ServicesItemsWrap}>
        <div className={Style.ServicesItem}>
          <WebIcon className={Style.ServicesItemIcon} />
          <h3 className={Style.ServicesItemTitle}>WEB DESIGN</h3>
          <p className={Style.ServicesItemText}>
            We are trusted by a huge number of people are working hard Anonymity
            and using cryptocurrency as a payment instrument
          </p>
        </div>
        <div className={Style.ServicesItem}>
          <CodeRoundedIcon className={Style.ServicesItemIcon} />
          <h3 className={Style.ServicesItemTitle}>WEB SITE </h3>
          <p className={Style.ServicesItemText}>
            We are trusted by a huge number of people are working hard Anonymity
            and using cryptocurrency as a payment instrument
          </p>
        </div>
        <div className={Style.ServicesItem}>
          <ManageSearchRoundedIcon className={Style.ServicesItemIcon} />
          <h3 className={Style.ServicesItemTitle}>SEO</h3>
          <p className={Style.ServicesItemText}>
            We are trusted by a huge number of people are working hard Anonymity
            and using cryptocurrency as a payment instrument
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
