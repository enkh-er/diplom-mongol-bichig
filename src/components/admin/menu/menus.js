import React from "react";
import { deleteMenu } from "../../../restAPI";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";

const { confirm } = Modal;

const Menus = (props) => {
  const { datas, getData } = props;

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
      },
      onCancel() {},
    });
  }

  if (datas.length === 0) {
    return null;
  }
  console.log(datas);
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
              <EditOutlined />
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
                    <span className="pointer">
                      <EditOutlined />
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      ))}
    </section>
  );
};
export default Menus;
