import './Header.css'
import LandingHeaderImg from '../../assets/images/HeaderImg.png'
import LandingHeaderUpperText from '../../assets/svg/landingHeaderUpperText.svg'
import LandingHeaderLowerText from '../../assets/svg/landingHeaderLowerText.svg'
import ButtonArrow from '../../assets/svg/Arrow 1.svg'

import { Link } from 'react-router-dom'

const LandingHeader = () => {
  return (
    <div className='landingHeader' id='landingHeader'>
      <div className='landingHeader__side landingHeader__side__left'>
        <div className=' landingHeader__side__left__text landingHeader__side__left__text__upper'>
          <img src={LandingHeaderUpperText} alt='' />
        </div>
        <div className='landingHeader__side__left__text landingHeader__side__left__text__lower'>
          <img src={LandingHeaderLowerText} alt='' />
        </div>

        <Link to='/enquiry'>
          <button className='landingHeader__side__left__button'>
            Book a Consultation <img src={ButtonArrow} alt='' />{' '}
          </button>
        </Link>
      </div>
      <div
        className='landingHeader__side landingHeader__side__right'
        style={{ backgroundImage: `url(${LandingHeaderImg})` }}
      ></div>
    </div>
  )
}

export default LandingHeader
