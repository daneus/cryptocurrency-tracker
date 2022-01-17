import React from 'react'

const ThemeButton = () => {

  let darkMode = localStorage.getItem('darkMode')

  const enableDarkMode = () => {
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'enabled')
    const geckoLogo = document.querySelector(".logo")
    if (document.body.classList.contains('dark')) {
      geckoLogo.setAttribute("src", "logo-dark-mode.png")
    } else {
      geckoLogo.setAttribute("src", "logo-light-mode.png")
    }
  }
  const disableDarkMode = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', null)
    const geckoLogo = document.querySelector(".logo")
    if (document.body.classList.contains('dark')) {
      geckoLogo.setAttribute("src", "logo-dark-mode.png")
    } else {
      geckoLogo.setAttribute("src", "logo-light-mode.png")
    }
  }
  if (darkMode === 'enabled') {
    document.body.classList.add('dark')
  }
  return (
    <div className="circle-container" >
      <label htmlFor="circle" className="circle-label">
        <input type="checkbox" id="circle" name='circle' onClick={() => {
          darkMode = localStorage.getItem('darkMode')
          if (darkMode !== 'enabled') {
            enableDarkMode()
          } else {
            disableDarkMode()
          }
        }}></input>
        <span className="circle"></span>
      </label>
    </div>
  )
}

export default ThemeButton
