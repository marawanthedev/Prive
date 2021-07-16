import React from 'react';
import styled from 'styled-components';

//Assets
import HomeImg1 from "../../assets/svg/results/result-1.svg";
import HomeImg2 from "../../assets/svg/results/result-2.svg";
import HomeImg3 from "../../assets/svg/results/result-3.svg";
import HomeImg4 from "../../assets/svg/results/result-4.svg";
import HomeImg5 from "../../assets/svg/results/result-5.svg";
import HomeImg6 from "../../assets/svg/results/result-6.svg";
import HomeImg7 from "../../assets/svg/results/result-7.svg";

const Section = styled.section`
width:120rem;
margin:7.5rem 0;
display:flex;
            justify-content:center;
            align-items:center;
            flex-flow: wrap;

    div {
        & > div {
            display: flex;
            justify-content: space-evenly;
            flex-flow: wrap;
            & > div {
                position: relative;
                margin: 10px 0;
                width: 300px;
                height: 300px;

                img {
                    width: 100%;
                    height: 100%;
                }

                // video{
                //     object-fit: fill;
                //     width: 100%;
                //     height: 100%;
                // }
    
                // img {
                //     width: 20px;
                //     height: 20px;
                //     cursor: pointer;
                //     position: absolute;
                //     right: 0;
                //     top: 0;
                //     padding: 5px;
                //     opacity: .8;
                // }
            }
        }
    }

    @media(max-width: 420px){
        div {
            & > div {

                & > div {
                    width: 150px;
                    height: 150px;
                }

                & > div:nth-of-type(5),
                div:nth-of-type(6),
                div:nth-of-type(7),
                div:nth-of-type(8) {
                    display: none;
                }
            }
        }
    }
`

function Videos() {



    const videoData = [
        {
            src: HomeImg1,
        },
        {
            src: HomeImg2,
        },
        {
            src: HomeImg3,
        },
        {
            src: HomeImg4,
        },
        {
            src: HomeImg5,
        },
        {
            src: HomeImg6,
        },
        {
            src: HomeImg7,
        },
        {
            src: HomeImg7
        },
    ]
    return (
        <Section>
            <div className="border">
                <div>
                    {
                        videoData.map((video, index) => {
                            return (
                                <div key={index}>
                                    <img src={video.src} alt="home content" />
                                </div>
                            )
                            //     return(
                            //         <div key={index}>
                            //             <div key={index}>
                            //                 <video src={video.src} id={`video-${index}`}/>
                            //                 <img
                            //                     className="test"
                            //                     src={PauseImg} 
                            //                     alt="pause"
                            //                     onClick={handleVideo} 
                            //                     name="pause"
                            //                     data-index={index}
                            //                     style={{display: "none"}}
                            //                 /> 
                            //                 <img 
                            //                     src={PlayImg} 
                            //                     alt="play"
                            //                     onClick={handleVideo} 
                            //                     name="play"
                            //                     data-index={index}
                            //                 /> 
                            //             </div>
                            //         </div>
                            // )
                        })
                    }
                </div>
            </div>
        </Section>
    )
};

export default Videos;