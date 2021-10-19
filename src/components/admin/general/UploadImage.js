import { useRef } from "react";
import { DeleteOutlined } from "@ant-design/icons";
const UploadImage = (props) => {
  const ref = useRef();
  function handleClick() {
    ref.current.value = "";
  }
  return (
    <>
      <input
        type="file"
        className="form-control"
        name="file"
        {...props}
        ref={ref}
      />
      <button type="button" onClick={handleClick}>
        <DeleteOutlined />
      </button>
    </>
  );
};
export default UploadImage;
