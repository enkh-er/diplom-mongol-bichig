import {Col, Row} from "antd";
import MenuAdd from "./menuAdd";

const Menu = (props) => {
    return (
        <section className="md-container">
            <h1>Цэс</h1>
            <Row>
                <Col lg={9}>
                    <MenuAdd/>
                </Col>
                <Col lg={15}></Col>
            </Row>
        </section>
    );
};
export default Menu;
