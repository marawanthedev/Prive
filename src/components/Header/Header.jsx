import "./Header.css";
import LandingHeaderImg from "../../assets/svg/landingHeader.svg"
import LandingHeaderUpperText from "../../assets/svg/landingHeaderUpperText.svg"
import LandingHeaderLowerText from "../../assets/svg/landingHeaderLowerText.svg"
import ButtonArrow from "../../assets/svg/Arrow 1.svg"


const LandingHeader = () => {

    return (

        <div className="landingHeader">

            <div className="landingHeader__side landingHeader__side__left">
                <div className=" landingHeader__side__left__text landingHeader__side__left__text__upper" >
                    <img src={LandingHeaderUpperText} alt="" />
                </div>
                <div className="landingHeader__side__left__text landingHeader__side__left__text__lower" >
                    <img src={LandingHeaderLowerText} alt="" />

                </div>
                <button className="landingHeader__side__left__button">Book a Consultation <img src={ButtonArrow} alt="" /> </button>

            </div>
            <div className="landingHeader__side landingHeader__side__right" style={{ backgroundImage: `url(${LandingHeaderImg})` }}></div>
        </div>
    )
}

export default LandingHeader;