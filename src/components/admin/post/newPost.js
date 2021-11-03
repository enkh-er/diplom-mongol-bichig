import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  getCategories,
  checkLink,
  addPost,
  getCfByCategory,addFile
} from "../../../restAPI";
import { Button, Input, Select, Space, DatePicker, Checkbox } from "antd";
import UploadFile from "../general/UploadFile";
import { msg } from "../general/msg";

const { Option } = Select;
const { TextArea } = Input;

const NewPost = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [categories, setCategories] = useState([]);
  const [chooseCats, setChooseCats] = useState([]);
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date());
  const [author, setAuthor] = useState("");
  const [fields, setFields] = useState([]);
  const [fieldValues, setFieldValues] = useState([]); 

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
      // console.log(f);
    }
    setFields(f);
  }

  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };

  const onChangeImage =async (e) => {
    e.preventDefault();
     if (e.target.files[0]) {
      if (e.target.files[0].size >= 2000000) {
        msg("error", "Image size exceeds limit of 2MB.");
        return;
      }
    }
    // console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const imgId=await addFile(formData);
    // console.log(imgId);
    setImage(imgId);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value.toString());
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    setLink(defaultLink);
  };

  const onSubmit = async () => {
    if (title.length > 0 && link.length > 0) {
      const p = await checkLink(link);
      if (!p) {
        msg("error", "Холбоос давхцаж байна");
        return;
      }
      const f={
        title,
        categories: chooseCats,content,image,link,date,author,acf:fields
      };
      // console.log(f);
      addPost(f);
    }
  };

  const onChangeFields = async(item, i, e) => {
    e.preventDefault();
    if (item.type === "file" || item.type === "image") {
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const imgId=await addFile(formData);
      fields[i].value=imgId;
    } else if (item.type === "text" || item.type === "textArea") {
      fields[i].value = e.target.value;
    } else {
      fields[i].value = e.target.checked;
    }
    setFields(fields);
    // console.log(fields);
  };

  const getFields = () => {
    // console.log(fields);
    if (fields.length !== 0) {
      return fields.map((item, i) => {
        return (
          <div key={i}>
            <h6>{item.name}</h6>
            {item.type === "text" ? (
              <Input
                name={item.key}
                onChange={(e) => onChangeFields(item, i,e)}
              />
            ) : item.type === "textArea" ? (
              <TextArea rows={4} onChange={(e) => onChangeFields(item, i, e)} />
            ) : item.type === "image" ? (
              <UploadFile onChange={(e) => onChangeFields(item, i, e)} />
            ) : item.type === "file" ? (
              <UploadFile onChange={(e) => onChangeFields(item, i, e)} />
            ) : item.type === "boolean" ? (
              <Checkbox onChange={(e) => onChangeFields(item, i, e)}>
                {item.name}
              </Checkbox>
            ) : null}
          </div>
        );
      });
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

        <UploadFile onChange={onChangeImage} />

        {getFields()}

        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default NewPost;
