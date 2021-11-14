import React from "react";
import { Menu, Dropdown, Row, Col } from "antd";
import { Link } from "react-router-dom";

// const { SubMenu } = Menu;

const Header = ({ subMenus, menus }) => {
  if (!menus) {
    return null;
  }

  const menu = (item) => {
    return (
      <Menu className="sub-menu">
        {item.map((el) => (
          <Menu.Item key={el.link}>
            <a href={el.link}>{el.name}</a>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <div className="menu">
      <Menu mode="horizontal">
        {menus.child_items &&
          menus.child_items.map((item, i) => (
            <Menu.Item key={item.link}>
              {subMenus[i] && subMenus[i].length !== 0 ? (
                <Dropdown overlay={menu(subMenus[i])} placement="bottomLeft">
                  <Link to={item.link}>{item.name}</Link>
                </Dropdown>
              ) : (
                <Link to={item.link}>{item.name}</Link>
                // <a href={item.link}>{item.name}</a>
              )}
            </Menu.Item>
          ))}
      </Menu>
    </div>
  );
};
export default Header;
