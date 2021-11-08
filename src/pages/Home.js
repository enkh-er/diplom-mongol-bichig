import React, { useState, useEffect } from "react";
import { getCategoryByCode, getPostByCat, getFileById } from "../restAPI";
import { Col, Row, Select, Input } from "antd";

const { Option } = Select;
const { Search } = Input;

export const Home = () => {
  const [sliderImages, setSliderImages] = useState([]);
  const [content, setContent] = useState([]);

  const getData = async () => {
    const slider = await getPostByCat(await getCategoryByCode("home_slider"));
    const con = await getPostByCat(await getCategoryByCode("home_content"));
    if (slider && slider.length !== 0) {
      let images = [];
      for (let i = 0; i < slider.length; i++) {
        if (slider[0].image !== "") {
          const img = await getFileById(slider[i].image);
          images.push(img);
        }
      }
      setSliderImages(images);
      setContent(con);
    }
  };
  useEffect(() => {
    getData();
  }, []);

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
        <img
          src={`data:image/jpg;base64,${sliderImages[0]}`}
          className="slider-img"
        />
        <div className="search">
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
        {/* <h1>Монгол бичиг</h1> */}
      </div>
      {content.map((el, i) => (
        <div
          key={i}
          className="bg-container detail"
          style={{ background: el.acf.back }}
        >
          <Row justify="center">
            <Col span={9}>
              <div className="desc text-center">
                <h2>{el.title}</h2>
                <p>{el.acf.desc}</p>
                <button>
                  <a href="/">Дүрэм үзэх</a>
                </button>
              </div>
            </Col>
            <Col span={9}>
              <div className="mb-center">
                <div
                  className="bichiga text-left mb-home "
                  dangerouslySetInnerHTML={{
                    __html: el.content,
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      ))}
      <div className="bg-container detail">
        <Row justify="center">
          <Col span={9}>
            <div className="desc text-center">
              <h2>Дүрэм</h2>
              <p>Та монгол бичгийн дүрмүүдийг эндээс үзээрэй</p>
              <button>
                <a href="/">Дүрэм үзэх</a>
              </button>
            </div>
          </Col>
          <Col span={9}>
            <div className="mb-center">
              <p className="bichigw text-left mb-home">ᠭᠠᠯ ᠮᠡᠲᠥ</p>
            </div>
          </Col>
        </Row>
      </div>
      <Row
        justify="center"
        className="bg-container detail"
        style={{ background: "#D9EEE1" }}
      >
        <Col span={9}>
          <div className="mb-center">
            <p className="bichigw text-left mb-home">
              ᠡᠪᠥᠭᠡ ᠳᠡᠭᠡᠳᠥᠰ ᠤᠨ ᠮᠢᠨᠢ ᠲᠡᠥᠬᠡ ᠢᠢ ᠪᠢᠴᠢᠭᠰᠡᠨ <br /> ᠥᠨᠳᠥᠷ ᠲᠥᠷᠥ ᠢᠢᠨ
              ᠬᠤᠢᠮᠤᠷ ᠲᠤ ᠵᠠᠯᠠᠷᠠᠭᠰᠠᠨ <br />
              ᠳᠡᠯᠡᠬᠡᠢ ᠳᠥ ᠭᠠᠭᠴᠠᠬᠠᠨ ᠪᠤᠰᠤᠭ᠎ᠠ ᠵᠠᠶᠠᠭ᠎ᠠ ᠲᠠᠢ
              <br />
              ᠳᠡᠭᠡᠳᠥ ᠲᠡᠭᠷᠢ ᠢᠢᠨ ᠪᠢᠴᠢᠭ ᠮᠢᠨᠦ
            </p>
          </div>
        </Col>
        <Col span={9}>
          <div className="desc text-center">
            <h2>Дүрэм</h2>
            <p>Та монгол бичгийн дүрмүүдийг эндээс үзээрэй</p>
            <button>
              <a href="/">Дүрэм үзэх</a>
            </button>
          </div>
        </Col>
      </Row>
    </section>
  );
};
