import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './components/APIfetch'
import NewApp from './NewApp'
// import App from './App.tsx'
// import Users from './components/API.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Users /> */}
    <NewApp />
  </StrictMode>,
)
