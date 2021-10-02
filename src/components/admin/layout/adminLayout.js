import {Layout, Row, Col} from "antd";
import Sidebar from "./sidebar";
import HeaderItem from "./headerItem";

const {Content, Header} = Layout;

const AdminLayout = (props) => {
    return (
        <Layout className="admin">
            <Sidebar/>
            <Layout>
                <Header>
                    <HeaderItem/>
                </Header>
                <Content>
                    <Row justify="center">
                        <Col lg={23}>{props.children}</Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;
