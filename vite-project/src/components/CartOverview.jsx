import { useSelector } from 'react-redux'
import { getCart, getTotalPrice, getTotalQuantity } from '../cartSlice'
import { Link } from 'react-router-dom'
import FormatCurrency from '../FormatCurrency'
import { IoCartOutline } from "react-icons/io5";

function CartOverview() {

   const cartTotalQuantity = useSelector(getTotalQuantity)
   const cartTotalPrice = useSelector(getTotalPrice)
   const cart = useSelector(getCart)

   if (!cart.length) return

   return (
      <div className='bg-slate-200 px-2 py-4 flex items-center justify-between sm:px-4 sm:py-8 dark:bg-slate-600'>
         <div className='space-x-4'>
            <span className='font-bold'>{ cartTotalQuantity }
               { cartTotalQuantity > 1 ? ' Pizzas' : ' pizza' }
            </span>
            <span>{ FormatCurrency(cartTotalPrice) }</span>
         </div>
         <Link to='/cart'
            className='text-sm flex items-center justify-center bg-slate-300 capitalize h-8 w-28 rounded-sm text-slate-800 font-bold gap-1 hover:bg-slate-400 hover:tracking-wider hover:gap-2 ease-in-out transition-all dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-32'
         >
            <span>Open cart</span>
            <span><IoCartOutline /></span>
         </Link>
      </div>
   )
}

export default CartOverview