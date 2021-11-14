import React, { useState, useEffect } from "react";
import { getCategoryByCode, getPostByCat, getFileById } from "../restAPI";
import { Select, Input } from "antd";

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
        {/* <h1>Монгол бичиг</h1> */}
      </div>
    </section>
  );
};
