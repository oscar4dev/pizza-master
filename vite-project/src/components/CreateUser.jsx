import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUser } from '../userSlice'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

   const [user, setUser] = useState('')

   const dispatch = useDispatch()
   const navigate = useNavigate()

   function handleCreateUser (e) {
      e.preventDefault()
      if (!user.length) return
      dispatch(updateUser(user))      
      navigate('/menu')
   }

   return (
      <form
         onSubmit={ handleCreateUser }
         className=''
      >
         <p className='mb-8 text-center'>
            👋Welcome! Please start by telling us 
            your name
         </p>
         <input 
            type="text"
            placeholder='Eg Jane Smith' 
            value={ user }
            className='p-2 rounded-md w-4/6 border block mb-8 mx-auto text-sm dark:bg-slate-400 dark:text-slate-50'
            onChange={ (e) => setUser(e.target.value) }
         />
         {
            user !== '' 
               && <button
                  className='block mx-auto bg-green-600 capitalize h-10 w-3/6 rounded-md text-slate-50 hover:bg-green-700 hover:tracking-wider ease-in-out transition-all dark:hover:bg-green-500'
               >
                  Start ordering 😊
               </button>
         }
      </form>
   )
}

export default CreateUser