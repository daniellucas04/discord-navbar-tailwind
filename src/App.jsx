import { FaDiscord, FaCompass } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

export default function App() {

  function changeTheme(){
      if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        return;
      }
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
  }

  return (
    <div className='flex transition-all duration-150'>
      <nav className='w-fit h-screen p-2 bg-gray-200 dark:bg-primary dark:text-white'>
        <ul className="flex flex-col justify-center">
          <li className="center-li">
            <button className='button p-3 bg-white hover:text-white hover:bg-blue-700 dark:bg-secondary dark:hover:bg-blue-700 hover:rounded-xl '>
              <FaDiscord className='h-[25px] w-[25px]' />
            </button>
          </li>
          <span className="flex justify-center">
            <hr className="w-6 h-[1.5px] rounded-full border-0 bg-white dark:bg-secondary"/>
          </span>
          <li className="center-li">
            <button className='button' >
              <img src="https://picsum.photos/200/200" className='image hover:rounded-xl' />
            </button>
          </li>
          <li className="center-li">
            <button className='button'>
            <img src="https://picsum.photos/200/200" className='image hover:rounded-xl' />
            </button>
          </li>
          <li className="center-li">
            <button className='button'>
            <img src="https://picsum.photos/200/200" className='image hover:rounded-xl' />
            </button>
          </li>
          <li className="center-li">
            <button className='button p-3 bg-white dark:bg-secondary dark:hover:hover:bg-green-600 hover:bg-green-600 hover:rounded-xl hover:text-white text-green-600'>
              <AiOutlinePlus className='w-[20px] h-[20px]' />
            </button>
          </li>
          <li className="center-li">
            <button className='button p-3 bg-white dark:bg-secondary dark:hover:hover:bg-green-600 hover:bg-green-600 hover:rounded-xl hover:text-white text-green-600'>
              <FaCompass className='w-[20px] h-[20px]' />
            </button>
          </li>
        </ul> 
      </nav>
      <div className='text-white mt-3 ml-10'>
        <button onClick={changeTheme} className='bg-gray-300 text-black dark:bg-secondary dark:text-white hover:scale-105 p-3 rounded-full flex align-center justify-center transition-all duration-500'>Change Theme</button>
      </div>
    </div>
  )
}
