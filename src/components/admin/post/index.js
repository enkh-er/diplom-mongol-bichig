import { useState, useEffect } from "react";
import { Select, Space, Input, Button } from "antd";
import {
  getPosts,
  getPostByName,
  getCategories,
  getPostByCat,
} from "../../../restAPI";
import Posts from "./posts";
const { Option } = Select;
const { Search } = Input;

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCats] = useState([]);

  const getData = async () => {
    const dat = await getPosts();
    setPosts(dat);
  };
  const getCats = async () => {
    const cats = await getCategories();
    setCats(cats);
  };
  useEffect(() => {
    getData();
    getCats();
  }, []);

  const onSearch = async (value) => {
    console.log(value);
    if (value && value.length !== 0) {
      const dat = await getPostByName(value);
      if (dat.length === 0) {
        getData();
        return;
      }
      setPosts(dat);
    }
  };

  async function handleChange(value) {
    if (value === "allPosts") {
      getData();
      return;
    }
    const dat = await getPostByCat(value);
    if (dat.length !== 0) {
      setPosts(dat);
    }
  }

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
            defaultValue="allPosts"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            <Option value="allPosts">Бүх ангилал</Option>
            {categories.map((el, i) => (
              <Option key={el.id} value={el.id}>
                {el.name}
              </Option>
            ))}
          </Select>
          <Button type="primary">
            <a href="/mb-admin/new-post">Нийтлэл бичих</a>
          </Button>
        </Space>
      </div>
      <Posts data={posts} />
    </section>
  );
};
export default Post;
