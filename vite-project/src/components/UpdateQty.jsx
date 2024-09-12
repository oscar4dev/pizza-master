import React from 'react'
import { decItemQty, incItemQty } from '../cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function UpdateQty({ id, curQtyById }) {

   const dispatch = useDispatch()

   function handleInc () {
      dispatch(incItemQty(id))
   }

   function handleDec () {
      dispatch(decItemQty(id))
   }

   return (
      <div className='flex items-center gap-2 sm:gap-4'>
         <button
            className='bg-green-500 rounded-sm h-5 w-5 font-bold transition-all ease-in-out hover:bg-green-600 sm:h-7 sm:w-7'
            onClick={ handleDec }
         >
            -
         </button>
         <span className=''>{ curQtyById }</span>
         <button
            className='bg-green-500 rounded-sm h-5 w-5 font-bold transition-all ease-in-out hover:bg-green-600 sm:h-7 sm:w-7'
            onClick={ handleInc }
         >
            +
         </button>
      </div>
   )
}

export default UpdateQty