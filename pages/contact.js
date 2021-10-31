import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import ContactForm from "../components/contactForm/ContactForm";

const ContactPage = () => {
  return (
    <MainFrame>
      <Head>
        <title>About</title>
      </Head>
      <div className="ContactFormWrap">
        <ContactForm />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default ContactPage;
