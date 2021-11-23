import React, { useState, useEffect } from "react";
import {
  getCategoryByCode,
  getPostByCat,
  getFileById,
  getCategoryByLink,
  getCategoryByParent,
} from "../restAPI";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import NewsComponent from "../components/news/newsComponent";
import { getImage } from "../utils";
import Slider from "@ant-design/react-slick";
import SurgaltComponent from "../components/surgalt/surgaltComponent";

export const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [images, setImages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [lastSurgaltuud, setLastSugaltuud] = useState([]);
  const [surgaltiinZurguud, setSurgaltiinZurguud] = useState([]);

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
      setSurgaltiinZurguud(surImgs.slice(0, 4));
      setLastSugaltuud(surPosts.slice(0, 4));
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

  const getLatestSurgalt = () => {
    if (surgaltiinZurguud.length === 0 || lastSurgaltuud.length === 0) {
      return null;
    }
    return lastSurgaltuud.map((el, i) => (
      <SurgaltComponent el={el} img={surgaltiinZurguud[i]} />
    ));
  };

  const onSearch = (value) => console.log(value);

  const settings = {
    dots: false,
    infinite: true,
    // fade: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  // console.log(content[0]);

  return (
    <section className="slider-main">
      <div className="slider-cont">
        <img src={getImage(sliderImages[0])} className="slider-img" />
        <div className="home-info">
          <Slider {...settings}>
            <div className="slider-info">
              <div className="wrapper bg1">
                <h2>Монгол бичгийн зөв бичих дүрмийг эндээс үзээрэй</h2>
                <Link to="/durem">Дүрэм үзэх</Link>
              </div>
              {/* <div className="shvleg">
                <span className="bichigw">
                  ᠡᠪᠦᠭᠡ ᠳᠡᠭᠡᠳᠥᠰ ᠤᠨ ᠮᠢᠨᠢ ᠲᠡᠦᠬᠡ ᠢᠢ ᠪᠢᠴᠢᠭᠰᠡᠨ
                </span>
                <span className="bichigw">
                  ᠥᠨᠳᠥᠷ ᠲᠥᠷᠥ ᠢᠢᠨ ᠬᠤᠢᠮᠥᠷ ᠲᠤ ᠵᠠᠯᠠᠷᠠᠭᠰᠠᠨ
                </span>
                <span className="bichigw">
                  ᠳᠡᠯᠡᠭᠡᠢ ᠳᠤ ᠭᠠᠭᠴᠠᠬᠠᠨ ᠪᠤᠰᠤᠭ᠎ᠠ ᠵᠠᠶᠠᠭ᠎ᠠ ᠲᠠᠢ{" "}
                </span>
                <span className="bichigw">ᠳᠡᠭᠡᠳᠥ ᠲᠡᠭᠷᠢ ᠢᠢᠨ ᠪᠢᠴᠢᠭ ᠮᠢᠨᠦ</span>
              </div> */}
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
        {/* <div className="search">
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
        </div> */}
      </div>
      <Row justify="center">
        <Col span={20}>
          <div className="md-container">
            <h2 className="pb-10 bg-title-blue font-20">Сүүлийн үеийн мэдээ</h2>
            <div className="grid3 gap50">{getLatestNews()}</div>
            <hr className="mb-30" />
            <h2 className="pb-10 bg-title-blue font-20">Шинэ сургалтууд</h2>
            <div className="grid4 gap30 mb-30"> {getLatestSurgalt()}</div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
