import React from 'react';
import Template from "../../components/template/template"
import LandingHeader from "../../components/landingHeader/landingHeader"
import "./landing.css"
import LandingEnquiry from "../../components/landingEnquiry/landingEnquiry"
import LandingAboutUs from "../../components/landingAboutUs/landingAboutUs"
import LandingOffers from "../../components/landingOffers/landingOffers"
import LandingTestimonals from "../../components/testimonals/testimonals"
import LandingVideos from "../../components/videos/videos"
class LandingPage extends React.PureComponent {



    render() {

        const offers = [
            { title: "De" }
        ]
        return <div>

            <Template>

                <div className="landing">
                    <LandingHeader></LandingHeader>
                    <LandingEnquiry></LandingEnquiry>
                    <LandingAboutUs></LandingAboutUs>
                    <LandingOffers></LandingOffers>
                    <LandingTestimonals></LandingTestimonals>
                    <LandingVideos></LandingVideos>
                </div>

            </Template>
        </div>
    }

}

export default LandingPage;