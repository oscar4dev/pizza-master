import { useState } from 'react'
import { useSelector } from 'react-redux'
import { clearCart, getCart, getTotalPrice } from '../cartSlice'
import FormatCurrency from '../FormatCurrency'
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { createOrder } from '../apiService'
import { getUser } from '../userSlice'
import store from '../store'
import toast from 'react-hot-toast'

const isValidPhone = (str) =>
   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
   str
);

function CreateOrder() {

   const [priority, setPriority] = useState(false)
   const cart = useSelector(getCart)
   const totalPrice = useSelector(getTotalPrice)
   const username = useSelector(getUser)
   const formErrors = useActionData()
   const navigation = useNavigation()

   const isSubmitting = navigation.state === 'submitting'

   return (
      <Form
         method='POST'
         className="pt-16 px-2 sm:w-4/6 lg:w-3/6 mx-auto"
      >
         <h1 className='text-3xl font-bold mb-4 sm:mb-8 sm:mt-4'>Ready to order? Let's go</h1>
         <div className='flex flex-col mb-4'>
            <label 
               htmlFor="customer"
               className='text-lg font-bold'
            >First name:</label>
            <input 
               type="text"
               id='customer'
               name='customer' 
               placeholder='John Doe'
               defaultValue={ username }
               required
               className='border-2 h-8 px-2 rounded-md sm:h-10 dark:bg-slate-700 dark:border-none'
            />
         </div>

         <div className='flex flex-col mb-4'>
            <label 
               htmlFor="phone"
               className='text-lg font-bold'
            >Phone number:</label>
            <input 
               type="text"
               id='phone'
               name='phone' 
               required
               className='border-2 h-8 px-2 rounded-md sm:h-10 dark:bg-slate-700 dark:border-none'
            />
            { 
               formErrors?.phone 
                  && <p className='text-sm text-red-600 mt-2'>{ formErrors.phone }</p> 
            }
         </div>

         <div className='flex flex-col mb-4'>
            <label 
               htmlFor="address"
               className='text-lg font-bold'
            >Address:</label>
            <input 
               type="text"
               id='address'
               name='address' 
               required
               className='border-2 h-8 px-2 rounded-md sm:h-10 dark:bg-slate-700 dark:border-none'
            />
         </div>

         <div className='mb-4 flex items-center space-x-2'>
            <input 
               type="checkbox"
               id='priority' 
               value={ priority }
               onChange={ (e) => setPriority(e.target.checked) }
               className='h-5 w-5 accent-amber-600 sm:h-7 sm:w-7'
            />
            <label 
               htmlFor="priority"
               className='text-lg cursor-pointer'
            >Make your order a priority</label>
         </div>

         <div>
            <input 
               type="hidden"
               name='cart'
               value={ JSON.stringify(cart) } 
            />
            <button
               disabled={ isSubmitting }
               className="mx-auto block mt-8 bg-green-500 capitalize w-48 h-8 rounded-md font-bold tracking-wide hover:bg-green-600 hover:tracking-wider ease-in-out transition-all sm:h-10"
            >
               { 
                  isSubmitting 
                     ? 'placing your order' 
                     : `order now from ${ FormatCurrency(totalPrice) }` 
               }
            </button>
         </div>
      </Form>
   )
}

export async function action ({ request }) {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)

   const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === 'true'
   }

   const errors = {}

   if (!isValidPhone(order.phone))
      errors.phone = `Please provide a valid phone number
      because we might need it to contact you.
   `

   if (Object.keys(errors).length > 0) return errors

   const newOrder = await createOrder(order)

   toast.success('Order sent!')

   store.dispatch(clearCart())

   return redirect(`/order/${ newOrder.id }`)
}

export default CreateOrder