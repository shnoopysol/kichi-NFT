import React, { useState } from "react";
import "./App.css";
import OpenPopUp from "./Components/OpenPopUp";
import Artists from "./Components/Artists";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Launchpad from "./Components/Launchpad";
import CookiePopUp from "./Components/CookiePopUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [shouldShowCookiePopUp, setShouldShowCookiePopUp] = useState(true);
  const [shouldShowOpenPopUp, setShouldShowOpenPopUp] = useState(false);
  return (
    //BEM Naming Convention
    <div className="app">
      <Router>
        <Header setShouldShowOpenPopUp={setShouldShowOpenPopUp}/>
        <Switch>
          <Route path="/artists">
            <Artists setShouldShowOpenPopUp={setShouldShowOpenPopUp}/>
          </Route>
          <Route path="/launchpad">
            <Launchpad setShouldShowOpenPopUp={setShouldShowOpenPopUp}/>
          </Route>
          <Route path="/">
            <Gallery setShouldShowOpenPopUp={setShouldShowOpenPopUp} />
          </Route>
        </Switch>
      </Router>
      {shouldShowCookiePopUp && <CookiePopUp setShouldShowCookiePopUp={setShouldShowCookiePopUp} />}
      {shouldShowOpenPopUp && (
        <OpenPopUp
          shouldShowOpenPopUp={shouldShowOpenPopUp}
          setShouldShowOpenPopUp={setShouldShowOpenPopUp}
        />
      )}
    </div>
  );
}

export default App;
