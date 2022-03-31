import board from "../../images/bord2.png";
import step from "../../images/step.png";
import david from "../../images/david.png";
import ofa_small_min from "../../images/ofa_small-min.png";

import "./Hsection4.css";

const Hsection4 = () => {
  return (
    <>

   <div className="Hsection4 ">

   <div className="Hsection4_chanll">
          <div className="container">
            <img className="img-fluid" src={ofa_small_min} alt="" />
          </div>

          <div className="Hsection4_chanll_div_2">
            <p>The First Thing You’ll Get Access To Is The...</p>

            <p>'One Funnel Away' </p>
            <p> CHALLENGE...</p>
          </div>
        </div>

        <div className="Hsection4_div">
          <p>
            Led by Trainer Russell Brunson and The ‘One Funnel Away’ Consulting
            Team, this challenge is designed to help you Customize and IMPLEMENT
            your first (or next) funnel in just 30 days…
          </p>
        </div>  

        
        {/* display flex */}
        <div className="container">
          <div className="Hsection4_step row">
            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #1</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2 className=""> "The Strategy"</h2>

              <p>
                Each day, you will receive a new mission from Russell, streamed
                to the private Facebook group.{" "}
              </p>

              <p>
                These private videos will be about 30 minutes long, and will
                give you the strategy you have to master for each step you need
                for success.{" "}
              </p>

              <p>
                You will have the ability to network with and ask questions to
                our coaches as well as others OFA-ers who are also going through
                the challenge with you!
              </p>
            </div>


            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #2</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2> "The Strategy"</h2>

              <p>
                Each day, you will receive a new mission from Russell, streamed
                to the private Facebook group.{" "}
              </p>

              <p>
                These private videos will be about 30 minutes long, and will
                give you the strategy you have to master for each step you need
                for success.{" "}
              </p>

              <p>
                You will have the ability to network with and ask questions to
                our coaches as well as others OFA-ers who are also going through
                the challenge with you!
              </p>
            </div>

            <div className="Hsection4_step_child col-lg-4">
              <h1>Step #3</h1>
              <img className="img-fluid" src={step} alt="" />

              <h2> "The Strategy"</h2>

              <p>
                Each day, you will receive a new mission from Russell, streamed
                to the private Facebook group.{" "}
              </p>

              <p>
                These private videos will be about 30 minutes long, and will
                give you the strategy you have to master for each step you need
                for success.{" "}
              </p>

              <p>
                You will have the ability to network with and ask questions to
                our coaches as well as others OFA-ers who are also going through
                the challenge with you!
              </p>
            </div>
          </div>
        </div>  


        <div className="Hsection4_step_child_mission">
          <p> Here Is Your Mission, </p>
          <p>(Should You Choose To Accept This Challenge…)</p>
        </div>

        
        <div className="Hsection4_step_Take_action">
          <p>
            Your Challenge Is To TAKE ACTION And Complete The Tasks Given To
            You,
          </p>
          <p> Every Day For 30 Days </p>
        </div>


    </div>

   
    </>
  );
};

export default Hsection4;
