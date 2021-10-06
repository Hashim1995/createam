import React from "react";
import Style from "./Services.module.css";

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
    </div>
  );
};

export default Services;
