import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";
import EmailIcon from "../../assets/svg/email.svg"

import "./footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Prive</h4>
                        <ul>
                            <li>
                                <a href="#aboutus">About us</a>
                            </li>
                            <li>
                                <Link to="">Price List</Link>

                            </li>
                            <li>
                                <Link to="/enquiry">Enquire Now</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li>
                                <Link to="">Terms and Conditions</Link>

                            </li>
                            <li>
                                <Link to="">Privacy Policy</Link>

                            </li>
                            <li>
                                <Link to="">Cookie Policy</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Help</h4>
                        <ul>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Socials</h4>
                        <div className="social-links">
                            <a href="#">
                                <img src={EmailIcon} alt="" />
                            </a>
                            <a href="#">

                                <img src={FacebookIcon} alt="" />
                            </a>
                            <a href="#">
                                <img src={InstagramIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
