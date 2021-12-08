import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  BranchesOutlined,
  DashboardOutlined,
  FileTextOutlined,
  HighlightOutlined,
  PicRightOutlined,
  BarsOutlined,
  VideoCameraOutlined,
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
    name: "Хичээлүүд",
    link: "/mb-admin/hicheelvvd",
    logo: <VideoCameraOutlined />,
  },
  {
    name: "Дасгал",
    link: "/mb-admin/exercise",
    logo: <HighlightOutlined />,
  },
];

const Sidebar = (props) => {
  const location = useLocation();
  return (
    <Sider>
      <div className="admin-menu">
        <div className="logo text-center">Админ панел</div>
        <Menu selectedKeys={[location.pathname]} theme="dark">
          {menuItems.map((item) => (
            <Menu.Item key={item.link} icon={item.logo}>
              <Link to={item.link}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Sider>
  );
};
export default Sidebar;
