import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Othercoms from './othercoms.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Othercoms/>
  </StrictMode>,
)