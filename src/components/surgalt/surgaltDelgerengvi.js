import { Row, Col, Rate } from "antd";
import { Link } from "react-router-dom";
import { getImage } from "../../utils";
import { PlayCircleFilled } from "@ant-design/icons";

const SurgaltDelgerengvi = (props) => {
  const { data, images, hicheelvvd, categoryID } = props;
  if (
    !data ||
    !images ||
    images.length === 0 ||
    Object.entries(data).length === 0
  ) {
    return null;
  }
  console.log(hicheelvvd);
  return (
    <section className="p-2">
      <Row gutter={30}>
        <Col span={8}>
          <div className="surgalt-del">
            <img
              src={images[0] && getImage(images[0])}
              alt="hicheel zurag"
              className="full-width btr-7"
            />
            <div className="p-1">
              <p className="vne pt-10 no-margin">
                {data.acf.hymdarsan_une ? (
                  <>
                    <strong className="md-font ">
                      {data.acf.hymdarsan_une}₮
                    </strong>
                    <span className="relative">
                      <span className="grayText ml-4">
                        {data.acf.undsen_une}₮
                      </span>
                      <span className="absolute line" />
                    </span>
                  </>
                ) : (
                  <strong className="md-font ">{data.acf.undsen_une}₮</strong>
                )}
              </p>
              <div>
                <span className="ratingNum">5</span>{" "}
                <Rate allowHalf defaultValue={5} disabled />{" "}
                <span className="grayText">(0)</span>
              </div>
              <Link
                to={{
                  pathname: `/surgalt-vzeh/${data.link}`,
                  state: {
                    categoryID,
                  },
                }}
              >
                <button>Сургалт эхлүүлэх</button>
              </Link>
              <h5>Энэ сургалт нь:</h5>
              <p>{data.acf.include}</p>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div className="surgalt-about">
            <h1>{data.title}</h1>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            />
            {hicheelvvd.length !== 0 && (
              <>
                <h2>Сургалтын агуулга</h2>
                <ul>
                  {hicheelvvd.map((el, i) => (
                    <li key={i}>
                      <PlayCircleFilled /> {i + 1 + ". " + el.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h2>Багшийн тухай</h2>
            <div className="ds-flex about-teacher">
              <img
                src={images[1] && getImage(images[1])}
                alt="bagsh zurag"
                className="img-center"
              />
              <div className="p-1">
                <p>
                  <strong>Нэр: </strong>
                  {data.acf.bagsh}
                </p>
                <p>{data.acf.bagshiin_tuhai}</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default SurgaltDelgerengvi;
