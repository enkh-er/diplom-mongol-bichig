import { useState, useEffect } from "react";
import { getMenusByCode, getCategoryByCode, getPostByCat } from "../restAPI";
import { useLocation } from "react-router-dom";
import SideMenu from "../components/durem/sideMenu";

const Durem = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [pathLast, setPathLast] = useState("");
  const [posts, setPosts] = useState([]);
  // const [childPosts, setChildPosts] = useState([]);
  let location = useLocation();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dat = await getMenusByCode("durem");
    const lastPath = location.pathname.split("/");
    const datas = await getPostByCat(
      await getCategoryByCode(lastPath[lastPath.length - 1])
    );
    // if (dat && dat.length !== 0) {
    //   const childPosts = [];
    //   for (let i = 0; i < dat.length; i++) {
    //     if (dat[i].child_items && dat[i].child_items.length !== 0) {
    //       const child = dat[i].child_items;
    //       const ch = [];
    //       for (let j = 0; j < child.length; j++) {
    //         ch.push(await getPostByCat(child[j].typeId));
    //       }
    //       childPosts.push(ch);
    //     }
    //   }
    //   setChildPosts(childPosts);
    // }
    setSideMenus(dat);
    setPathLast(lastPath);
    setPosts(datas);
  };
  return (
    <section className="pt-90 back-light-blue ">
      <SideMenu menus={sideMenus}>
        <div className="bichig">᠎</div>
      </SideMenu>
    </section>
  );
};
export default Durem;
