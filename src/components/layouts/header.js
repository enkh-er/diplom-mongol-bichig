import React from "react";
import { Menu, Dropdown, Select, Input } from "antd";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Search } = Input;

const { SubMenu } = Menu;

const Header = ({ subMenus, menus }) => {
  if (!menus) {
    return null;
  }
  const onSearch = (value) => console.log(value);

  const menu = (item) => {
    return (
      <Menu className="sub-menu">
        {item.map((elems, i) => (
          <SubMenu title={elems.name} key={elems.link + i}>
            {elems.child_items.map((el) => (
              <Menu.Item key={el.link}>
                <Link to={`/durem/${el.link}`}>{el.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  };
  return (
    <div className="menu">
      <Menu mode="horizontal">
        {menus.child_items &&
          menus.child_items.map((item, i) => (
            <Menu.Item key={item.link + i}>
              {subMenus[i] && subMenus[i].length !== 0 ? (
                <Dropdown overlay={menu(subMenus[i])} placement="bottomLeft">
                  <Link to={"/" + item.link}>{item.name}</Link>
                </Dropdown>
              ) : (
                <Link to={"/" + item.link}>{item.name}</Link>
                // <a href={item.link}>{item.name}</a>
              )}
            </Menu.Item>
          ))}
        <Menu.Item
          key="search"
          className="searchCon"
          style={{ borderBottom: "none" }}
        >
          <Search
            style={{ width: 300 }}
            placeholder="Хайх"
            onSearch={onSearch}
            enterButton
          />
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Header;
