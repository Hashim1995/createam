import React from "react";
import Head from "next/head";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import We from "../components/We/We";

const About = () => {
  return (
    <MainFrame>
      <Head>
        <title>About</title>
      </Head>
      <div className="AboutWrap">
        <We />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default About;
