import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCategories, checkLink, addPost } from "../../../restAPI";
import { Button, Input, Select, Space, DatePicker } from "antd";
import UploadImage from "../general/UploadImage";
import { msg } from "../general/msg";

const { Option } = Select;

const NewPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState([]);
  const [chooseCats, setChooseCats] = useState([]);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const today = new Date();
    setDate(
      today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds()
    );
    getData();
  }, []);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
    console.log(data);
  };

  function catChange(value) {
    console.log(`selected ${value}`);
    chooseCats.push(value);
    setChooseCats(chooseCats);
  }

  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    if (image) {
      if (this.state.file.size >= 2000000) {
        msg("error", "Image size exceeds limit of 2MB.");
        return;
      }
    }
    console.log(e.target.files[0]);
  };

  const onChangeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value.toString());
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    setLink(defaultLink);
  };

  const onSubmit = async () => {
    console.log("submit");
    if (title.length > 0 && link.length > 0) {
      const p = await checkLink(link);
      if (!p) {
        msg("error", "Холбоос давхцаж байна");
        return;
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("categories", chooseCats);
      formData.append("content", content);
      formData.append("link", link);
      formData.append("date", date);
      formData.append("author", author);
      formData.append("image", image);
      console.log(image);
      addPost(formData);
    }
  };
  return (
    <div className="md-container">
      <h5>Нийтлэл нэмэх</h5>
      <Space
        direction="vertical"
        style={{ width: "100%" }}
        size="middle"
        className="mt-20"
      >
        <Input placeholder="Гарчиг" onChange={onChangeTitle} />
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
        />
        <Input
          placeholder="Нийтлэгч"
          defaultValue="админ"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Ангилал сонгох"
          onChange={catChange}
        >
          {categories.map((el) => (
            <Option key={el.id}>{el.name}</Option>
          ))}
        </Select>

        <UploadImage onChange={onChangeImage} />

        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default NewPost;
