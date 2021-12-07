import { Tabs } from "antd";

const { TabPane } = Tabs;

const Songodog = (props) => {
  const { menus } = props;

  if (!menus) {
    return null;
  }

  return (
    <section className="songodog">
      <Tabs defaultActiveKey={0}>
        {menus.length !== 0 &&
          menus.map((el, i) => (
            <TabPane tab={el.name} key={i}>
              <div>content</div>
            </TabPane>
          ))}
      </Tabs>
    </section>
  );
};
export default Songodog;
