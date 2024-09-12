import { useState } from 'react'
import SearchOrder from './SearchOrder'
import { Link, NavLink } from 'react-router-dom'
import User from './User'
import { MdOutlineMenu } from "react-icons/md";
import useTheme from '../hooks/useTheme';
import { MdDarkMode } from "react-icons/md";

function Header() {

   const [isOpen, setIsOpen] = useState(false)

   function toggleOpen () {
      setIsOpen((cur) => {
         return !cur
      })
   }

   const { toggleTheme, theme } = useTheme()

   return (
      <header className='z-10 fixed w-full flex items-center justify-between bg-slate-200 h-12 px-2 dark:bg-slate-600 sm:px-4 sm:h-16'>
         <Link 
            to='/'
            className='font-bold tracking-wider text-xl text-amber-700 dark:text-amber-400'
         >
            PizzaMaster
         </Link>

         <nav className='hidden items-center sm:flex'>
            <ul className='flex items-center gap-4'>
               <li>
                  <SearchOrder />
               </li>
               <li className=' hover:text-amber-700 dark:hover:text-amber-400'>
                  <NavLink 
                     to='/menu'
                     className={ ({ isActive }) => isActive ? 'underline  text-amber-700 dark:text-amber-400' : '' }
                  >Menu</NavLink>
               </li>
               <li className=' hover:text-amber-700 dark:hover:text-amber-400'>
                  <NavLink 
                     to='/about'
                     className={ ({ isActive }) => isActive ? 'underline  text-amber-700 dark:text-amber-400' : '' }
                  >About</NavLink>
               </li>
               <li className=' hover:text-amber-700 dark:hover:text-amber-400'>
                  <NavLink 
                     to='/contact'
                     className={ ({ isActive }) => isActive ? 'underline  text-amber-700 dark:text-amber-400' : '' }
                  >Contact</NavLink>
               </li>
               <li className=' hover:text-amber-700 dark:hover:text-amber-400'>
                  <NavLink 
                     to='/cart'
                     className={ ({ isActive }) => isActive ? 'underline  text-amber-700 dark:text-amber-400' : '' }
                  >Cart</NavLink>
               </li>
               <User />
               <button
                  onClick={ toggleTheme }
                  title='switch theme'
                  className='bg-green-600 h-8 w-8 flex items-center justify-center rounded-sm hover:bg-green-700 transition-all ease-in-out'
               >
                  { 
                     theme === 'light' 
                        ? <MdDarkMode /> 
                        : '💡' 
                  }
               </button>
            </ul>
         </nav>

         <nav className='sm:hidden'>
            <ul className='flex items-center'>
               <button
                  onClick={ toggleOpen }
                  className='text-2xl '
               >
                  <MdOutlineMenu /> 
               </button>
            </ul>
         </nav>

         { 
            isOpen &&
            <nav className='absolute top-[48px] left-0 right-0 text-center h-60 bg-slate-200 z-10 dark:bg-slate-600'>
               <ul className='flex flex-col justify-evenly h-full'>
                  <li className=''>
                     <NavLink 
                        to='/menu'
                        onClick={ () => setIsOpen(false) }
                        className={ `hover:tracking-wide hover:underline transition-all ease-in-out` }
                     >Menu</NavLink>
                  </li>
                  <li>
                     <NavLink 
                        to='/about'
                        onClick={ () => setIsOpen(false) }
                        className={ `hover:tracking-wide hover:underline transition-all ease-in-out` }
                     >About</NavLink>
                  </li>
                  <li>
                     <NavLink 
                        to='/contact'
                        onClick={ () => setIsOpen(false) }
                        className={ `hover:tracking-wide hover:underline transition-all ease-in-out` }
                     >Contact</NavLink>
                  </li>
                  <li>
                     <NavLink 
                        to='/cart'
                        onClick={ () => setIsOpen(false) }
                        className={ `hover:tracking-wide hover:underline transition-all ease-in-out` }
                     >Cart</NavLink>
                  </li>
                  <button
                     onClick={ toggleTheme }
                     title='Switch theme'
                     className='bg-slate-400 h-6 w-6 flex items-center justify-center rounded-full mx-auto hover:bg-slate-500 transition-all ease-in-out'
                  >
                     { theme === 'light' 
                        ? <MdDarkMode /> 
                        : '💡' 
                     }
                  </button>
               </ul>
            </nav>
         }
      </header>
   )
}

export default Header