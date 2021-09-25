import React from "react";
import { Menu } from "antd";
import Image from "next/image";

import Style from "./nav.module.css";
const Nav = () => {
  return (
    <div>
      <Menu className={Style.nav} mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item className={`${Style.menuItem} menuContent`} key="1">
          <Image height="40" width="147" src="/images/logo.png" />
        </Menu.Item>
        <Menu.Item className={Style.menuItem} key="2">
          nav 2
        </Menu.Item>
        <Menu.Item className={Style.menuItem} key="3">
          nav 3
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
