import { ThemeSwitcher } from './components/ThemeSwitcher'
import { Todos } from './components/Todos'

const App: React.FC = () => {
  return (
    <main className='w-full min-h-screen py-12 px-6 font-josefin-sans font-normal text-light-very-dark-grayish-blue dark:text-white bg-white dark:bg-dark-very-dark-blue bg-mobile-light dark:bg-mobile-dark bg-contain bg-no-repeat text-xs md:pt-[4.8rem] md:pb-7 md:text-lg md:bg-desktop-light md:dark:bg-desktop-dark'>
      <div className='max-w-[540px] mx-auto space-y-8 md:space-y-10'>
        <header className='flex justify-between items-start'>
          <h1 className='uppercase font-bold text-[1.7rem] leading-none tracking-[.35em] text-white md:text-[2.5rem]'>Todo</h1>
          <ThemeSwitcher />
        </header>
        <Todos />
      </div>
      <div className='p-4 mt-8'>
        <p className='text-center text-sm text-gray-500'>Drag and drop to reorder list</p>
      </div>
      <div className='attribution fixed bottom-0 left-0 w-full'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='https://github.com/danieldampe'>danieldampe</a>.
      </div>
    </main>
  )
}

export default App

// Todo items left All Active Completed Clear Completed
