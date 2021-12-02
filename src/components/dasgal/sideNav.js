const SideNav = (props) => {
  const { dasgaluud, menus, setChooseDasgal } = props;

  if (!menus || !dasgaluud) {
    return null;
  }

  return (
    <ul className="side-bar br-7">
      {menus.length !== 0 &&
        menus.map((menu, i) => (
          <li key={menu.link}>
            <h6 className="title">{menu.name}</h6>
            <ul className="ul-link">
              {dasgaluud[i].length !== 0 &&
                dasgaluud[i].map((dasgal, i) => (
                  <li
                    key={dasgal.id}
                    onClick={() => setChooseDasgal(dasgal)}
                    className="pointer list-pad"
                  >
                    {/* <button > */}
                    Дасгал {i + 1}
                    {/* </button> */}
                  </li>
                ))}
            </ul>
          </li>
        ))}
    </ul>
  );
};
export default SideNav;
