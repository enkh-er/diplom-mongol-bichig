const Dagawar = (props) => {
  const { data, category } = props;

  if (!data || Object.entries(category).length === 0) {
    return null;
  }
  return (
    <>
      <h1 className="text-center">{category.name}</h1>
      <div className="grid5 gap20">
        {data.length !== 0 &&
          data.map((el, i) => (
            <div key={i} className="dagawar-box  br-7">
              {/* <div className="flex"> */}
              <h6>{el.title}</h6>
              {/* <p>(-daga)</p>
              </div> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: el.content,
                }}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default Dagawar;
