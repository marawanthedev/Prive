import React from 'react';
import styled from 'styled-components';
import global from '../../../var';

const ButtonComp = styled.button`
    font-family: "ainslie-sans", 'Segoe UI', 'Roboto', 'Oxygen';        
    font-weight: 600;

    text-transform: uppercase;
    color: white;

    border: none;
    border-radius: 35px;

    cursor: pointer;

    transition: .2s;

    &.white{
        background-color: white;
        color: ${global.primary} !important;
    }
    &.primary{
        background-color: ${global.primary};
    }
    &.secondary{
        background-color: ${global.secondary};
    }
    &.tertiary{
        background-color: ${global.tertiary};
    }

    &.small{
        font-size: 1.8rem;
        padding: 1rem 1.5rem;
        width: 195px;
        display: block;
    }

    &.large{
        font-size: 2.5rem;
        padding: 1rem 3rem;
        max-width: 250px;
    }


    &:link,
    &:hover {
        transform: translateY(-5px);
        -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2); 
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);
    }

    &:active{
        transform: translateY(0px);
        -webkit-box-shadow: none; 
        box-shadow: none;
    }

    @media(max-width: 420px){
        &.small{
            width: 150px;
            font-size: 2.8rem;
        }
    
        &.large{
            font-size: 3.8rem;
            max-width: 215px;
        }
    }
`

function Button({color, size, children, handleClick}){
    const classCon = `${color} ${size}`;

    return(
        <ButtonComp className={classCon} onClick={handleClick}> {children} </ButtonComp>
    )
}

export default Button; 