import { Modal } from "antd";
import { useState } from "react";

const Useg = (props) => {
  const { data, category } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModaldata] = useState({});

  if (!data || Object.entries(category).length === 0) {
    return null;
  }

  const showModal = (el) => {
    setModaldata(el);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function getTable(el, type) {
    if (Object.entries(el).length === 0) {
      return null;
    }
    if (type === "vertical") {
      return (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Дармал</th>
              <th>Бичмэл</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      );
    }
    return (
      <table className="vseg-table-del">
        <thead>
          <tr>
            <th></th>
            <th>Эхэн</th>
            <th>Дунд</th>
            <th>Адагт</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    );
  }
  const setEgshig = (el) => {
    if (Object.entries(el).length === 0) {
      return null;
    }
    if (!el.acf.ae || !el.acf.ii || !el.acf.ou || !el.acf.ov) {
      return null;
    }
    const ae = el.acf.ae.split(" ");
    const ii = el.acf.ii.split(" ");
    const ou = el.acf.ou.split(" ");
    const ov = el.acf.ov.split(" ");
    const egshgeer = [ae, ii, ou, ov];
    const egshgvvd = ["а, э", "и", "о, у", "ө, ү"];
    return (
      <div>
        <h6 className="pt-10 text-center">Эгшгээр амилуулсан</h6>
        <table className="vseg-table-del">
          <thead>
            <tr>
              <th></th>
              <th>Эхэн</th>
              <th>Дунд</th>
              <th>Адагт</th>
            </tr>
          </thead>
          <tbody>
            {egshgvvd.map((item, i) => (
              <tr key={i}>
                <td>{item}</td>
                {egshgeer[i].map((elm) => (
                  <td key={"item" + elm + i}>
                    <div className="mb-center">
                      <span className="bichig"> {elm}</span>
                      <span className="bichigw"> {elm}</span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <>
      <h1 className="text-center">{category.name} үсэг</h1>
      <div className=" grid3 gap30">
        {data.length !== 0 &&
          data.map((el, i) => (
            <div key={i}>
              <div onClick={() => showModal(el)} className="useg-box pointer">
                <h3>{el.title}</h3>
                {getTable(el, "vertical")}
              </div>
            </div>
          ))}
      </div>
      <Modal
        title={modalData.title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        {getTable(modalData, "hor")}
        {setEgshig(modalData)}
        <h6 className="pt-10 text-center">Жишээ үгс</h6>
        <div
          className="vseg-del"
          dangerouslySetInnerHTML={{
            __html: modalData.content,
          }}
        />
      </Modal>
      {category.description !== "" ? (
        <div className="description">{category.description}</div>
      ) : null}
    </>
  );
};
export default Useg;
