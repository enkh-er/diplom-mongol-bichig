import React, { useEffect, useState } from "react";
import Header from "./header";
import TopHeader from "./topHeader";
import Footer from "./footer";
import { getMenusByCode } from "../../restAPI";

const Layout = (props) => {
  const [menus, setMenus] = useState({});
  const [subMenus, setSubMenus] = useState([]);

  const getData = async () => {
    const dat = await getMenusByCode("main_menu");
    if (dat[0]) {
      if (dat[0].child_items) {
        const childs = [];
        for (let i = 0; i < dat[0].child_items.length; i++) {
          childs.push(await getMenusByCode(dat[0].child_items[i].code));
        }
        setSubMenus(childs);
      }
    }
    setMenus(dat[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <TopHeader />
        <Header menus={menus} subMenus={subMenus} />
      </header>
      <main className="relative">{props.children}</main>
      <Footer menus={menus.child_items} />
    </>
  );
};
export default Layout;
