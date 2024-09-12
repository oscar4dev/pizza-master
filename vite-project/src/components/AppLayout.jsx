import Header from './Header'
import Main from './Main'
import { Outlet } from 'react-router-dom'

function AppLayout() {
   return (
      <div className='h-dvh'>
         <Header />
         <Main>
            <Outlet />
         </Main>
      </div>
   )
}

export default AppLayout