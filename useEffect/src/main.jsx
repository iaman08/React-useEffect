import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import Fetcher from './DataFetcher.jsx';
import Counter from './Counter.jsx';
import Dick from './dickSizeCalc.jsx';
import Box from './boxes.jsx';
import ContextApi from './ContextApi.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
     <ContextApi/>
  </StrictMode>,
)
