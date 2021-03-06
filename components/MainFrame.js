import { React, useState, createContext, useLayoutEffect } from "react";
import Head from "next/head";
import Styles from "./mainFrame.module.css";
import Footer from "./footer/Footer";
import Link from "next/link";
import { Layout } from "antd";
import Nav from "./nav/nav";
export const siteTitle = "Home Page";

const MainFrame = ({ children, home }) => {
  const childProps = children;
  const { Header, Sider, Content } = Layout;
  return (
    <div className={Styles.container}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="author" content="Baku createam"></meta>
      </Head>

      <Layout>
        <Header className={Styles.header}>
          <Nav />
        </Header>
        <Content>{childProps}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};

export default MainFrame;
