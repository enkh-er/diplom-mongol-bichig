import { Link } from "react-router-dom";

const Sider = ({ menus }) => {
  console.log(menus);
  return (
    <ul className="side-bar">
      {menus.map((el) => (
        <>
          <li key={el.name} className="title">
            {el.name}
          </li>
          {el.child_items &&
            el.child_items.map((item) => (
              <li>
                <Link to={`/durem/${item.link}`}>{item.name}</Link>
              </li>
            ))}
        </>
      ))}
    </ul>
  );
};
export default Sider;
