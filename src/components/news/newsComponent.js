import { getImage, truncate } from "../../utils";

const NewsComponent = ({ el, img }) => {
  const contentRep = (string) => {
    let str = string.substring(0, 150);
    str = str.replaceAll("<p>", "");
    str = str.replaceAll("</p>", " ");
    str = str.replaceAll("</h2>", " ");
    str = str.replaceAll("</h3>", " ");
    str = str.replaceAll("</h4>", " ");
    str = str.replaceAll("<h2>", "");
    str = str.replaceAll("<h3>", "");
    str = str.replaceAll("<h4>", "");
    str = str.replaceAll("</strong>", " ");
    str = str.replaceAll("<strong>", "");
    return str;
  };

  return (
    <article key={el.id} className="news-card">
      <div className="news-img">
        <img src={getImage(img)} />
      </div>
      <div className="desc">
        <h6>{el.title}</h6>
        <p>{contentRep(el.content)}</p>
        <p>
          <span>{truncate(el.date, "date")}</span>
          <span>Нийтлэгч: {el.author}</span>
        </p>
      </div>
    </article>
  );
};
export default NewsComponent;
