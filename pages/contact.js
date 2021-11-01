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
        <title>
          Əlaqə, Bizimlə əlaqə saxlayar ən ucuz qiymətə modern veb saytlara
          sahib ola bilərsiniz
        </title>
        <meta
          name="description"
          content="Ən ucuz veb sayt yığılması xidmətləri üçün baku createam ilə əlaqə saxlayın"
        />
        <meta
          name="keywords"
          content="baku createam, kreateam baki, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
      </Head>
      <div className="ContactFormWrap">
        <ContactForm />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default ContactPage;
