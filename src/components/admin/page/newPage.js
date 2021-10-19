import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewPage = (props) => {
  const [content, setContent] = useState("");
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
