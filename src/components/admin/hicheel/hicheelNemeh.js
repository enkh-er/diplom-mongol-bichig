import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Input, Select, Space, DatePicker } from "antd";
import {
  getCategories,
  getFileByName,
  addFile,
  addHicheel,
} from "../../../restAPI";
import UploadFile from "../general/UploadFile";
import { msg } from "../general/msg";

const { Option } = Select;
const { TextArea } = Input;

const HicheelNemeh = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [categories, setCategories] = useState([]);
  const [chooseCat, setChooseCat] = useState("");
  const [video, setVideo] = useState("");
  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("admin");
  const [nemelt, setNemelt] = useState("");

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

  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const onSubmit = async () => {
    if (title.length === 0) {
      msg("error", "Гарчигийг заавал бөглөнө үү.");
      return;
    }
    if (content.length === 0) {
      msg("error", "Агуулгыг заавал оруулна уу.");
      return;
    }
    if (chooseCat.length === 0) {
      msg("error", "Ангиллыг заавал сонгоно уу.");
      return;
    }
    const f = {
      title,
      category: chooseCat,
      content,
      video,
      file,
      date,
      author,
      nemelt,
    };
    addHicheel(f);
    msg("success", "Амжилттай хадлалаа.");
  };

  const onChangeFile = async (e, type) => {
    e.preventDefault();
    if (e.target.files[0]) {
      if (e.target.files[0].size >= 268435456) {
        msg("error", "File size exceeds limit of 250MB.");
        return;
      }
    }
    const imgId = await getFileByName(e.target.files[0].name);
    if (!imgId || imgId.length === "") {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      if (type === "file") {
        setFile(await addFile(formData));
      } else {
        setVideo(await addFile(formData));
      }
    } else {
      if (type === "file") {
        setFile(imgId);
      } else {
        setVideo(imgId);
      }
    }
  };

  return (
    <div className="md-container">
      <h5>Хичээл нэмэх</h5>
      <Space
        direction="vertical"
        style={{ width: "100%" }}
        size="middle"
        className="mt-20"
      >
        <Input
          placeholder="Гарчиг"
          onChange={(e) => setTitle(e.target.value)}
        />
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={handleChange}
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
          style={{ width: "100%" }}
          placeholder="Ангилал сонгох"
          onChange={(value) => setChooseCat(value)}
        >
          {categories.map((el) => (
            <Option key={el.id}>{el.name}</Option>
          ))}
        </Select>
        <b>Видео нэмэх</b>
        <UploadFile onChange={(e) => onChangeFile(e, "video")} />
        <b>Файл нэмэх</b>
        <UploadFile onChange={(e) => onChangeFile(e, "file")} />

        <TextArea
          rows={4}
          onChange={(e) => setNemelt(e.target.value)}
          placeholder="Нэмэлт мэдээлэл"
        />

        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default HicheelNemeh;
