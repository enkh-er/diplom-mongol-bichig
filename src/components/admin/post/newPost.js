import { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getCategories } from "../../../restAPI";
import { Button, Select, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const NewPost = () => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState({});

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

        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>

        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default NewPost;
