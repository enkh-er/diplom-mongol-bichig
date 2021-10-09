import { useState } from "react";
import { Form } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} талбарыг заавал бөглөх шаарлагатай!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const NewPage = (props) => {
  const [content, setContent] = useState("");
  const [form] = Form.useForm();
  const { getData, datas } = props;

  const onFinish = async (values) => {};
  const onChange = (e) => {
    console.log(e.target.value);
    let defaultLink = e.target.value.toString().toLowerCase();
    defaultLink = defaultLink.replace(" ", "-");
    form.setFieldsValue({
      link: defaultLink,
    });
  };
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
    console.log(data);
  };

  return (
    <div className="md-container">
      <h5>Хуудас нэмэх</h5>
      <CKEditor editor={ClassicEditor} data={content} onChange={handleChange} />
    </div>
  );
};
export default NewPage;
