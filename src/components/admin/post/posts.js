import { Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Posts = (props) => {
  const { data } = props;

  const columns = [
    {
      title: "Гарчиг",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Нийтлэгч",
      dataIndex: "author",
      key: "author",
      width: "12%",
    },
    {
      title: "Нийтэлсэн огноо",
      dataIndex: "date",
      key: "date",
      width: "15%",
    },
    {
      title: "",
      dataIndex: "",
      key: "edit",
      width: "3%",
      render: () => <EditOutlined />,
    },
    {
      title: "",
      dataIndex: "",
      key: "delete",
      width: "3%",
      render: () => <DeleteOutlined />,
    },
  ];

  if (!data) {
    return null;
  }

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};
export default Posts;
