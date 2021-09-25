import React from "react";
import { Menu } from "antd";
import Style from "./nav.module.css";
const Nav = () => {
  return (
    <div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item className={Style.menuItem} key="1">
          nav 1
        </Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
