import { Table, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { deleteCf } from "../../../restAPI";
import { msg } from "../general/msg";

const { confirm } = Modal;

const CustomFields = (props) => {
  const { datas, setFields } = props;
  if (!datas) {
    return null;
  }
  const columns = [
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "",
      key: "edit",
      width: "5%",
      render: (text, record) => (
        <span className="pointer">
          <EditOutlined />
        </span>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "delete",
      width: "5%",
      render: (text, record) => (
        <span onClick={() => showDeleteConfirm(record.id)} className="pointer">
          <DeleteOutlined />
        </span>
      ),
    },
  ];
  function showDeleteConfirm(id) {
    confirm({
      title: "Энэ талбарыг устгахад итгэлтэй байна уу?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Тийм",
      okType: "danger",
      cancelText: "Үгүй",
      onOk() {
        deleteCf(id);
        setFields((datas) => datas.filter((item) => item.id !== id));
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }
  return (
    <section className="md-container">
      <Table columns={columns} dataSource={datas} rowKey="id" />
    </section>
  );
};
export default CustomFields;
