import React, { useState, useEffect } from "react";
import {
  getCategoryByCode,
  getPostByCat,
  getFileById,
  getCategoryByLink,
} from "../restAPI";
import { Select, Input, Row, Col } from "antd";
import { Link } from "react-router-dom";
import NewsComponent from "../components/news/newsComponent";
import { getImage } from "../utils";

const { Option } = Select;
const { Search } = Input;

export const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const slider = await getPostByCat(await getCategoryByCode("home_slider"));
    const cat = await getCategoryByLink("medee-medeelel");
    const datas = await getPostByCat(cat);
    if (slider && slider.length !== 0) {
      let images = [];
      for (let i = 0; i < slider.length; i++) {
        if (slider[0].image !== "") {
          const img = await getFileById(slider[i].image);
          images.push(img);
        }
      }
      setSliderImages(images);
    }
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
    const reversed = datas.reverse();
    setPosts(reversed.slice(0, 3));
  };
  useEffect(() => {
    getData();
  }, []);

  const getLatestNews = () => {
    if (posts.length === 0 || images.length === 0) {
      return null;
    }
    return posts.map((el, i) => (
      <Link key={el.id} to={"/medee-medeelel/" + el.link}>
        <NewsComponent el={el} img={images[i]} />
      </Link>
    ));
  };

  const onSearch = (value) => console.log(value);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   arrows: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  // console.log(content[0]);

  return (
    <section className="slider-main">
      <div className="slider-cont">
        <img src={getImage(sliderImages[0])} className="slider-img" />
        <div className="search">
          <div className="flip-cont mb-20">
            Та монгол бичгийн
            <div id="flip">
              <div>
                <div>Дүрэм</div>
              </div>
              <div>
                <div>Хичээл</div>
              </div>
              <div>
                <div>Мэдээ мэдээлэл</div>
              </div>
            </div>
            эндээс үзээрэй!
          </div>

          <Select defaultValue="Дүрэм" style={{ width: 170 }}>
            <Option value="Дүрэм">Дүрэм</Option>
            <Option value="Сонгодог бичгүүд">Сонгодог бичгүүд</Option>
            <Option value="Дасгал">Дасгал</Option>
            <Option value="Сургалт">Сургалт</Option>
          </Select>
          <Search
            style={{ width: 350 }}
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Row justify="center">
        <Col span={20}>
          <div className="md-container">
            <h2 className="pb-10 bg-title-blue font-20">Сүүлийн үеийн мэдээ</h2>
            <div className="grid3 gap50">{getLatestNews()}</div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
