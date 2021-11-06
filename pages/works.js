import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import Portfolio from "../components/portfolio/Portfolio";

const WorksPage = () => {
  return (
    <MainFrame>
      <Head>
        <title>
          İşlərimiz, Indesign Group olaraq təhvil verdiyimiz proyektlər
        </title>
        <meta
          name="description"
          content="Baku createam olaraq vəb sayt xidməti ilə bağlı ölkənin öndə gələm şirkətləri ilə əməkdaşlıq edirik. Bir çox böyük şirkətə veb sayt lahiylərinin hazırlanmasında xidmət göstəririk"
        />
        <meta
          name="keywords"
          content="baku createam, kreateam baki, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
      </Head>
      <div className="PortfolioWrap">
        <Portfolio />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default WorksPage;
