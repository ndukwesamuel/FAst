import exclamation from "../../images/exclamation.png";
import russell_dark_new from "../../images/russell-dark-new.jpg";
import dollars from "../../images/100dollars.jpg";
import Testimo from "../../images/Testimonials.png";
import "./Hsection2.css";

const Hsection2 = () => {
  return (
    <>
      <div className="Hsection2 container">
        {/*  i'm to dispaly flex in this part  */}
        <div className="Hsection2_flex">
          <div className="Hsection2_flex_1">
            <img src={exclamation} alt="" />
          </div>
          {/* create a border line for  */}
          <div className="Hsection2_flex_2">

            <p className="Hsection2_flex_2_p1"> Freedom Is Just </p>
            <p className="Hsection2_flex_2_p2"> One Funnel Away </p>
          </div>
        </div>
        {/*  i'm to dispaly flex in this part 2  for the econd section */}
        <section className="Hsection2_flex_two">
          <div className="container">
            <p>
              <span>From</span>: Russell Brunson
            </p>

            <p>
              <span>Where</span>: Boise, Idaho
            </p>

            <p>
              What does <span> 'One Funnel Away' mean for you...?</span>
            </p>

            <p>For everyone it's different...</p>
            <p>
              For some of you,<span> you're in a job that you hate,</span> and
              you're trying to get out.
            </p>

            <p>
              For others, you are entrepreneurs with your own company...{" "}
              <span>but you're stuck</span>, and you're not sure why!
            </p>

            <p>
              And for others of you, you're looking for that one funnel that
              will help you to <span>have more impact on the world!</span>
            </p>

            <p>
              Before I share with you MY GOAL for this 'One Funnel Away
              challenge for YOU... let me ask you a few questions...
            </p>
          </div>

          {/* this is for the img */}
          <div>
            <img className="img-fluid" src={russell_dark_new} alt="" />
          </div>
        </section>
        {/* this is the form  */}
        <section className="Hsection2_section_3 container" >
          <h2> Please Check All Of The Questions Where Your Answer Is YES! </h2>
          <form className="Hsection2_section_3_form" action="">

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Do you want to grow your business online, but you have NO IDEA
                where to start?
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Do you want to grow your business online, but you have NO IDEA
                where to start?
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Do you want to grow your business online, but you have NO IDEA
                where to start?
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Do you want to grow your business online, but you have NO IDEA
                where to start?
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
  Do you want to grow your business online, but you have NO IDEA
                where to start?
  </label>
</div>

          
          </form>
        </section>
        {/* this is the end of th form  */}
        <div>
          <p className="Hsection2_p text_center">
            If You Checked ANY Of The Boxes Above, Then I Want To Invite You To
            Join The 'One Funnel Away' Challenge And Change Your Business
            Forever!
          </p>
        </div>
        <div>
          <p className="Hsection2_p_2">
            So, Here Is How The Challenge Works...
          </p>
        </div>
        <p className="Hsection2_p_3">
          The challenge costs $100 to join. This covers your materials during
          the challenge (more info on this below).
        </p>
        <div className="Hsection2_div_img">
          <img className="Hsection2_div_img" src={dollars} alt="" />
        </div>
        <p className="Hsection2_p_3">
          With the One Funnel Away Challenge, we could easily charge $1,000 for
          the full 30 day challenge…{" "}
        </p>
        <p className="Hsection2_p_3"> Probably even $2,000, or more, but...</p>
        <div>
          <p className=" Hsection2_p_2"> All You Pay Is $100! </p>
        </div>
        <div>
          <div className="">
            <img className=" Hsection2_div_img_Testimo  img-fluid" src={Testimo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection2;
