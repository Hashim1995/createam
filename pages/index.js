import Head from "next/head";
import Link from "next/link";
import MainFrame, { siteTitle } from "../components/MainFrame";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <MainFrame home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello there! I am Hashim, I work for a IT Company as front-end web
          developer
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
        </p>
        <Link href="./posts/first-post">go to post</Link>
        <br />
        <Link href="./about">go to About</Link>
      </section>
    </MainFrame>
  );
}
