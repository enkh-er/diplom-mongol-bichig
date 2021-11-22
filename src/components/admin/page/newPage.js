import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Button, Input, Space, DatePicker } from "antd";
import UploadFile from "../general/UploadFile";
import { msg } from "../general/msg";
import { addFile, getFileByName } from "../../../restAPI";

const NewPage = (props) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState(new Date());
  const [author, setAuthor] = useState("admin");
  // const { getData, datas } = props;

  // const onFinish = async (values) => {};
  // const onChange = (e) => {
  //   console.log(e.target.value);
  //   let defaultLink = e.target.value.toString().toLowerCase();
  //   defaultLink = defaultLink.replace(" ", "-");
  //   form.setFieldsValue({
  //     link: defaultLink,
  //   });
  // };
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };
  const onChangeImage = async (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      if (e.target.files[0].size >= 4000000) {
        msg("error", "Image size exceeds limit of 4MB.");
        return;
      }
    }
    // console.log(e.target.files[0]);
    const imgId = await getFileByName(e.target.files[0].name);
    if (!imgId || imgId.length === "") {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      setImage(await addFile(formData));
    } else {
      setImage(imgId);
    }
  };
  const onSubmit = async () => {};
  return (
    <div className="md-container">
      <h5>Хуудас нэмэх</h5>
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

        <UploadFile onChange={onChangeImage} />

        <Button type="primary" onClick={onSubmit}>
          Хадгалах
        </Button>
      </Space>
    </div>
  );
};
export default NewPage;
