import { Layout } from "antd";
import Sidebar from "./sidebar";
import HeaderItem from "./headerItem";
const { Content, Header } = Layout;

const AdminLayout = (props) => {
  return (
    <Layout className="admin">
      <Sidebar />
      <Layout>
        <Header>
          <HeaderItem />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
