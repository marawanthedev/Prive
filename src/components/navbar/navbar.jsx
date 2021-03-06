import React from "react";
import "./navbar.css";
import Logo from "../../assets/svg/logo.svg";
import Button from "../button/button";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className=" navbar__side navbar__side__right">
        <Link to="/">
          <div
            className="navbar__side__right__logo"
            style={{ backgroundImage: `url(${Logo})` }}
          ></div>
        </Link>
      </div>
      <div className=" navbar__side navbar__side__left">
        <div className="navbar__side__left__contact-number">0333 674 7590</div>
        <div className="navbar__side__left__buttons-container">
          <div className="navbar__side__left__buttons-container__item">
            <Link to="/enquiry">
              <Button textContent="Enquiry" isPrimary={true}></Button>
            </Link>
          </div>
          <div className="navbar__side__left__buttons-container__item">
            <Button textContent="See Treatments" isPrimary={false}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
