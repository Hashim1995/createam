import React from "react";
import Head from "next/head";
import MainFrame from "../components/MainFrame";
import Link from "next/link";
import { Divider } from "antd";
import Blog from "../components/blog/Blog";

const BlogPage = () => {
  return (
    <MainFrame>
      <Head>
        <title>
          Bloq, Veb saytlar haqqında hər kəsin bilməli olduğu məlumatlar
        </title>
        <meta
          name="description"
          content="Veb saytlar hər şirkət üçün dijital dünyaya çıxış qapısıdır. Sizdə öz şirkətinizi dijital dünyaya başlamaq istəyirsizə baku createam ilə öz veb saytınıza ən ucuz qiymətə sahib olun."
        />
        <meta
          name="keywords"
          content="baku createam, kreateam baki, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
      </Head>
      <div className="BlogWrap">
        <Blog />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default BlogPage;
