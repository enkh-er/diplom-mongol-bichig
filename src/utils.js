export const truncate = (string, type) => {
  switch (type) {
    case "date":
      return string.substring(0, 11);
    default:
      break;
  }
};

export const getImage = (img) => {
  return `data:image/jpg;base64,${img}`;
};
export const getPdfFile = (f) => {
  return `data:application/pdf;base64,${f}`;
};
