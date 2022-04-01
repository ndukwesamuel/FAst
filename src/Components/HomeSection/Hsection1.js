import bord2 from "../../images/bord2.png";

const Hsection1 = () => {
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 Hsection1_row_1 ">
           

              <video className="img-fluid Hsection1_vidoe_div" controls>
                <source src="/Media/meditationss.mp4" type="video/mp4" />
              
              </video>

              <p>
                The Life You Want, The Marriage You Want... The Family That You
                Want, Is Going To Be Fueled By The Business You Build
              </p>
            </div>

            <div className="col-md-5 Hsection1_ test">
              <div className="Hsection1_div">
                <p className="Hsection1_div_p1">
                  The Next 'ONE FUNNEL AWAY' Challenge Starts On Apr 4th...
                </p>
                <div>
                  <img className="Hsection1_bord2_img img-fluid" src={bord2} alt="" />
                </div>

                <div className=" Hsection1_count_down">

                    <div className="Hsection1_count_down_flex_item">
                      <div>O4</div>
                      <p>Days</p>
                    </div>

                    <div className="Hsection1_count_down_flex_item">
                      <div>14</div>
                      <p>hours</p>
                    </div>

                    <div className="Hsection1_count_down_flex_item">
                      <div> 34 </div>
                      <p>minute</p>
                    </div>

                    <div className="Hsection1_count_down_flex_item">
                      <div>56</div>
                      <p>Seconds</p>
                    </div>

                    
                </div>

                <p>Registration Ends Apr 3rd At 10PM ET! </p>

                <p className="Hsection1_P">
                  Join The Challenge Now For A One-Time Discounted Payment Of
                  Only $100
                </p>

                <div className="btn btn_live">
                  <p className="btn_live_p1">Join The Challenge Now!</p>
                    <p className="btn_live_p2">  I Want
                  Daily Training, LIVE Coaching and Accountability, From Day 1
                  to Day 30</p>
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
