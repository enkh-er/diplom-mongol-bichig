import { useState, useEffect } from "react";
import { getMenusByCode, getCategoryByCode, getPostByCat } from "../restAPI";
import { useLocation } from "react-router-dom";

const Durem = () => {
  const [sideMenus, setSideMenus] = useState([]);
  const [pathLast, setPathLast] = useState("");
  const [posts, setPosts] = useState([]);
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
    setSideMenus(dat);
    setPathLast(lastPath);
    setPosts(datas);
  };
  return <section className="pt-90">duremasdfasdfasdfasdf</section>;
};
export default Durem;
