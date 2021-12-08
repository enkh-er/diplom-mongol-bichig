import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCategories, getPostById, getCfByCategory } from "../../../restAPI";
import { Input, Select, Space, DatePicker, Button } from "antd";
import { useParams } from "react-router-dom";

const { Option } = Select;

const UpdatePost = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState([]);
  const [updatePost, setUpdatePost] = useState({});
  const [chooseCats, setChooseCats] = useState([]);
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [fields, setFields] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const dat = await getCategories();
      const post = await getPostById(id);
      setUpdatePost(post);
      setCategories(dat);
      setTitle(post.title || "");
      setContent(post.content || "");
      setLink(post.link || "");
      setChooseCats(post.categories || []);
      setImage(post.image || "");
      setDate(post.date || "");
      setAuthor(post.author || "");
      setFields(post.acf || []);
    };
    getData();
  }, [id]);

  if (!updatePost) {
    return null;
  }

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  async function catChange(value) {
    setChooseCats(value);
    if (value.length === 0) {
      setFields([]);
      return;
    }
    let f = [];
    for (let i = 0; i < value.length; i++) {
      const dat = await getCfByCategory(value[i]);
      if (dat.length !== 0) {
        for (let j = 0; j < dat.length; j++) {
          const cf = dat[j].fields;
          for (let k = 0; k < cf.length; k++) {
            let obj = {
              name: cf[k].name,
              key: cf[k].key,
              type: cf[k].type,
              value: null,
            };
            f.push(obj);
          }
        }
      }
    }
    setFields(f);
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value.toString());
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    setLink(defaultLink);
  };

  const onSubmit = async () => {
    if (title.length > 0 && link.length > 0) {
      const f = {
        title,
        categories: chooseCats,
        content,
        image,
        link,
        date,
        author,
        acf: fields,
      };
      console.log(f);
    }
  };

  return (
    <div className="md-container">
      <h5>Нийтлэл засах</h5>
      <Space
        direction="vertical"
        style={{ width: "100%" }}
        size="middle"
        className="mt-20"
      >
        <Input placeholder="Гарчиг" onChange={onChangeTitle} value={title} />
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={handleChange}
        />
        <Input
          name="link"
          value={link}
          placeholder="Холбоос"
          onChange={(e) => setLink(e.target.value)}
        />
        <DatePicker
          showTime
          onChange={(date, dateString) => setDate(dateString)}
          defaultValue={date}
        />
        <Input
          placeholder="Нийтлэгч"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Ангилал сонгох"
          onChange={catChange}
          defaultValue={chooseCats}
        >
          {categories.map((el) => (
            <Option key={el.id}>{el.name}</Option>
          ))}
        </Select>
        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default UpdatePost;
