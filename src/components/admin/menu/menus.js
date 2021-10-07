import React from "react";
import { deleteCategory } from "../../../restAPI";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Menus = (props) => {
  const { datas, getData } = props;
  if (datas.length === 0) {
    return null;
  }
  console.log(datas);
  return (
    <section className="menu-lists">
      {datas.map((el, key) => (
        <div key={key}>
          <div className="menu-db">
            {el.name}
            <span className="pointer">
              <EditOutlined />
            </span>
            <span className="pointer">
              <DeleteOutlined />
            </span>
          </div>
          {el.child_items
            ? el.child_items.map((child, key) => {
                return (
                  <div
                    key={key}
                    className="menu-db"
                    style={{ marginLeft: "20px" }}
                  >
                    {child.name}
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
