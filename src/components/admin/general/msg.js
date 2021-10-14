import { message } from "antd";
export const msg = (type, msg) => {
  if (!type || !msg) {
    return null;
  }
  if (type === "error") {
    return message.error(msg);
  }
  if (type === "success") {
    return message.success(msg);
  }
  if (type === "warning") {
    return message.warning(msg);
  }
};
