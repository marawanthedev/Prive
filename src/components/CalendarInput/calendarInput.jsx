import { useState, useEffect } from "react";
import styled from "styled-components";
import ChevronImg from "../../assets/svg/chevron.svg";
import daysInMonth from "../../functions/daysInMonth/index";
import Calendar from "react-calendar";
import calendarData from "./calendarData";
import "./calendar.css";

const CalendarWrap = styled.div`
  border: 1px solid #000000;
  color: #181818;
  display: inline-block;
  position: relative;
  width: 100%;
  height: 6rem;
  font-size: 3rem;
  padding: 1rem 0;
  padding-left: 3rem;
  background-color: white;
  margin-bottom: 1.5rem;
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

  @media (max-width: 770px) {
    max-width: 100%;
    p span img {
      margin: 0;
    }
  }
`;

const CalendarInput = ({ onChange, name }) => {
  // const [selectedMonth, setSelectedMonth] = useState(0);
  // const [numOfDaysArr, setNumOfDaysArr] = useState([]);
  const selectedMonth = 0;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(value);
  const trueSelectedMonth = selectedMonth + 1;
  const numOfDays = daysInMonth(trueSelectedMonth, new Date().getFullYear());

  useEffect(() => {
    let array = [];

    for (let i = 1; i <= numOfDays; i++) {
      array.push(i);
    }

    // setNumOfDaysArr(array);
  }, [numOfDays]);

  const handleClick = (event) => {
    const newSelectedDate = {
      date: `${value.getDate()} ${
        calendarData[value.getMonth()].month
      } ${value.getFullYear()}`,
      dateActive: "date",
    };

    // @ts-ignore
    setSelectedDate(newSelectedDate);
    onChange(newSelectedDate);
    setActive(!active);
  };

  const handleRendering = () => {
    if (active) {
      return (
        <Calendar
          data-name="treatment"
          data-value={selectedDate}
          onChange={(e) => {
            setValue(e);
            setActive(!active);
          }}
          onClick={handleClick}
          value={value}
          name={name}
        />
      );
    } else {
      const valueToBeDisplayed = String(value).substring(
        0,
        String(value).indexOf(":") - 2
      );
      return (
        <p
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          {valueToBeDisplayed ? valueToBeDisplayed : "Preferred Date"}
          <span>
            <img src={ChevronImg} className="img-date" alt="chevron" />
          </span>
        </p>
      );
    }
  };

  return <CalendarWrap>{handleRendering()}</CalendarWrap>;
};
export default CalendarInput;
