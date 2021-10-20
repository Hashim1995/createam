import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import We from "../components/We/We";

const About = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ scale: 0 }}
    >
      <MainFrame>
        <Head>
          <title>About</title>
        </Head>
        <div className="AboutWrap">
          <We />
        </div>
        <Divider />
      </MainFrame>
    </motion.div>
  );
};
export default About;
