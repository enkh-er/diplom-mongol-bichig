import React from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;

const Header = () => {
  <Menu mode="horizontal">
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
  </Menu>;
};
export default Header;
