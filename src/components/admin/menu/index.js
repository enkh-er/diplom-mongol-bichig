import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import MenuAdd from "./menuAdd";
import Menus from "./menus";
import { getMenus } from "../../../restAPI";

const Menu = (props) => {
  const [menus, setMenus] = useState([]);
  const getData = async () => {
    const dat = await getMenus();
    setMenus(dat);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="md-container">
      <h1>Цэс</h1>
      <Row gutter={30}>
        <Col lg={9}>
          <MenuAdd datas={menus} getData={getData} />
        </Col>
        <Col lg={15}>
          <Menus datas={menus} setMenus={setMenus} />
        </Col>
      </Row>
    </section>
  );
};
export default Menu;
