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
    <MainFrame>
      <Head>
        <title>
          Xidmətlər Baku Createam Veb saytların yığılması qiymətləri
        </title>
        <meta
          name="description"
          content="baku createam olaraq, kataloq veb saytların, statik veb saytların, müştəri ilə birbaşa əlaqə qura biləciyiniz saytların hazırlanmasını təklif edirik. Ən müasir texnologiyalar ilə sizin veb saytlarınız komandamız tərəfindən hazıranır"
        />
        <meta
          name="keywords"
          content="baku createam, kreateam baki, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
      </Head>
      <div className="ServicesWrap">
        <Services />
        <Plans />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default ServicesPage;
