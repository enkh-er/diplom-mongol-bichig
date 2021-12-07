import { Col, Row } from "antd";
const NotFound = (params) => {
  return (
    <section className="pt-90 back-light-blue dasgal">
      <div className="bg-container">
        <Row justify="center">
          <Col span={20}>
            <div className="notfound text-center">
              <h1>404</h1>
              <h2>Таны хайсан хуудас олдсонгүй</h2>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default NotFound;
