import AddToCartBtn from './AddToCartBtn'
import FormatCurrency from '../FormatCurrency'
import { useSelector } from 'react-redux'
import { getCurQtyById } from '../cartSlice'
import DeleteBtn from './DeleteBtn'
import UpdateQty from './UpdateQty'

function MenuItem({ item }) {

   const { id, imageUrl, name, soldOut, unitPrice, ingredients } = item   

   const curQtyById = useSelector(getCurQtyById(id))
   const isIncart = curQtyById > 0

   return (
      <li className={`flex items-center mb-4 bg-slate-100 rounded-lg overflow-hidden hover:bg-slate-200 transition-colors ease-in-out ${ soldOut ? 'opacity-50' : '' } sm:w-5/6 mx-auto sm:mb-8 lg:w-4/6 dark:bg-slate-600 dark:hover:bg-slate-500`}>
         <img 
            src={ imageUrl } 
            className='h-20 w-20 object-cover mr-2 sm:mr-4 sm:h-40 sm:w-40'
            alt={ name } 
         />
         <div className='md:space-y-4'>
            <p className='font-bold sm:text-lg'>{ name }</p>
            <p className='text-sm sm:text-base'>
               <span className='font-bold'>Ingredients</span>: { ingredients.join(' ') }
            </p>

            <div className='flex items-center gap-4 sm:gap-8'>
               {
                  soldOut 
                     ? <span className=''>Sold out 😢</span> 
                     : <span
                        className='font-bold sm:text-lg'
                     >{ FormatCurrency(unitPrice) }</span>
               }

               {
                  !soldOut && !isIncart 
                     && <AddToCartBtn 
                        id={ id }
                        name={ name }
                        unitPrice={ unitPrice }
                     />
               }

               {
                  isIncart 
                     && <div className='flex items-center gap-4 sm:gap-8'>
                        <UpdateQty 
                           id={ id } 
                           curQtyById={ curQtyById }
                        />
                        <DeleteBtn 
                           id={ id }
                        />
                     </div>
               }
            </div>
         </div>
      </li>
   )
}

export default MenuItem