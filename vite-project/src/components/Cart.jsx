import { useDispatch, useSelector } from "react-redux"
import { clearCart, getCart } from "../cartSlice"
import { Link, useNavigate } from "react-router-dom"
import { getUser } from "../userSlice"
import CartItem from "./CartItem"

function Cart() {

   const cart = useSelector(getCart)
   const username = useSelector(getUser)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   if (!cart.length) return (
      <div className="px-2 sm:w-5/6 mx-auto lg:w-4/6">
         <p className="pt-24 text-lg">
            Your cart is currently empty, but your stomach
            doesn't have to be. Add some items and comeback
            here to checkout.
         </p>
         <Link 
            className='text-sm flex items-center justify-center mt-8 bg-green-600 capitalize h-10 w-3/6 rounded-md text-slate-50 hover:bg-green-700 hover:tracking-wider ease-in-out transition-all'
            to='/menu'>
            start your order
         </Link>
      </div>
   )

   function handleClearCart () {
      const confirmed = window.confirm(`
         Are you sure you want to clear your cart?
      `)

      if (confirmed) dispatch(clearCart())
   }

   return (
      <div className="pt-16 px-2 pb-10 sm:w-5/6 lg:w-4/6 mx-auto">
         <Link to='/menu'
            className='text-sm my-4 flex items-center justify-center bg-slate-300 capitalize h-8 w-32 rounded-sm text-slate-800 font-bold hover:bg-slate-400 hover:tracking-wider ease-in-out transition-all dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-36 sm:mb-8'
         >&larr; back to menu</Link>
         <h1 className="text-3xl font-bold mb-4 sm:mb-8">Your cart, { username }</h1>
         <ul>
            { cart.map((item) => {
               return <CartItem 
                  key={ item.pizzaId } 
                  item={ item }
               />
            }) }
         </ul>
         <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12">
            <button
               className="bg-green-500 capitalize w-2/6 h-8 rounded-md font-bold tracking-wide hover:bg-green-600 hover:tracking-wider ease-in-out transition-all sm:h-10"
               onClick={ () => navigate('/order/new') }
            >
               order pizza
            </button>
            <button
               className="bg-slate-300 capitalize w-2/6 h-8 rounded-md font-bold tracking-wide hover:bg-slate-400 hover:tracking-wider ease-in-out transition-all sm:h-10 dark:bg-slate-700 dark:hover:bg-slate-600"
               onClick={ handleClearCart }
            >
               clear cart
            </button>
         </div>
      </div>
   )
}

export default Cart