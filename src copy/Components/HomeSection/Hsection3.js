import board from "../../images/bord2.png";
import "./Hsection3.css";

const Hsection3 = () => {
  return (
    <>
      <div className="Hsection3">
        <h1 className="Hsection3_h1_1">
          Then In Exchange For That Tiny $100 Investment, You Get ALL Of This:
        </h1>

        <div className="Hsection3_div_border">
          <img src={board} alt="" />

          {/* first div start here */}
          <div className="Hsection3_list">
            <ul>
              <li>
                30th days of video coaching / mission From Russell Brun ($197
                Value)
              </li>

              <li>
                30th days of video coaching / mission From Russell Brun ($197
                Value)
              </li>

              <li>
                30th days of video coaching / mission From Russell Brun ($197
                Value)
              </li>
              <li>
                30th days of video coaching / mission From Russell Brun ($197
                Value)
              </li>
            </ul>

            <div className="Hsection3_button_div">
              <div>
                {" "}
                <button className="btn"> Bonus</button>
                <span>
                  {" "}
                  30th days of video coaching mission From Russell Bru ($197
                  Value)
                </span>
              </div>

              <div>
                {" "}
                <button className="btn"> Bonus</button>
                <span>
                  {" "}
                  30th days of video coaching mission From Russell Bru ($197
                  Value)
                </span>
              </div>

              <div>
                {" "}
                <button className="btn"> Bonus</button>
                <span>
                  {" "}
                  30th days of video coaching mission From Russell Bru ($197
                  Value)
                </span>
              </div>
              <div>
                {" "}
                <button className="btn"> Bonus</button>
                <span>
                  {" "}
                  30th days of video coaching mission From Russell Bru ($197
                  Value)
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="Hsection3_value">
              {" "}
              Total Value: <span>$3,126</span>
            </p>

            <p className="Hsection3_p_value">
              {" "}
              If you want to get your funnel LIVE and start building your
              business, then this is the mission we’re giving you...
            </p>

            <p className="Hsection3_p_value_1">
              You have 30 Days, starting Mar 21st...
            </p>

            <p className="Hsection3_p_value_Accept"> Do YOU Accept?</p>

            <div className="Hsection3_join_Challenge btn_live  ">
              <p className="Hsection3_join_Challenge_p1">
                {" "}
                Join The Challenge Now!{" "}
              </p>

              <p className="Hsection3_join_Challenge_p2">
                I Want Daily Training, LIVE Coaching and Accountability, From
                Day 1 to Day 30
              </p>
            </div>
          </div>
        </div>

        <div className="Hsection3_information">
          <p> Need More Information Before You Make Your Decision...? </p>

          <p>
            Let Me Break Down All The Awesome Stuff You'll Get When You Join The
            Challenge Today!
          </p>
        </div>
      </div>
    </>
  );
};

export default Hsection3;
