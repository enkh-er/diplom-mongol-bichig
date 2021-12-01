import { useState, useEffect } from "react";
import { Form, Input, Space, Select, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { addDasgal, getMenusByCode } from "../../../restAPI";
import { msg } from "../general/msg";

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const huwilbar = [
  {
    mn: "А",
    en: "huwilbar_a",
  },
  {
    mn: "Б",
    en: "huwilbar_b",
  },
  {
    mn: "В",
    en: "huwilbar_c",
  },
];
const NewExercise = () => {
  const [form] = Form.useForm();
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dat = await getMenusByCode("dasgal");
    setCodes(dat);
  };

  const onFinish = (values) => {
    if (!values.asuultuud || values.asuultuud.length === 0) {
      msg("error", "Асуултаа оруулна уу");
      return;
    }
    addDasgal(values);
    msg("success", "Амжилттай хадгаллаа");
    form.resetFields();
  };

  return (
    <section className="md-container">
      Дасгал нэмэх
      <Form
        {...layout}
        form={form}
        name="new exercise"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name={"name"}
          label="Дасгалын нэр"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.List name="asuultuud">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key + index} align="baseline">
                  <Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, "asuult"]}
                      rules={[
                        { required: true, message: "Асуултаа оруулна уу" },
                      ]}
                    >
                      <Input placeholder="Асуулт" />
                    </Form.Item>
                    <Form.Item>
                      <Space>
                        {huwilbar.map((el, i) => (
                          <Form.Item
                            key={i}
                            {...field}
                            name={[field.name, el.en]}
                            rules={[
                              {
                                required: true,
                                message: `${el.mn} хувилбарыг оруулна уу`,
                              },
                            ]}
                          >
                            <Input placeholder={"Хувилбар " + el.mn} />
                          </Form.Item>
                        ))}
                        <Form.Item
                          {...field}
                          name={[field.name, "zow_huwilbar"]}
                          rules={[
                            {
                              required: true,
                              message: "Зөв хувилбарыг сонгоно уу",
                            },
                          ]}
                        >
                          <Select
                            style={{ width: 200 }}
                            placeholder="Зөв хувилбар"
                          >
                            <Option value="a">a</Option>
                            <Option value="b">b</Option>
                            <Option value="c">c</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          {...field}
                          name={[field.name, "helber"]}
                          rules={[
                            {
                              required: true,
                              message: "хэлбэрийг сонгоно уу",
                            },
                          ]}
                        >
                          <Select style={{ width: 200 }} placeholder="хэлбэр">
                            <Option value="bosoo">Босоо</Option>
                            <Option value="hewtee">Хэвтээ</Option>
                          </Select>
                        </Form.Item>
                      </Space>
                    </Form.Item>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(field.name)} />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add CustomField
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item
          name="code"
          label="Ангилал"
          rules={[
            {
              required: true,
              message: "Ангиллыг сонгоно уу",
            },
          ]}
        >
          <Select placeholder="None" style={{ width: 300 }}>
            {codes.length !== 0 &&
              codes.map((el) => (
                <Option value={el.link} key={el.id}>
                  {el.name}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12 }}>
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
export default NewExercise;
