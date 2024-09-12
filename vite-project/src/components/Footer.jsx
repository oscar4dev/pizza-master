import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CartOverview from './CartOverview';

function Footer() {

   const date = new Date().getFullYear()

   return (
      <footer className='bg-slate-100 py-8 px-2 dark:bg-slate-600 sm:py-12'>
         {/* <CartOverview /> */}
         <div className='flex items-center justify-center gap-4 text-blue-600 underline dark:text-blue-200 sm:gap-8'>
            <Link 
               to='/about'
               className='hover:text-slate-800 transition-all ease-in-out dark:hover:text-slate-200'
            >About Us</Link>
            <Link 
               to='/menu'
               className='hover:text-slate-800 transition-all ease-in-out dark:hover:text-slate-200'
            >Menu</Link>
            <Link 
               to='/cart'
               className='hover:text-slate-800 transition-all ease-in-out dark:hover:text-slate-200'
            >Cart</Link>
            <Link 
               to='/contact'
               className='hover:text-slate-800 transition-all ease-in-out dark:hover:text-slate-200'
            >Contact</Link>
         </div>

         <div className='flex items-center justify-center gap-4 my-8 sm:my-12 sm:gap-8'>
            <a 
               href=""
               title='X'
               target='_blank'
               className='bg-slate-400 p-2 rounded-full hover:bg-slate-600 dark:hover:bg-slate-200 dark:hover:text-slate-800'
            >
               <FaXTwitter />
            </a>
            <a 
               href=""
               target='_blank'
               title='Facebook'
               className='bg-slate-400 p-2 rounded-full hover:bg-slate-600 dark:hover:bg-slate-200 dark:hover:text-slate-800'
            >
               <FaFacebookF />
            </a>
            <a 
               href=""
               target='_blank'
               title='Instagram'
               className='bg-slate-400 p-2 rounded-full hover:bg-slate-600 dark:hover:bg-slate-200 dark:hover:text-slate-800'
            >
               <FaInstagram />
            </a>
            <a 
               href=""
               target='_blank'
               title='GitHub'
               className='bg-slate-400 p-2 rounded-full hover:bg-slate-600 dark:hover:bg-slate-200 dark:hover:text-slate-800'
            >
               <FaGithub />
            </a>
         </div>

         <p className='text-center'>
            &copy; <span className='text-amber-700 dark:text-amber-400'>PizzaMaster</span> { date } &#183; Built by 
            <a 
               href="https://github.com/oscar4dev"
               target='_blank'
            >
               <span className='ml-1 text-blue-600 underline hover:text-slate-800 dark:text-blue-300 dark:hover:text-slate-200'>Oscar4dev</span>
            </a>
         </p>
      </footer>
   )
}

export default Footer