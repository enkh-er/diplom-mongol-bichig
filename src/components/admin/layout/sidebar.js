import { Layout, Menu } from "antd";
import { useLocation } from "react-router-dom";
import {
  BranchesOutlined,
  DashboardOutlined,
  FileTextOutlined,
  SwitcherOutlined,
  UserOutlined,
  ProfileOutlined,
  PicRightOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const menuItems = [
  {
    name: "Хяналтын самбар",
    link: "/mb-admin",
    logo: <DashboardOutlined />,
  },
  {
    name: "Ангилал",
    link: "/mb-admin/category",
    logo: <BranchesOutlined />,
  },
  {
    name: "Нийтлэл",
    link: "/mb-admin/post",
    logo: <FileTextOutlined />,
  },
  {
    name: "Хуудас",
    link: "/mb-admin/page",
    logo: <SwitcherOutlined />,
  },
  {
    name: "Цэс",
    link: "/mb-admin/menu",
    logo: <BarsOutlined />,
  },
  {
    name: "Хэрэглэгчийн талбар",
    link: "/mb-admin/custom-field",
    logo: <PicRightOutlined />,
  },
  {
    name: "Форм",
    link: "/mb-admin/form",
    logo: <ProfileOutlined />,
  },
  {
    name: "Хэрэглэгчид",
    link: "/mb-admin/users",
    logo: <UserOutlined />,
  },
];

const Sidebar = (props) => {
  const location = useLocation();
  return (
    <Sider>
      <div className="admin-menu">
        <div className="logo">Logo</div>
        <Menu selectedKeys={[location.pathname]} theme="dark">
          {menuItems.map((item) => (
            <Menu.Item key={item.link} icon={item.logo}>
              <a href={item.link}>{item.name}</a>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};
export default Sidebar;
