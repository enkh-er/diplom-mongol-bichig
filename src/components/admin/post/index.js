import { useState, useEffect } from "react";
import { Select, Space, Input } from "antd";
import { getPosts } from "../../../restAPI";
import Posts from "./posts";
const { Option } = Select;
const { Search } = Input;

const Post = () => {
  const [posts, setPosts] = useState([]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const getData = async () => {
    const dat = await getPosts();
    setPosts(dat);
    console.log(dat);
  };

  useEffect(() => {
    getData();
  }, []);

  const onSearch = (value) => console.log(value);
  return (
    <section className="md-container">
      <h1>Нийтлэл</h1>
      <div className="pb-20">
        <Space>
          <Search
            placeholder="Хайх"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Select
            defaultValue="allDates"
            onChange={handleChange}
            style={{ width: 150 }}
          >
            <Option value="allDates">Бүх огноо</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select
            defaultValue="allPosts"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            <Option value="allPosts">Бүх ангилал</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <a href="/mb-admin/new-post">Нийтлэл бичих</a>
        </Space>
      </div>
      <Posts data={posts} />
    </section>
  );
};
export default Post;
