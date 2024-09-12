import React from 'react'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../apiService'
import toast from 'react-hot-toast'

function MakePriority() {

   const fetcher = useFetcher()

   return (
      <fetcher.Form
         method='PATCH'
      >
         <button
            className="mt-8 mx-auto block bg-green-500 capitalize w-3/6 h-8 rounded-md font-bold tracking-wide hover:bg-green-600 hover:tracking-wider ease-in-out transition-all sm:h-10"
         >Make priority</button>
      </fetcher.Form>
   )
}

export async function action ({ request, params }) {
   const data = { priority: true }
   await updateOrder(params.id, data)
   toast.success('Order now a priority!')
   return null
}

export default MakePriority