import { useEffect, useState } from "react";
import { Button } from "antd";
import { getCfs } from "../../../restAPI";
import CustomFields from "./customFields";
import { Link } from "react-router-dom";

const CustomField = (props) => {
  const [fiels, setFields] = useState([]);
  const getData = async () => {
    const dat = await getCfs();
    setFields(dat);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="md-container">
      <Button type="primary">
        <Link to="/mb-admin/new-cf">Хэрэглэгчийн талбар нэмэх</Link>
      </Button>
      <CustomFields datas={fiels} setFields={setFields} />
    </section>
  );
};
export default CustomField;
