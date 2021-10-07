import { Button, Table, Select, Space, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Search } = Input;

const columns = [
  {
    title: "Гарчиг",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Нийтлэгч",
    dataIndex: "author",
    key: "author",
    width: "12%",
  },
  {
    title: "Нийтэлсэн огноо",
    dataIndex: "postDate",
    key: "postDate",
    width: "15%",
  },
  {
    title: "",
    dataIndex: "",
    key: "edit",
    width: "3%",
    render: () => <EditOutlined />,
  },
  {
    title: "",
    dataIndex: "",
    key: "delete",
    width: "3%",
    render: () => <DeleteOutlined />,
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    title: `Edward King ${i}`,
    author: "enh",
    postDate: "2021-08-19 13:31",
    content: "blah1",
  });
}
const Page = (props) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onSearch = (value) => console.log(value);
  return (
    <section className="md-container">
      <h1>Хуудас</h1>
      <div className="pb-20">
        <Space>
          <Search
            placeholder="Хайх"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Select
            defaultValue="allDates"
            onChange={handleChange}
            style={{ width: 150 }}
          >
            <Option value="allDates">Бүх огноо</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <a href="/mb-admin/new-page">Хуудас нэмэх</a>
        </Space>
      </div>
      {/* <Button type="secondary">Цуцлах</Button>
  <Button type="primary">Хадгалах</Button>
  <Button type="primary">Нийтлэх</Button> */}
      <Table columns={columns} dataSource={data} />
    </section>
  );
};
export default Page;
