import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Table, Input, Modal } from "antd";
import { deleteCategory } from "../../../restAPI";
import UpdateCategory from "./updateCategory";
import { msg } from "../general/msg";

const { Search } = Input;
const { confirm } = Modal;

const Categories = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});

  const showModal = (record) => {
    setUpdateData(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onSearch = (value) => console.log(value);
  const { categories, setCategories } = props;

  const columns = [
    {
      title: "Нэр",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "",
      key: "count",
      width: "5%",
      render: () => <p>0</p>,
    },
    {
      title: "",
      dataIndex: "",
      key: "edit",
      width: "5%",
      render: (text, record) => (
        <span className="pointer" onClick={() => showModal(record)}>
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
      title: "Энэ ангиллыг устгахад итгэлтэй байна уу?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Тийм",
      okType: "danger",
      cancelText: "Үгүй",
      onOk() {
        deleteCategory(id);
        setCategories((datas) => datas.filter((item) => item.id !== id));
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }

  return (
    <section className="category-lists">
      <Search
        onSearch={onSearch}
        enterButton
        placeholder="Хайх"
        style={{ width: 300 }}
        className="pb-15"
      />
      <Table columns={columns} dataSource={categories} rowKey="id" />
      <Modal
        title="Ангилал"
        visible={visible}
        onCancel={handleCancel}
        footer={false}
      >
        <UpdateCategory
          category={updateData}
          categories={categories}
          onCancel={handleCancel}
        />
      </Modal>
    </section>
  );
};
export default Categories;
