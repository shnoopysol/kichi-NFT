import React from "react";
import "./CookiePopUp.css";

function CookiePopUp({ setShouldShowCookiePopUp }) {
  return (
    <div className="cookiePopUp">
      <p>
        To improve your experience on our websites, we use cookies. These cookies are a combination
        of our own and third-parties’ to gather information about usage and preferences{" "}
        <bold>Read more</bold>
      </p>

      <button className="bootstrap-buttonStyle" onClick={() => setShouldShowCookiePopUp(false)}>
        ACCEPT
      </button>
    </div>
  );
}

export default CookiePopUp;
