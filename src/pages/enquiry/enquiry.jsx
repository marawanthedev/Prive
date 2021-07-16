
import Template from "../../components/template/template"
import EnquiryHeader from "../../components/EnquiryHeader/EnquiryHeader"
import EnquiryForm from "../../components/form/form"
import "./enquiry.css"
const EnquiryPage = () => {
    return (

        <Template>
            <EnquiryHeader></EnquiryHeader>
            <EnquiryForm></EnquiryForm>
        </Template>
    )
}

export default EnquiryPage;