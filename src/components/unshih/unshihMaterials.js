import { Image, Modal, Tabs } from "antd";
import { useState } from "react";
import { getImage } from "../../utils";

const { TabPane } = Tabs;

const UnshihMaterials = (props) => {
  const { menus, datas, images, files } = props;
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  if (!menus || !datas || !images || !files) {
    return null;
  }

  const handleOpenModal = (fileLink, title) => {
    const d = {
      src: fileLink,
      title: title,
    };
    setModalData(d);
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <section className="unshih-mat">
      <Tabs defaultActiveKey={0}>
        {menus.length !== 0 &&
          menus.map((el, i) => (
            <TabPane tab={el.name} key={i}>
              <div className="grid5 gap30">
                {datas[i].map((data, j) => (
                  <div className="unshih-box relative pointer" key={data.id}>
                    {files[i][j] !== undefined ? (
                      <div
                        onClick={() =>
                          handleOpenModal(
                            `data:application/pdf;base64,${files[i][j]}`,
                            data.title
                          )
                        }
                      >
                        <img
                          src={images[i][j] && getImage(images[i][j])}
                          alt={el.name}
                        />
                      </div>
                    ) : (
                      <Image
                        className="img-center"
                        src={images[i][j] && getImage(images[i][j])}
                        alt={data.title}
                      />
                    )}

                    <h6 key={data.id} className="absolute">
                      {data.title}
                    </h6>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
      </Tabs>
      <Modal
        title={modalData.title}
        visible={showModal}
        onCancel={handleCancel}
        footer={null}
        centered
        className="unshih-modal"
      >
        <iframe src={modalData.src} width="100%" title={modalData.title} />
      </Modal>
    </section>
  );
};
export default UnshihMaterials;
