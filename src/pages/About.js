import { Col, Row } from "antd";

const About = () => {
  return (
    <section>
      <div className="about-back">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="descr">
          <h1>
            {/* ᠮᠢᠨᠤ <br /> ᠲᠤᠬᠠᠢ */}
            Эрдэни апп
          </h1>
          <p>
            Эрдэнэ апп нь монгол бичиг суралцагсдад зориулагдсан ба монгол
            бичгийн зөв бичих дүрэм, дасгал, унших материал, мэдээ мэдээлэл
            болон онлайн сургалтуудыг агуулдаг.
          </p>
        </div>
      </div>

      <div className="md-container">
        <Row justify="center">
          <Col span={20}>
            <h1 className="bichigw">
              ᠮᠢᠨᠤ <br /> ᠲᠤᠬᠠᠢ
            </h1>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default About;
