import { useDispatch } from 'react-redux'
import { deleteItem } from '../cartSlice'
import { MdOutlineDeleteOutline } from "react-icons/md";

function DeleteBtn({ id }) {

   const dispatch = useDispatch()

   return (
      <button
         onClick={ () => dispatch(deleteItem(id)) }
         className='flex items-center justify-center gap-1 bg-slate-300 w-16 h-5 font-bold rounded-sm transition-all ease-in-out hover:gap-2 hover:bg-slate-400 sm:h-7 sm:w-20 dark:bg-slate-800 dark:hover:bg-slate-700'
      >
         <span>Delete</span>
         <span><MdOutlineDeleteOutline /></span>
      </button>
   )
}

export default DeleteBtn