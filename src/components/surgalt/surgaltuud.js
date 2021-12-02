import SurgaltComponent from "./surgaltComponent";

const Surgaltuud = (props) => {
  const { surgaltuud, images, categories } = props;
  if (!surgaltuud || !images) {
    return null;
  }

  return (
    <section className="p-30">
      <h1 className="text-center mb-30 bg-title-blue">Бүх сургалт</h1>
      <div className="grid4 gap30 mb-30">
        {surgaltuud.map((el, i) => (
          <SurgaltComponent
            el={el}
            img={images[i]}
            key={i}
            link={categories[i].link}
          />
        ))}
      </div>
    </section>
  );
};
export default Surgaltuud;
