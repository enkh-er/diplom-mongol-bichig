import { Table, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { msg } from "../general/msg";
import { deletePost } from "../../../restAPI";
import { withRouter } from "react-router-dom";

const { confirm } = Modal;

const Posts = (props) => {
  const { data, setPosts } = props;

  if (!data) {
    return null;
  }

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
      render: (text, record) => (
        <a href={`/mb-admin/update-post/${record.id}`}>
          <EditOutlined />
        </a>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "delete",
      width: "3%",
      render: (text, record) => (
        <DeleteOutlined
          onClick={() => showDeleteConfirm(record.id)}
          className="pointer"
        />
      ),
    },
  ];

  // function handleChange(post) {
  //   history.push("/adf");
  // }

  function showDeleteConfirm(id) {
    confirm({
      title: "Энэ нийтлэлийг устгахад итгэлтэй байна уу?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Тийм",
      okType: "danger",
      cancelText: "Үгүй",
      onOk() {
        deletePost(id);
        setPosts((datas) => datas.filter((item) => item.id !== id));
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};
export default withRouter(Posts);
