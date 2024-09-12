import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/AppLayout';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cart from './components/Cart';
import CreateOrder, { action as createOrderAction } from './components/CreateOrder';
import Order, { loader as orderLoader } from './components/Order';
import Error from './components/Error';
import { Toaster } from "react-hot-toast";
import { action as updateOrderAction } from "./components/MakePriority";
import Contact from "./components/Contact";
import About from "./components/About";

const router = createBrowserRouter([
   {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <Homepage />,
         },
         {
            path: '/menu',
            element: <Menu />,
         },
         {
            path: '/cart',
            element: <Cart />,
         },
         {
            path: '/order/new',
            element: <CreateOrder />,
            action: createOrderAction,
         },
         {
            path: '/order/:id',
            element: <Order />,
            errorElement: <Error />,
            loader: orderLoader,
            action: updateOrderAction,
         },
         {
            path: '/contact',
            element: <Contact />,
         },
         {
            path: '/about',
            element: <About />,
         },
      ]
   }
])

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 0
      }
   }
})

function App() {
   return (
      <QueryClientProvider client={ queryClient }>
         <RouterProvider router={ router } />
         <Toaster 
            position="top-center"
            gutter={ 10 }
            toastOptions={{
               success: { duration: 3000 },
               error: { duration: 3000 },
               style: {
                  backgroundColor: '',
                  width: '300px'
               }
            }}
         />
      </QueryClientProvider>
   )
}

export default App