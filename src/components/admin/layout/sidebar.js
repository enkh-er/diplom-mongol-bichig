import { Button, Layout, Menu } from "antd";

const { Sider } = Layout;

const Sidebar = (props) => {
  // const [isCollapse, setCollapse]
  return (
    <Sider>
      <div className="admin-menu">
        <div className="logo">Logo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Ангилал</Menu.Item>
          <Menu.Item key="2">Нийтлэл</Menu.Item>
          <Menu.Item key="3">Хуудас</Menu.Item>
          <Menu.Item key="4">Цэс</Menu.Item>
          <Menu.Item key="5">Хэрэглэгчийн талбар</Menu.Item>
          <Menu.Item key="6">Форм</Menu.Item>
        </Menu>
        <div className="logout">
          <Button>Гарах</Button>
        </div>
      </div>
    </Sider>
  );
};
export default Sidebar;
