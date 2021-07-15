import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Notiflix from 'notiflix';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
// import global from '../../var';
import treatmentData from './formTreatementData';
// Components
import * as Input from "../fields/input";
import Button from "../fields/button";

// Assets
import MailImg from "../../assets/icons/mail-green.svg";
import InstaImg from "../../assets/icons/insta-green.svg";
import FacebookImg from "../../assets/icons/facebook-green.svg";

const global = {
    primary: "#77CFD2",
    secondary: "#FD93DB",
    tertiary: "#BEA960"
}

const Section = styled.section`
    button {
        display: block;
        margin: 0 auto;
    }
    .socials{
        display: flex;
        justify-content: center;

        a {
            margin: 20px 20px 0 20px;
        }
    }
    #form{
        .react-calendar {
            border: none !important;

        }

        .react-calendar button {
            color: ${global.tertiary};
            font-family: "ainslie-sans", 'Segoe UI', 'Roboto', 'Oxygen' !important;
            font-size: 2rem;

            &:hover {
                background: #f5f5f5;
            }
        }

        .react-calendar__tile--now {
            background: none;
            border: 1px solid ${global.tertiary};
        }

        .react-calendar__tile:disabled {
            background-color: #f5f5f5;
        }

        .react-calendar__tile--active  {
            background: ${global.tertiary};
            color: white !important;

            &:hover {
                background: ${global.tertiary} !important;
            }
        }
    }
    .react-calendar__month-view__weekdays__weekday {
        display: none;
    }

    @media(max-width: 770px){
        #form {
            .react-calendar {
                width: 100%;
            }
        }
    }
`;

function Form() {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [treatment, setTreatment] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [value, onChange] = useState(new Date());
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const history = useHistory();

    const formData = {
        fullname,
        email,
        phone,
        treatment,
        date,
        time,
        inquiry
    };

    const handleFormData = (e) => {

        switch (e.target?.name || e.target?.getAttribute("data-name") || e.dateActive || e.type) {
            case "full_name":
                setFullname(e.target.value);
                break;
            case "email":
                const emailData = {
                    "email": e.target.value,
                    "level": "MX",
                    "options": {}
                }

                axios({
                    method: "post",
                    url: `https://webservices.data-8.co.uk/EmailValidation/IsValid.json?key=K3UB-54SM-JD5E-EX5P`,
                    data: emailData
                }).then((res) => {

                    if (res.data.Result === "Valid") {
                        setEmail(e.target.value);
                        setEmailError(false)

                    } else {
                        setEmailError(true)
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })
                //   setEmail(e.target.value);
                break;
            case "phone":
                const telephone = e.target.value;
                const phoneData = {
                    telephoneNumber: telephone,
                    defaultCountry: "GB",
                    options: {
                        UseMobileValidation: true,
                        UseLineValidation: true,
                        RequiredCountry: "",
                        AllowedPrefixes: "",
                        BarredPrefixes: "",
                        UseUnavailableStatus: true,
                        UseAmbiguousStatus: true,
                        TreatUnavailableMobileAsInvalid: false,
                        ExcludeUnlikelyNumbers: false,
                    }
                };
                axios({
                    method: "post",
                    url: `https://webservices.data-8.co.uk/InternationalTelephoneValidation/IsValid.json?key=K3UB-54SM-JD5E-EX5P`,
                    data: phoneData
                }).then((res) => {
                    if (res.data.Result.ValidationResult === "Valid") {
                        setPhoneError(false);
                        setPhone(e.target.value);
                    } else {
                        setPhoneError(true);
                    }
                })
                    .catch((err) => {
                        console.log(err)
                    })
                // setPhone(e.target.value);
                break;
            case "treatment":
                setTreatment(e.treatment);
                break;
            case "date":
                setDate(e.date)
                break;
            case "time":
                setTime(e.target.getAttribute("data-value"))
                break;
            case "inquiry":
                setInquiry(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "<<<<<<new<<<<")
        if (fullname && email && phone && treatment && date && time && inquiry) {
            const url = process.env.REACT_APP_SERVER;
            const axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*"
                }
            };

            axios.post(`https://flair-api.opopmedia.co.uk/api/form`, formData, axiosConfig)
                .then(res => {
                    history.push('/thank_you');
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err)
                    Notiflix.Report.failure('Something went wrong', 'Please try again', 'Close');

                });
        } else {
            Notiflix.Report.failure('Dispatch Failure', 'Please complete the form before submitting', 'Close');
        }
    };

    const handleDefault = (e) => {
        e.preventDefault();
    }

    return (
        <Section>
            <div className="border">
                <form onSubmit={handleDefault} id="form">
                    <Input.Text name="full_name" placeholder="Full name" onChange={handleFormData} />
                    <Input.Text name="email" placeholder="Email address" onChange={handleFormData} error={emailError} />
                    <Input.Text name="phone" placeholder="Phone number" onChange={handleFormData} error={phoneError} />
                    <Input.Select name="treatment" data={treatmentData} onChange={handleFormData} />
                    {/* <Input.Calendar name="date" onChange={handleFormData}/> */}
                    <Input.CalendarInput name="date" onChange={handleFormData} />
                    <Input.Time name="time" onChange={handleFormData} />
                    <Input.TextBox name="inquiry" onChange={handleFormData} />
                    <Button color={"secondary"} size={"small"} handleClick={handleSubmit}>Submit Enquiry</Button>
                </form>
            </div>
        </Section>
    )
}

export default Form;