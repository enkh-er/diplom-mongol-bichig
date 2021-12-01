import { useState } from "react";
import { Modal } from "antd";

const Nohtsol = ({ data, category }) => {
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

  const displayJishee = (el) => {
    if (el.jishee === "" || el.krill === "") {
      return null;
    }
    const mb = el.jishee.split("᠂");
    const kr = el.krill.split(",");
    return (
      <>
        <h6 className="mt-20">Жишээ</h6>
        <div className="vseg-del">
          {mb.length !== 0 &&
            mb.map((item, i) => (
              <div key={i}>
                <p>{kr[i]}</p>
                <p className="bichig font-20">{item}</p>
              </div>
            ))}
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className="text-center">{category.name}</h1>
      {/* <h1 className="bichig">ᠡᠭᠡᠷ ᠢ</h1> */}
      <div className="grid3 gap20">
        {data.length !== 0 &&
          data.map((el, i) => (
            <div
              key={i}
              className="nohtsol pointer h4-center br-7 strong-mb table-general"
              onClick={() => showModal(el)}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: el.content,
                }}
              />
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
        <div
          className="h4-hide strong-mb table-general"
          dangerouslySetInnerHTML={{
            __html: modalData.content,
          }}
        />
        {modalData.acf && modalData.acf.tailbar !== "" && (
          <>
            <h6>Тайлбар</h6>
            <div
              className="description  "
              dangerouslySetInnerHTML={{
                __html: modalData.acf.tailbar,
              }}
            />
          </>
        )}
        {modalData.acf && modalData.acf.yos !== "" && (
          <>
            <h6>Зөв дагуулах ёс</h6>
            <div
              className="description  "
              dangerouslySetInnerHTML={{
                __html: modalData.acf.yos,
              }}
            />
          </>
        )}
        {modalData.acf && displayJishee(modalData.acf)}
      </Modal>
    </>
  );
};
export default Nohtsol;
