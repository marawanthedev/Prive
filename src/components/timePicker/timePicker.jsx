import { useEffect, useState } from 'react'
import ChevronImg from '../../assets/svg/chevron.svg'
import timeData from './timeData'
import styled from 'styled-components'

const GridSelect = styled.div`
  border: 1px solid rgba(0, 0, 0, 1);
  color: black;
  display: inline-block;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  font-size: 3rem;
  width: 100%;
  transform:translatex(-33rem) button {
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
    background-color: #f9f9f9;
    cursor: default;

    &::hover {
      background-color: #f9f9f9;
    }
  }

  .calendar-container {
    text-align: center !important;
    p {
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

    button {
      background-color: transparent;
      outline: none;
      border: none;

      &:first-of-type {
        transform: rotate(90deg);
      }

      &:hover {
        background: #f5f5f5;
      }

      &:nth-of-type(2) {
        transform: rotate(-90deg);
      }

      img {
        cursor: pointer;
      }
    }
  }

  div:nth-of-type(2) {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    height: 20rem;
    width: 47rem;
    border: 1px solid red;
    margin-left: -0.25rem;

    p {
      font-size: 2.5rem;
      cursor: pointer;
      transition: 0.2s;
      padding: 5px;
      margin: 10px;
      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

  @media (max-width: 770px) {
    max-width: 100%;

    div:first-of-type {
      align-items: baseline;
    }
  }
`

const Time = ({ onChange, name }) => {
  const [selectedTime, setSelectedTime] = useState(0)
  const [active, setActive] = useState(false)
  const [selectedTimeStr, setSelectedTimeStr] = useState('')

  const handleClick = event => {
    const e = event.target

    if (e.getAttribute('data-type') === 'inc') {
      if (selectedTime < 1) {
        setSelectedTime(selectedTime + 1)
      }
    } else {
      if (selectedTime > 0) {
        setSelectedTime(selectedTime - 1)
      }
    }
  }

  const handleActive = e => {
    setActive(!active)
    setSelectedTimeStr(e.target.getAttribute('data-value'))
    onChange(e)
  }

  return (
    <GridSelect style={{ float: 'right', paddingBottom: '0' }}>
      {!active ? (
        <p
          style={{
            paddingBottom: '0',
            width: '100%',
            marginBottom: '1.6rem',
            paddingLeft: '3rem'
          }}
          className='padding-btm'
          onClick={handleActive}
        >
          {selectedTimeStr ? selectedTimeStr : 'Preferred Time'}
          <span>
            <img src={ChevronImg} alt='chevron' />
          </span>
        </p>
      ) : (
        <>
          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={handleClick}
              style={{ transform: 'rotate(180deg)', marginTop: '-2rem' }}
              data-type='dec'
            >
              <img
                style={{ width: '1.5rem' }}
                src={ChevronImg}
                alt='chevron'
                data-type='dec'
              />
            </button>
            <span style={{ marginTop: '-1rem' }}>
              {timeData[selectedTime].period}
            </span>
            <button
              onClick={handleClick}
              style={{ transform: 'rotate(0deg)', marginTop: '-2rem' }}
              data-type='inc'
            >
              <img
                src={ChevronImg}
                style={{ width: '1.5rem' }}
                alt='chevron'
                data-type='inc'
              />
            </button>
          </div>
          <div style={{ width: '100%', marginLeft: '.05rem' }}>
            {timeData[selectedTime].times.map((time, index) => {
              const fullTime = `${time} ${timeData[selectedTime].period}`

              return (
                <p
                  key={index}
                  onClick={handleActive}
                  style={{
                    fontSize: '2rem',
                    paddingBottom: '15px',
                    width: '15%',
                    height: '4rem'
                  }}
                  data-value={fullTime}
                  data-name={name}
                >
                  {time}
                </p>
              )
            })}
          </div>
        </>
      )}
    </GridSelect>
  )
}
export default Time
