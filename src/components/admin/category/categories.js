import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table, Input } from "antd";
import { useEffect, useState } from "react";

const { Search } = Input;

const columns = [
  {
    title: "Нэр",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "",
    dataIndex: "",
    key: "count",
    width: "5%",
    render: () => <p>0</p>,
  },
  {
    title: "",
    dataIndex: "",
    key: "edit",
    width: "5%",
    render: () => <EditOutlined />,
  },
  {
    title: "",
    dataIndex: "",
    key: "delete",
    width: "5%",
    render: () => <DeleteOutlined />,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
  },
  {
    key: "2",
    name: "Jim Green",
  },
  {
    key: "3",
    name: "Joe Black",
  },
];

const Categories = () => {
  const [dataSource, setDataSource] = useState(data);
  const onSearch = (value) => console.log(value);

  return (
    <section>
      <Search
        onSearch={onSearch}
        enterButton
        placeholder="Хайх"
        style={{ width: 300 }}
        className="pb-15"
      />
      <Table columns={columns} dataSource={dataSource} />
    </section>
  );
};
export default Categories;
