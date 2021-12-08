import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Col, Row, Skeleton } from "antd";
import { getFileById, getHicheelByCat } from "../restAPI";
import { getPdfFile } from "../utils";

const HicheelView = () => {
  const [file, setFile] = useState(null);
  const [hicheelvvd, setHicheelvvd] = useState([]);
  const [video, setVideo] = useState(null);
  const [hicheel, setHicheel] = useState({});
  const [loading, setLoadding] = useState(false);
  let location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const lessons = await getHicheelByCat(location.state.categoryID);
      setHicheelvvd(lessons);
      setLoadding(true);
      setHicheel(lessons[0]);
      if (lessons[0].video !== "") {
        setVideo(await getFileById(lessons[0].video));
      }
      if (lessons[0].file !== "") {
        setFile(await getFileById(lessons[0].file));
      }
      setLoadding(false);
    };

    getData();
  }, []);

  const handleChangeHicheel = async (id) => {
    setLoadding(true);
    if (hicheelvvd[id].video !== "") {
      setVideo(await getFileById(hicheelvvd[id].video));
      if (hicheelvvd[id].file !== "") {
        setFile(await getFileById(hicheelvvd[id].file));
      } else {
        setFile(null);
      }
      setHicheel(hicheelvvd[id]);
    } else {
      setVideo(null);
    }
    setLoadding(false);
  };

  console.log(video);
  return (
    <section className="pt-90 back-light-blue">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <Row>
              <Col span={6}>
                <div className="side-bar br-7">
                  <h6 className="title text-center">Хичээлүүд</h6>
                  <ul className="ul-link">
                    {hicheelvvd.map((el, i) => (
                      <li key={i} className="list-pad">
                        <button
                          className="btn-list"
                          onClick={() => handleChangeHicheel(i)}
                        >
                          {i + 1 + ". " + el.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col span={18}>
                <div className="video-lesson">
                  <Skeleton loading={loading}>
                    <h2 className="text-center">{hicheel.title}</h2>
                    {video && (
                      <video controls>
                        <source
                          src={"data:video/mp4;base64," + video}
                          type="video/mp4"
                        />
                      </video>
                    )}
                    {file && (
                      <div>
                        <h5>Нэмэлт материал</h5>
                        <a href={getPdfFile(file)} download="newfilename">
                          pdf файл хадгалах
                        </a>
                      </div>
                    )}
                  </Skeleton>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default HicheelView;
