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
        <title>
          Haqqımızda, Indesign Group hər tərzdə interyer/eksteryer dizayn və
          təmir həllərini təklif edir
        </title>
        <meta
          name="description"
          content="Haqqımızda, Indesign Group hər tərzdə interyer/eksteryer dizayn və
          təmir həllərini təklif edir"
        />
        <meta
          name="keywords"
          content="indesign group, design, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
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
