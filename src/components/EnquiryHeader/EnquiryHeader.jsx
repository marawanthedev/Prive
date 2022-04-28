import "./EnquiryHeader.css";
import EnquireNowText from "../../assets/svg/Enquire Now.svg";

const EnquiryHeader = () => {
  return (
    <div className="enquiry-header" id="enquiryHeader">
      <img src={EnquireNowText} alt="" />
    </div>
  );
};

export default EnquiryHeader;
