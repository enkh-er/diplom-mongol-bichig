import { Link } from "react-router-dom";
import NewsComponent from "./newsComponent";

const AllNews = (props) => {
  const { posts, images } = props;
  if (!posts) {
    return null;
  }
  return (
    <section className="md-container">
      <h1 className="text-center mb-30 bg-title-blue">Мэдээ мэдээлэл</h1>
      <div className="grid3 gap50">
        {posts.map((el, i) => (
          <Link key={el.id} to={"/medee-medeelel/" + el.link}>
            <NewsComponent el={el} img={images[i]} />
          </Link>
        ))}
      </div>
    </section>
  );
};
export default AllNews;
