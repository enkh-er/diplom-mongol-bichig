import { Col, Row } from "antd";
import Sider from "./sider";
const SideMenu = (props) => {
  return (
    <div className="md-container">
      <Row justify="center">
        <Col span={20} className="back-white br-7">
          <Row justify="center" gutter={30}>
            <Col span={8}>
              <Sider {...props} />
            </Col>
            <Col span={16}>
              <div className="sm-container pr-30 durmvvd">{props.children}</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default SideMenu;
