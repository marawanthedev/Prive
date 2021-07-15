import React from 'react';
import Template from "../../components/template/template"
import LandingHeader from "../../components/Header/Header"
import "./landing.css"
import LandingEnquiry from "../../components/Enquiry/Enquiry"
import LandingAboutUs from "../../components/AboutUs/AboutUs"
import LandingOffers from "../../components/Offers/Offers"
import LandingTestimonals from "../../components/testimonals/testimonals"
import LandingVideos from "../../components/videos/videos"
class LandingPage extends React.PureComponent {



    render() {


        return <div>

            <Template>

                <div className="landing">
                    <LandingHeader></LandingHeader>
                    <LandingEnquiry></LandingEnquiry>
                    <LandingAboutUs></LandingAboutUs>
                    <LandingOffers></LandingOffers>
                    {/* <LandingTestimonals></LandingTestimonals> */}
                    <LandingVideos></LandingVideos>
                </div>

            </Template>
        </div>
    }

}

export default LandingPage;