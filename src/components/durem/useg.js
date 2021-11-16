import { Modal } from "antd";
import { useState } from "react";

const Useg = ({ data, category }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  if (!data && !category) {
    return null;
  }

  function getTable(el, type) {
    if (type === "vertical") {
      return (
        <table>
          <tr>
            <th></th>
            <th>Дармал</th>
            <th>Бичмэл</th>
          </tr>
          <tr>
            <td>Эхэн</td>
            <td className="bichig">{el.acf.ehen}</td>
            <td className="bichigw">{el.acf.ehen}</td>
          </tr>
          <tr>
            <td>Дунд</td>
            <td className="bichig">{el.acf.dund}</td>
            <td className="bichigw">{el.acf.dund}</td>
          </tr>
          <tr>
            <td>Адагт</td>
            <td className="bichig">{el.acf.adagt}</td>
            <td className="bichigw">{el.acf.adagt}</td>
          </tr>
        </table>
      );
    }
    return (
      <table className="vseg-table-del">
        <tr>
          <th></th>
          <th>Эхэн</th>
          <th>Дунд</th>
          <th>Адагт</th>
        </tr>
        <tr>
          <td>Дармал</td>
          <td className="bichig">{el.acf.ehen}</td>
          <td className="bichig">{el.acf.dund}</td>
          <td className="bichig">{el.acf.adagt}</td>
        </tr>
        <tr>
          <td>Бичмэл</td>
          <td className="bichigw">{el.acf.ehen}</td>
          <td className="bichigw">{el.acf.dund}</td>
          <td className="bichigw">{el.acf.adagt}</td>
        </tr>
      </table>
    );
  }
  return (
    <>
      <h1 className="text-center">{category.name} үсэг</h1>
      <div className=" grid3 gap30">
        {data.length !== 0 &&
          data.map((el, i) => (
            <>
              <div onClick={showModal} className="useg-box pointer">
                <h3>{el.title}</h3>
                {getTable(el, "vertical")}
              </div>

              <Modal
                title={el.title}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                centered
              >
                {getTable(el, "hor")}
                <h6 className="pt-10 text-center">Жишээ үгс</h6>
                <div
                  className="vseg-del"
                  dangerouslySetInnerHTML={{
                    __html: el.content,
                  }}
                />
              </Modal>
            </>
          ))}
      </div>
      <div className="description">{category.description}</div>
    </>
  );
};
export default Useg;
