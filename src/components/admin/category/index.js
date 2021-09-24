import { Col, Row } from "antd";
import AddCategory from "./addCategory";

const Category = (props) => {
  return (
    <section className="md-container">
      <Row justify="center">
        <Col lg={22}>
          <h1>Ангилал</h1>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col lg={8}>
          <AddCategory />
        </Col>
        <Col lg={14}></Col>
      </Row>
    </section>
  );
};
export default Category;
