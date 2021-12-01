import { Col, Row } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <div className="top">
      <Row justify="center" align="middle">
        <Col span={20}>
          <div className="topHeader">
            <Link to="/">
              <span className="logo">Эрдэни</span>
            </Link>

            <div className="right-menu">
              <Link to="/bidnii-tuhai">Тухай</Link>
              <Link to="/holboo-barih">Холбоо барих</Link>
              <Link to="/">
                <span className="user-ico">
                  <UserOutlined />
                </span>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default TopHeader;
