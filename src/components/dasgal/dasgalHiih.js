import { Radio } from "antd";
import { useEffect, useState } from "react";

const DasgalHiih = (props) => {
  const { dasgal, setDasgal } = props;
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (dasgal && dasgal.asuultuud && dasgal.asuultuud.length !== 0) {
      let ans = [];
      for (let index = 0; index < dasgal.asuultuud.length; index++) {
        ans[index] = "buruu";
      }
      setAnswer(ans);
    }
  }, []);

  if (Object.entries(dasgal).length === 0) {
    return null;
  }

  const onFinish = () => {
    // console.log("Received values of form:", values);
  };

  const onChange = (ind, zow, e) => {
    let a = answer;
    if (zow === e.target.value) {
      a[ind] = "zow";
    }
    console.log(a);
    setAnswer(a);
    console.log("radio checked", e.target.value);
  };

  return (
    <section className="sm-container pr-30">
      <h2 className="text-center">{dasgal.name}</h2>
      {dasgal.asuultuud &&
        dasgal.asuultuud.map((el, i) => (
          <div key={i} id={"asuult" + i}>
            <p>
              {i + 1}. {el.asuult}
            </p>
            <Radio.Group
              onChange={(e) => onChange(i, el.zow_huwilbar, e)}
              className={"radio" + { i }}
            >
              <Radio value="a" id="a">
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
          </div>
        ))}
      <div className="text-center">
        <button onClick={onFinish} className="btn-submit">
          Илгээх
        </button>
      </div>
    </section>
  );
};
export default DasgalHiih;
