import {createRoot} from 'react-dom/client'
import Main from './components/Main.jsx'
import { StrictMode } from 'react'
import "./styles/reset.css"
import "./styles/styles.css"
import Header from './components/Header.jsx'


createRoot(document.getElementById('header')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)

createRoot(document.getElementById('main')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)