import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Err from './pages/Err.jsx'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import Mainbody from './components/Mainbody.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Cart from './pages/Cart.jsx'
import Collection from './pages/Collection.jsx'




const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children: [
      {
        path : '/',
        element : <Mainbody/>
      },

      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/restaurants/:resid',
        element : <RestaurantMenu/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/collection/:collectionId',
        element : <Collection/>
      }
],
  errorElement: <Err/>
  },
  
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)  
