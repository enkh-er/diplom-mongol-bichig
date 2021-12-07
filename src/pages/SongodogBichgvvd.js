import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { getMenusByCode } from "../restAPI";
import Songodog from "../components/songodog/songodog";

const SongodogBichgvvd = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const bichgvvdMenus = await getMenusByCode("songodog_bichgvvd");
    setMenus(bichgvvdMenus);
  };

  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <div className="sm-container">
              <h1 className="text-center">Сонгодог бичгүүд</h1>
              <Songodog menus={menus} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SongodogBichgvvd;
