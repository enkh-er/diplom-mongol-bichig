import { Table, Select, Space, Input } from "antd";
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
    title: "Ангилал",
    dataIndex: "category",
    key: "category",
    width: "20%",
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
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    title: `Edward King ${i}`,
    author: "enh",
    postDate: "2021-08-19 13:31",
    content: "blah1",
    category: "example",
  });
}
const Post = () => {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onSearch = (value) => console.log(value);
  return (
    <section className="md-container">
      <h1>Нийтлэл</h1>
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
          <Select
            defaultValue="allPosts"
            onChange={handleChange}
            style={{ width: 200 }}
          >
            <Option value="allPosts">Бүх ангилал</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <a href="/mb-admin/new-post">Нийтлэл бичих</a>
        </Space>
      </div>
      <Table columns={columns} dataSource={data} />
    </section>
  );
};
export default Post;
