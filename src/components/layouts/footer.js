import { Col, Row, Form, Input, Button } from "antd";
import {
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const validateMessages = {
  required: "${label} талбарыг заавал бөглөх шаарлагатай!",
};

const Footer = ({ menus }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {};
  return (
    <footer>
      <div className="pt-20  pb-20 back-main3">
        <Row justify="center" gutter={30}>
          <Col span={5}>
            <h3>Бидний Тухай</h3>
            <p>
              Миний бие энэхүү цахим хуудсыг өөрийн сонирхлоороо монгол бичиг
              сурахыг хүссэн хүн бүрд зориулан бүтээв.
            </p>
            <p>
              <PhoneFilled /> 99579693
            </p>
            <p>
              <MailFilled /> enkhgem@gmail.com
            </p>
            <div className="socials">
              <a
                href="https://www.facebook.com/enkherdene.altankhuyag"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookFilled />
              </a>
              <a
                href="https://www.instagram.com/enkhgem/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramFilled />
              </a>
            </div>
          </Col>
          <Col span={5}>
            <h3>Ангилал</h3>
            <ul className="useful-links">
              {menus &&
                menus.map((el, i) => (
                  <li key={i}>
                    <a href={el.link}>{el.name}</a>
                  </li>
                ))}
            </ul>
          </Col>
          <Col span={5}>
            <h3>Хэрэгцээт холбоос</h3>
            <ul className="useful-links">
              <li>
                <a
                  href="http://www.mongol-bichig.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Монгол бичиг
                </a>
              </li>
              <li>
                <a
                  href="http://mongolian-script.blogspot.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Монгол бичиг блог
                </a>
              </li>
              <li>
                <a
                  href="http://khumuunbichig.montsame.mn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Хүмүүн бичиг
                </a>
              </li>
              <li>
                <a
                  href="https://mongoltoli.mn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Монгол толь
                </a>
              </li>
              <li>
                <a
                  href="http://mongolfont.com/mn/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Өвөр Монголын Алмас компани
                </a>
              </li>
            </ul>
          </Col>
          <Col span={5}>
            <h3>Холбоо барих</h3>
            <Form
              {...layout}
              form={form}
              name="contact"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item name={"email"} rules={[{ required: true }]}>
                <Input placeholder="И-мэйл" />
              </Form.Item>
              <Form.Item name={"msg"}>
                <Input.TextArea placeholder="Санал хүсэлт" />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12 }}>
                <Button type="primary" htmlType="submit">
                  Илгээх
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="pt-10 pb-10 text-center back-main1">
        <p className="no-margin name text-white shadow1">
          Created by Enkherdene
        </p>
      </div>
    </footer>
  );
};
export default Footer;
