import { useState, useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import { getDasgalByCode, getMenusByCode } from "../restAPI";
import SideNav from "../components/dasgal/sideNav";
import DasgalHiih from "../components/dasgal/dasgalHiih";

const Dasgal = () => {
  const [menus, setMenus] = useState([]);
  const [dasgaluud, setDasgaluud] = useState([]);
  const [chooseDasgal, setChooseDasgal] = useState({});
  const [loading, setLoadding] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoadding(true);
    const dat = await getMenusByCode("dasgal");
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
    setLoadding(false);
  };

  return (
    <section className="pt-90 back-light-blue dasgal">
      <div className="md-container">
        <Row justify="center">
          <Col span={20} className="back-white br-7">
            <Skeleton loading={loading}>
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
            </Skeleton>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Dasgal;
