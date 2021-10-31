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
        <title>About</title>
      </Head>
      <div className="BlogWrap">
        <Blog />
      </div>
      <Divider />
    </MainFrame>
  );
};
export default BlogPage;
