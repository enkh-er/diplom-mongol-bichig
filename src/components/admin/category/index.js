import { Col, Row } from "antd";
import { useState } from "react";
import AddCategory from "./addCategory";
import Categories from "./categories";
import { getCategories } from "../../../restAPI";

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  return (
    <section className="md-container">
      <h1>Ангилал</h1>
      <Row justify="center" gutter={[16, 16]}>
        <Col lg={9}>
          <AddCategory />
        </Col>
        <Col lg={15}>
          <Categories />
        </Col>
      </Row>
    </section>
  );
};
export default Category;
