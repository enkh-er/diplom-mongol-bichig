import React from "react";
import Header from "./header";
import TopHeader from "./topHeader";

const Layout = (props) => {
  console.log(props);
  return (
    <>
      <header>
        <TopHeader />
        <Header />
      </header>
      <main className="relative">{props.children}</main>
    </>
  );
};
export default Layout;
