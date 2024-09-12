import PizzaPhotoOne from '/pizza-photo1.jpeg'
import CreateUser from './CreateUser'
import FastDeliveryPhoto from '/delivery-photo2.jpg'
import FreshPhoto from '/fresh-photo.jpg'
import PizzaPhoto from '/pizza-photo2.jpeg'
import PizzaPhoto111 from '/pizza-photo111.png'
import PizzaSlice from '/pizza-slice-photo.jpg'
import HappyPhoto from '/happy-photo.jpg' 
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { getUser } from '../userSlice'
import { FaRegUser } from "react-icons/fa6";

function Homepage() {

   const username = useSelector(getUser)

   return (
      <main>
         <section className='relative pt-10'>
            <img 
               src={ PizzaPhoto111 } 
               alt="a pizza with several slices cut out of it" 
               className='h-[600px] w-full object-cover'
            />

            <div className='absolute top-0 text-slate-50 px-2 flex flex-col justify-evenly h-full sm:px-4'>
               <div>
                  <p className='mb-4'>Delivered Right to Your Doorstep</p>
                  <h1 className='text-5xl font-bold tracking-wider mb-8'>
                     Fresh, Fast, and <span className='text-amber-500'>Delicious Pizzas</span>
                  </h1>
               </div>
            </div>
         </section>

         <section className='mt-8 px-2 sm:px-4'>
            <p className='mb-8'>
               Experience the best of PizzaMaster with our 
               mouth-watering pizzas made from the freshest
               ingredients. Order now and taste the difference!
            </p>
            {
               !username
                  ? <CreateUser />
                  : <Link 
                        to='/menu'
                        className='text-sm flex items-center justify-center mx-auto bg-green-600 capitalize h-10 w-3/6 rounded-lg text-slate-50 hover:bg-green-700 hover:tracking-wider ease-in-out transition-all dark:hover:bg-green-500'
                     >
                     Continue ordering &rarr;
                  </Link>
            }
         </section>

         <section className='mt-8 h-[600px] w-full'>
            <img 
               src={ PizzaPhotoOne }
               alt="a pizza with several slices cut out of it" 
               className='w-full h-full object-cover'
            />
         </section>

         <section className='mt-8 mx-2 text-lg sm:w-5/6 sm:mx-auto lg:w-4/6'>
            <h2 className='text-xl font-bold mb-4 text-center sm:my-8'>
               Why Choose PizzaMaster?
            </h2>
            <p className='mb-8 text-center capitalize sm:mb-12'>
               Speedy Delivery, fresh ingridients, unbeatable taste
            </p>

            <div className=''>
               <div className=' bg-slate-100 py-4 flex flex-col items-center gap-2 rounded-lg shadow-md mb-8 dark:bg-slate-600 sm:py-8'>
                  <img 
                     src={ HappyPhoto }
                     alt="" 
                     className='h-24 w-24 object-cover rounded-full'
                  />
                  <p className='text-base sm:mt-4'>Thousands of happy customers</p>
               </div>
               <div className=' bg-slate-100 py-4 flex flex-col items-center gap-2 rounded-lg shadow-md mb-8 dark:bg-slate-600 sm:py-8'>
                  <img 
                     src={ FastDeliveryPhoto }
                     className='h-24 w-24 object-cover rounded-full'
                     alt="" 
                  />
                  <p className='text-base sm:mt-4'>
                     Lightning-Fast Delivery
                  </p>
               </div>
            </div>

            <div>
               <div className=' bg-slate-100 py-4 flex flex-col items-center gap-2 rounded-lg shadow-md mb-8 dark:bg-slate-600 sm:py-8'>
                  <img 
                     src={ FreshPhoto }
                     className='h-24 w-24 object-cover rounded-full'
                     alt="" 
                  />
                  <p className='text-base sm:mt-4'>Farm-Fresh Ingredients</p>
               </div>
               <div className=' bg-slate-100 py-4 flex flex-col items-center gap-2 rounded-lg shadow-md mb-4 dark:bg-slate-600 sm:py-8'>
                  <img 
                     src={ PizzaSlice }
                     className='h-24 w-24 object-cover rounded-full'
                     alt="slice of fresh Italian classic original Pepperoni Pizza" 
                  />
                  <p className='text-base sm:mt-4'>Delicious hand crafted pizzas</p>
               </div>
            </div>
         </section>

         <section className='mt-8 w-full'>
            <img 
               src={ PizzaPhoto } 
               alt="pizza with cheese beacon searved on a wooden board" 
               className='h-[600px] w-full object-cover'
            />
         </section>

         <section className='mt-8 mx-2 text-lg sm:w-5/6 sm:mx-auto lg:w-4/6'>
            <h2 className='text-center font-bold text-xl capitalize mb-4'>What our customers say</h2>
            <p className='mb-8 text-center'>
               Read the testimonials from our satisfied customers
               who love our pizzas.
            </p>
            <div className=''>
               <div className='bg-slate-100 rounded-2xl p-4 divide-y divide-slate-800 shadow-md mb-8 dark:bg-slate-600 sm:mb-12 sm:p-8'>
                  <div className='flex items-center gap-2 mb-4 sm:gap-4'>
                     <span className='bg-slate-400 p-2 rounded-full'>
                        <FaRegUser />
                     </span>
                     <div className='text-sm'>
                        <p className='text-amber-700 font-bold dark:text-amber-400'>John Doe</p>
                        <p className='text-slate-500 dark:text-slate-300'>Food Blogger</p>
                     </div>
                  </div>
                  <div className='text-sm'>
                     <p className='mt-4 mb-2'>
                        Pizza master has the best pizzas I've
                        ever tasted! The delivery was super fast
                        and the ingredients were incredebly fresh.
                     </p>
                     <span className='text-xs'>⭐⭐⭐⭐⭐</span>
                  </div>
               </div>

               <div className='bg-slate-100 rounded-2xl p-4 divide-y divide-slate-800 shadow-md mb-8 dark:bg-slate-600 sm:mb-12 sm:p-8'>
                  <div className='flex items-center gap-2 mb-4 sm:gap-4'>
                     <span className='bg-slate-400 p-2 rounded-full'>
                        <FaRegUser />
                     </span>
                     <div className='text-sm'>
                        <p className='text-amber-700 font-bold dark:text-amber-400'>Jane Smith</p>
                        <p className='text-slate-500 dark:text-slate-300'>Pizza Enthusiast</p>
                     </div>
                  </div>
                  <div className='text-sm'>
                     <p className='mt-4 mb-2'>
                        I like the variety of pizzas the offer.
                        Each one is delicious and unique. 
                        Highly recommended!
                     </p>
                     <span className='text-xs'>⭐⭐⭐⭐</span>
                  </div>
               </div>
            </div>
         </section>

         <section className='mb-8 mx-2 text-lg'>
            <h2 className='text-xl font-bold mb-4 text-center'>Ready to satisfy your cravings?</h2>
            <p className='text-center mb-8'>Order your favourite pizza from PizzaMaster now!</p>
            <Link 
               to='/menu'
               className='text-sm flex items-center justify-center mx-auto bg-green-600 capitalize h-10 w-3/6 rounded-md text-slate-50 hover:bg-green-700 hover:tracking-wider ease-in-out transition-all'
            >Order now &rarr;</Link>
         </section>

         <Footer />
      </main>
   )
}

export default Homepage