import Head from "next/head";
import Image from "next/image";
import styles from "./mainFrame.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Layout } from "antd";
import Nav from "./nav/nav";

const { Header, Footer, Sider, Content } = Layout;

const name = "Your Name";
export const siteTitle = "Home Page";

export default function MainFrame({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
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

      <Layout>
        <Header>
          <Nav />
        </Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
