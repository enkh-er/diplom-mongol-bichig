import {Menu, Dropdown, Button} from "antd";
import {UserOutlined, PlusCircleOutlined} from "@ant-design/icons";
import {useState} from "react";

const menu = (
    <Menu>
        <Menu.Item key={1}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.antgroup.com"
            >
                Профайл
            </a>
        </Menu.Item>
        <Menu.Item key={2}>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.aliyun.com"
            >
                Гарах
            </a>
        </Menu.Item>
    </Menu>
);
const menuAdd = (
    <Menu>
        <Menu.Item key={2}>
            <a href="/mb-admin/post">Нийтлэл</a>
        </Menu.Item>
        <Menu.Item key={2}>
            <a href="/mb-admin/page">Хуудас</a>
        </Menu.Item>
        <Menu.Item key={2}>
            <a href="/mb-admin/users">Хэрэглэгч</a>
        </Menu.Item>
    </Menu>
);
const HeaderItem = () => {
    const [admin, setAdmin] = useState("admin");
    return (
        <div>
            <Dropdown overlay={menuAdd} placement="topLeft" arrow className="left">
                <Button>
                    <PlusCircleOutlined/>
                    нэмэх
                </Button>
            </Dropdown>
            <Dropdown overlay={menu} placement="topRight" arrow className="right">
                <Button>
                    {admin}
                    <UserOutlined/>
                </Button>
            </Dropdown>
        </div>
    );
};
export default HeaderItem;
