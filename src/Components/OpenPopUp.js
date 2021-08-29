import React from "react";
import "./OpenPopUp.css";

function OpenPopUp({setShouldShowOpenPopUp}) {
  return (
    <div className="openPopUp">
      <div className="openPopUp__container">
        <p>Oops! Nothing here yet...</p>
        <img className="openPopUp__containerImage--animate" src="https://global-uploads.webflow.com/60be8857e8000469c32c69b1/60c78398afb29e18cec21c2c_KichiChan%20SVG.svg" />
        <button className="openPopUp__button bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(false)}>Go back</button>
      </div>
    </div>
  );
}

export default OpenPopUp;
