import { useEffect, useState } from "react";
import { Button, Table, Modal } from "antd";
import { Link } from "react-router-dom";
import { deleteDasgal, getDasgaluud } from "../../../restAPI";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { msg } from "../general/msg";

const { confirm } = Modal;

const Exercise = () => {
  const [dasgaluud, setDasgaluud] = useState([]);
  const getData = async () => {
    const dat = await getDasgaluud();
    setDasgaluud(dat);
  };
  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Гарчиг",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Код",
      dataIndex: "code",
      key: "code",
      width: "15%",
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

  function showDeleteConfirm(id) {
    confirm({
      title: "Энэ хичээлийг устгахад итгэлтэй байна уу?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Тийм",
      okType: "danger",
      cancelText: "Үгүй",
      onOk() {
        deleteDasgal(id);
        setDasgaluud((datas) => datas.filter((item) => item.id !== id));
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }

  return (
    <section className="md-container">
      <h1>Дасгал</h1>
      <Button type="primary" className="mb-20">
        <Link to="/mb-admin/new-exercise">Хичээл нэмэх</Link>
      </Button>
      <Table columns={columns} dataSource={dasgaluud} rowKey="id" />
    </section>
  );
};
export default Exercise;
