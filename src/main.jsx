import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import MyButton from './component/button'
import Navbar from './component/navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <MyButton/>
  </StrictMode>,
)
