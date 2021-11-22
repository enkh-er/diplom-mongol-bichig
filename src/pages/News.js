import { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import {
  getCategoryByLink,
  getFileById,
  getPostByCat,
  getPostByLink,
} from "../restAPI";
import AllNews from "../components/news/allNews";
import SingleNews from "../components/news/singleNews";

const News = () => {
  const [pathLast, setPathLast] = useState("");
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  let location = useLocation();

  useEffect(() => {
    getData();
  }, [location.pathname]);

  const getData = async () => {
    const lastPath = location.pathname.split("/");
    const path = lastPath[lastPath.length - 1];
    const cat = await getCategoryByLink("medee-medeelel");
    const datas = await getPostByCat(cat);
    if (datas && datas.length !== 0) {
      let pImages = [];
      for (let i = 0; i < datas.length; i++) {
        if (datas[i].image && datas[i].image !== "") {
          const img = await getFileById(datas[i].image);
          pImages.push(img);
        }
      }
      setImages(pImages.reverse());
    }
    setPosts(datas.reverse());
    if (path !== "medee-medeelel") {
      const news = await getPostByLink(path);
      if (Object.entries(news).length !== 0) {
        const img = await getFileById(news.image);
        setImage(img);
      }
      setPost(news);
    }
    setPathLast(path);
  };

  return (
    <section className="pt-90  back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            {pathLast === "medee-medeelel" ? (
              <AllNews posts={posts} images={images} />
            ) : (
              <SingleNews
                posts={posts.slice(0, 5)}
                post={post}
                image={image}
                images={images.slice(0, 5)}
              />
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default News;
