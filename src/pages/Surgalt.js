import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Col, Row, Skeleton } from "antd";
import {
  getCategoryByParent,
  getPostByCat,
  getFileById,
  getCategoryByLink,
  getHicheelByCat,
} from "../restAPI";
import Surgaltuud from "../components/surgalt/surgaltuud";
import SurgaltDelgerengvi from "../components/surgalt/surgaltDelgerengvi";

const Surgalt = () => {
  const [pathLast, setPathLast] = useState("");
  const [images, setImages] = useState([]);
  const [childs, setChilds] = useState([]);
  const [childPosts, setChildPosts] = useState([]);
  const [postDel, setPostDel] = useState({});
  const [postImg, setPostImg] = useState([]);
  const [hicheelvvd, setHicheelvvd] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [loading, setLoadding] = useState(false);

  let location = useLocation();

  useEffect(() => {
    const getData = async () => {
      setLoadding(true);
      const lastPath = location.pathname.split("/");
      const path = lastPath[lastPath.length - 1];
      if (path === "surgalt") {
        const cat = await getCategoryByLink("surgalt");
        const childCategories = await getCategoryByParent(cat);
        const childCats = childCategories.reverse();
        if (childCats && childCats.length !== 0) {
          let cats = [];
          let imgs = [];
          for (let i = 0; i < childCats.length; i++) {
            const c = await getPostByCat(childCats[i].id);
            const surgalt = c[0];
            if (surgalt) {
              if (surgalt.image !== "") {
                const img = await getFileById(surgalt.image);
                imgs.push(img);
              }
              cats.push(c[0]);
            }
          }
          setImages(imgs);
          setChildPosts(cats);
        }
        setChilds(childCats);
      } else {
        const cat = await getCategoryByLink(path);
        const postsD = await getPostByCat(cat);
        setHicheelvvd(await getHicheelByCat(cat));
        const pImgs = [];
        if (postsD[0] && postsD[0].image !== "") {
          pImgs[0] = await getFileById(postsD[0].image);
          pImgs[1] = await getFileById(postsD[0].acf.bagsh_zurag);
        }
        setCategoryID(cat);
        setPostImg(pImgs);
        setPostDel(postsD[0]);
      }
      setPathLast(path);
      setLoadding(false);
    };
    getData();
  }, [location.pathname]);

  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <div className="p-2">
              <Skeleton loading={loading}>
                {pathLast === "surgalt" ? (
                  <Surgaltuud
                    surgaltuud={childPosts}
                    images={images}
                    categories={childs}
                  />
                ) : (
                  <SurgaltDelgerengvi
                    data={postDel}
                    images={postImg}
                    hicheelvvd={hicheelvvd}
                    categoryID={categoryID}
                  />
                )}
              </Skeleton>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Surgalt;
