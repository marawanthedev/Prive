import "./mobileNavBar.css";
import { useState } from "react";
const MobileNavBar = () => {
  const [hideNavBar, setHideNavBar] = useState(false);
  const links = ["Enquire", "See Treatments"];
  return (
    <div className="navigation" >
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
        onClick={() => setHideNavBar(!hideNavBar)}
        checked={!hideNavBar ? false : true}
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((link, index) => {
            return (
              <li
                className="navigation__item"
                key={index}
                onClick={() => setHideNavBar(false)}
              >
                <a href="#landingHeader" className="navigation__link">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavBar;
