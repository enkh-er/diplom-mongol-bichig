import React, { useEffect, useState } from "react";
import { Menu, Input } from "antd";
import { getMenusByCode } from "../../restAPI";

const { Search } = Input;

const Header = () => {
  const [menus, setMenus] = useState({});
  const getData = async () => {
    const dat = await getMenusByCode("main_menu");
    setMenus(dat[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(menus);
  if (!menus) {
    return null;
  }

  const onSearch = (value) => console.log(value);

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
