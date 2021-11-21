import { Rate } from "antd";
import { Link } from "react-router-dom";
import { getImage } from "../../utils";

const Surgaltuud = (props) => {
  const { surgaltuud, images } = props;
  if (!surgaltuud || !images) {
    return null;
  }

  return (
    <section>
      <h1 className="text-center mb-30 bg-title-blue">Бүх сургалт</h1>
      <div className="grid4 gap30">
        {surgaltuud.map((el, i) => (
          <article className="surgalt" key={el.id}>
            <Link to={"/surgalt/" + el.link}>
              <div className="image">
                <img src={getImage(images[i])} className="full img-center" />
              </div>
              <h5>{el.title}</h5>
            </Link>
            <p className="grayText">{el.acf.bagsh}</p>
            <span className="ratingNum">5</span>{" "}
            <Rate allowHalf defaultValue={5} disabled />{" "}
            <span className="grayText">(0)</span>
            <p className="vne pt-10">
              {el.acf.hymdarsan_une ? (
                <>
                  <strong>{el.acf.hymdarsan_une}₮</strong>
                  <span className="relative">
                    <span className="grayText ml-4">{el.acf.undsen_une}₮</span>
                    <span className="absolute line" />
                  </span>
                </>
              ) : (
                <strong>{el.acf.undsen_une}₮</strong>
              )}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Surgaltuud;
