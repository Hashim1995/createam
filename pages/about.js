import React from "react";
import Head from "next/head";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import We from "../components/We/We";
import { AboutUs } from "../components/aboutUs/AboutUs";

const About = () => {
  return (
    <MainFrame>
      <Head>
        <title>About</title>
      </Head>
      <div className="AboutWrap">
        <AboutUs />
        <We />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default About;
