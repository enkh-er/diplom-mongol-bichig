import { useState, useEffect } from "react";
import { Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { getCategories } from "../../../restAPI";
import { addCf } from "../../../restAPI";
import { msg } from "../general/msg";

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const NewCF = () => {
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let categories = [];
    let fields = [];
    if (values.cats && values.cats.length > 0) {
      for (let i = 0; i < values.cats.length; i++) {
        categories.push(values.cats[i].catId);
      }
    }
    fields = values.acf ? values.acf : [];
    const customField = {
      name: values.name,
      fields,
      categories,
    };
    addCf(customField);
    msg("success", "Амжилттай хадгаллаа");
    form.resetFields();
  };

  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="md-container">
      Хэрэглэгчийн талбар
      <Form
        {...layout}
        form={form}
        name="cf field"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item name={"name"} label="CF нэр" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.List name="acf">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Space key={field.key + index} align="baseline">
                  <Form.Item
                    {...field}
                    label="Нэр"
                    name={[field.name, "name"]}
                    rules={[{ required: true, message: "Missing name" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Түлхүүр"
                    name={[field.name, "key"]}
                    rules={[{ required: true, message: "Missing key" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    label="Төрөл"
                    name={[field.name, "type"]}
                    rules={[{ required: true, message: "Missing type" }]}
                  >
                    <Select style={{ width: 130 }}>
                      <Option key="text" value="text">
                        text
                      </Option>
                      <Option key="textArea" value="textArea">
                        text area
                      </Option>
                      <Option key="image" value="image">
                        Image
                      </Option>
                      <Option key="file" value="file">
                        file
                      </Option>
                      <Option key="boolean" value="boolean">
                        boolean
                      </Option>
                    </Select>
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
        <Form.List name="cats">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, i) => (
                <Space key={field.key} align="baseline">
                  <Form.Item
                    {...field}
                    label="Ангилал"
                    name={[field.name, "catId"]}
                    rules={[{ required: true, message: "Missing categories" }]}
                  >
                    <Select style={{ width: 130 }}>
                      {categories &&
                        categories.map((el, i) => (
                          <Option value={el.id} key={el.id}>
                            {el.name}
                          </Option>
                        ))}
                    </Select>
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
                  Add Category
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item wrapperCol={{ span: 12 }}>
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};
export default NewCF;
