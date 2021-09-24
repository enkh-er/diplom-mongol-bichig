import { Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

const menu = (
  <Menu>
    <Menu.Item key={1}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Профайл
      </a>
    </Menu.Item>
    <Menu.Item key={2}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Гарах
      </a>
    </Menu.Item>
  </Menu>
);

const HeaderItem = () => {
  const [admin, setAdmin] = useState("admin");
  return (
    <Dropdown overlay={menu} placement="topRight" arrow>
      <Button>
        {admin}
        <UserOutlined />
      </Button>
    </Dropdown>
  );
};
export default HeaderItem;
