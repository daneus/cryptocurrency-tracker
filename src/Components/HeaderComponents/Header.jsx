import React from 'react'
import ThemeButton from '../SwitchComponents/ThemeButton'
import Logo from './Logo'


const Header = () => {
  function showOrHide() {
    document.querySelector('.dropdown-menu').classList.toggle('hide')
  }
  return (
    <>
      <header className="header">
        <div className="powered">
          <span>Powered by:</span>
        </div>
        <Logo />
        <div className="theme">
          <span className="theme-link" onClick={showOrHide}>Theme</span>
          <div className='dropdown-menu hide'>
            <div className='moon-container'>
              🌙
            </div>
            <div className='dark-mode-container'>
              Dark Mode
            </div>
            <div className='switch-container'>
              <ThemeButton />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header