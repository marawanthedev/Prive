import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import calendarData from "../calendarData";
import timeData from "../timeData";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

// Functions
// import daysInMonth from '../../../functions/daysInMonth';

// Assets
import ChevronImg from "../../../assets/svg/chevron.svg";

// Styles
// import global from '../../../var';
const global = {
    primary: "#77CFD2",
    secondary: "#FD93DB",
    tertiary: "#BEA960"
}
const Input = styled.input`
    border: 2px solid ${global.tertiary};
    max-width: -webkit-fill-available;
    outline: none;

    &::placeholder {
        color: ${global.tertiary};
        font-family: "ainslie-sans", "open-sans";
    }

    &:focus{
        border: 2px solid ${global.secondary};
    }

    &#error {
        border: 2px solid red;
    }
`
const Dropdown = styled.ul`
    border: 2px solid ${global.tertiary};
    max-width: -webkit-fill-available;
    outline: none;
    color: ${global.tertiary};
    list-style: none;
    position:relative;
    display: flex;
    flex-direction: column;
    transition: .2s;

    li{
        overflow-y: hidden;
        height: 0px;
        width: fit-content;
        font-size: inherit;
        transition: .2s;
        border-bottom: 1px solid white;
        margin: 0;
        cursor: pointer;

        &:first-of-type {
            margin-top: 0px;
        }

        ul {
            display: none;
        }

    }

    &.dropdown-active{
        li{
            height: 40px;
            display: block;;
            font-weight: 600; 
            &.active-header {
                height: auto !important;

                ul {
                    display: block;
                    li {
                        font-weight: 300; 
                        font-size: 2rem;
                        padding-bottom: 0;
                    }
                }
            }

            &:first-of-type {
                margin-top: 10px;
            }

            & ul {
                text-indent: 35px;

                li {
                    border-bottom: none;
                    position: relative;
                    
                    input {
                        position: absolute;
                        left: 14px;
                        top: 5px; 
                    }
                    
                    input::after{
                        content: "";
                        width: 20px;
                        position: absolute;
                        height: 20px;
                        border: 2px solid ${global.secondary};
                        border-radius: 50%;
                        left: -4px;
                        top: 0px;
                        background-color: white;
                    }

                    input:checked {
                        &::after {
                            border: 5px solid ${global.secondary};
                            height: 20px;
                            width: 20px;
                        }
                    }
                }
            }
        }
    }
    span{
        height: 35px;
        overflow: hidden;
        white-space: nowrap;
    }
    span img {
        float: right;
        margin: 15px;
    }

    @media(max-width: 420px) {

        span {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            height: auto;

            img{
                width: 15px;
                height: 10px;
                margin: 0;
            }
        }

        &.dropdown-active{
            li{
                height: 40px;
                display: block;;
    
                &.active-header {
                    height: auto !important;
    
                    ul {
                        display: block;

                        li {
                            font-size: 2.5rem;
                        }
                    }
                }
    
                &:first-of-type {
                    margin-top: 10px;
                }
    
                & ul {
                    text-indent: 25px;
    
                    li {
                        border-bottom: none;
                        position: relative;
                        
                        input {
                            top: 8px;
                            left: 5px;
                            width: 1px;
                            height: 1px;
                        }
                        
                        input::after{
                            content: "";
                            width: 15px;
                            position: absolute;
                            height: 15px;
                            border: 2px solid ${global.secondary};
                            border-radius: 50%;
                            left: -5px;
                            top: -4px;
                        }
    
                        input:checked {
                            &::after {
                                border: 5px solid ${global.secondary};
                                height: 20px;
                                width: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
`

