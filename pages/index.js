import Head from "next/head";
import Link from "next/link";
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
    <MainFrame>
      <Head>
        <title>Ana səhifə Baku createam</title>
        <meta
          name="description"
          content="Baku Createam komandası olaraq sizələrə ən ucuz veb sayt hazırlanmasını təklif edirik. Hazırlanan veb saytlar bütün müasir standarlara cavab verir"
        />
        <meta
          name="keywords"
          content="baku createam, kreateam baki, createam veb sayt, web site baku,web site, web sayt, web saytlarin yigilmasi, websayt, website, Veb sayt, site, veb site, saytlar, veb saytlar, saytların yığılması, veb saytların hazırlanması,veb siteler, saytlarin yigilmasi, sayt yigilmasi, sayt hazirlamasi en ucuz, ucuz sayt yigilmasi, saytlarin ucuz qiymete hazirlanmasi, baku createam, baki createam saytlarin yigilmasi, baku createam saytlarin yigilmasi"
        />
      </Head>
      <div className="landing-bg">
        <a href="#" target="_blank" className="landingText">
          ÇƏRÇİVƏDƏN ÇIX
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
  );
}
