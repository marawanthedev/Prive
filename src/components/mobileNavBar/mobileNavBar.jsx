import './mobileNavBar.css'

const MobileNavBar = () => {
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        id='navi-toggle'
        className='navigation__checkbox'
      />
      <label htmlFor='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>
      <div className='navigation__background'>&nbsp;</div>
      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              Enquire
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              See Treatments
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNavBar
