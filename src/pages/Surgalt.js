import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {
  getCategoryByParent,
  getPostByCat,
  getFileById,
  getCategoryByLink,
} from "../restAPI";
import Surgaltuud from "../components/surgalt/surgaltuud";

const Surgalt = () => {
  const [pathLast, setPathLast] = useState("");
  const [images, setImages] = useState([]);
  const [childs, setChilds] = useState([]);
  const [childPosts, setChildPosts] = useState([]);

  let location = useLocation();

  useEffect(() => {
    getData();
  }, [location.pathname]);
  const getData = async () => {
    const lastPath = location.pathname.split("/");
    const path = lastPath[lastPath.length - 1];
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
    setPathLast(path);
    setChilds(childCats);
  };

  return (
    <section className="pt-90">
      <Row justify="center md-container">
        <Col span={20}>
          {pathLast === "surgalt" ? (
            <Surgaltuud surgaltuud={childPosts} images={images} />
          ) : (
            <div>surgalt</div>
          )}
        </Col>
      </Row>
    </section>
  );
};
export default Surgalt;
