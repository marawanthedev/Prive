import "./landingEnquiry.css"
import Button from "../../components/button/button"

const landingEnquiry = () => {
    return (

        <div className="enquiry">
            <p className="enquiry__paragraph">
                Prive combines years of expertise with the most pampered beauty care to allow your image
                to be the best it can be. We know you want to look youthful for as long as possible,
                and we can help you achieve that goal.
            </p>
            <div className="enquiry__statement">
                Feel the Prive effect today
            </div>
            <Button textContent="Enquire now" isPrimary={false}></Button>
        </div>
    )
}
export default landingEnquiry;