import FormatCurrency from '../FormatCurrency'

function OrderItem({ item }) {
   const { quantity, name, totalPrice } = item
   
   return (
      <li className="py-4 px-2 bg-slate-200 mb-4 rounded-md sm:py-6 sm:px-4 dark:bg-slate-600">
         <div className='flex items-center gap-5'>
            <div className='space-x-5'>
               <span>{ quantity }x</span>
               <span className='text-lg font-bold'>{ name }</span>
            </div>
            <span>{ FormatCurrency(totalPrice) }</span>
         </div>
         <div>
            {/* { isLoading && <span>Loading...</span> } */}
            {/* <span>{ ingredients.join(' ') }</span> */}
         </div>
      </li>
   )
}

export default OrderItem