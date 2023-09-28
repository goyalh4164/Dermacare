import React from "react";
import one from "../assets/icons/one.png";
import two from "../assets/icons/two.png";
import three from "../assets/icons/three.png";
import "./procedure.scss";
function Procedure() {
  return (
    <>
      <div className="procedure">
        <div className="procedure__heading">
          How{" "}
          <span
            style={{
              color: "#118480",
            }}
          >
            Dermacare{" "}
          </span>
          works ?
          <hr />
        </div>

        <div className="procedureContainer">
          <div className="procedureContainer__div1">
            <div className="procedureContainer__div1__Image"></div>

            <div className="procedureContainer__div1__content-head">
              <p>Click & Upload </p>
            </div>
            <div className="procedureContainer__div1__Content">
              <p className="details">
                Navigate to the upload section through the button placed at the
                bottom of the login form. Upload an image of the affected part
                of skin of your body. Make sure the images are taken from
                different angles.
              </p>
            </div>
          </div>

          <div className="procedureContainer__div2">
            <div className="procedureContainer__div2__TwoImage"></div>
            <div className="procedureContainer__div2__content-head">
              <p> View your Diagnosis Report</p>
            </div>

            <div className="procedureContainer__div2__TwoContent">
              <p className="details">
                Upon successful upload of images,head over to the profile
                section through the person icon placed at top right corner of
                navigation panel where you can access the report generated by
                our model.
              </p>
            </div>
          </div>

          <div className="procedureContainer__div3">
            <div className="procedureContainer__div3__ThreeImage"></div>
            <div className="procedureContainer__div3__content-head">
              <p>Access via Email</p>
            </div>

            <div className="procedureContainer__div3__ThreeContent">
              <p className="details">
                A copy of the diagnosis report will be mailed to the user as
                well keeping in mind their convenience and easy storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Procedure;
