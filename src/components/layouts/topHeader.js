import { Col, Row } from "antd";
import React from "react";

const TopHeader = () => {
  return (
    <div className="top">
      <Row justify="center" align="middle">
        <Col span={22}>
          <div className="topHeader">
            <div className="logo">Эрдэни</div>
            <div className="right-menu">
              <a href="/">Тухай</a>
              <a href="/">Холбоо барих</a>
              <a href="/">Нэвтрэх</a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default TopHeader;
