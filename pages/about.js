import React from "react";
import Head from "next/head";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";

const About = () => {
  return (
    <MainFrame>
      <Head>
        <title>About</title>
      </Head>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, ipsam
        quas numquam minima similique tenetur eum officia accusamus magnam
        commodi, voluptatum velit aut dicta magni quae aperiam, beatae
        consectetur. Nesciunt!
      </p>
      <Divider />
      <Link href="/">Back to home page</Link>
    </MainFrame>
  );
};
export default About;
