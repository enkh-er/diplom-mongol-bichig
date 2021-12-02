const SurgaltDelgerengvi = (props) => {
  const { data, images } = props;
  if (
    !data ||
    !images ||
    images.length === 0 ||
    Object.entries(data).length === 0
  ) {
    return null;
  }

  return <section></section>;
};
export default SurgaltDelgerengvi;
