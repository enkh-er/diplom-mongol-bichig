import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const NewPost = () => {
  const [content, setContent] = useState("");
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
    console.log(data);
  };
  return (
    <div className="md-container">
      <h5>Нийтлэл нэмэх</h5>
      <CKEditor editor={ClassicEditor} data={content} onChange={handleChange} />
    </div>
  );
};
export default NewPost;
