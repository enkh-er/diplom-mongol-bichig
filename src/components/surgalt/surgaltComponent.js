import { Rate } from "antd";
import { Link } from "react-router-dom";
import { getImage } from "../../utils";

const SurgaltComponent = ({ el, img, link }) => {
  return (
    <article className="surgalt" key={el.id}>
      <Link to={"/surgalt/" + link}>
        <div className="image">
          <img src={getImage(img)} className="full img-center" alt={link}/>
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
  );
};
export default SurgaltComponent;
