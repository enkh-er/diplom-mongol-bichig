import { useEffect, useState } from "react";
import { Button } from "antd";
import { getCfs } from "../../../restAPI";
import CustomFields from "./customFields";

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
        <a href="/mb-admin/new-cf">Хэрэглэгчийн талбар нэмэх</a>
      </Button>
      <CustomFields datas={fiels} setFields={setFields} />
    </section>
  );
};
export default CustomField;
