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
import Dagawar from "../components/durem/dagawar";
import Nohtsol from "../components/durem/nohtsol";
import { Skeleton } from "antd";

const Durem = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [pathLast, setPathLast] = useState("");
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoadding] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const getData = async () => {
      setLoadding(true);
      const dat = await getMenusByCode("durem");
      const lastPath = location.pathname.split("/");
      changePaths(lastPath[lastPath.length - 1]);
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
      setLoadding(false);
    };

    getData();
  }, [location.pathname]);

  return (
    <section className="pt-90 back-light-blue">
      <SideMenu menus={sideMenus}>
        <Skeleton loading={loading}>
          {pathLast === "egshig" ||
          pathLast === "giigvvlegch" ||
          pathLast === "gadaad-useg" ? (
            <Useg data={posts} category={category} />
          ) : pathLast === "vil-vg-bvteeh-dagawaruud" ||
            pathLast === "ner-vg-bvteeh-dagawaruud" ? (
            <Dagawar data={posts} category={category} />
          ) : pathLast.includes("nohtsol") ||
            pathLast === "olon-too" ||
            pathLast.includes("hamaatuulah") ? (
            <Nohtsol data={posts} category={category} />
          ) : (
            <article>
              {posts.length !== 0 &&
                posts.map((el, i) => (
                  <div key={i}>
                    <h1 className="text-center">{el.title}</h1>
                    <div
                      className={
                        pathLast === "dewsger-useg"
                          ? "dewsger table-general table-100"
                          : pathLast === "mahbod"
                          ? "post-durem table-general"
                          : pathLast === "too"
                          ? "too table-general dewsger"
                          : "urt-hos-egshig table-general"
                      }
                      dangerouslySetInnerHTML={{
                        __html: el.content,
                      }}
                    />
                  </div>
                ))}
            </article>
          )}
        </Skeleton>
      </SideMenu>
    </section>
  );
};
export default Durem;
