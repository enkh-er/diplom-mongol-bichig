import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import MenuAdd from "./menuAdd";
import Menus from "./menus";
import { getMenus, getCategories } from "../../../restAPI";

const Menu = (props) => {
  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const dat = await getMenus();
    const dat1 = await getCategories();
    setCategories(dat1);
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
          <MenuAdd
            datas={menus}
            categories={categories}
            setMenus={setMenus}
            getData={getData}
          />
        </Col>
        <Col lg={15}>
          <Menus datas={menus} getData={getData} />
        </Col>
      </Row>
    </section>
  );
};
export default Menu;
