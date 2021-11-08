import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { getMenusByCode } from "../../restAPI";

const Header = () => {
  const [menus, setMenus] = useState({});

  const getData = async () => {
    const dat = await getMenusByCode("main_menu");
    setMenus(dat[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!menus) {
    return null;
  }

  return (
    <div className="menu">
      <Menu mode="horizontal">
        {menus.child_items &&
          menus.child_items.map((item) => (
            <Menu.Item key={item.link}>
              <a href={item.link}>{item.name}</a>
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};
export default Header;
