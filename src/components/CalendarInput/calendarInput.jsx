
import { useState, useEffect } from "react"
import styled from 'styled-components';
import ChevronImg from "../../assets/svg/chevron.svg"
import daysInMonth from "../../functions/daysInMonth/index";
import Calendar from 'react-calendar';
import calendarData from "./calendarData"
import "./calendar.css"

const CalendarWrap = styled.div`
    border: 1px solid #000000;
    color: #181818;
    display: inline-block;
    position: relative;
    width:80rem;
    height:6rem;
    font-size:3rem;
    padding:1rem 0;
    padding-left:3rem;
    z-index:200;
    background-color:white;
    margin-bottom:1.5rem;
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



const CalendarInput = ({ onChange, name }) => {
    const [selectedMonth, setSelectedMonth] = useState(0);
    const [numOfDaysArr, setNumOfDaysArr] = useState([])
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(value);
    const trueSelectedMonth = selectedMonth + 1;
    const numOfDays = daysInMonth(trueSelectedMonth, new Date().getFullYear());
    const [label, setLabel] = useState('Preferred Date');
    const now = new Date();

    useEffect(() => {
        let array = [];

        for (let i = 1; i <= numOfDays; i++) {
            array.push(i);
        }

        setNumOfDaysArr(array);

    }, [numOfDays])

    const handleClick = (event) => {
        const e = event.target;

        setActive(!active);

        const newSelectedDate = {
            date: `${value.getDate()} ${calendarData[value.getMonth()].month} ${value.getFullYear()}`,
            dateActive: "date"
        };

        // @ts-ignore
        setSelectedDate(newSelectedDate);
        onChange(newSelectedDate)
        setActive(!active);

        setLabel(newSelectedDate.date);


    }

    useEffect(() => {
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
                    // @ts-ignore
                    name={name}
                />
            }
        </CalendarWrap>

    )
}
export default CalendarInput;