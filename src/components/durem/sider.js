import { NavLink } from "react-router-dom";

const Sider = (props) => {
  const { menus } = props;
  if (!menus) {
    return null;
  }
  return (
    <ul className="side-bar">
      {menus.map((el) => (
        <li key={el.name}>
          <h6 className="title">{el.name}</h6>
          <ul className="ul-link">
            {el.child_items &&
              el.child_items.map((item, i) => (
                <li key={i}>
                  <NavLink to={`/durem/${item.link}`}>{item.name}</NavLink>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
export default Sider;