const GridSelect = styled.div`
    border: 2px solid ${global.tertiary};
    color: ${global.tertiary};
    max-width: 49%;
    display: inline-block;
    
    button {
        padding: 10px;
        cursor: pointer;
        img {
            width: 10px;
        }
    }
    img {
        float: right;
        margin: 12.5px;
    }

    p {
        font-size: inherit;
        margin: 1px !important;
        text-transform: capitalize;

    }

    #invalid {
        background-color: #F9F9F9;
        cursor: default;

        &::hover {
            background-color: #F9F9F9;
        }
    }

    .calendar-container {
        text-align: center !important;
        p{
            justify-content: center;
            text-align: center !important;
            width: 13%;
        }
    }

    div:first-of-type {
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
        align-items: center;

        button{
            background-color: transparent;
            outline: none;
            border: none;

            &:first-of-type{
                transform: rotate(90deg);
            }

            &:hover{
                background: #f5f5f5;
            }

            &:nth-of-type(2){
                transform: rotate(-90deg);
            }

            img {
                cursor: pointer;
            }
        }
    }

    div:nth-of-type(2){
        display: flex;
        flex-wrap: wrap;

        p {
            font-size: 2.5rem;
            cursor: pointer;
            transition: .2s;
            padding: 5px;
            margin: 10px;
            &:hover{
                background-color: #f2f2f2;
            }
        }
    }

    @media(max-width: 770px){
        max-width: 100%;
        
        div:first-of-type {
            align-items: baseline;
        }
    }

    @media(max-width: 420px) {
        padding-bottom: 20px;

        img{
            width: 15px;
            height: 10px;
            margin: 5px 0;
        }
        p{
            justify-content: space-between;
            display: flex;
            align-items: baseline;
        }
    }

    .padding-btm{
        padding-bottom: 5px !important;
    }
`

const TextArea = styled.textarea`
    border: 2px solid ${global.tertiary};
    color: ${global.tertiary}; 
    max-width: -webkit-fill-available;
    min-height: 35vh;
    resize: none;
    font-family: "ainslie-sans", "open-sans";

    &::placeholder {
        color: ${global.tertiary};
        font-family: "ainslie-sans", "open-sans";
    }

    &:focus{
        border: 2px solid ${global.secondary};
    }
`
const CalendarWrap = styled.div`
    border: 2px solid ${global.tertiary};
    color: ${global.tertiary};
    max-width: 49%;
    display: inline-block;
    position: relative;

    .img-date {
        margin: 0 10px;
    }
    img {
        float: right;
        margin: 10.5px;
    }

    p {
        font-size: inherit;
        margin: 1px !important;
        text-transform: capitalize;
    }

    @media(max-width: 770px){
        max-width: 100%;
        p span img {
            margin: 0;
        }
    }

    @media(max-width: 420px) {
        img{
            width: 15px;
            height: 10px;
            margin: 0;
        }

        .img-date {
            margin: 0;
        }
    }

`;

// Text Input Components
export function Text({ name, placeholder, onChange, error }) {
    return (
        <>
            <Input type="text" placeholder={placeholder} onChange={onChange} name={name} id={error ? "error" : ""} required></Input>
        </>
    )
};

