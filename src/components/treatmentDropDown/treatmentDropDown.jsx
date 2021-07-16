

import { useState } from "react"
import styled from 'styled-components';
import ChevronImg from "../../assets/svg/chevron.svg"
const global = {
    primary: "#77CFD2",
    secondary: "#FD93DB",
    tertiary: "#BEA960"
}
const Dropdown = styled.ul`
    border: 1px solid #000000;
    max-width: -webkit-fill-available;
    outline: none;
    color:#000000;
    list-style: none;
    position:relative;
    display: flex;
    flex-direction: column;
    transition: .2s;
    margin-bottom:1.5rem;
    overflow-y:auto;
    li{
        height: 0px;
        width: fit-content;
        font-size: inherit;
        transition: .2s;
        border-bottom: 1px solid white;
        margin: 0;
        cursor: pointer;
        overflow-y:hidden;

        &:first-of-type {
            margin-top: 0px;
        }

        ul {
            display: none;
        }

    }

    &.dropdown-active{
        z-index:100;
        li{
            height: 6rem;
            width:100%;
            font-size:3rem;
            display: block;;
            font-weight: 600;
            padding-left:5rem;
            background-color:white;
            &.active-header {
                height: auto !important;

                ul {
                    margin-top:3rem;
                    display: block;
                    list-style:none;
                    li {
                        font-weight: 300; 
                        font-size: 2rem;
                        padding-bottom: 0;
                        list-style:none;
                        height:5rem;

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
                        left: 17px;
                        top: 0px; 
                    }
                    
                    input::after{
                        content: "";
                        width: 20px;
                        position: absolute;
                        height: 20px;
                        border: 2px solid #F6C6D2;
                        border-radius: 50%;
                        left: -6px;
                        top: -.5px;
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

const Select = ({ name, placeholder, children, data, onChange, className }) => {


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
        <div >
            <Dropdown className={` dropdown-${active === true ? "active" : "closed"}`}>
                <span onClick={handleExpansion} style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", height: "5rem", width: "80rem", fontSize: "3rem", paddingLeft: "3rem", color: "rgba(0, 0, 0, 1)" }} data-value="Select treatment">{value}<img src={ChevronImg} alt="chevron" /></span>
                {data.map((object, index) => {
                    const newId = object.text.replace(" ", "_");
                    return (
                        <li key={index} data-value={newId} value={object.text} data-name={name} onClick={toggleActive} id={newId}>
                            {object.text}
                            <img data-value={newId} src={ChevronImg} alt="chevron" style={{ marginLeft: "20px", width: "15px", transform: "translateY(1.25rem)" }} />
                            <ul data-value={newId}>
                                {object.treatments.map((treatment, index) => {
                                    const groupId = object.text.replace(' ', '-')
                                    return (
                                        <li data-value={newId}>
                                            <input style={{ cursor: "pointer" }} data-value={newId} onClick={handleClick} type="radio" name="preferred-treatment" id={`input-${groupId}-${index}`} value={`${groupId}: ${treatment.content}`} />
                                            <label style={{ cursor: "pointer" }} data-value={newId} htmlFor={`input-${groupId}-${index}`} >{treatment.content}</label>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>);
                })}
            </Dropdown>
        </div>

    )
}

export default Select;