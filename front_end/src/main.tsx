import { RouterProvider } from 'react-router-dom'
import { supermroutes  } from '../src/page/supermarket/route' //Supermercado
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={supermroutes } />
  </StrictMode>,
)