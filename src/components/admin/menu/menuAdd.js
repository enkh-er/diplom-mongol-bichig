import {Form, Input, Button, Select, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";

const {Option} = Select;

const layout = {
    labelCol: {span: 24},
    wrapperCol: {span: 24},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} талбарыг заавал бөглөх шаарлагатай!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const MenuAdd = () => {
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <div>
            <h5>Цэс нэмэх</h5>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name={"name"} label="Нэр" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name="parent" label="Эцэг">
                    <Select placeholder="None">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="type" label="Төрөл">
                    <Select defaultValue="category">
                        <Option value="category">Ангилал</Option>
                        <Option value="article">Нийтлэл</Option>
                        <Option value="page">Нуудас</Option>
                        <Option value="custom-link">URL</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="linkto" label="Ангилал">
                    <Select defaultValue="category">
                        <Option value="category">Ангилал</Option>
                        <Option value="article">Нийтлэл</Option>
                        <Option value="page">Нуудас</Option>
                        <Option value="custom-link">URL</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={"link"} label="Холбоос" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item name={"code"} label="Код">
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{span: 12}}>
                    <Button type="primary" htmlType="submit">
                        Хадгалах
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default MenuAdd;
