import { Row, Col } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { getImage, truncate } from "../../utils";
import { Link } from "react-router-dom";

const SingleNews = (props) => {
  const { image, posts, post, images } = props;
  if (!post || Object.entries(post).length === 0 || image === null) {
    return null;
  }
  return (
    <section className="p-30">
      <Row gutter={30}>
        <Col span={17}>
          <div className="news-more pr-30">
            <h1>{post.title}</h1>
            <div>
              <ClockCircleOutlined /> <span>{truncate(post.date, "date")}</span>
            </div>
            <hr />
            <div className="mt-20 mb-20 image">
              <img src={getImage(image)} alt={post.title} />
            </div>
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            />
          </div>
        </Col>
        <Col span={7}>
          <div className="ds-flex column latest-news">
            <h2 className="pb-20 bg-title-blue font-18">Шинэ мэдээ</h2>
            {posts.map((el, i) => (
              <div className="lat-news" key={i}>
                <Link key={el.id} to={"/medee-medeelel/" + el.link}>
                  <div className="ds-flex">
                    <img src={getImage(images[i])} />
                    <h6>{el.title}</h6>
                  </div>
                </Link>
                <hr />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default SingleNews;
