import { getImage, truncate } from "../../utils";

const NewsComponent = ({ el, img }) => {
  return (
    <article key={el.id} className="news-card">
      <div className="news-img">
        <img src={getImage(img)} />
      </div>
      <div className="desc">
        <h6>{el.title}</h6>
        <p>
          <span>{truncate(el.date, "date")}</span>
          <span>Нийтлэгч: {el.author}</span>
        </p>
      </div>
    </article>
  );
};
export default NewsComponent;
