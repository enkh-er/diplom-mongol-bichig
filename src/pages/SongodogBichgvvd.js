import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import {
  getMenusByCode,
  getFileById,
  getPostByCat,
  getCategoryByLink,
} from "../restAPI";
import Songodog from "../components/songodog/songodog";

const SongodogBichgvvd = () => {
  const [menus, setMenus] = useState([]);
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const bichgvvdMenus = await getMenusByCode("songodog_bichgvvd");
      if (bichgvvdMenus && bichgvvdMenus.length !== 0) {
        let datas = [];
        let postimgs = [];
        for (let i = 0; i < bichgvvdMenus.length; i++) {
          const catId = await getCategoryByLink(bichgvvdMenus[i].link);
          datas[i] = await getPostByCat(catId);
          if (datas[i] && datas[i].length !== 0) {
            let imgs = [];
            for (let j = 0; j < datas[i].length; j++) {
              if (datas[i][j].image !== "") {
                imgs[j] = await getFileById(datas[i][j].image);
              }
            }
            postimgs[i] = imgs;
          }
        }
        setImages(postimgs);
        setPosts(datas);
      }
      setMenus(bichgvvdMenus);
    };
    getData();
  }, []);

  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <div className="sm-container">
              <h1 className="text-center">Сонгодог бичгүүд</h1>
              <Songodog menus={menus} datas={posts} images={images} />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default SongodogBichgvvd;
