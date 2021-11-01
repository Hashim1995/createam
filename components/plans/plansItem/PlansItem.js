import React from "react";
import Style from "./PlansItem.module.css";
import Link from "next/link";
import { Button } from "antd";
const PlansItem = ({ plans, selectedPlanId }) => {
  return (
    <div className={Style.PlansItemWrap}>
      <h1 className={Style.PlansItemHeaderTitle}>
        {plans.PlansItemHeaderTitle}
      </h1>
      <h4 className={Style.PlansItemHeaderPrice}>
        {plans.PlansItemHeaderPrice}
      </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam natus
        eligendi inventore assumenda accusamus voluptas commodi sit expedita
        molestias, tempora dolor enim modi adipisci autem! Quia vitae illo non.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
        ratione distinctio. Rerum illo itaque assumenda. Aliquam praesentium
        mollitia molestiae ab cumque, consectetur commodi harum enim, libero
        facere est, omnis fugiat!
      </p>
      <Link href="/contact" passHref>
        <Button
          className={`${Style.PlansItemButton} custom-ant-btn`}
          size={"large"}
          type="primary"
        >
          Send Request
        </Button>
      </Link>
    </div>
  );
};

export default PlansItem;
