import { useEffect, useState } from "react";
import { Button, Table, Modal } from "antd";
import { Link } from "react-router-dom";
import { deleteHicheel, getHicheelvvd } from "../../../restAPI";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { msg } from "../general/msg";

const { confirm } = Modal;

const Hicheelvvd = () => {
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const dat = await getHicheelvvd();
    setPosts(dat);
  };
  useEffect(() => {
    getData();
  }, []);

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
        deleteHicheel(id);
        setPosts((datas) => datas.filter((item) => item.id !== id));
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }

  return (
    <section className="md-container">
      <h1>Хичээл</h1>
      <Button type="primary" className="mb-20">
        <Link to="/mb-admin/new-hicheel">Хичээл нэмэх</Link>
      </Button>
      <Table columns={columns} dataSource={posts} rowKey="id" />
    </section>
  );
};
export default Hicheelvvd;
