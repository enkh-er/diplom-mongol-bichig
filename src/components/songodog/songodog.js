import { Tabs } from "antd";
import { getImage } from "../../utils";

const { TabPane } = Tabs;

const Songodog = (props) => {
  const { menus, images, datas } = props;

  if (!menus || !datas) {
    return null;
  }

  return (
    <section className="songodog">
      <Tabs defaultActiveKey={0}>
        {menus.length !== 0 &&
          menus.map((el, i) => (
            <TabPane tab={el.name} key={i}>
              {datas.length !== 0 &&
                datas[i].map((item, j) => (
                  <div key={item.id}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                    <img src={getImage(images[i][j])} alt={item.title} />
                  </div>
                ))}
            </TabPane>
          ))}
      </Tabs>
    </section>
  );
};
export default Songodog;
