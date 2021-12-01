import { Radio } from "antd";
import { useEffect, useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const DasgalHiih = (props) => {
  const { dasgal } = props;
  const [answer, setAnswer] = useState([]);
  const [onoo, setOnoo] = useState(0);
  const [niitOnoo, setNiitOnoo] = useState(0);
  const [onoogHaruulah, setOnoogHaruulah] = useState(false);

  useEffect(() => {
    if (dasgal && dasgal.asuultuud && dasgal.asuultuud.length !== 0) {
      let ans = [];
      for (let index = 0; index < dasgal.asuultuud.length; index++) {
        ans[index] = "buruu";
      }
      setNiitOnoo(dasgal.asuultuud.length);
      setAnswer(ans);
      setOnoo(0);
      setOnoogHaruulah(false);
    }
  }, [dasgal]);

  if (Object.entries(dasgal).length === 0) {
    return null;
  }

  const onFinish = () => {
    setNiitOnoo(dasgal.asuultuud.length);
    setOnoogHaruulah(true);
  };

  const onChange = (ind, zow, e) => {
    let a = answer;
    if (zow === e.target.value) {
      a[ind] = "zow";
      setOnoo(onoo + 1);
    }
    setAnswer(a);
  };
  return (
    <section className="sm-container pr-30">
      <h2 className="text-center mb-20">{dasgal.name}</h2>
      {onoogHaruulah && (
        <div>
          Таны авсан оноо:{" "}
          <span className="score">
            {onoo}/{niitOnoo}
          </span>
        </div>
      )}
      {dasgal.asuultuud &&
        dasgal.asuultuud.map((el, i) => (
          <div key={i} id={"asuult" + i}>
            <p>
              {i + 1}. {el.asuult}
            </p>
            <Radio.Group
              onChange={(e) => onChange(i, el.zow_huwilbar, e)}
              className={"radio" + { i }}
              checked={false}
            >
              <Radio value="a" id="a" checked={false}>
                <span className={el.helber === "bosoo" ? "bichig" : ""}>
                  {el.huwilbar_a}
                </span>
              </Radio>
              <Radio value="b" id="b">
                <span className={el.helber === "bosoo" ? "bichig" : ""}>
                  {el.huwilbar_b}
                </span>
              </Radio>
              <Radio value="c" id="c">
                <span className={el.helber === "bosoo" ? "bichig" : ""}>
                  {el.huwilbar_c}
                </span>
              </Radio>
            </Radio.Group>
            {onoogHaruulah && answer[i] === "zow" && (
              <span className="color-green">
                <CheckOutlined />
              </span>
            )}
            {onoogHaruulah && answer[i] !== "zow" && (
              <span className="color-red">
                <CloseOutlined />
              </span>
            )}
          </div>
        ))}
      <div className="text-center mt-20 pb-10">
        <button onClick={onFinish} className="btn-submit">
          Илгээх
        </button>
        {onoogHaruulah && <button className="btn-refresh">Дахин хийх</button>}
      </div>
    </section>
  );
};
export default DasgalHiih;
