import { Menu, Dropdown, Button } from "antd";
import { UserOutlined, PlusCircleOutlined } from "@ant-design/icons";
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
const menuAdd = (
  <Menu>
    <Menu.Item key={1}>
      <a href="/mb-admin/new-post">Нийтлэл</a>
    </Menu.Item>
    <Menu.Item key={3}>
      <a href="/mb-admin/new-hicheel">Хичээл</a>
    </Menu.Item>
    <Menu.Item key={4}>
      <a href="/mb-admin/new-cf">Хэрэглэгчийн талбар</a>
    </Menu.Item>
    <Menu.Item key={5}>
      <a href="/mb-admin/new-exercise">Дасгал</a>
    </Menu.Item>
  </Menu>
);
const HeaderItem = () => {
  const [admin, setAdmin] = useState("admin");
  return (
    <div>
      <Dropdown overlay={menuAdd} placement="topLeft" arrow className="left">
        <Button>
          <PlusCircleOutlined />
          нэмэх
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight" arrow className="right">
        <Button>
          {admin}
          <UserOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};
export default HeaderItem;
