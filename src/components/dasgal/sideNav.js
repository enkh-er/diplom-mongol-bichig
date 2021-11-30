import { Menu } from "antd";

const { SubMenu } = Menu;

const SideNav = (props) => {
  const { dasgaluud, menus, setChooseDasgal } = props;
  //   const [openKeys, setOpenKeys] = React.useState(menus[0].link || "");

  if (!menus || !dasgaluud) {
    return null;
  }

  //   const onOpenChange = (keys) => {
  //     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //       setOpenKeys(keys);
  //     } else {
  //       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //     }
  //   };

  return (
    <Menu mode="inline">
      {menus.length !== 0 &&
        menus.map((menu, i) => (
          <SubMenu
            key={menu.link}
            title={menu.name}
            className={
              i === 0
                ? "btr-7"
                : i === menus.length - 1
                ? "bbr-7 no-border"
                : ""
            }
          >
            {dasgaluud[i].length !== 0 &&
              dasgaluud[i].map((dasgal, i) => (
                <Menu.Item key={dasgal.id}>Дасгал {i + 1}</Menu.Item>
              ))}
          </SubMenu>
        ))}
    </Menu>
  );
};
export default SideNav;
