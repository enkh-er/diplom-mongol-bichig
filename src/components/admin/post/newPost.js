import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCategories } from "../../../restAPI";
import { Button, Select, Space } from "antd";
import UploadImage from "../general/UploadImage";

const { Option } = Select;

const NewPost = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
    console.log(data);
  };

  function catChange(value) {
    console.log(`selected ${value}`);
  }

  const getData = async () => {
    const dat = await getCategories();
    setCategories(dat);
  };

  const onChangeImage = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="md-container">
      <h5>Нийтлэл нэмэх</h5>
      <CKEditor editor={ClassicEditor} data={content} onChange={handleChange} />
      <Space
        direction="vertical"
        style={{ width: "100%" }}
        size="middle"
        className="mt-20"
      >
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
