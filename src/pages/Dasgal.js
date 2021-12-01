import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Col, Row } from "antd";
import { getDasgalByCode, getMenusByCode } from "../restAPI";
import SideNav from "../components/dasgal/sideNav";
import DasgalHiih from "../components/dasgal/dasgalHiih";

const Dasgal = () => {
  const [menus, setMenus] = useState([]);
  const [dasgaluud, setDasgaluud] = useState([]);
  const [chooseDasgal, setChooseDasgal] = useState({});
  let location = useLocation();

  useEffect(() => {
    getData();
  }, [location.pathname]);

  const getData = async () => {
    const dat = await getMenusByCode("dasgal");
    let lastPath = location.pathname.split("/");
    lastPath = lastPath[lastPath.length - 1];
    if (dat && dat.length > 0) {
      const exercises = [];
      for (let i = 0; i < dat.length; i++) {
        const element = await getDasgalByCode(dat[i].link);
        exercises.push(element);
      }
      setChooseDasgal(exercises[0][0] || {});
      setDasgaluud(exercises);
    }
    setMenus(dat);
  };

  return (
    <section className="pt-90 back-light-blue dasgal">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <Row gutter={30}>
              <Col span={6}>
                <SideNav
                  menus={menus}
                  dasgaluud={dasgaluud}
                  setChooseDasgal={setChooseDasgal}
                />
              </Col>
              <Col span={18}>
                <DasgalHiih dasgal={chooseDasgal} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Dasgal;
