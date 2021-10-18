import React from "react";
import Style from "./Portfolio.module.css";
import { Tabs } from "antd";
import PortfolioItem from "./portfolioItem/PortfolioItem";
import rrn from "./rrn/rrn";
import david from "./david/david";
import tobacco from "./tobacco/tobacco";
import gilan from "./gilan/gilan";
const Portfolio = () => {
  const { TabPane } = Tabs;
  return (
    <div className={Style.PortfolioWrap}>
      <div className={Style.PortfolioTitleWrap}>
        <h1 className={Style.PortfolioTitle}>Our Portfolio</h1>
        <h4 className={Style.PortfolioTitleText}>
          You can take a closer look at the different projects we have done for
          our customers.
        </h4>
        <div className={Style.PortfolioTabsWrap}>
          <Tabs
            className="PortfolioTabPanel"
            animated={{ inkBar: false, tabPane: true }}
            defaultActiveKey="1"
            centered={true}
            size={"large"}
            tabBarGutter={50}
          >
            <TabPane tab={rrn.rrn_Title} key="1">
              <PortfolioItem
                projectTitle={rrn.rrn_Title}
                images={rrn.rrn_ImgList}
                projectDescription={rrn.rrn_description}
              />
            </TabPane>
            <TabPane tab={david.david_Title} key="2">
              <PortfolioItem
                projectTitle={david.david_Title}
                images={david.david_ImgList}
                projectDescription={david.david_description}
              />
            </TabPane>
            <TabPane tab={tobacco.tobacco_Title} key="3">
              <PortfolioItem
                projectTitle={tobacco.tobacco_Title}
                images={tobacco.tobacco_ImgList}
                projectDescription={tobacco.tobacco_description}
              />
            </TabPane>
            <TabPane tab={gilan.gilan_Title} key="4">
              <PortfolioItem
                projectTitle={gilan.gilan_Title}
                images={gilan.gilan_ImgList}
                projectDescription={gilan.gilan_description}
              />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
