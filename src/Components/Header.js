import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import KichiCoinLogo from "../assets/kichilogo.jpg";

function Header({ setShouldShowOpenPopUp }) {
  return (
    <div className="header">
      <div className="header__logoContainer">
        <img src={KichiCoinLogo} />
      </div>
      <nav className="header__navContainer">
        <ul>
          <li onClick={() => setShouldShowOpenPopUp(true)}>
            <NavLink exact to="/" activeClassName="header__navSelected">
              Gallery
            </NavLink>
          </li>
          <li onClick={() => setShouldShowOpenPopUp(true)}>
            <NavLink to="/artists" activeClassName="header__navSelected">
              Artists
            </NavLink>
          </li>
          <li onClick={() => setShouldShowOpenPopUp(true)}>
            <NavLink to="/launchpad" activeClassName="header__navSelected">
              Launchpad
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__buttonContainer">
        <button className="bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(true)}>Connect Wallet</button>
        <button className="header__buttonContainerCreateNFT bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(true)}>
          Create NFT
        </button>
        <button className="bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(true)}>
          <SearchIcon fontSize="small" />
        </button>
        <button className="bootstrap-buttonStyle" onClick={() => setShouldShowOpenPopUp(true)}>
          <Brightness4Icon fontSize="small"/>
        </button>
      </div>
    </div>
  );
}

export default Header;
