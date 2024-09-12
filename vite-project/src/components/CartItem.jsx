import { useSelector } from "react-redux"
import FormatCurrency from "../FormatCurrency"
import UpdateQty from "./UpdateQty"
import { getCurQtyById } from "../cartSlice"

function CartItem({ item }) {
   const { name, quantity, totalPrice, pizzaId } = item
   const curQtyById = useSelector(getCurQtyById(pizzaId))
   
   return (
      <li className="flex items-center justify-between py-4 px-2 bg-slate-200 mb-4 rounded-lg sm:py-6 sm:px-4 dark:bg-slate-600">
         <div className="space-x-2 sm:space-x-4">
            <span>{ quantity }x</span>
            <span className="font-bold">{ name }</span>
         </div> 
         <div className="flex items-center gap-1 sm:gap-4">
            { FormatCurrency(totalPrice) }
            <UpdateQty 
               id={ pizzaId }
               curQtyById={ curQtyById }
            />
         </div>
      </li>
   )
}

export default CartItem