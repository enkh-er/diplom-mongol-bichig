import { Col, Row } from "antd";
import React from "react";

const TopHeader = () => {
  <header className="topHeader">
    <Row justify="center" align="middle">
      <Col span={2}>Logo</Col>
      <Col span={8} offset={10}>
        <div>
          <a href="/">Тухай</a>
          <a href="/">Холбоо барих</a>
          <a href="/">Нэвтрэх</a>
        </div>
      </Col>
    </Row>
  </header>;
};
export default TopHeader;
