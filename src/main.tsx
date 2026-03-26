import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './App.tsx'
import CartProvider from './context/CartContext.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <CartProvider>
      <Toaster 
        position='top-center'
        reverseOrder={false}
      /> 
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)