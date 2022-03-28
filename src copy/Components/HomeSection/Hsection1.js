import med from "../../media/meditation.mp4";
import bord2 from "../../images/bord2.png";

const Hsection1 = () => {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 test">
              <video className="" controls>
                <source src={med} type="video/mp4" />
              </video>
            </div>

            <div className="col-md-5 Hsection1_ test">
              <div className="Hsection1_div">
                <div>
                  {" "}
                  <img className="Hsection1_bord2_img" src={bord2} alt="" />
                </div>

                <p className="Hsection1_P">
                  {" "}
                  Join The Challenge Now For A One-Time Discounted Payment Of
                  Only $100
                </p>

                <div className="btn btn_live">
                  <p className="btn_live_p1">Join The Challenge Now!</p>I Want
                  Daily Training, LIVE Coaching and Accountability, From Day 1
                  to Day 30
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection1;
