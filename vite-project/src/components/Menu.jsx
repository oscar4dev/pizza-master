import { useQuery } from '@tanstack/react-query'
import { getMenu } from '../apiService'
import MenuItem from './MenuItem'
import Error from './Error'
import Loader from './Loader'
import CartOverview from './CartOverview'

function Menu() {

   const { data, error, isPending } = useQuery({
      queryKey: ['menu'],
      queryFn: getMenu,
   })

   if (error) return <Error error={ error } />
   if (isPending) return <Loader />

   return (
      <div className='pt-16'>
         <h1 className='text-center text-3xl uppercase font-bold tracking-wider my-4'>-menu-</h1>
         <ul className='p-2'>
            { data.map((item) => {
               return <MenuItem
                  key={ item.id }
                  item={ item }
               />
            }) }
         </ul>
         <CartOverview />
      </div>
   )
}

export default Menu