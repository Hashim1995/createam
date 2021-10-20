import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Fade from "react-reveal/Zoom";
import MainFrame, { siteTitle } from "../components/MainFrame";
import Services from "../components/services/Services";
import We from "../components/We/We";
import Difference from "../components/difference/Difference";
import Plans from "../components/plans/Plans";
import Partners from "../components/partners/Partners";
import Blog from "../components/blog/Blog";
import Portfolio from "../components/portfolio/Portfolio";
export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ scale: 0 }}
    >
      <MainFrame>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className="landing-bg">
          <a href="#" target="_blank" className="landingText">
            OUT OF FRAME
          </a>
          <div className="landingTextBottom">
            <div className="landingTextBottom__container">
              <p className="landingTextBottom__container__text">Hello</p>

              <ul className="landingTextBottom__container__list">
                <li className="landingTextBottom__container__list__item">
                  world !
                </li>
                <li className="landingTextBottom__container__list__item">
                  new world !
                </li>
                <li className="landingTextBottom__container__list__item">
                  tech !
                </li>
                <li className="landingTextBottom__container__list__item">
                  web !
                </li>
              </ul>
            </div>
          </div>
        </div>
        <section className="services">
          <Fade duration={1500} bottom>
            <Services />
          </Fade>
        </section>
        <section className="difference">
          <Difference />
        </section>
        <section className="we">
          <We />
        </section>
        <section className="plans">
          <Plans />
        </section>
        <section className="partners">
          <Partners />
        </section>
        <section className="blog">
          <Blog />
        </section>
        <section className="portfolio">
          <Portfolio />
        </section>
      </MainFrame>
    </motion.div>
  );
}
