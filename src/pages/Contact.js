import { Col, Row, Form, Input, Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  InstagramOutlined,
  FileSearchOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { msg } from "../components/admin/general/msg";

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: `Энэ талбарыг заавал бөглөнө үү!`,
  types: {
    email: `И-мэйлийн утга буруу байна`,
  },
};
const Contact = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    msg(
      "success",
      "Таны хүсэлтийг хүлээн авлаа бид удахгүй таньд хариу илгээх болно.  "
    );
    form.resetFields();
  };
  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <Row>
              <Col span={16}>
                <div className="p-3">
                  <h2>Холбоо барих форм</h2>
                  <p>
                    Хэрэв таньд асуулт эсвэл санал хүсэлт байвал дараах формыг
                    бөглөнө үү.
                  </p>
                  <Form
                    {...layout}
                    name="contact form"
                    form={form}
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                  >
                    <Row gutter={30}>
                      <Col span={12}>
                        <Form.Item name="name" rules={[{ required: true }]}>
                          <Input placeholder="Овог нэр" />
                        </Form.Item>

                        <Form.Item name="phone">
                          <Input placeholder="Утас" />
                        </Form.Item>
                        <Form.Item name="message" rules={[{ required: true }]}>
                          <Input.TextArea rows={5} placeholder="Санал хүсэлт" />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="email"
                          rules={[{ required: true, type: "email" }]}
                        >
                          <Input placeholder="И-мэйл" />
                        </Form.Item>
                        <Form.Item name="subject">
                          <Input placeholder="Гарчиг" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit" className="send">
                        <SendOutlined />
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
              <Col span={8}>
                <div className="back-main3 full-height  text-white p-3 contact-info relative">
                  <h2 className="text-white">Холбоо барих мэдээлэл</h2>
                  <p>
                    <FileSearchOutlined /> Их сургуулийн гудамж - 1, Бага
                    тойруу, Сүхбаатар дүүрэг, Улаанбаатар
                  </p>
                  <p>
                    <MailOutlined /> enkhgem@gmail.com
                  </p>
                  <p>
                    <PhoneOutlined /> 99579693
                  </p>
                  <div className="follow">
                    <a
                      href="https://www.facebook.com/enkherdene.altankhuyag"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <FacebookOutlined />
                    </a>
                    <a
                      href="https://www.instagram.com/enkhgem/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-white"
                    >
                      <InstagramOutlined />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Contact;
