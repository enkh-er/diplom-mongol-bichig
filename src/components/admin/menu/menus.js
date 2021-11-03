import React from "react";
import { deleteMenu } from "../../../restAPI";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { msg } from "../general/msg";
import UpdateMenu from "./updateMenu";

const { confirm } = Modal;

const Menus = (props) => {
  const { datas, getData, categories } = props;
  const [visible, setVisible] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({});

  const showModal = (record) => {
    setUpdateData(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  function showDeleteConfirm(id, name) {
    confirm({
      title: "Энэ цэсийг устгахад итгэлтэй байна уу?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Тийм",
      okType: "danger",
      cancelText: "Үгүй",
      onOk() {
        deleteMenu(id, name);
        getData();
        msg("success", "Амжилттай устгалаа");
      },
      onCancel() {},
    });
  }

  if (!datas) {
    return null;
  }

  return (
    <section className="menu-lists">
      {datas.map((el) => (
        <div key={el.id}>
          <div className="menu-db">
            {el.name}
            <span className="pointer">
              <DeleteOutlined
                onClick={() => showDeleteConfirm(el.id, el.name)}
              />
            </span>
            <span className="pointer">
              <EditOutlined onClick={() => showModal(el)} />
            </span>
          </div>
          {el.child_items
            ? el.child_items.map((child) => {
                return (
                  <div
                    key={child.name}
                    className="menu-db"
                    style={{ marginLeft: "20px" }}
                  >
                    {child.name}
                    <span className="pointer">
                      <DeleteOutlined
                        onClick={() => showDeleteConfirm(el.id, child.name)}
                      />
                    </span>
                    <span className="pointer" onClick={() => showModal(child)}>
                      <EditOutlined />
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      ))}
      <Modal
        title="Цэс"
        visible={visible}
        onCancel={handleCancel}
        footer={false}
      >
        <UpdateMenu
          menu={updateData}
          categories={categories}
          datas={datas}
          onCancel={handleCancel}
        />
      </Modal>
    </section>
  );
};
export default Menus;
