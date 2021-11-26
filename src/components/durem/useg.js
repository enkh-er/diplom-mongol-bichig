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
    const ae = el.acf.ae.split("᠂");
    const ii = el.acf.ii.split("᠂");
    const ou = el.acf.ou.split("᠂");
    const ov = el.acf.ov.split("᠂");
    const vseg = [el.acf.ehen, el.acf.dund, el.acf.adagt];
    const egshgeer = [vseg, ae, ii, ou, ov];
    const v = el.acf.useg;
    const egshgvvd = [
      v,
      `${v}а, ${v}э`,
      `${v}и`,
      `${v}о, ${v}у`,
      `${v}ө, ${v}ү`,
    ];
    return (
      <div>
        {/* <h6 className="pt-10 text-center">Эгшгээр амилуулсан</h6> */}
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

  const setGadaadEgshig = (el) => {
    if (Object.entries(el).length === 0) {
      return null;
    }
    if (!el.acf.aa || !el.acf.ii || !el.acf.ee || !el.acf.oo || !el.acf.uv) {
      return null;
    }
    const aa = el.acf.aa.split("᠂");
    const ee = el.acf.ee.split("᠂");
    const ii = el.acf.ii.split("᠂");
    const oo = el.acf.oo.split("᠂");
    const uv = el.acf.uv.split("᠂");
    const vseg = [el.acf.ehen, el.acf.dund, el.acf.adagt];
    const egshgeer = [vseg, aa, ee, ii, oo, uv];
    const v = el.acf.useg;
    const uov = el.acf.isO ? `${v}у,${v}ө, ${v}ү` : `${v}у, ${v}ү`;
    const egshgvvd = [v, `${v}а`, `${v}е`, `${v}и`, `${v}о`, uov];
    return (
      <div>
        {/* <h6 className="pt-10 text-center">Эгшгээр амилуулсан</h6> */}
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
      <h1 className="text-center">{category.name}</h1>
      <div className=" grid3 gap30">
        {data.length !== 0 &&
          data.map((el, i) => (
            <div key={i}>
              <div onClick={() => showModal(el)} className="useg-box pointer">
                <h3>{el.title} үсэг</h3>
                {getTable(el, "vertical")}
              </div>
            </div>
          ))}
      </div>
      <Modal
        title={modalData.title + " үсэг"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        {category.link === "egshig" && getTable(modalData, "hor")}
        {category.link === "giigvvlegch" && setEgshig(modalData)}
        {category.link === "gadaad-useg" && setGadaadEgshig(modalData)}
        {modalData.acf &&
        modalData.acf.description &&
        modalData.acf.description !== "" ? (
          <>
            <h6 className="pt-10 text-center">Тайлбар</h6>
            <div
              className="description str"
              dangerouslySetInnerHTML={{
                __html: modalData.acf.description,
              }}
            />
          </>
        ) : null}
        <h6 className="pt-10 text-center">Жишээ үгс</h6>
        <div
          className="vseg-del"
          dangerouslySetInnerHTML={{
            __html: modalData.content,
          }}
        />
      </Modal>
      {category.description !== "" ? (
        <div
          className="description mt-30"
          dangerouslySetInnerHTML={{
            __html: category.description,
          }}
        />
      ) : null}
    </>
  );
};
export default Useg;
