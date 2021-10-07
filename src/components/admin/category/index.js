import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import AddCategory from "./addCategory";
import Categories from "./categories";
import { getCategories } from "../../../restAPI";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(categories);
  return (
    <section className="md-container">
      <h1>Ангилал</h1>
      <Row justify="center" gutter={[16, 16]}>
        <Col lg={9}>
          <AddCategory datas={categories} getData={getData} />
        </Col>
        <Col lg={15}>
          <Categories setCategories={setCategories} categories={categories} />
        </Col>
      </Row>
    </section>
  );
};
export default Category;
