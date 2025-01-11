import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App.jsx'
import Fullimage from './Fullimage.jsx'

createRoot(document.getElementById('root')).render(

<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fullimage/:id" element={<Fullimage />} />
      </Routes>
    </BrowserRouter>

)
