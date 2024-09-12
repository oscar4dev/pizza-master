import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";

function SearchOrder() {

   const [query, setQuery] = useState('')
   const navigate = useNavigate()

   function handleSubmit (e) {
      e.preventDefault()
      if (!query.length) return

      navigate(`/order/${ query }`)
      setQuery('')
   }

   return (
      <form
         onSubmit={ handleSubmit }
         className='flex items-center gap-1 border border-amber-600 rounded-sm'
      >
         <input 
            type="text" 
            placeholder='Search order #'
            value={ query }
            onChange={ (e) => setQuery(e.target.value) }
            className='w-16 h-8 px-2 bg-transparent text-sm focus:w-40 focus:outline-none transition-all'
         />
         <button className='px-2'>
            <IoSearchOutline />
         </button>
      </form>
   )
}

export default SearchOrder