// Dropdown Input
export function Select({ name, placeholder, children, data, onChange }) {
    const [value, setValue] = useState("Select treatment")
    const [active, setActive] = useState(false);
    const [selectedSub, setSelectedSub] = useState(false);

    const handleExpansion = (event) => {
        const e = event.target
        setActive(!active);

        if (e.getAttribute("data-value")) {
            setValue(e.getAttribute("data-value"));
        } else {
            setValue("Select treatment");
        }

        onChange(event);
    }

    const handleClick = (e) => {
        console.log(e.target.value);
        setValue(e.target.value)
        const dropdown = {
            treatment: e.target.value,
            type: "treatment"
        };
        setActive(!active);

        onChange(dropdown)
    }

    const toggleActive = (e) => {
        const el = document.getElementById(`${e.target.getAttribute("data-value")}`);

        if (el.classList.contains("active-header")) {
            el.classList.remove("active-header");
            // setActive(!active);
        } else {
            el.classList.add("active-header");
        }

    }

    return (
        <Dropdown className={`dropdown-${active === true ? "active" : "closed"}`}>
            <span onClick={handleExpansion} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }} data-value="Select treatment">{value}<img src={ChevronImg} alt="chevron" /></span>
            {data.map((object, index) => {
                const newId = object.text.replace(" ", "_");
                return (
                    // <li key={index} onClick={handleExpansion} data-value={object.text} value={object.text} data-name={name}></li>
                    <li key={index} data-value={newId} value={object.text} data-name={name} onClick={toggleActive} id={newId}>
                        {object.text}
                        <img data-value={newId} src={ChevronImg} alt="chevron" style={{ marginLeft: "20px", width: "15px" }} />
                        <ul data-value={newId}>
                            {object.treatments.map((treatment, index) => {
                                const groupId = object.text.replace(' ', '-')
                                return (
                                    <li data-value={newId}>
                                        <input style={{ cursor: "pointer" }} data-value={newId} onClick={handleClick} type="radio" name="preferred-treatment" id={`input-${groupId}-${index}`} value={`${groupId}: ${treatment.content}`} />
                                        <label style={{ cursor: "pointer" }} data-value={newId} for={`input-${groupId}-${index}`} >{treatment.content}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>);
            })}
        </Dropdown>

    )
}

// Calendar Input
export function CalendarInput({ onChange, name }) {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [numOfDaysArr, setNumOfDaysArr] = useState([])
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(value);
    const trueSelectedMonth = selectedMonth + 1;
    // const numOfDays = daysInMonth(trueSelectedMonth, new Date().getFullYear());
    const [label, setLabel] = useState('Preferred Date');
    const now = new Date();

    // useEffect(() => {
    //     let array = [];

    //     for (let i = 1; i <= numOfDays; i++) {
    //         array.push(i);
    //     }

    //     setNumOfDaysArr(array);

    // }, [numOfDays])

    const handleClick = (event) => {
        const e = event.target;

        setActive(!active);

        const newSelectedDate = {
            date: `${value.getDate()} ${calendarData[value.getMonth()].month} ${value.getFullYear()}`,
            dateActive: "date"
        };

        setSelectedDate(newSelectedDate);
        onChange(newSelectedDate)
        setActive(!active);

        setLabel(newSelectedDate.date);
        // if(e.getAttribute("data-type") === "inc"){
        //     if(selectedMonth < 11){setSelectedMonth(selectedMonth + 1)}
        // } else {
        //     if(selectedMonth > 0){setSelectedMonth(selectedMonth - 1)}
        // }

    }

    useEffect(() => {
        // const newSelectedDate = { 
        //     date:`${value.getDate()}, ${calendarData[value.getMonth()].month}, ${value.getFullYear()}`,
        //     dateActive: "date"
        // };

        // setSelectedDate(newSelectedDate);
        // onChange(newSelectedDate)
        setActive(!active);

    }, [value])

    return (
        <CalendarWrap>
            {active ?
                <p onClick={handleClick} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>{label}<span><img src={ChevronImg} className="img-date" alt="chevron" /></span></p>
                :
                <Calendar
                    data-name="treatment"
                    data-value={selectedDate}
                    onChange={setValue}
                    value={value}
                    minDate={new Date()}
                    name={name}
                />
            }
        </CalendarWrap>

    )
}

// Calendar Input
export function Time({ onChange, name }) {
    const [selectedTime, setSelectedTime] = useState(0);
    const [active, setActive] = useState(false);
    const [selectedTimeStr, setSelectedTimeStr] = useState('');

    const handleClick = (event) => {
        const e = event.target;

        if (e.getAttribute("data-type") === "inc") {
            if (selectedTime < 1) { setSelectedTime(selectedTime + 1) }
        } else {
            if (selectedTime > 0) { setSelectedTime(selectedTime - 1) }
        }
    }

    const handleActive = (e) => {
        setActive(!active)
        setSelectedTimeStr(e.target.getAttribute("data-value"));
        onChange(e)
    }

    return (
        <GridSelect style={{ float: "right", paddingBottom: "0" }}>
            {!active ? <p style={{ paddingBottom: "0" }} className="padding-btm" onClick={handleActive}>{selectedTimeStr ? selectedTimeStr : "Preferred Time"}<span><img src={ChevronImg} alt="chevron" /></span></p> :
                <>
                    <div>
                        <button onClick={handleClick} data-type="dec"><img src={ChevronImg} alt="chevron" data-type="dec" /></button>
                        {timeData[selectedTime].period}
                        <button onClick={handleClick} data-type="inc"><img src={ChevronImg} alt="chevron" data-type="inc" /></button>
                    </div>
                    <div>
                        {timeData[selectedTime].times.map((time, index) => {
                            const fullTime = `${time} ${timeData[selectedTime].period}`;

                            return (
                                <p key={index} onClick={handleActive} style={{ fontSize: "2rem", paddingBottom: "15px" }} data-value={fullTime} data-name={name}>{time}</p>
                            )
                        })}
                    </div>
                </>
            }
        </GridSelect>

    )
}

// Text Box
export function TextBox({ onChange, name }) {
    return (
        <TextArea placeholder="Enquiry" onChange={onChange} name={name}>

        </TextArea>
    )
}