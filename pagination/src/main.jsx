import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Details from '../Details.jsx'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'




createRoot(document.getElementById('root')).render(



<BrowserRouter>

<Routes>

  <Route path="/" element={<App />} />
  <Route path="/details" element={<Details />} />
</Routes>
</BrowserRouter>

   

  
)
