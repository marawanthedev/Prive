import LandingAboutUsImg from "../../assets/images/Aboutus.png";
import "./AboutUs.css";
import Button from "../button/button";
import AboutUsTextImg from "../../assets/svg/AboutUsText.svg";
import { Link } from "react-router-dom";

const LandingAboutUs = () => {
    return (
        <div className="landing-about-us" id="aboutus">
            <div className="left-section">
                <img src={LandingAboutUsImg} alt="" className="img" />
            </div>
            <div className="right-section">
                <div className="text-content">
                    <h2 className="header">
                        <img src={AboutUsTextImg} alt="" />
                    </h2>
                    <p className="paragraph">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        tincidunt molestie. Maecenas ex ante, ultrices a dolor et, volutpat
                        elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus
                        ante ullamcorper vel. Lorem Ipsum dolor sit amet, consectetur
                        adipiscing elit. Donec tincidunt molestie. Maecenas ex ante,
                        ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper
                        pharetra sapien, vitae dapibus ante ullamcorper vel. Maecenas ex
                        ante, ultrices a dolor et, volutpat elementum dui. Phasellus
                        ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel.
                    </p>
                </div>

                <Link to="/enquiry">
                    <Button textContent="Enquire now" tertiary={true}></Button>
                </Link>
            </div>
        </div>
    );
};

export default LandingAboutUs;
