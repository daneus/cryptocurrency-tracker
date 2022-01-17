import React from 'react'

const Logo = () => {
  const conditional = localStorage.getItem('darkMode') === 'enabled' || document.body.classList.contains('dark')
  return (
    <div className='logo-container'>
      <img src={conditional ? '/logo-dark-mode.png' : './logo-light-mode.png'} alt={"Coingecko Logos"} className='logo' />
    </div>
  )
}

export default Logo