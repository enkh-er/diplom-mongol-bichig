import React from "react";
import Header from "./header";
import TopHeader from "./topHeader";

const Layout = (props) => {
  console.log(props);
  return (
    <>
      <TopHeader />
      <Header />
      {props.children}
    </>
  );
};
export default Layout;
