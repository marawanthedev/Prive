
import "./landingOffers.css"
import DermalImg from "../../assets/svg/offers/images/DentalFillers.svg"
import FacialImg from "../../assets/svg/offers/images/FacialTreatments.svg"
import PersonalImg from "../../assets/svg/offers/images/PersonalCare.svg"
import Button from "../../components/button/button"
import DermalFillers from "../../assets/svg/offers/text/Dermal Fillers.svg"
import FacialTreatments from "../../assets/svg/offers/text/Facial Treatments.svg"
import PersonalCare from "../../assets/svg/offers/text/Personal Care.svg"

const LandingOffers = () => {


    const offerData = [
        {
            title: "DermalFillers",
            text: "Look after your face with our luxury injectables. Our clinic offers face and lip fillers to bring out the best in you.",
            img: DermalImg,
            textImg: DermalFillers
        },
        {
            title: "FacialTreatments",
            text: "Relax in a world of facial paradise with our specialist beautifying skin treatments to cleanse and moisturise like never before.",
            img: FacialImg,
            textImg: FacialTreatments

        },
        {
            title: "PersonalCare",
            text: "We look after your entire body with our list of personal care treatments. From eyebrows to IV therapy, feel your absolute best from Flair.",
            img: PersonalImg,
            textImg: PersonalCare

        },
    ]

    return (

        <div className="landing-offers">

            {offerData.map((offer) => {

                return (
                    <div className="landing-offer">

                        <div className="left-side">
                            <div className="title"> <img src={offer.textImg} alt="" /> </div>
                            <p className="text">{offer.text}</p>
                            <Button textContent="See Treatements" isPrimary={false}></Button>
                        </div>
                        <div className="right-side">

                            <img src={offer.img} alt="" className="img" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default LandingOffers;