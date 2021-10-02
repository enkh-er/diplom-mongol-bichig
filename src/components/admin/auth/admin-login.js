import {Form, Input, Button, Checkbox, Row, Col} from "antd";

const AdminLogin = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Row justify="center" align="middle">
            <Col span={6}>
                <Form
                    name="basic"
                    labelCol={{span: 24}}
                    wrapperCol={{span: 24}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="adminForm"
                >
                    <Form.Item
                        label="Хэрэглэгчийн нэр"
                        name="username"
                        rules={[{required: true, message: "Please input your username!"}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Нууц үг"
                        name="password"
                        rules={[{required: true, message: "Please input your password!"}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{offset: 8, span: 16}}
                    >
                        <Checkbox>Намайг сана</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Нэвтрэх
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};
export default AdminLogin;
