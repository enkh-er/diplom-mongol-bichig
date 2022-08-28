import React, { useState, useEffect } from "react";
import {
  getCategoryByCode,
  getPostByCat,
  getFileById,
  getCategoryByLink,
  getCategoryByParent,
} from "../restAPI";
import { Row, Col, Skeleton } from "antd";
import { Link } from "react-router-dom";
import NewsComponent from "../components/news/newsComponent";
import { getImage } from "../utils";
import Slider from "@ant-design/react-slick";
import SurgaltComponent from "../components/surgalt/surgaltComponent";
// import Search from "antd/lib/transfer/search";

// const { Option } = Select;

export const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [lastSurgaltuud, setLastSugaltuud] = useState([]);
  const [surgaltuudCats, setSugaltuudCats] = useState([]);
  const [surgaltiinZurguud, setSurgaltiinZurguud] = useState([]);
  const [loadingNews, setLoaddingNews] = useState(false);
  const [loadingSurgalt, setLoaddingSurgalt] = useState(false);
  const [loading, setLoadding] = useState(false);

  const getData = async () => {
    setLoadding(true);
    setLoaddingNews(true);
    setLoaddingSurgalt(true);
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
    setLoadding(false);

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
    setLoaddingNews(false);

    // surgaltiin medeelliig awj bui heseg

    const catSurgalt = await getCategoryByLink("surgalt");
    const surgaltChildCategories = await getCategoryByParent(catSurgalt);
    const surgaltCats = surgaltChildCategories.reverse();
    if (surgaltCats && surgaltCats.length !== 0) {
      let surPosts = [];
      let surImgs = [];
      for (let i = 0; i < surgaltCats.length; i++) {
        const c = await getPostByCat(surgaltCats[i].id);
        const surgalt = c[0];
        if (surgalt) {
          if (surgalt.image !== "") {
            const img1 = await getFileById(surgalt.image);
            surImgs.push(img1);
          }
          surPosts.push(c[0]);
        }
      }
      setSugaltuudCats(surgaltCats);
      setSurgaltiinZurguud(surImgs.slice(0, 4));
      setLastSugaltuud(surPosts.slice(0, 4));
    }
    setLoaddingSurgalt(false);
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

  const getLatestSurgalt = () => {
    if (surgaltiinZurguud.length === 0 || lastSurgaltuud.length === 0) {
      return null;
    }
    return lastSurgaltuud.map((el, i) => (
      <SurgaltComponent
        el={el}
        img={surgaltiinZurguud[i]}
        key={i}
        link={surgaltuudCats[i].link}
      />
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <section className="slider-main">
      <div className="slider-cont">
        <Skeleton loading={loading} className="home-skelton">
          <img
            src={sliderImages[0] && getImage(sliderImages[0])}
            className="slider-img"
            alt="slider img"
          />
          <div className="home-info">
            {/* <Row justify="center">
              <Col span={10}>
                <Input placeholder="Дүрэм хайх" placement="bottomLeft" />
                <Select default Value="lucy" style={{ width: 120 }}>
                  <Option value="jack"></Option>
                  <Option value="jack"></Option>
                  <Option value="jack"></Option>
                  <Option value="jack"></Option>
                </Select>
              </Col>
              <Col span={10}></Col>
            </Row> */}

            <Slider {...settings}>
              <div className="slider-info">
                <div className="wrapper bg1">
                  <h2>Монгол бичгийн зөв бичих дүрмийг эндээс үзээрэй</h2>
                  <Link to="/durem">Дүрэм үзэх</Link>
                </div>
              </div>
              <div className="slider-info">
                <div className="wrapper bg2">
                  <h2>Сонгодог монгол бичгийн хичээлүүдийг эндээс үзээрэй</h2>
                  <Link to="/songodog-bichgvvd">Цааш үзэх</Link>
                </div>
              </div>
              <div className="slider-info">
                <div className="wrapper bg1">
                  <h2>Монгол бичгийн дасгал хийж өөрийгөө сориорой</h2>
                  <Link to="/dasgal">Дасгал хийх</Link>
                </div>
              </div>
              <div className="slider-info">
                <div className="wrapper bg2">
                  <h2>Монгол бичгийн шинэ сургалтуудыг эндээс үзээрэй</h2>
                  <Link to="/surgalt">Сургалт үзэх</Link>
                </div>
              </div>
            </Slider>
          </div>
        </Skeleton>
      </div>
      <Row justify="center">
        <Col span={20}>
          <div className="md-container">
            <h2 className="pb-10 bg-title-blue font-20">Сүүлийн үеийн мэдээ</h2>
            <Skeleton loading={loadingNews}>
              <div className="grid3 gap50">{getLatestNews()}</div>
            </Skeleton>
            <hr className="mb-30" />
            <h2 className="pb-10 bg-title-blue font-20">Шинэ сургалтууд</h2>
            <Skeleton loading={loadingSurgalt}>
              <div className="grid4 gap30 mb-30">{getLatestSurgalt()}</div>
            </Skeleton>
          </div>
        </Col>
      </Row>
    </section>
  );
};
