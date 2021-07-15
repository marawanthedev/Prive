
import LandingAboutUsImg from "../../assets/svg/landingaboutus.svg"
import "./landingAboutUs.scss"
import Button from "../button/button"

const LandingAboutUs = () => {

    return (

        <div className="landing-about-us">

            <div className="left-section">

                <img src={LandingAboutUsImg} alt="" className="img" />

            </div>
            <div className="right-section">

                <div className="text-content">

                    <h2 className="header">About Us</h2>
                    <p className="paragraph">
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt molestie. Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt molestie. Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel.
                        Maecenas ex ante, ultrices a dolor et, volutpat elementum dui. Phasellus ullamcorper pharetra sapien, vitae dapibus ante ullamcorper vel.
                    </p>
                </div>
                <Button textContent="Enquire now" tertiary={true}></Button>

            </div>
        </div>
    )
}

export default LandingAboutUs;