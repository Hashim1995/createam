import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import Services from "../components/services/Services";
import Plans from "../components/plans/Plans";
const ServicesPage = () => {
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
        <div className="ServicesWrap">
          <Services />
          <Plans />
        </div>
        <Divider />
      </MainFrame>
    </motion.div>
  );
};
export default ServicesPage;
