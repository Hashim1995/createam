import Head from "next/head";
import Link from "next/link";
import MainFrame, { siteTitle } from "../components/MainFrame";
import Services from "../components/services/Services";
import Difference from "../components/difference/Difference";
export default function Home() {
  return (
    <MainFrame home>
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
        <Services />
      </section>
      <section className="difference">
        <Difference />
      </section>
    </MainFrame>
  );
}
