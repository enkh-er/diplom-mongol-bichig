import { useState, useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import {
  getCategoryByLink,
  getFileById,
  getMenusByCode,
  getPostByCat,
} from "../restAPI";
import UnshihMaterials from "../components/unshih/unshihMaterials";

const UnshihMaterialuud = () => {
  const [menus, setMenus] = useState([]);
  const [unshihMaterials, setUnshihMaterials] = useState([]);
  const [images, setImages] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoadding] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoadding(true);
    const unshihMenus = await getMenusByCode("unshih_materialuud");
    if (unshihMenus && unshihMenus.length !== 0) {
      let datas = [];
      let postimgs = [];
      let pdf = [];
      for (let i = 0; i < unshihMenus.length; i++) {
        const catId = await getCategoryByLink(unshihMenus[i].link);
        datas[i] = await getPostByCat(catId);
        if (datas[i] && datas[i].length !== 0) {
          let imgs = [];
          let p = [];
          for (let j = 0; j < datas[i].length; j++) {
            if (datas[i][j].image !== "") {
              imgs[j] = await getFileById(datas[i][j].image);
            }
            if (
              datas[i][j].acf &&
              datas[i][j].acf.pdf &&
              datas[i][j].acf.pdf !== ""
            ) {
              p[j] = await getFileById(datas[i][j].acf.pdf);
            }
          }
          postimgs[i] = imgs;
          pdf[i] = p;
        }
      }
      setPdfFiles(pdf);
      setImages(postimgs);
      setUnshihMaterials(datas);
    }
    setMenus(unshihMenus);
    setLoadding(false);
  };

  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <div className="p-1-2">
              <h1 className="text-center">Унших материалууд</h1>
              <Skeleton loading={loading}>
                <UnshihMaterials
                  menus={menus}
                  datas={unshihMaterials}
                  images={images}
                  files={pdfFiles}
                />
              </Skeleton>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default UnshihMaterialuud;
