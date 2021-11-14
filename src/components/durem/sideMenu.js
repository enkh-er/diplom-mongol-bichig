import { Col, Row } from "antd";
import Sider from "./sider";
const SideMenu = (props) => {
  const { menus } = props;
  if (!menus) {
    return null;
  }
  return (
    <div className="md-container">
      <Row justify="center">
        <Col span={20} className="back-white br-7">
          <Row justify="center" gutter={30}>
            <Col span={8}>
              <Sider menus={menus} />
            </Col>
            <Col span={16}>
              <div>{props.children}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SideMenu;
