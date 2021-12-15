import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Input } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

const { SubMenu } = Menu;

const Header = ({ subMenus, menus }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let datas = [];
    if (subMenus && subMenus.length > 0) {
      const d = subMenus[0];
      for (let i = 0; i < d.length; i++) {
        if (d[i].child_items && d[i].child_items.length > 0) {
          for (let j = 0; j < d[i].child_items.length; j++) {
            datas.push(d[i].child_items[j]);
          }
        }
      }
    }
    setData(datas);
  }, [subMenus]);

  if (!menus || !subMenus) {
    return null;
  }
  const onSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const menu = (item) => {
    return (
      <Menu className="sub-menu">
        {item.map((elems, i) => {
          return elems.child_items && elems.child_items.length !== 0 ? (
            <SubMenu title={elems.name} key={elems.link + i}>
              {elems.child_items.map((el) => (
                <Menu.Item key={el.link}>
                  <Link to={`/${elems.code}/${el.link}`}>{el.name}</Link>
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={elems.link}>
              <Link to={`/${elems.code}/${elems.link}`}>{elems.name}</Link>
            </Menu.Item>
          );
        })}
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
            placeholder="Дүрэм хайх"
            onChange={onSearch}
            enterButton
            value={wordEntered}
            allowClear
          />
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => (
                <Link
                  to={"/durem/" + value.link}
                  className="dataItem"
                  key={key}
                  onClick={clearInput}
                >
                  {value.name}
                </Link>
              ))}
            </div>
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Header;
