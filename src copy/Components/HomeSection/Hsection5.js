import board from "../../images/bord2.png";
import step from "../../images/step.png";
import david from "../../images/david.png";
import ofa_small_min from "../../images/ofa_small-min.png";
import "./Hsection5.css";

const Hsection5 = () => {
  return (
    <div className="Hsection5">
      {/* this is a flex div */}
      <div className="Hsection4_chanll">
        <div>
          {" "}
          <img src={ofa_small_min} alt="" />
        </div>

        <div className="Hsection4_chanll_div_2">
          <p>The First Thing You’ll Get Access To Is The...</p>
          <p>'One Funnel Away' </p>
          <p> CHALLENGE...</p>
        </div>
      </div>
    </div>
  );
};

export default Hsection5;
