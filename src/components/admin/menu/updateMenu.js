import React from "react";
import { Form, Select, Input, Button } from "antd";
import { changeMenu } from "../../../restAPI";
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

const UpdateMenu = (props) => {
  const [form] = Form.useForm();
  const { datas, getData, categories, menu } = props;
  const onFinish = (values) => {
    let formData = new FormData();
    formData.append("id", menu.id);
    formData.append("name", values.name);
    formData.append("parent", values.parent ? values.parent : "");
    formData.append("type", values.type);
    formData.append("link", values.link);
    formData.append("typeId", values.typeId);
    formData.append("code", values.code ? values.code : "");
    changeMenu(formData);
    msg("success", "Амжилттай хадгаллаа");
    getData();
  };

  const onChange = (e) => {
    console.log(e.target.value);
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.split(" ").join("-");
    form.setFieldsValue({
      link: defaultLink,
    });
  };

  form.setFieldsValue({
    name: props.menu.name,
    link: props.menu.link,
    code: props.menu.code,
    type: props.menu.type,
    typeId: props.menu.typeId,
    parent: props.menu.parent,
  });

  return (
    <div>
      <h5>Цэс өөрчлөх</h5>
      <Form
        {...layout}
        name="menus"
        onFinish={onFinish}
        validateMessages={validateMessages}
        form={form}
        initialValues={{
          name: menu.name,
          link: menu.link,
          code: menu.code,
          type: menu.type,
          typeId: menu.typeId,
          parent: menu.parent,
        }}
      >
        <Form.Item name={"name"} label="Нэр" rules={[{ required: true }]}>
          <Input onChange={onChange} />
        </Form.Item>
        <Form.Item name="parent" label="Эцэг">
          <Select placeholder="None">
            {datas &&
              datas.map((el, i) => (
                <Option value={el.id} key={i}>
                  {el.name}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item name="type" label="Төрөл" rules={[{ required: true }]}>
          <Select>
            <Option value="category">Ангилал</Option>
            <Option value="article">Нийтлэл</Option>
            <Option value="page">Нуудас</Option>
            <Option value="custom-link">URL</Option>
          </Select>
        </Form.Item>
        <Form.Item name="typeId" label="Ангилал">
          <Select placeholder="None">
            {categories &&
              categories.map((el, i) => (
                <Option value={el.id} key={i}>
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
        <Form.Item wrapperCol={{ span: 12 }}>
          <Button type="primary" htmlType="submit">
            Хадгалах
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateMenu;
