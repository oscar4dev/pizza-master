import { getOrder } from '../apiService'
import { useFetcher, useLoaderData } from 'react-router-dom'
import OrderItem from './OrderItem'
import MakePriority from './MakePriority'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../cartSlice'

function Order() {

   const order = useLoaderData()
   const fetcher = useFetcher()
   const totalPrice = useSelector(getTotalPrice)

   const { customer, id, estimatedDelivery, status, cart, priority } = order
   
   return (
      <div className="pt-24 px-2 pb-8 sm:w-5/6 lg:w-4/6 mx-auto">
         <h1 className="text-3xl font-bold mb-4 sm:mb-8">Your order, { customer }</h1>
         <p className='flex items-center justify-between mb-4 sm:text-lg'>
            <span>Order { id }</span>
            <span className='text-amber-600'>Status: { status }</span>
         </p>
         <p className='mb-4 sm:text-lg'>Estimated delivery time: { estimatedDelivery }</p>
         <ul>
            { cart.map((item) => {
               return <OrderItem 
                  key={ item.pizzaId }
                  item={ item }
                  isLoading={ fetcher.state === 'loading' }
               />
            }) }
         </ul>
         <p className='sm:text-lg'>Pizza price: {  }</p>
         <p className='my-4 sm:text-lg'>To pay on delivery: {  }</p>
         { !priority && <MakePriority />}
      </div>
   )
}

export async function loader ({ params }) {
   const order = await getOrder(params.id)
   return order
} 

export default Order