import React from "react";
import { Form, Input, Button, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} талбарыг заавал бөглөх шаарлагатай!",
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const UpdateCategory = (props) => {
  const [form] = Form.useForm();
  const { categories, category } = props;

  const onFinish = async (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("parent", values.parent ? values.parent : "");
    formData.append(
      "description",
      values.description ? values.description : ""
    );
    formData.append("link", values.link);
    formData.append("code", values.code ? values.code : "");
    formData.append("image", values.image ? values.image : "");
    console.log(formData);
    console.log(values.name);
    // datas.array.forEach(element => {
    //   if(element.name===values.name){
    //     return false;
    //   }
    // });
    // const dat = await addCategory(formData);
    // if (dat.length !== 0) {
    //   getData();
    // }
  };
  const onChange = (e) => {
    console.log(e.target.value);
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    form.setFieldsValue({
      link: defaultLink,
    });
  };
  React.useEffect(() => {
    form.setFieldsValue({
      category,
    });
  }, []);
  //   form.setFieldsValue({
  //     name: category.name,
  //   });
  console.log(category.name);
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
          name: category.name,
          link: category.link,
          code: category.code,
          description: category.description,
          parent: category.parent,
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
            {props.categories.map((el) => (
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
        <Form.Item
          name="image"
          label="Зураг"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Файл сонгох</Button>
          </Upload>
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
