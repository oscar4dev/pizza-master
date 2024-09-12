import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../cartSlice'
import { IoCartOutline } from "react-icons/io5";

function AddToCartBtn({ id, name, unitPrice }) {

   const dispatch = useDispatch()

   function handleAddToCart () {
      const newItem = {
         pizzaId: id,
         name,
         quantity: 1,
         unitPrice,
         totalPrice: unitPrice * 1
      }

      dispatch(addItem(newItem))
   }

   return (
      <button
         className='flex items-center justify-center gap-1 bg-green-500 w-14 h-5 font-bold rounded-sm transition-all ease-in-out hover:gap-2 hover:bg-green-600 sm:h-7 sm:w-20'
         onClick={ handleAddToCart }
      >
         <span className=''>Add</span> 
         <span><IoCartOutline /></span>
      </button>
   )
}

export default AddToCartBtn