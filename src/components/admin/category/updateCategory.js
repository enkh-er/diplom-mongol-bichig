import React from "react";
import { Form, Input, Button, Select } from "antd";
import { updateCategory } from "../../../restAPI";
import { msg } from "../general/msg";

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} талбарыг заавал бөглөх шаарлагатай!",
};

const UpdateCategory = (props) => {
  const [form] = Form.useForm();
  const { categories, category } = props;

  const onFinish = async (values) => {
    let formData = new FormData();
    formData.append("id", category.id);
    formData.append("name", values.name);
    formData.append("parent", values.parent ? values.parent : "");
    formData.append(
      "description",
      values.description ? values.description : ""
    );
    formData.append("link", values.link);
    formData.append("code", values.code ? values.code : "");
    updateCategory(formData);
    msg("success", "Амжилттай өөрчиллөө");
  };
  const onChange = (e) => {
    console.log(e.target.value);
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    form.setFieldsValue({
      link: defaultLink,
    });
  };

  form.setFieldsValue({
    name: props.category.name,
    link: props.category.link,
    code: props.category.code,
    description: props.category.description,
    parent: props.category.parent,
  });

  return (
    <div>
      <h5>Ангилал өөрчлөх</h5>
      <Form
        {...layout}
        form={form}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        initialValues={{
          name: props.category.name,
          link: props.category.link,
          code: props.category.code,
          description: props.category.description,
          parent: props.category.parent,
        }}
      >
        <Form.Item
          name={"name"}
          label="Ангиллын нэр"
          rules={[{ required: true }]}
        >
          <Input onChange={onChange} />
        </Form.Item>
        <Form.Item name="parent" label="Эцэг ангилал">
          <Select>
            {categories &&
              categories.map((el) => (
                <Option value={el.id} key={el.id}>
                  {el.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name={"link"} label="Холбоос" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={"code"} label="Код">
          <Input />
        </Form.Item>
        <Form.Item name={"description"} label="Дурын агуулга">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12 }}>
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateCategory;
