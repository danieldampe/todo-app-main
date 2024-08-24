import { useState } from 'react'
import Moon from '../assets/images/icon-moon.svg?react'
import Sun from '../assets/images/icon-sun.svg?react'

export const ThemeSwitcher: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  const handlerClick = (): void => {
    const html = document.querySelector('html')
    if (html === null) return
    html.classList.toggle('dark')
    setDarkTheme(prev => !prev)
  }

  return (
    <button className='size-5 [&_svg]:size-full md:size-6' onClick={handlerClick}>
      {darkTheme
        ? <Sun viewBox='0 0 26 26' />
        : <Moon viewBox='0 0 26 26' />}
    </button>
  )
}
