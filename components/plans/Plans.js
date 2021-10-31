import { React, useState } from "react";
import Style from "./Plans.module.css";
import { Button, Row, Col, Modal } from "antd";
import PlansItem from "./plansItem/PlansItem";
const Plans = () => {
  const plansData = [
    {
      id: 1,
      PlansItemHeaderTitle: "BASIC PLAN",
      PlansItemHeaderPrice: "299 ₼",
      PlansItemBodyTexts: [
        "Consulting",
        "Advising",
        "Business Planning",
        "-",
        "-",
      ],
    },
    {
      id: 2,
      PlansItemHeaderTitle: "ADVANCED PLAN",
      PlansItemHeaderPrice: "499 ₼",
      PlansItemBodyTexts: [
        "Consulting",
        "Advising",
        "Business Planning",
        "Investments",
        "-",
      ],
    },
    {
      id: 3,
      PlansItemHeaderTitle: "PREMIUM PLAN",
      PlansItemHeaderPrice: "999 ₼",
      PlansItemBodyTexts: [
        "Consulting",
        "Advising",
        "Business Planning",
        "Investments",
        "24/7 Support",
      ],
    },
  ];

  const [planItemModalVisible, setPlanItemModalVisible] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  return (
    <div className={Style.PlansWrap}>
      <Row gutter={30}>
        {plansData.map((item, index) => {
          return (
            <Col key={item.id} xs={24} sm={12} md={8}>
              <div className={Style.PlansItemWrap}>
                <div className={Style.PlansItemHeader}>
                  <h1 className={Style.PlansItemHeaderTitle}>
                    {item.PlansItemHeaderTitle}
                  </h1>
                  <h4 className={Style.PlansItemHeaderPrice}>
                    {item.PlansItemHeaderPrice}
                  </h4>
                </div>
                <div className={Style.PlansItemBody}>
                  {item.PlansItemBodyTexts.map((textItem) => {
                    return <p>{textItem}</p>;
                  })}
                </div>
                <div className={Style.PlansItemFooter}>
                  <Button
                    className={`${Style.PlansItemFooterButton} custom-ant-btn`}
                    size={"large"}
                    type="primary"
                    onClick={() => {
                      setPlanItemModalVisible(true);
                      setSelectedPlanId(index);
                    }}
                  >
                    Get more
                  </Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <Modal
        title="Detailed plan"
        visible={planItemModalVisible}
        onCancel={() => setPlanItemModalVisible(false)}
        footer={null}
      >
        <PlansItem
          plans={plansData[selectedPlanId]}
          selectedPlanId={selectedPlanId}
        />
      </Modal>
    </div>
  );
};

export default Plans;
