import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fetcher from './DataFetcher.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <Fetcher />
  </StrictMode>,
)
