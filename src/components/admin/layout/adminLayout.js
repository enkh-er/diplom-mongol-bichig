import { Layout } from "antd";
import Sidebar from "./sidebar";

const { Content, Header } = Layout;

const AdminLayout = (props) => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
