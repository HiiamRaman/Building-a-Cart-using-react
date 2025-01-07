import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Cart} from './Context(cart)/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Cart>

    <App />
    </Cart>
  </StrictMode>,
)
