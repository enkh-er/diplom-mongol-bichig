import { useState, useEffect } from "react";
import {
  getMenusByCode,
  getCategoryByLink,
  getPostByCat,
  getCategory,
} from "../restAPI";
import { useLocation } from "react-router-dom";
import SideMenu from "../components/durem/sideMenu";
import Useg from "../components/durem/useg";

const Durem = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [pathLast, setPathLast] = useState("");
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState({});
  // const [childPosts, setChildPosts] = useState([]);
  let location = useLocation();

  useEffect(() => {
    getData();
  }, [location.pathname]);

  const getData = async () => {
    const dat = await getMenusByCode("durem");
    const lastPath = location.pathname.split("/");
    changePaths(lastPath[lastPath.length - 1]);
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
  };
  const changePaths = async (path) => {
    const cat = await getCategoryByLink(path);
    if (cat !== "") {
      const datas = await getPostByCat(cat);
      const menuCat = await getCategory(cat);
      setPosts(datas);
      setCategory(menuCat);
      setPathLast(path);
    }
  };

  return (
    <section className="pt-90 back-light-blue">
      <SideMenu menus={sideMenus}>
        {pathLast === "egshig" || pathLast === "giigvvlegch" ? (
          <Useg data={posts} category={category} />
        ) : (
          <article>
            {posts.length !== 0 &&
              posts.map((el, i) => (
                <div key={i}>
                  <h1 className="text-center">{el.title}</h1>
                  <div
                    className="post-durem"
                    dangerouslySetInnerHTML={{
                      __html: el.content,
                    }}
                  />
                </div>
              ))}
          </article>
        )}
      </SideMenu>
    </section>
  );
};
export default Durem;
