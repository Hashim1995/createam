import { React, useState, createContext, useLayoutEffect } from "react";
import Head from "next/head";
import Styles from "./mainFrame.module.css";
import Footer from "./footer/Footer";
import Link from "next/link";
import { Layout } from "antd";
import Nav from "./nav/nav";
export const GeneralData = createContext();

export const siteTitle = "Home Page";

const MainFrame = ({ children, home }) => {
  const [screenIsXS, setScreenIsXS] = useState(false);
  useLayoutEffect(() => {
    if (window.innerWidth < 576) setScreenIsXS(true);
    else {
      setScreenIsXS(false);
    }
  });
  const generalData = { screenIsXS: screenIsXS };

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
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <GeneralData.Provider value={generalData}>
        <Layout>
          <Header className={Styles.header}>
            <Nav />
          </Header>
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </GeneralData.Provider>
    </div>
  );
};

export default MainFrame;
